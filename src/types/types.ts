export interface Response<T> {
    status: number
    ok: boolean
    data: T
  }

  export type RequestStatus = 'IDLE' | 'PENDING' | 'RESOLVED' | 'REJECTED'

  export interface ExtendedError extends Error {
    errors?: any
    statusCode?: number
    entity?: any
  }
  
/* *** Assessment ********************************/
export type ResourceFormat = 'image/png'
export type AssessmentCategory = 'screenshot' | 'icon'
export type AssessmentResource = {
  category: AssessmentCategory
  deleted: boolean
  format: ResourceFormat
  guid: string
  language: string
  minRevision: 1
  modifiedOn: string
  title: string
  upToDate: boolean
  url: string
  version: number
}
export type Assessment = {
  createdOn: string
  customizationFields: object
  deleted: boolean
  guid: string
  identifier: string
  modifiedOn?: string
  normingStatus: string
  osName: string //iPhone OS"
  ownerId: string //sage-bionetworks"
  revision: number
  summary: string
  tags: string[]
  title: string
  type: string
  version: number
  validationStatus: string
  minutesToComplete: number
  resources?: any[]
  originGuid?: string
}