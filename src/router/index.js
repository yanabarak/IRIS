import Vue from 'vue';
import VueRouter from 'vue-router';
// import PersonalDetails from '@/view/PersonalDetails.vue';
import Dashboard from '@/view/Dashboard.vue';
// import MapEvents from '@/view/MapEvents.vue';
// import OpenVolunteering from '@/view/OpenVolunteering.vue';
// import MyVolunteerBasket from '@/view/MyVolunteerBasket.vue';
// import NewHelpRequest from '@/view/NewHelpRequest.vue';
// import UserManagement from '@/view/UserManagement.vue';
// import VolunteersManagement from '@/view/VolunteersManagement.vue';
// import NotificationLog from '@/view/NotificationLog.vue';
// import AboutUs from '@/view/AboutUs.vue';
// import Login from '@/view/auth/login/index.vue';
// import Registration from '@/view/auth/registration/index.vue';
import NotFound from '@/components/NotFound.vue';

// Company Guidelines
import Product from '@/view/Company_Guidelines/Product_Development/Product.vue';
import Version_Naming from '@/view/Company_Guidelines/Versioning/Version_Naming.vue';
import Browser_Extension from '@/view/Company_Guidelines/Documentation_Guidlines/Browser_Extension.vue';
import Web_Application from '@/view/Company_Guidelines/Documentation_Guidlines/Web_Application.vue';
import Expansion from '@/view/Company_Guidelines/Documentation_Guidlines/Expansion.vue';
import InternalTemplates from '@/components/InternalTemplates.vue';

import MarkdownUploader from '@/components/MarkdownUploader.vue';

// Resource
import JavaScript from '@/view/Resource/Languages/JavaScript.vue';
import Python from '@/view/Resource/Languages/Python.vue';
import Groq from '@/view/Resource/AI/Groq.vue';
import List_Server from '@/view/Resource/Servers/List_Server.vue';
import Firebase from '@/view/Resource/Servers/Firebase.vue';
import Cloud_Run from '@/view/Resource/Servers/Cloud_Run.vue';
import Free_Domains from '@/view/Resource/Domains/Free_Domains.vue';

// Engineering Assets
import Browser_Extensions from '@/view/Engineering_Assets/Browser_Extensions.vue';

// R&D
import Magnetometer from '@/view/R&D/Magnetometer.vue';

// Business Research
import Desktop_Software from '@/view/Business_Research/Desktop_Software.vue';
import Browser_Extensions_BR from '@/view/Business_Research/Browser_Extensions_BR.vue';
import Mobile_Apps from '@/view/Business_Research/Mobile_Apps.vue';
import SaaS_Trends from '@/view/Business_Research/SaaS_Trends.vue';
import Browser_Usage from '@/view/Business_Research/Browser_Usage.vue';
import User_Behavior from '@/view/Business_Research/User_Behavior.vue';
import Regional_Statistics from '@/view/Business_Research/Regional_Statistics.vue';
import Market_Growth from '@/view/Business_Research/Market_Growth.vue';
import User_Personas from '@/view/Business_Research/User_Personas.vue';
import Pain_Points from '@/view/Business_Research/Pain_Points.vue';
import Freemium from '@/view/Business_Research/Freemium.vue';
import Technology_Trends from '@/view/Business_Research/Technology_Trends.vue';
import Ideation from '@/components/Ideation.vue';
import Media_Stock from '@/components/Media_Stock.vue';


// Projects
// import UserControl from '@/view/Projects/Browser_Extensions/UserControl.vue';
import UserControl from '@/components/UserControl.vue';


import DividedBlock from '@/components/DividedBlock.vue';

Vue.use(VueRouter);

const routes = [
  // { path: '/personal-details', component: PersonalDetails },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login,
  // },
  // {
  //   path: '/registration',
  //   name: 'Registration',
  //   component: Registration,
  // },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },

  // Company Guidelines
  {path: '/Product', name: 'Product', component: Product,},
  {path: '/Version_Naming', name: 'Version_Naming', component: Version_Naming,},
  {path: '/Browser_Extension', name: 'Browser_Extension', component: Browser_Extension,},
  {path: '/Web_Application', name: 'Web_Application', component: Web_Application,},
  {path: '/Expansion', name: 'Expansion', component: Expansion,},
  {path: '/InternalTemplates', name: 'InternalTemplates', component: InternalTemplates,},


// Resource
  {path: '/JavaScript', name: 'JavaScript', component: JavaScript,},
  {path: '/Python', name: 'Python', component: Python,},


  // Resource
  {path: '/Groq', name: 'Groq', component: Groq,},
  {path: '/List_Server', name: 'List_Server', component: List_Server,},
  {path: '/Firebase', name: 'Firebase', component: Firebase,},
  {path: '/Cloud_Run', name: 'Cloud_Run',component: Cloud_Run,},
  {path: '/Free_Domains', name: 'Free_Domains', component: Free_Domains,},
  {path: '/MarkdownUploader', name: 'MarkdownUploader', component: MarkdownUploader,},
  {path: '/Media_Stock', name: 'Media_Stock', component: Media_Stock,},


  // Engineering Assets
  {path: '/Browser_Extensions', name: 'Browser_Extensions', component: Browser_Extensions,},


  // R&D
  {path: '/Magnetometer', name: 'Magnetometer', component: Magnetometer,},

  // Business Rsearch
  {path: '/Desktop_Software', name: 'Desktop_Software',component: Desktop_Software,},
  {path: '/Browser_Extensions_BR', name: 'Browser_Extensions_BR', component: Browser_Extensions_BR,},
  {path: '/Mobile_Apps', name: 'Mobile_Apps', component: Mobile_Apps,},
  {path: '/Ideation', name: 'Ideation',component: Ideation,},
  {path: '/SaaS_Trends', name: 'SaaS_Trends', component: SaaS_Trends,},
  {path: '/Browser_Usage', name: 'Browser_Usage', component: Browser_Usage,},
  {path: '/User_Behavior', name: 'User_Behavior', component: User_Behavior,},
  {path: '/Regional_Statistics', name: 'Regional_Statistics', component: Regional_Statistics,},
  {path: '/Market_Growth', name: 'Market_Growth', component: Market_Growth,},
  {path: '/User_Personas', name: 'User_Personas', component: User_Personas,},
  {path: '/Pain_Points', name: 'Pain_Points', component: Pain_Points,},
  {path: '/Freemium', name: 'Freemium', component: Freemium,},
  {path: '/Technology_Trends', name: 'Technology_Trends', component: Technology_Trends,},



  // Projects
  {path: '/UserControl', name: 'UserControl', component: UserControl,},
  {path: '/DividedBlock', name: 'DividedBlock', component: DividedBlock,},

  // {
  //   path: '/UserControl',
  //   name: 'UserControl',
  //   component: UserControl,
  // },

  // {
  //   path: '/map-events',
  //   name: 'MapEvents',
  //   component: MapEvents,
  // },
  // {
  //   path: '/open-menu',
  //   name: 'OpenVolunteering',
  //   component: OpenVolunteering,
  // },
  // {
  //   path: '/basket-menu',
  //   name: 'MyVolunteerBasket',
  //   component: MyVolunteerBasket,
  // },
  // {
  //   path: '/help-menu',
  //   name: 'NewHelpRequest',
  //   component: NewHelpRequest,
  // },
  // {
  //   path: '/management-menu',
  //   name: 'UserManagement',
  //   component: UserManagement,
  // },
  // {
  //   path: '/volunteers-menu',
  //   name: 'VolunteersManagement',
  //   component: VolunteersManagement,
  // },
  // {
  //   path: '/notification-menu',
  //   name: 'NotificationLog',
  //   component: NotificationLog,
  // },
  // {
  //   path: '/about-menu',
  //   name: 'AboutUs',
  //   component: AboutUs,
  // },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
  { path: '*', redirect: '/404' },
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});

export default router;
