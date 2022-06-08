import Footer from '@components/Footer'
import ClearIcon from '@mui/icons-material/Clear'
import {
  CssBaseline,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
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
            <Dialog open={openJoin} onClose={() => setOpenJoin(false)}>
              <DialogTitle>
                <IconButton onClick={() => setOpenJoin(false)} title="close">
                  <ClearIcon />
                </IconButton>
                <div>title goes here</div>
              </DialogTitle>
              <DialogContent sx={{color: 'black'}}>
                content goes here
              </DialogContent>
            </Dialog>
          </Box>
        </BrowserRouter>
      </Typography>
    </ThemeProvider>
  )
}
