import massgeneral_logo from '@assets/about/massgeneral.svg'
import northwestern_logo from '@assets/about/northwesternu.svg'
import penstate_logo from '@assets/about/pennstate.svg'
import ucsandiego_logo from '@assets/about/ucsandiego.svg'
import ucsf_logo from '@assets/about/ucsf.svg'
import udelaware_logo from '@assets/about/udelaware.svg'
import washu_logo from '@assets/about/washu.svg'
import MSliwinski from '@assets/m_sliwinski.jpg'
import RGershon from '@assets/r_gershon.jpg'
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
import React, {FunctionComponent} from 'react'

const orgImages: Map<string, string> = new Map([
  [northwestern_logo, 'Northwestern University'],
  [sagebio_logo, 'Sage Bionetworks'],
  [penstate_logo, 'Penn State'],
  [massgeneral_logo, 'Massachusets General Hospital'],
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
  border: '1px solid #ccc',
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
                <img src={src} alt={orgImages.get(src)} key={src} />
              ))}
          </LogoContainer>
          <LogoContainer rowIndex={2}>
            {Array.from(orgImages.keys())
              .slice(3, 8)
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
              Richard Gershon, PhD, of Northwestern University, is widely
              recognized for his expertise in advancing the use of technology
              for increasing the impact and reach of psychometrically robust
              health measurements. Dr. Gershon is the contact principal
              investigator for The Mobile Toolbox for Monitoring Cognitive
              Function, MyCog: Rapid detection of cognitive impairment in
              everyday clinical settings, and ARMADA: Advancing Reliable
              Measurement in Alzheimer’s Disease and cognitive Aging.
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
            <StyledAvatar src={RGershon} alt="Richard Gershon" />
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
