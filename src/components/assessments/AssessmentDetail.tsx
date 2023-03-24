import Loader from '@components/widgets/Loader'
import PageShell from '@components/widgets/PageShell'
import { useAsync } from '@helpers/AsyncHook'
//import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone'
//import CakeTwoToneIcon from '@mui/icons-material/CakeTwoTone'
//import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone'
//import FactCheckTwoToneIcon from '@mui/icons-material/FactCheckTwoTone'
//import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone'
//import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone'
import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone'
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone'
import {
  Box,
  Container,
  Divider,
  Grid,
  Hidden,
  styled,
  Typography
} from '@mui/material'
import AssessmentService from '@services/assessment.service'
import theme, { colors, latoFont, poppinsFont } from '@style/theme'
import { Assessment } from '@typedefs/types'
import React, { FunctionComponent, ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../widgets/BreadCrumb'
import AssessmentImage from './AssessmentImage'

const ImageTextRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: theme.spacing(2),
  // marginLeft: theme.spacing(-3.5),
  marginTop: theme.spacing(2.5),
  marginBottom: theme.spacing(2.5),
}))

const InfoTextInContainer = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '18px',
  fontFamily: poppinsFont,
}))

const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  width: '100%',
  backgroundColor: '#EAECEE',
}))

type AssessmentDetailProps = {
  onJoin: () => void
}

const SectionWithIcon: FunctionComponent<{ icon: ReactElement; heading: string; text: string }> = ({
  icon,
  heading,
  text,
}) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', ' > svg': { color: '#878E95' } }}>
        {icon}
        <Typography variant="h4" sx={{ marginLeft: theme.spacing(1) }}>
          {heading}
        </Typography>
      </Box>
      <Typography variant="body1" component={'p'} sx={{ display: 'block', margin: theme.spacing(0.5, 0, 4, 0) }}>
        {text}
      </Typography>
    </Box>
  )
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

  let { id } = useParams<{ id: string }>()

  const { data, status, error, run } = useAsync<Assessment>({
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
        const { assessments } =
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
          maxWidth="lg"
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

          <InfoTextInContainer sx={{ color: colors.neutralsBlack }}>
            <Grid
              container
              spacing={'32px'}
              sx={{
                padding: theme.spacing(7.5),
                borderRadius: '0px',
              }}>
              <Grid item xs={12} lg={6}>
                <Box maxWidth="530px" style={{ textAlign: 'left' }}>
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
                <Box textAlign="left" sx={{ fontFamily: latoFont }}>
                  {' '}
                  <Hidden lgDown>{Header}</Hidden>
                  <Box sx={{ fontSize: '16px', lineHeight: '20px', marginTop: { lg: 0, md: theme.spacing(3) } }}>
                    {data.summary}
                  </Box>
                  <StyledDivider />
                  <Box sx={{ width: '100%', '> div': { width: '50%', float: 'left' } }}>
                    <Box>
                      <SectionWithIcon
                        icon={<VerifiedTwoToneIcon />}
                        heading="Validation"
                        text="Scientifically Validated"
                      />

                      {/*  TODO: add when available   <SectionWithIcon icon={<CakeTwoToneIcon />} heading="Age" text="todo: age" />*/}
                    </Box>
                    <Box>
                      <SectionWithIcon
                        icon={<TimerTwoToneIcon />}
                        heading="Duration"
                        text={`${data.minutesToComplete} min`}
                      />
                      {/*  TODO: add when available <SectionWithIcon icon={<ChatBubbleTwoToneIcon />} heading="Language" text="todo:" />*/}
                    </Box>
                  </Box>
                  {/*  TODO: add when available  <Box sx={{ clear: 'left' }}>
                    <SectionWithIcon icon={<StarsTwoToneIcon />} heading="Score" text="todo: " />
                    <SectionWithIcon icon={<FactCheckTwoToneIcon />} heading="Reliability" text="todo: " />
                    <SectionWithIcon icon={<ArticleTwoToneIcon />} heading="Publications" text="todo: " />
                    <SectionWithIcon icon={<MenuBookTwoToneIcon />} heading="Technical Manual" text="" />
                </Box>*/}
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
