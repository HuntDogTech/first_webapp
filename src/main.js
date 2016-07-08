import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import RouterMap from './routers'

Vue.use(VueRouter);

// 注册路由器
let router = new VueRouter({
    hashbang: false,
    history: false,
    saveScrollPosition: true,
    // transitionOnLoad: true
});
RouterMap(router);
router.start(App, 'app');

//暴漏路由调试接口
window.router = router;
