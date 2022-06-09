import ClockIcon from '@assets/clock.svg'
import mtb_a from '@assets/mtb_assessment.svg'
import ScientificallyValidatedIcon from '@assets/validated.svg'
import Loader from '@components/widgets/Loader'
import PageShell from '@components/widgets/PageShell'
import {useAsync} from '@helpers/AsyncHook'
import {
  Box,
  Container,
  Divider,
  Grid,
  Hidden,
  styled,
  Typography,
} from '@mui/material'
import AssessmentService from '@services/assessment.service'
import theme, {colors, poppinsFont} from '@style/theme'
import {Assessment} from '@typedefs/types'
import React, {FunctionComponent} from 'react'
import {useParams} from 'react-router-dom'
import BreadCrumb from '../widgets/BreadCrumb'
import AssessmentImage from './AssessmentImage'

const ImageTextRow = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: theme.spacing(2),
  // marginLeft: theme.spacing(-3.5),
  marginTop: theme.spacing(2.5),
  marginBottom: theme.spacing(2.5),
}))

const InfoTextInContainer = styled(Box)(({theme}) => ({
  fontSize: '14px',
  lineHeight: '18px',
  fontFamily: poppinsFont,
}))

const StyledDivider = styled(Divider)(({theme}) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  width: '100%',
  backgroundColor: '#EAECEE',
}))

type AssessmentDetailProps = {
  onJoin: () => void
}

const AssessmentDetail: FunctionComponent<AssessmentDetailProps> = ({
  onJoin,
}) => {
  const links = [
    {
      url: '/assessments',
      text: 'Back to Assessments',
    },
  ]

  let {id} = useParams<{id: string}>()

  const {data, status, error, run} = useAsync<Assessment>({
    status: 'PENDING',
    data: null,
  })

  const correctResource = data?.resources?.find(
    (resource: any) => resource.category === 'website'
  )

  React.useEffect(() => {
    ///your async call
    return run(
      (async function (id) {
        const {assessments} =
          await AssessmentService.getAssessmentsWithResources(id)
        if (assessments.length === 0) {
          throw new Error('no assessment found')
        } else {
          return assessments[0]
        }
      })(id)
    )
  }, [run, id])
  if (status === 'PENDING' || !data) {
    return <Loader reqStatusLoading={status} variant="full" />
  } else if (status === 'REJECTED') {
    return <>error</>
  } else {
    const Header = (
      <>
        <Typography
          component={'p'}
          sx={{
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '18px',
            textTransform: 'uppercase',
            marginBottom: theme.spacing(4),
          }}>
          {data.tags.join(', ')}
        </Typography>
        <Typography variant="h2" my={5}>
          {data.title}
        </Typography>
      </>
    )

    return (
      <PageShell islight={true} onJoin={onJoin}>
        <Container
          maxWidth="md"
          sx={{
            textAlign: 'center',
            paddingBottom: theme.spacing(6),
            backgroundColor: '#fff',
            color: colors.neutralsBlack,
            minHeight: '100vh',
          }}>
          <Box
            sx={{
              padding: theme.spacing(3, 5, 0, 3),
              boxShadow: '0 0 0 0',
              marginBottom: 6,
            }}>
            <BreadCrumb links={links}></BreadCrumb>
          </Box>

          <InfoTextInContainer sx={{color: colors.neutralsBlack}}>
            <Grid
              container
              spacing={'32px'}
              sx={{
                padding: theme.spacing(7.5),
                borderRadius: '0px',
              }}>
              <Grid item xs={12} lg={6}>
                <Box maxWidth="530px" style={{textAlign: 'left'}}>
                  <Hidden lgUp>
                    {/*  */}
                    {Header}
                  </Hidden>
                  <AssessmentImage
                    name={`${data.title}_img`}
                    resources={data.resources}
                    variant="detail"></AssessmentImage>

                  {/*  <ThemeProvider theme={theme}>
                    <Box mt={5}>
                      <Typography component="p" paragraph>
                        {' '}
                        To learn more about this assessment and try it out
                        please log into Mobile Toolbox.
                      </Typography>
                      <Button variant="outlined" color="secondary">
                        Go to Login
                      </Button>
                    </Box>
                  </ThemeProvider>*/}
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box textAlign="left">
                  <Hidden lgDown>{Header}</Hidden>
                  <Box>{data.summary}</Box>
                  <StyledDivider />
                  <ImageTextRow sx={{marginLeft: theme.spacing(2)}}>
                    <img
                      style={{
                        marginRight: theme.spacing(1),
                        width: '24px',
                        height: '24px',
                      }}
                      src={ScientificallyValidatedIcon}
                      alt="scientifically_validated_icon"></img>
                    <Typography component="span">
                      Validation and Norming in progress
                    </Typography>
                  </ImageTextRow>
                  <ImageTextRow>
                    <img
                      style={{
                        marginRight: '8px',
                        width: '20px',
                        height: '20px',
                      }}
                      src={mtb_a}
                      alt="official_mobile_toolbox_icon"></img>
                    <Typography component="span">
                      Official Mobile Toolbox version
                    </Typography>
                  </ImageTextRow>
                  <ImageTextRow>
                    <img
                      style={{
                        marginRight: '8px',
                        width: '20px',
                        height: '20px',
                      }}
                      src={ClockIcon}
                      alt="clock_icon"></img>
                    <Typography component="span">
                      {data.minutesToComplete} min
                    </Typography>
                  </ImageTextRow>
                  {/* <div className={classes.informationText}>[Age: 18 +]</div>*/}
                  <StyledDivider />

                  <div style={{width: '100px'}}>Designed By:</div>
                  <div>
                    {correctResource && correctResource.creators
                      ? correctResource.creators.join(', ')
                      : ''}
                  </div>

                  {/*
                  <div className={classes.informationText}>
                    [Used in <u>15 published studies</u>]
                  </div>
                  <div className={classes.informationText}>
                    [2840 participants]
                      </div>*/}
                </Box>
              </Grid>
            </Grid>
          </InfoTextInContainer>
        </Container>
      </PageShell>
    )
  }
}

export default AssessmentDetail
