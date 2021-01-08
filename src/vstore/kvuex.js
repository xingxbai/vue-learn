let Vue;
class Store {
  constructor(options) {
    this.$vm = new Vue({
      data: {
        $$state: options.state,
      },
      computed: {
        // options.getters.forEach()
      },
    });
    // 添加mutations
    this._mutations = options.mutations || {};
    this._actions = options.actions || {};
    this._getters = options.getters || {};

    this.commit = this.commit.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }
  //
  commit(type, payload) {
    const entry = this._mutations[type];
    if (!entry) {
      console.error(`unknown mutation type: ${type}`);
    }
    entry(this.state, payload);
  }
  dispatch(type, payload) {
    const entry = this._actions[type];
    if (!entry) {
      console.error(`unknown mutation type: ${type}`);
    }
    return entry(this, payload);
  }
  get state() {
    return this.$vm.$data.$$state;
  }
  set state(v) {
    console.error("please use replaceState to reset state");
  }
  get getters() {
    for (let key in this._getters) {
      console.log(this._getters[key]);
    }
    // console.log(this._getters.doubleCounter(this.state));
    return this._getters.doubleCounter(this.state);
  }
}
const install = function(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
};

export default {
  Store,
  install,
};
