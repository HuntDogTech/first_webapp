/**
 * Created by JonDai on 2016/7/8.
 */
'use strict'

export default (router)=>{
    router.map({
        // '*': {
        //     component: require('./views/test/TestHome.vue')
        // },
        '/home': {
            name: 'home',
            component: require('./views/test/TestHome.vue')
        },
        '/about': {
            name: 'about',
            component:require('./views/test/TestAbout.vue')
        }
    })
}

