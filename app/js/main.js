import Vue from "vue"
import App from "./App.vue"
import router from "./router"

Vue.config.productionTip = false
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */
