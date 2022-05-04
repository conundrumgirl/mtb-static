import Footer from '@components/Footer';
import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import TopNav from './components/nav/TopNav';
import ProTip from './components/ProTip';
import routes from './routes';
import theme from './theme';




function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}

      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography component={'div'}>
        <CssBaseline />
        <BrowserRouter>
          <Box sx={{
            overflowX: 'hidden', display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <TopNav routes={routes} />


            <Routes>
              {routes.map(({ path, Component }, key) => (
                <Route

                  path={path}
                  key={key}
                  element={<Component />}
                />
              ))}
            </Routes>
            <Container maxWidth="sm">

              <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Create React App example with styled-components and TypeScript
                </Typography>
                <ProTip />
                <Copyright />
              </Box>
            </Container>
            <Footer />

          </Box>

        </BrowserRouter>

      </Typography>
    </ThemeProvider>
  );
}
