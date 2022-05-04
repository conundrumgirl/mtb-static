import React from 'react'
import BlackXIcon from '../../assets/black_x_icon.svg'
import Logo from '../../assets/mtb_logo_static.svg'


/*const useStyles = makeStyles(theme => ({
  blackXIcon: {
    width: '16px',
    height: '16px',
  },
  mobileToolBarLink: {
    fontFamily: latoFont,
    textDecoration: 'none',
    color: 'inherit',
    flexShrink: 0,
    boxSizing: 'border-box',
    paddingLeft: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
  },
  mobileHomeOptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingRight: theme.spacing(3),
    height: '100px',
    justifyContent: 'space-between',
  },
  logoImage: {
    height: '30px',
    '&:hover': {
      opacity: 0.7,
    },
  },
}))*/

type MobileDrawHeaderProps = {
  setIsMobileOpen: Function

  logoImage?: JSX.Element
}

const MobileDrawerMenuHeader: React.FunctionComponent<MobileDrawHeaderProps> =
  ({setIsMobileOpen, logoImage}) => {

    const logo = logoImage || <img className={''/*classes.logoImage*/} src={Logo} />
    const logoElement =(
        <a
          target="_blank"
          href="https://www.mobiletoolbox.org"
          className={''/*classes.mobileToolBarLink*/}>
          {logo}
        </a>
      )

    return (
      <div className={''/*classes.mobileHomeOptionContainer*/}>
        {logoElement}
        <img
          src={BlackXIcon}
          onClick={() => setIsMobileOpen(false)}
          className={''/*classes.blackXIcon*/}></img>
      </div>
    )
  }

export default MobileDrawerMenuHeader
