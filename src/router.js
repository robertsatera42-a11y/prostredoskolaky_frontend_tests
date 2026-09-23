import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import { getAuth } from "firebase/auth";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    // { path: '*', redirect: '/dashboard' },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    // {
    //   path: '/form',
    //   name: 'form',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/FormPage.vue'),
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    {
      path: "/databaze",
      name: "database-page",
      component: () => import("./views/DatabasePage.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/soutez",
      name: "competition-page",
      component: () => import("./views/CompetitionPage.vue"),
    },
    {
      path: '/vysokoskolak-roku-2027',
      name: 'university-award-2027-page',
      component: () => import('./views/VysokoskolakRoku2027Page.vue')
    },
    {
      path: "/finaliste",
      name: "finalists-page",
      component: () => import("./views/FinalistsPage.vue"),
    },
    {
      path: "/o-nas",
      name: "about-us-page",
      component: () => import("./views/AboutUsPage.vue"),
    },
    {
      path: "/amigo",
      name: "amigo-page",
      component: () => import("./views/AmigoPage.vue"),
    },
    {
      path: "/ivp",
      name: "ivp-page",
      component: () => import("./views/IvpPage.vue"),
    },

    {
      path: "/login",
      name: "login-page",
      component: () => import("./views/login/LoginPage.vue"),
    },
    {
      path: "/renew-password",
      name: "renew-password-page",
      component: () => import("./views/login/RenewPasswordPage.vue"),
    },
    {
      path: "/change-password",
      name: "change-password-page",
      component: () => import("./views/login/ChangePasswordPage.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/profil",
      name: "profile-page",
      component: () => import("./views/login/ProfilePage.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/delete-account",
      name: "delete-account-page",
      component: () => import("./views/login/DeleteAccountPage.vue"),
      meta: {
        requiresAuth: true,
      },
    },

    // Admin area
    {
      path: "/users",
      name: "users-page",
      component: () => import("./views/admin/UsersPage.vue"),
      meta: {
        requiresAuth: true,
        requiredRoles: ["manager", "admin"],
      },
    },
    {
      path: "/events",
      name: "events-page",
      component: () => import("./views/admin/EventsPage.vue"),
      meta: {
        requiresAuth: true,
        requiredRoles: ["manager", "admin"],
      },
    },
    {
      path: "/competition",
      name: "competition-users-page",
      component: () => import("./views/admin/CompetitionUsersPage.vue"),
      meta: {
        requiresAuth: true,
        requiredRoles: ["manager", "admin"],
      },
    },
    {
      path: "/najdi_posledni",
      name: "loc",
      component: () => import("./views/Loc.vue"),
    },

    // special page for Amos Vision
    {
      path: "/abffd7",
      name: "database-page",
      component: () => import("./views/DatabasePage.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  try {
    const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
    const arr = to.matched.find((x) => x.meta.requiredRoles);
    const requiredRoles = arr && arr.meta && arr.meta.requiredRoles;
    const auth = getAuth();
    const currentUser = auth.currentUser;
    // TODO predelat
    if (requiresAuth && !currentUser) {
      if (to.name === "database-page") {
        next("/login?redirect=databaze");
        // } else if (to.name === 'form') {
        //   next('/login?redirect=soutez')
      } else if (to.name === "users-page") {
        next("/login?redirect=users");
      }
    } else if (requiresAuth && currentUser) {
      const { claims } = await currentUser.getIdTokenResult();

      if (
        to.name === "users-page" &&
        requiredRoles &&
        !requiredRoles.includes(claims.role)
      ) {
        next("/login?redirect=users");
      } else if (
        to.name === "events-page" &&
        requiredRoles &&
        !requiredRoles.includes(claims.role)
      ) {
        next("/login?redirect=users");
      } else {
        next();
      }
    } else if (!requiresAuth) {
      next();
    }
  } catch (err) {
    console.log(err);
  }
});

export default router;
