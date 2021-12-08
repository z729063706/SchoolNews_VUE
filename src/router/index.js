import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Admin from '../components/admin/admin'
import Index from '../components/index/index'
import IndexIndex from '../components/index/indexIndex'
import indexSearch from '../components/index/search'
import ReadNews from '../components/readNew'
import Publish from '../components/admin/publish'
import Manage from '../components/admin/manage'
import UserManage from '../components/admin/userManage'
import Edit from '../components/admin/edit'
import store from '../store/index'
import global from '../global.js'
const router = new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            name: 'Index',
            component: Index,
            children: [{
                    path: '',
                    component: IndexIndex
                },
                {
                    path: 'search',
                    component: indexSearch
                }
            ]
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/readNews/:id/',
            name: 'readNews',
            component: ReadNews
        }, {
            path: '/Admin',
            name: 'Admin',
            component: Admin,
            children: [{
                    path: '',
                    component: Manage,

                }, {
                    path: 'publish',
                    component: Publish,

                }, {
                    path: 'manage',
                    component: Manage
                }, 
                {
                    path: 'edit/:id/',
                    component: Edit,
                },
                {
                    path: 'userMange',
                    component: UserManage,
                }

            ],
            beforeEnter: (to, from, next) => {
                if (global.user.uname == null) {
                    // console.log(global.user);
                    window.alert("请先登录哦~~");
                    router.push("/")
                    next(false)
                } else {
                    next()
                }
            }
        }


    ]
})
router.afterEach(() => {
    window.scrollTo(0, 0)
})
Vue.directive({
    inserted: function(el,binding){
        document.title = el.dataset.title
    }
})


export default router