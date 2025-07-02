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

// Projects
// import UserControl from '@/view/Projects/Browser_Extensions/UserControl.vue';

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
  {
    path: '/Product',
    name: 'Product',
    component: Product,
  },
  {
    path: '/Version_Naming',
    name: 'Version_Naming',
    component: Version_Naming,
  },
  {
    path: '/Browser_Extension',
    name: 'Browser_Extension',
    component: Browser_Extension,
  },
  {
    path: '/Web_Application',
    name: 'Web_Application',
    component: Web_Application,
  },
  {
    path: '/Expansion',
    name: 'Expansion',
    component: Expansion,
  },
  {
    path: '/JavaScript',
    name: 'JavaScript',
    component: JavaScript,
  },
  {
    path: '/Python',
    name: 'Python',
    component: Python,
  },
  // Resource
  {
    path: '/Groq',
    name: 'Groq',
    component: Groq,
  },
  {
    path: '/List_Server',
    name: 'List_Server',
    component: List_Server,
  },
  {
    path: '/Firebase',
    name: 'Firebase',
    component: Firebase,
  },
  {
    path: '/Cloud_Run',
    name: 'Cloud_Run',
    component: Cloud_Run,
  },
  {
    path: '/Free_Domains',
    name: 'Free_Domains',
    component: Free_Domains,
  },
  // Engineering Assets
  {
    path: '/Browser_Extensions',
    name: 'Browser_Extensions',
    component: Browser_Extensions,
  },
  // R&D
  {
    path: '/Magnetometer',
    name: 'Magnetometer',
    component: Magnetometer,
  },
  {
    path: '/MarkdownUploader',
    name: 'MarkdownUploader',
    component: MarkdownUploader,
  },

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
