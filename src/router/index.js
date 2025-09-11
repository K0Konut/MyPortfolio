import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Projects from '../pages/Projects.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';
import Portfolio from '../pages/Projects/Portfolio.vue';
import BotDiscord from '../pages/Projects/BotDiscord.vue';
import CalculatorWeb from '../pages/Projects/CalculatorWeb.vue';
import RadarRecul from '../pages/Projects/RadarRecul.vue';
import Login from '../components/Login.vue';  
import Admin from '../pages/Admin.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/projects/portfolio', component: Portfolio },
  { path: '/projects/botdiscord', component: BotDiscord },
  { path: '/projects/calculatorweb', component: CalculatorWeb },
  { path: '/projects/radar', component: RadarRecul },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/admin', component: Admin },

];

export default createRouter({
  history: createWebHistory(),
  routes,
});