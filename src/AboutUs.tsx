import massgeneral_logo from '@assets/about/massgeneral.svg'
import MKellen from '@assets/about/mkellen.png'
import MSliwinski from '@assets/about/m_sliwinski.jpg'
import northwestern_logo from '@assets/about/northwesternu.svg'
import penstate_logo from '@assets/about/pennstatelogo.svg'
import RGershon from '@assets/about/r_gershon.jpg'
import ucsandiego_logo from '@assets/about/ucsandiego.svg'
import ucsf_logo from '@assets/about/ucsf.svg'
import udelaware_logo from '@assets/about/udelaware.svg'
import washu_logo from '@assets/about/washu.svg'
import sagebio_logo from '@assets/sage_bio_logo.svg'
import PageShell from '@components/widgets/PageShell'
import {Section} from '@components/widgets/Styled'
import {
  DialogTitle,
  DialogTitleProps,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import {alpha, styled} from '@mui/material/styles' //vs mui/styles
import {Box} from '@mui/system'
import {colors, latoFont} from '@style/theme'
import {FunctionComponent} from 'react'

const orgImages: Map<string, string> = new Map([
  [northwestern_logo, 'Northwestern University'],
  [sagebio_logo, 'Sage Bionetworks'],
  [penstate_logo, 'Penn State'],
  [massgeneral_logo, 'Massachusets General Hospital'],
  //[nih_logo, 'National Institue of Health'],
  [ucsandiego_logo, 'University of California San Diego'],
  [ucsf_logo, 'University of California San Francisco'],
  [udelaware_logo, 'University of Delaware'],
  [washu_logo, 'Washington University in St. Louis'],
])

const ContributorContainer = styled('div')(({theme}) => ({
  display: 'flex',
  border: '1px solid #DCDCDC',
  height: '450px',
}))

const StyledH1 = styled('h1')(({theme}) => ({
  fontFamily: latoFont,
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '28px',
  textAlign: 'center',
  color: '#353A3F',
  marginBottom: theme.spacing(10),
}))

//styleName: Body/Body Text 1;
const BodyText1 = styled('p')(({theme}) => ({
  fontFamily: 'Lato',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '20px',
  letterSpacing: '0px',
  textAlign: 'left',
  color: '#000',
}))

const StyledH2 = styled('h2')(({theme}) => ({
  fontFamily: latoFont,
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '24px',
  marginBottom: theme.spacing(10),
  color: '#000',
}))

const LogoContainer = styled('div')<{rowIndex: number}>(
  ({theme, rowIndex}) => ({
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(10),
    '&> img, > svg': {
      margin: theme.spacing(0, 11),
      flexGrow: 0,
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: rowIndex == 1 ? theme.spacing(0) : theme.spacing(10),
      flexDirection: rowIndex == 1 ? 'column' : 'row',
      flexWrap: 'wrap',
      '&> img, > svg': {
        margin: theme.spacing(5, 2),
        flexGrow: 0,
      },
    },
  })
)
const StyledAvatar = styled(Avatar)(({theme}) => ({
  width: '156px',
  height: '156px',
  border: '4px solid #EDEEF2',
  margin: '0 auto',
}))

const StyledSelect = styled(TextField)(({theme}) => ({
  margin: '0 auto',
  border: 'none',
  minWidth: '300px',
  '& .MuiOutlinedInput-notchedOutline': {
    // border: '1px solid #515359',
    border: 'none',
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    //  border: '1px solid #515359',
  },

  '& .MuiOutlinedInput-root': {
    border: '1px solid #515359',
    '& :hover': {
      //  border: '1px solid #515359',
    },
  },

  '& .MuiSelect-select': {
    color: '#515359',
  },
}))
const StyledMenuItem = styled(MenuItem)(({theme}) => ({
  color: 'black',
  '&.Mui-selected, &.Mui-selected:hover': {
    backgroundColor: alpha('#D7665A', 0.15),

    '& > .MuiListItemText-root': {
      // color: '#515359',
    },
  },
}))

const OrgList = styled('div')(({theme}) => ({
  borderRight: '1px solid #DCDCDC',
  marginTop: theme.spacing(5),
  width: theme.spacing(64),
  flexShrink: 0,

  '& .MuiList-root': {
    paddingTop: 0,

    '& > .MuiButtonBase-root': {
      '& > .MuiListItemText-root': {
        color: '#515359',
      },
      '&.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: alpha('#D7665A', 0.15),

        '& > .MuiListItemText-root': {
          // color: '#515359',
        },
      },
    },
  },
}))

const Contributors = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  height: '100%',
  width: '100%',
  backgroundColor: '#FBFBFC',
  overflow: 'scroll',
}))

const StyledTitle = styled(({className, ...props}: DialogTitleProps) => (
  <DialogTitle {...props} classes={{root: className}} />
))(({theme}) => ({
  fontFamily: latoFont,
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '16px',
  color: '#4A5056',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(1),

  '&> div': {
    borderBottom: '1px solid #EAECEE',
    paddingBottom: theme.spacing(3),
  },

  '& strong': {
    fontSize: '18px',
    color: '#22252A',
  },
  '& i': {
    fontWeight: 400,
    color: '#22252A',
  },
  '& .MuiIconButton-root': {
    top: '10px',
    right: '10px',
    position: 'absolute',
    padding: theme.spacing(1),
  },
}))

const AboutUs: FunctionComponent<{onJoin: () => void}> = ({onJoin}) => {
  return (
    <PageShell islight={true} onJoin={onJoin}>
      <Section>
        <Typography variant="h2" textAlign="left" mb={6}>
          About Us
        </Typography>
        <Typography variant="body1" maxWidth="700px" mb={6}>
          Mobile Toolbox comprises a team of clinical colleagues, cognition
          researchers, measurement scientists and technical experts with proven
          success in multiple large-scale validation and development projects.
          Co-Principal Investigators Drs. Richard Gershon and Aaron Kaat lead
          the development and validation of mobile versions of cognitive
          assessments at Northwestern University, and Dr. Mike Kellen leads the
          development of the Mobile Toolbox platform at Sage Bionetworks. Dr.
          Martin Sliwinski of Penn State University leads the integration of
          Mobile Monitoring of Cognitive Change (M2C2) into the Mobile Toolbox.
        </Typography>
      </Section>
      <Box bgcolor={colors.purpleTransparency2}>
        <Section mb={13}>
          <Typography variant="h3" textAlign="center" mb={10}>
            Our Partners
          </Typography>
          <LogoContainer rowIndex={1}>
            {Array.from(orgImages.keys())
              .slice(0, 3)
              .map((src, index) => (
                <img
                  src={src}
                  alt={orgImages.get(src)}
                  key={src}
                  height={orgImages.get(src) === 'Penn State' ? '65px' : 'auto'}
                />
              ))}
          </LogoContainer>
          <LogoContainer rowIndex={2}>
            {Array.from(orgImages.keys())
              .slice(3, 9)
              .map((src, index) => (
                <img src={src} alt={orgImages.get(src)} key={src} />
              ))}
          </LogoContainer>
        </Section>
      </Box>

      <Section>
        <Typography variant="h3" textAlign="center" mb={12}>
          Our Leadership Team
        </Typography>
        <Grid
          container
          rowSpacing={{xs: 8, lg: 25}}
          mb={8}
          columnSpacing={{xs: 4, lg: 10}}>
          <Grid item xs={12} lg={3} textAlign="center">
            <StyledAvatar src={RGershon} alt="Richard Gershon" />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Typography component="p" variant="body1" maxWidth="700px">
              <p>
                Dr. Gershon is a Professor and Vice Chair for Research in the
                Department of Medical Social Sciences, and Professor in the
                Department of Preventive Medicine-Health and Biomedical
                Informatics at Northwestern University Feinberg School of
                Medicine. Dr. Gershon is a leading expert in the development of
                outcome measurement, with significant experience in both
                educational and health applications. In response to the
                realization that the outcomes tools he was using in clinical
                practice were outdated and failed to cover the needs of
                patients, Dr. Gershon’s career has focused on the development of
                modern assessment tools. He strives to find new ways to assess
                health outcomes and methodologies and provide that information
                to clinicians in ways that can immediately impact treatment. As
                PI for the NIH Toolbox for the Assessment of Neurological and
                Behavioral Function, Dr. Gershon oversaw a team of over 200
                researchers from around the world to create a large battery of
                instruments for clinical investigators to assess various areas
                within cognitive, motor, sensory, and emotional health, for
                longitudinal, clinical and comparative effectiveness research.
                He also serves as PI on the NIH Infant and Toddler Toolbox (aka
                Baby Toolbox) contract to develop a cognitive assessment battery
                for infants and children aged 1-42 months. Dr. Gershon is the
                MPI for the NIA sponsored grant Advancing Reliable Measurement
                in Alzheimer&rsquo;s Disease and cognitive Aging (ARMADA), which
                validates the NIH Toolbox amongst Alzheimer&rsquo;s populations
                and older age groups. In recently awarded grants, he is the
                contact PI for ToolBox Detect: Low-Cost Detection of Cognitive
                Decline in Primary Care Settings, and co-I for The MyCog Mobile
                Assessment: Development and Validation of a Telehealth Strategy
                for Routine Detection of Cognitive Impairment in Primary Care.
              </p>
              <p>
                Dr. Gershon also serves as the MPI for the Environmental
                influences on Child Health Outcomes (ECHO) PRO Measurement Core.
                Additionally, in his former role as PI for the NIH Roadmap
                Patient Reported Outcomes Measurement Information System
                (PROMIS) Technical Center, Dr. Gershon served as technology host
                for more than 2,000 researchers and clinicians who are
                registered users of{' '}
                <a href="http://www.assessmentcenter.net">
                  AssessmentCenter.net
                </a>
                , a test authoring and study administration portal. Dr.
                Gershon’s background is further augmented by his numerous
                publications and presentations, and role as a co-investigator
                and/or consultant on over 100 assessment development projects in
                health care, education, and certification.
              </p>{' '}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3} textAlign="center">
            <StyledAvatar src={MSliwinski} alt="Martin Sliwinski" />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Typography component="p" variant="body1" maxWidth="700px">
              Martin Sliwinski, PhD, of Penn State University, is currently
              leading Mobile Monitoring of Cognitive Change (M2C2), working to
              using smartphones to measure cognitive function and subtle
              variations in cognitive performance in the context of everyday
              life. Dr. Sliwinski aims to develop infrastructure that provides
              the research community with open, flexible, and usable tools to
              enable scientific progress that depends on the sensitive and
              accurate measurement of cognitive change.
            </Typography>
          </Grid>

          <Grid item xs={12} lg={3} textAlign="center">
            <StyledAvatar src={MKellen} alt="Michael Kellen" />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Typography component="p" variant="body1" maxWidth="700px">
              Michael Kellen leads the technology platforms and services team at
              Sage Bionetworks. Since 2009, the team has supported open projects
              and challenges in the collaborative analysis of human health data
              through the development of the Synapse platform, and by providing
              support with data hosting, curation, and analysis. The team also
              supports the collection of human phenotypic data though the
              development of the Bridge platform. Michael has over 10 years
              experience developing software for academic and corporate users in
              the life sciences, and has brought several award-winning products
              to market in this space covering simulation, data capture and
              analysis workflow, data integration, and team collaboration. Prior
              to Sage, Michael held a variety of positions with Teranode
              corporation since joining as the company’s first employee in 2002,
              covering product development, field consulting, product
              management, and development management. Michael completed a
              doctorate in bioengineering at the University of Washington in
              2002 with a focus in computational biology where he also helped
              develop scientific modeling and simulation technology subsequently
              licensed by Teranode.
            </Typography>
          </Grid>
        </Grid>
      </Section>
    </PageShell>
  )
}

export default AboutUs
