import Footer from '@components/Footer'
import ClearIcon from '@mui/icons-material/Clear'
import {
  CssBaseline,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Link,
  Typography,
} from '@mui/material'
import Box from '@mui/material/Box'
import {ThemeProvider} from '@mui/material/styles'
import theme from '@style/theme'
import * as React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import routes from './routes'

export default function App() {
  const [openJoin, setOpenJoin] = React.useState(false)
  return (
    <ThemeProvider theme={theme}>
      <Typography component={'div'}>
        <CssBaseline />
        <BrowserRouter>
          <Box
            sx={{
              overflowX: 'hidden',
              display: 'flex',
              minHeight: '100vh',
              flexDirection: 'column',
              justifyContent: 'space-between',

              // backgroundColor: 'yellow'
            }}>
            <Box
              sx={{
                // padding: theme.spacing(10, 0),
                width: '100%',
              }}>
              <Routes>
                {routes.map(({path, Component}, key) => (
                  <Route
                    path={path}
                    key={key}
                    //@ts-ignore
                    element={<Component onJoin={() => setOpenJoin(true)} />}
                  />
                ))}
              </Routes>
            </Box>

            <Footer onJoin={() => setOpenJoin(true)} />
            <Dialog
              open={openJoin}
              onClose={() => setOpenJoin(false)}
              fullWidth={true}
              maxWidth="sm">
              <DialogTitle>
                <IconButton
                  onClick={() => setOpenJoin(false)}
                  title="close"
                  sx={{position: 'absolute', right: '10px', top: '11px'}}>
                  <ClearIcon />
                </IconButton>
                <div>Sign up for Mobile Toolbox</div>
                <Divider sx={{mt: 3}} />
              </DialogTitle>

              <DialogContent sx={{color: 'black'}}>
                <Typography component={'p'} mt={2} lineHeight="20px">
                  Mobile Toolbox is closed for additional Beta partners.
                </Typography>
                <Typography component={'p'} mt={2} lineHeight="20px">
                  If you are interested in receiving updates please join our
                  mailing list{' '}
                  <Link
                    href="https://forms.gle/HP7uJ4uhu3D2Vuwm9"
                    target="_blank"
                    sx={{fontSize: '16px', lineHeight: '20px'}}>
                    <strong>mailing list</strong>
                  </Link>{' '}
                </Typography>{' '}
              </DialogContent>
            </Dialog>
          </Box>
        </BrowserRouter>
      </Typography>
    </ThemeProvider>
  )
}
