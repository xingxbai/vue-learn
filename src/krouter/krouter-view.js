export default {
  render(h) {
    const { routeMap, current } = this.$router;
    const component = routeMap[current].component || null;
    return h(routeMap[current].component);
  },
};
