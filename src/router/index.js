import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/projects",
    name: "projects",
    // route level code-splitting
    // this generates a separate chunk (projects.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Projects.vue")
  },
  {
    path: "/blog",
    name: "blog",
    component: () =>
      import("../views/Blogs.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import("../views/Contact.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/About.vue")
  },
  {
    path: "/projects/:projectSlug",
    name: "project-details",
    component: () =>
      import("../views/ProjectDetails.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
