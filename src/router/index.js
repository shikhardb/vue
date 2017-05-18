import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import FFinder from '@/components/FFinder';
import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/find-friends',
      name: 'FFinder',
      component: FFinder,
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs,
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs,
    },
  ],
});
