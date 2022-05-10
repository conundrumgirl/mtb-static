import { Box, Button, Container, styled } from '@mui/material'
import { colors } from '@style/theme'
import { Assessment } from '@typedefs/types'
import React, { FunctionComponent, ReactNode } from 'react'



type AssessmentLibraryWrapperProps = {
  assessments: Assessment[]
  tags: Record<string, number>
  children: ReactNode[]
  onChangeTags: Function
  isAssessmentLibrary?: boolean
  token?: string
  isFromNewStaticPages?: boolean
}

const WhiteButton = styled(Button)(({ theme }) => ({
  borderRadius: '0px',
  padding: theme.spacing(1.5),
  color: 'black',
  backgroundColor: '#fff',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  fontFamily: 'Lato',
  '&:hover': {
    fontWeight: 'bolder',
    backgroundColor: '#fff',
  },
  '& svg': {
    marginRight: theme.spacing(1.5),
  }
}))

const Main = styled(Box)(({ theme }) => ({
  flexGrow: 1,

  backgroundColor: colors.primaryBlue,
  minWidth: '1000px',
  [theme.breakpoints.down('lg')]: {
    minWidth: '750px',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '400px',
  },
  paddingTop: theme.spacing(1),
}))


const AssessmentContainer = styled(Container)(({ theme }) => ({


  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('md')]: {
    maxWidth: '600px',
  },
}))


const CardGrid = styled(Box)(({ theme }) => ({


  display: 'grid',
  padding: theme.spacing(10, 0),
  gridTemplateColumns: `repeat(auto-fill,${theme.spacing(62)})`,
  gridColumnGap: theme.spacing(10),
  justifyContent: 'center',
  gridRowGap: theme.spacing(10),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
    justifyContent: 'center',
    gridRowGap: theme.spacing(4),
  }

}))




const AssessmentLibraryWrapper: FunctionComponent<AssessmentLibraryWrapperProps> =
  ({
    children,


    isFromNewStaticPages,
  }: AssessmentLibraryWrapperProps) => {


    return (
      <Main>
        {/* Filtering will not be present in the october release */}
        {/* <AssessmentLibraryFilter
        tags={tags}
        assessments={assessments}
        onChangeTags={(tags: string[]) => onChangeTags(tags)}
      /> */}
        <AssessmentContainer maxWidth="xl">


          <CardGrid

            sx={{ margin: isFromNewStaticPages ? '40px 60px' : 0 }}>
            {children}
          </CardGrid>
        </AssessmentContainer>
      </Main>
    )
  }

export default AssessmentLibraryWrapper
