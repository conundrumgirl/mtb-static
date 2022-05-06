import { Box, Button, FormGroup, Grid, InputBase, TextField, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles'; //vs mui/styles
import theme, { colors, latoFont } from '@style/theme';
import React, { FunctionComponent } from 'react';

const ContributeContainer = styled(Box)(({ theme }) => ({
  backgroundPositionY: 'bottom',
  backgroundPositionX: 'right',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.up('lg')]: {
    marginRight: '-200px',
    paddingRight: '200px',
  },
}))

const TextAreaField = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  backgroundColor: alpha(colors.neutralsWhite, .2),
  borderRadius: theme.spacing(5),
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column'
}))
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: latoFont,
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      // borderColor: 'red',
      border: '1px solid #ced4da',
    },
  },
}));


const Contribute: FunctionComponent<{}> = () => {
  return (
    <ContributeContainer>
      <Typography variant="h2" mb={10}>How to Contribute</Typography>
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 4, lg: 10 }}>
        <Grid item xs={12} lg={6}>
          {/* <BootstrapInput  placeholder="Loren ipsum" multiline/>*/}
          <Typography variant="h3" color={theme.palette.text.secondary} mb={10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </Typography>
          <FormGroup sx={{ width: '90%' }}>
            <TextField id="email" label="Email" variant="standard" />
            <TextField id="surname" label="Surname" variant="standard" />
            <TextField id="name" label="Name" variant="standard" />
          </FormGroup>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormGroup sx={{ width: '90%' }} >
            <TextField id="reason" label="Reason for Interest" variant="standard" />
            <TextAreaField id="more"
              maxRows={10} minRows={10}
              multiline
              sx={{
                height: 400,
                marginTop: 10,
              }}
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12} lg={12} textAlign="center">
          <Button variant="outlined" color="secondary" sx={{
            margin: `${theme.spacing(7)} auto`
          }}>Contact Us</Button>
        </Grid>
      </Grid>
    </ContributeContainer>
  )
}
export default Contribute
