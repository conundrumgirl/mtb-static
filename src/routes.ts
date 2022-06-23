//import AssessmentDetail from './components/assessments/AssessmentDetail'
//import AssessmentLibrary from './components/assessments/AssessmentLibrary'

//import SignInPage from './SignInPage'
import AssessmentDetail from '@components/assessments/AssessmentDetail'
import AssessmentLibrary from '@components/assessments/AssessmentLibrary'
import AboutUs from './AboutUs'
import AboutUsNew from './AboutUsNew'
import Home from './components/home/Home'

export default [
  {
    path: '/',
    name: '',
    Component: Home,
    exact: true,
  },

  {
    path: '/home',
    name: 'Home',
    Component: Home,
    exact: true,
  },
  {
    path: '/about-us',
    name: 'About Us',
    Component: AboutUs,
    exact: true,
  },
  {
    path: '/about-us-new',
    name: '',
    Component: AboutUsNew,
    exact: true,
  },
  {
    path: '/assessments',
    name: 'Assessments',
    Component: AssessmentLibrary,
    exact: false,
  },
  /* {
    path: '/help',
    name: 'Help',
    Component: Home, //AssessmentLibrary,
    exact: false,
  },*/

  {
    path: '/assessments/:id',
    name: '',
    Component: AssessmentDetail,
    exact: true,
  },
  /* {
    path: '/documentation',
    name: 'Documentation',
    Component: Home,
    exact: true,
  },
  {
    path: '/download',
    name: 'Download',
    Component: Home,
    exact: true,
  },
  {
    path: '/data',
    name: 'Data',
    Component: Home,
    exact: true,
  },
  
  {
    path: '/sign-in',
    name: 'Login',
    Component: SignInPage,
  },*/
  {path: '/home', name: '', Component: Home, exact: true},
]
