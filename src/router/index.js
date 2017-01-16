import Home from '../pages/Home.vue'
const routes = [{
  path: '/',
  component: Home,
  children: [{
    path: 'projects',
    component: resolve => require(["../pages/project/Projects.vue"], resolve)
  },
  {
    path: 'project/:projectId',
    component: resolve => require(["../pages/project/Project.vue"], resolve),
    children: [{
      path: 'overview',
      component: resolve => require(["../pages/project/ProjectDetails.vue"], resolve),
    },
    {
      path: 'build',
      component: resolve => require(["../pages/project/build/Build.vue"], resolve),
      children: [{
        path: ":definitionId",
        component: resolve => require(["../pages/project/build/BuildDetails.vue"], resolve)
      }]
    }
    ]
  }, {
    path: 'products',
    component: resolve => require(["../pages/product/Products.vue"], resolve),
    children: [{
      path: ':productId',
      component: resolve => require(["../pages/product/Product.vue"], resolve),
    }, {
      path: 'p1',
      component: resolve => require(["../pages/product/P1.vue"], resolve),
    },
    {
      path: 'p2',
      component: resolve => require(["../pages/product/P2.vue"], resolve),
    }
    ]
  },
  {
    path: 'product/:productId',
    component: resolve => require(["../pages/product/Product.vue"], resolve),
    children: [{
      path: 'p1',
      component: resolve => require(["../pages/product/P1.vue"], resolve),
    },
    {
      path: 'p2',
      component: resolve => require(["../pages/product/P2.vue"], resolve),
    }
    ]
  }
  ]
}];

export default routes;