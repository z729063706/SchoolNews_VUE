import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Admin from '../components/admin/admin'
import Index from '../components/index/index'
import IndexIndex from '../components/index/indexIndex'
import ReadNews from '../components/readNew'
import Teacher from '../components/teachers'
import Publish from '../components/admin/publish'
import Manage from '../components/admin/manage'
import UserManage from '../components/admin/userManage'
import TeacherManage from '../components/admin/teacher'
import MainpicManage from '../components/admin/mainpic'
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
        }, 
        {
            path: '/teachers/:id/',
            name: 'teachers',
            component: Teacher
        },
        {
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
                    path: 'userMange',
                    component: UserManage,
                },
                {
                    path: 'teacher',
                    component: TeacherManage,
                },
                {
                    path: 'mainpic',
                    component: MainpicManage,
                }

            ],
            beforeEnter: (to, from, next) => {
                let u ={
                    uname:JSON.parse(localStorage.getItem('user')).uname,
                    upass:JSON.parse(localStorage.getItem('user')).upass,
                    uid:JSON.parse(localStorage.getItem('user')).uid,
                    name:JSON.parse(localStorage.getItem('user')).name,
                    regtime:JSON.parse(localStorage.getItem('user')).regtime,
                    utype:JSON.parse(localStorage.getItem('user')).utype
                  }
                global.setUser(u);
                if (global.user.uname == null) {
                    // console.log(global.user);
                    window.alert("请先登录哦~~");
                    router.push("/")
                    next(false)
                } else {
                    if(global.user.utype==1){
                        window.alert("权限不足,请联系教师进行修改");
                        router.push("/")
                        next(false)
                    }
                    else{
                        //console.log(global.user.utype);
                         next()
                    }
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