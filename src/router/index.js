import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Projects from '../pages/Projects.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';
import Login from '../components/Login.vue';  
import Admin from '../pages/Admin.vue';
import AdminAdd from '../pages/AdminAdd.vue';
import AdminEdit from '../pages/AdminEdit.vue';
import ProjectDetail from '../pages/ProjectDetail.vue';
import AdminAbout from '../pages/AdminAbout.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/projects/:id', name: 'ProjectDetail', component: ProjectDetail },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/admin', component: Admin },
  { path: '/admin/add', component: AdminAdd },
  { path: '/admin/edit', component: AdminEdit },
  { path: '/admin/about', component: AdminAbout }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
