import Project from '../pages/project/Project.vue'
import Portal from '../pages/Portal.vue'
import signIn from '../pages/Signin.vue'
const routes = [{
  path: '/',
  component: Portal,
  children: [{
    path: "/signin",
    component: resolve => require(["../pages/Signin"], resolve)
  }]
}];

export default routes;