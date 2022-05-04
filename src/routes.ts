//import AssessmentDetail from './components/assessments/AssessmentDetail'
//import AssessmentLibrary from './components/assessments/AssessmentLibrary'

//import SignInPage from './SignInPage'
import Home from './components/home/Home'


export default  [
 /* {
    path: '/',
    name: '',
    Component: SignInPage,
    exact: true,
    noToolbar: false,
  },
 */
  {
    path: '/home',
    name: 'Home',
    Component: Home,
    exact: true,
  },
  {
    path: '/about-us',
    name: 'About Us',
    Component: Home,
    exact: true,
  },
 {
    path: '/assessments',
    name: 'Assessments',
    Component: Home, //AssessmentLibrary,
    exact: false,
  },
  {
    path: '/help',
    name: 'Help',
    Component: Home, //AssessmentLibrary,
    exact: false,
  },
  {
    path: '/login',
    name: 'Login',
    Component: Home, //AssessmentLibrary,
    exact: false,
  },
  {
    path: '/assessments/:id',
    name: '',
    Component: Home, //AssessmentDetail,
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
