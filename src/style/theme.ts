import {createTheme, Theme} from '@mui/material/styles'
import {TypographyOptions} from '@mui/material/styles/createTypography'
import {CSSProperties} from 'react'

export const openSansFont = [
  'Open Sans',
  'serif',
  'Lato',
  'Roboto',
  'Helvetica',
  'Arial',
].join(',')

export const playfairDisplayFont = [
  'Playfair Display',
  'serif',
  'Lato',
  'Roboto',
  'Helvetica',
  'Arial',
].join(',')

type cssGlobalClasses = {
  [key: string]: CSSProperties
}
const globals: cssGlobalClasses = {
  a: {
    color: 'black',
  },
  p: {
    marginBottom: '20px',
  },
}

const SPACE_UNIT = 8

export const latoFont = ['Lato', 'Roboto', 'Helvetica', 'Arial'].join(',')

export const poppinsFont = ['Poppins', 'sans-serif'].join(',')

export const colors = {
  gray900: '#353A3F',
  gray800: '#4A5056',
  secondaryRed: '#C22E49',

  primaryPurple: '#4F527D',
  purpleTransparency: '#EDEEF2',
  purpleTransparency2: '#FAFAFB',

  neutralsWhite: '#fff',

  accentBlue: '#47A4DD',
  accentGreen: ' #63A650',

  accentPurple: '#9499C7',
  neutralsBlack: '#353A3F',
}

/* exemple module overridedeclare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}*/

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    smallItalic: true
    largeBodyCopy: true
  }
}
interface ExtendedTypographyOptions extends TypographyOptions {
  smallItalic: React.CSSProperties
  largeBodyCopy: React.CSSProperties
}

const staticPagesTheme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 364,
      md: 960, //not used
      lg: 1320,
      xl: 1920, //not used
    },
  },
  palette: {
    text: {
      primary: colors.gray900,
      // secondary: alpha(colors.neutralsWhite, 0.6),
    },
    background: {
      default: '#fff',
    },
    common: {
      white: '#fff', //Neutrals_White
      black: '#383948', //Neutrals_Black
    },

    primary: {
      dark: colors.gray900, //Primary_DarkBlue
      main: '#154078', //Primary_Blue
      light: '#2E84F6', // Primary_LightBlue
      contrastText: '#5CB4D3', //Primary_GreenBlue
    },
    secondary: {
      main: '#FFF',
    },
  },
  spacing: 4,
  typography: {
    smallItalic: {
      fontStyle: 'italic',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '18px',
    },
    fontFamily: latoFont,
    body1: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '20px',

      /* Text and UI Colors/Gray 900 */

      //color: #353A3F;
    },
    largeBodyCopy: {
      //fontFamily: ''Lato'',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '20px',
      lineHeight: '24px',
    },
    /*
    body2: {
      color: colors.neutralsBlack,
    },
*/
    h1: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '48px',
      lineHeight: '58px',

      /* Text and UI Colors/Gray 1000 */
      color: ' #22252A',
    },
    h2: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '32px',
      lineHeight: '28px',
      //* Text and UI Colors/Gray 1000 */
      color: ' #22252A',
    },
    h3: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '24px',
      lineHeight: '24px',
      //* Text and UI Colors/Gray 1000 */
      color: ' #22252A',
    },
    h4: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '14px',
      lineHeight: '20px',
      //* Text and UI Colors/Gray 1000 */
      color: ' #22252A',
    },
  } as ExtendedTypographyOptions,

  components: {
    MuiCssBaseline: {
      styleOverrides: globals,
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.primaryPurple,
          fontSize: '14px',
          textDecoration: 'none',

          display: 'flex',
          lineHeight: '14px',
          flexDirection: 'row',
          '&:hover': {
            color: '#383A5A',
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          height: '50px',
          padding: '15px 40px',
          textTransform: 'capitalize',
          fontWeight: 900,
          fontSize: '16px',
          lineHeight: '148%',
          color: '#fff',
          boxShadow: 'none',
          background: '#4F527D',
          borderRadius: '54px',
          '&:hover': {
            backgroundColor: '#383A5A',
          },
          '&:focus': {
            backgroundColor: '#383948',
          },
          '&.Mui-disabled': {
            backgroundColor: '#D0D4D9',
            color: '#AEB5BC',
          },
        },
        outlinedPrimary: {
          border: `1px solid ${colors.primaryPurple}`,
          borderRadius: '54px',
          backgroundColor: 'transparent',
          textTransform: 'none',
          color: colors.primaryPurple,
          '&:hover': {
            color: '#383A5A',
            borderColor: '#383A5A',
            backgroundColor: colors.neutralsWhite,
          },
          '&:focus': {
            color: '#4F527D',
            borderColor: '#4F527D',
            backgroundColor: colors.neutralsWhite,
          },
        },
        outlinedSecondary: {
          border: `1px solid ${colors.neutralsWhite}`,
          borderRadius: '54px',
          backgroundColor: 'transparent',
          textTransform: 'none',
          color: colors.neutralsWhite,
          '&:hover': {
            border: `1px solid ${colors.neutralsWhite}`,
            color: colors.neutralsWhite,
          },
          '&:focus': {
            border: `1px solid ${colors.neutralsWhite}`,
            color: colors.neutralsWhite,
          },
        },
      },
    },
  },
})
export default staticPagesTheme
