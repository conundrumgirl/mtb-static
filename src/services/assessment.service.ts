
import { Assessment } from '@typedefs/types'
import Utility from '../utility'


const MTB_TAG = 'Mobile Toolbox'

const endpoints = {
    assessment: '/v1/assessments/:id',
    assessments: '/v1/assessments?includeDeleted=false',
    assessmentShared: '/v1/sharedassessments/:id',
    assessmentsShared: '/v1/sharedassessments/?includeDeleted=false',
    assessmentResources: '/v1/assessments/identifier::identifier/resources', //'/v1/sharedassessments',
    assessmentSharedResources:
        '/v1/sharedassessments/identifier::identifier/resources',
    assmentsForSessions: '/v1/sessions/:sessionId/assessments',

}

const AssessmentService = {
    getAssessments,
    getAssessmentsWithResources,

    getResource,
    MTB_TAG,
}


async function getAssessment(
    guid: string
    /* token?: string,*/
): Promise<Assessment[]> {

    let endPoint = endpoints.assessmentShared
    const result = await Utility.callEndpoint<Assessment>(
        `${endPoint.replace(':id', guid)}`,
        'GET',
        {}
    )

    const returnResult = [{ ...result.data, tags: result.data.tags.filter((tag: string) => tag !== MTB_TAG) }]
    return returnResult
}

async function getAssessments(): Promise<Assessment[]> {

    const result = await Utility.callEndpoint<{ items: Assessment[] }>(endpoints.assessmentsShared,
        'GET',
        {}
    )

    const returnResult = result.data.items.filter((item: Assessment) => item.tags.includes(MTB_TAG)).map((item: Assessment) => ({ ...item, tags: item.tags.filter((tag: string) => tag !== MTB_TAG) }))
    return returnResult
}

async function getResource(assessment: Assessment): Promise<Assessment> {

    const endPoint = endpoints.assessmentSharedResources
    const response = await Utility.callEndpoint<{ items: any[] }>(
        endPoint.replace(':identifier', assessment.identifier),
        'GET',
        {}
    )
    return {
        ...assessment,
        resources: response.data.items,
    }
}

async function getAssessmentsWithResources(
    guid?: string
): Promise<{ assessments: Assessment[]; tags: string[] }> {
    const assessments = guid ? await getAssessment(guid) : await getAssessments()
    const resourcePromises = assessments.map(async asmnt => getResource(asmnt))
    return Promise.allSettled(resourcePromises).then(items1 => {
        const items = items1
            .filter(i => i.status === 'fulfilled')
            //@ts-ignore
            .map(i => i.value) as Assessment[]

        const itemsFailed = items1
            .filter(i => i.status === 'rejected')
            //@ts-ignore
            .map(i => i.reason)
        console.log(itemsFailed)

        const allTags = items.map(item => item.tags).flat()
        const tags = allTags.reduce((acc, curr) => {
            if (!acc[curr]) {
                acc[curr] = 1
            } else {
                acc[curr] += 1
            }

            return acc
        }, {} as any)

        const result = { assessments: items, tags }
        if (!guid) {
            sessionStorage.setItem('AssessmentResources', JSON.stringify(result))
        }

        return result
    })
}

export default AssessmentService
