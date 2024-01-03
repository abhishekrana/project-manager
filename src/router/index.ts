// Composables
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/",
        name: "Dashboard",
        // route level code-splitting
        // this generates a separate chunk (Dashboard-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Dashboard.vue")
      },
      {
        path: "/projects",
        name: "Projects",
        component: () => import("@/views/Projects.vue")
      },
      {
        path: "/team",
        name: "Team",
        component: () => import("@/views/Team.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
