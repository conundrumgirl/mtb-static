import Footer from '@components/Footer';
import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import theme from '@style/theme';
import * as React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import routes from './routes';

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
            justifyContent: 'space-between',

            // backgroundColor: 'yellow'

          }}>

            <Box sx={{
              // padding: theme.spacing(10, 0),
              width: '100%'
            }} >

              <Routes>
                {routes.map(({ path, Component }, key) => (
                  <Route

                    path={path}
                    key={key}
                    element={<Component />}
                  />
                ))}
              </Routes>
            </Box>

            <Footer />

          </Box>

        </BrowserRouter>

      </Typography>
    </ThemeProvider>
  );
}
