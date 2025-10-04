import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import ProjectPage from "../views/ProjectPage.vue";
import NotFound from "../views/NotFound.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/projects/:slug", name: "ProjectPage", component: ProjectPage },
  { path: "/about", name: "About", component: About },
  { path: "/services", name: "Services", component: Services },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
