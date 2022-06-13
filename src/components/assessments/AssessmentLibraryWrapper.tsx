import {Box, Button, Container, styled, Typography} from '@mui/material'
import {Assessment} from '@typedefs/types'
import React, {FunctionComponent, ReactNode} from 'react'

type AssessmentLibraryWrapperProps = {
  assessments: Assessment[]
  tags: Record<string, number>
  children: ReactNode[]
  onChangeTags: Function
  isAssessmentLibrary?: boolean
  token?: string
  isFromNewStaticPages?: boolean
}

const WhiteButton = styled(Button)(({theme}) => ({
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
  },
}))

const Main = styled(Box)(({theme}) => ({
  flexGrow: 1,

  backgroundColor: '#fff',
  minWidth: '1000px',
  [theme.breakpoints.down('lg')]: {
    minWidth: '350px',
  },

  paddingTop: theme.spacing(1),
}))

const AssessmentContainer = styled(Container)(({theme}) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('lg')]: {
    maxWidth: '600px',
  },
}))

const CardGrid = styled(Box)(({theme}) => ({
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
  },
}))

const AssessmentLibraryWrapper: FunctionComponent<
  AssessmentLibraryWrapperProps
> = ({
  children,

  isFromNewStaticPages,
}: AssessmentLibraryWrapperProps) => {
  return (
    <Container maxWidth="lg">
      <Main>
        {/* Filtering will not be present in the october release */}
        {/* <AssessmentLibraryFilter
        tags={tags}
        assessments={assessments}
        onChangeTags={(tags: string[]) => onChangeTags(tags)}
      /> */}
        <Typography variant="h2" mt={5} mb={6}>
          Assessments
        </Typography>
        <Typography variant="body1" maxWidth="700px" component={'p'} mb={3}>
          The current Mobile Toolbox library has 9 cognitive assessments. The
          library will continue to grow over time.
        </Typography>
        {/* <Link href="">Donwload Technical Manual</Link>*/}
        <AssessmentContainer maxWidth="xl">
          <CardGrid sx={{margin: isFromNewStaticPages ? '40px 60px' : 0}}>
            {children}
          </CardGrid>
        </AssessmentContainer>
      </Main>
    </Container>
  )
}

export default AssessmentLibraryWrapper
