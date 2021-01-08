import Link from "./krouter-link.js";
import View from "./krouter-view.js";
let Vue;
class VueRouter {
  constructor(options) {
    this.$options = options;
    // this.current = this.$options.routes.slice(1).path || "/";
    // 响应式current
    // vue响应式绑定，current变化时候
    // 依赖的组件render
    Vue.util.defineReactive(this, "current", "/");
    // 路由map
    this.routeMap = {};
    this.$options.routes.forEach((route) => {
      this.routeMap[route.path] = route;
    });
    window.addEventListener("hashchange", onHashChange.bind(this));
    window.addEventListener("load", onHashChange.bind(this));
  }
}
const onHashChange = function() {
  console.log(window.location.hash);
  this.current = window.location.hash.slice(1);
};
// 插件：实现install方法，挂载$router
VueRouter.install = function(_Vue) {
  Vue = _Vue;
  // 挂载$router
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    },
  });
  // router-link 和 router-view
  // Vue.component挂载全局组件
  Vue.component("router-link", Link);
  Vue.component("router-view", View);
};

export default VueRouter;
