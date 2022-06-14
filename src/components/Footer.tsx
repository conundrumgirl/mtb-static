import {ReactComponent as MTB_Logo} from '@assets/mtb_logo_white.svg'
import {Box, Divider, Hidden, styled, Typography} from '@mui/material'
import theme, {colors} from '@style/theme'

const LinkGroup = styled(Box)(({theme}) => ({
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '16px',
  marginLeft: theme.spacing(12),
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
  },
  '& a': {
    color: '#fff',
    display: 'block',
    margin: theme.spacing(2, 0),
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  '& strong': {
    display: 'block',
    color: '#fff',
    marginBottom: theme.spacing(2),
  },
}))

const Footer: React.FunctionComponent<{onJoin: () => void}> = ({onJoin}) => {
  return (
    <Box
      sx={{
        padding: theme.spacing(6),
        color: '#fff',

        backgroundColor: colors.primaryPurple,
      }}>
      <Hidden mdDown>
        <Box
          sx={{
            display: 'flex',
            paddingBottom: theme.spacing(3),
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
          <MTB_Logo title="MTB" />
          <Box
            display="flex"
            sx={{
              alignItems: 'flex-start',
            }}>
            <LinkGroup>
              <strong>Get Started</strong>

              <a href="#" onClick={onJoin}>
                Sign Up
              </a>
            </LinkGroup>
            <LinkGroup>
              <strong>About</strong>

              <a href="/about-us">About Us</a>
              <a href="/assessments">Assessments</a>
            </LinkGroup>
            <LinkGroup>
              <strong>Legal</strong>

              <a
                href="https://studies.mobiletoolbox.org/MTB-ToS-v2-210923.pdf"
                target="_blank">
                Terms
              </a>
              <a
                href="https://studies.mobiletoolbox.org/MTBPrivacyPolicy.pdf"
                target="_blank">
                Privacy
              </a>
            </LinkGroup>
          </Box>
        </Box>
        <Divider color="#F8F9FA"></Divider>
        <Typography variant="body1" component="p" mt={2}>
          &#169; 2022
        </Typography>
      </Hidden>
      <Hidden mdUp>
        <LinkGroup textAlign={'center'}>
          <a href="#" onClick={onJoin}>
            Sign Up
          </a>
          <a href="/about-us">About Us</a>
          <a href="/assessments">Assessments</a>
          <a
            href="https://studies.mobiletoolbox.org/MTB-ToS-v2-210923.pdf"
            target="_blank">
            Terms
          </a>
          <a
            href="https://studies.mobiletoolbox.org/MTBPrivacyPolicy.pdf"
            target="_blank">
            Privacy
          </a>
        </LinkGroup>
      </Hidden>
    </Box>
  )
}

export default Footer
