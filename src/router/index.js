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
import product from '@/view/Company_Guidelines/Product_Development/product.vue';

// Resource
import JavaScript from '@/view/Resource/Languages/JavaScript.vue';
import Python from '@/view/Resource/Languages/Python.vue';

// Projects
import UserControl from '@/view/Projects/Browser_Extensions /UserControl.vue';

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
  {
    path: '/product',
    name: 'product',
    component: product,
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
