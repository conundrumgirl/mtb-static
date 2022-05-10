import Loader from '@components/widgets/Loader'
import PageShell from '@components/widgets/PageShell'
import { useAsync } from '@helpers/AsyncHook'
import AssessmentService from '@services/assessment.service'
import { Assessment } from '@typedefs/types'
import React, { FunctionComponent, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AssessmentCard from './AssessmentCard'
import AssessmentLibraryWrapper from './AssessmentLibraryWrapper'

type AssessmentLibraryProps = {

}

const CardLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
}))


const AssessmentLibrary: FunctionComponent<AssessmentLibraryProps> = () => {
  const [filteredAssessments, setFilteredAssessments] = useState<
    Assessment[] | undefined
  >(undefined)

  const { data, status, error, run } = useAsync<{
    assessments: Assessment[]
    tags: Record<string, number>
  }>({
    status: 'PENDING',
    data: null,
  })

  React.useEffect(() => {
    return run(AssessmentService.getAssessmentsWithResources())
  }, [run])

  if (status === 'REJECTED') {
    return <>Error</>
  }

  if (status === 'RESOLVED' && (!data?.assessments || !data?.tags)) {
    return <>No Data </>
  }

  return (
    <PageShell  >
      <Loader reqStatusLoading={status} variant="full">
        {data && (
          <AssessmentLibraryWrapper
            tags={data.tags}


            assessments={data.assessments}
            onChangeTags={
              (assessments: Assessment[]) =>
                setFilteredAssessments(assessments) /*setFilterTags(tags)*/
            }>
            {(filteredAssessments || data.assessments).map((a, index) => (
              <CardLink
                to={`/assessments/${a.guid}`}

                key={a.guid}>
                <AssessmentCard

                  index={index}
                  assessment={a}
                  key={a.guid}></AssessmentCard>
              </CardLink>
            ))}
          </AssessmentLibraryWrapper>
        )}
      </Loader>
    </PageShell>
  )
}

export default AssessmentLibrary
