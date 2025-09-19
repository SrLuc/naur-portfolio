import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import ProjectPage from '../views/ProjectPage.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/projects', name: 'Projects', component: Projects},
    {path: '/projects/:slug', name: 'ProjectPage', component: ProjectPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
