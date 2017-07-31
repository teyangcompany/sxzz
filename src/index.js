import Vue from "vue";
import VueRouter from "vue-router";
import store from "./vuex/store.js";
import App from "./js/App.vue";
import Login from "./js/components/Login.vue";
import Register from "./js/components/Register.vue";
import Password from "./js/components/Password.vue";
import PwdStep1Cmp from "./js/components/PwdStep1Cmp.vue";
import PwdStep2Cmp from "./js/components/PwdStep2Cmp.vue";
import PwdStep3Cmp from "./js/components/PwdStep3Cmp.vue";
import MainCmp from "./js/components/MainCmp.vue";
import Home from "./js/components/rwzx/Home.vue";
import VideoConsultation from "./js/components/jczz/VideoConsultation.vue";
import RemoteConsultation from "./js/components/zyzz/RemoteConsultation.vue";
import PictureConsulting from "./js/components/mzzz/PictureConsulting.vue";//图文咨询首页
import SetUp from "./js/components/setting/SetUp.vue";
import SetUpInfo from "./js/components/setting/SetUpMyInfo.vue";
import SetUpChangePwd from "./js/components/setting/SetUpChangePwd.vue";
import SetUpBindPhone from "./js/components/setting/SetUpBindPhone.vue";
import SetUpMyAvatar from "./js/components/setting/SetUpMyAvatar.vue";
import TransferCount from "./js/components/zztj/transferCount.vue";
import Arrange from "./js/components/rjss/arrange.vue";
import NewsTransfer from "./js/components/rjss/newsTransfer.vue";
import NewsWork from "./js/components/mzzz/NewsWork.vue";
import CommonBox from "./js/components/common/CommonBox.vue";
import JczzConsultation from "./js/components/jczz/JczzConsultation.vue";
import RemoteWork from "./js/components/zyzz/RemoteWork.vue";
/*引入样式文件*/
import "element-ui/lib/theme-default/index.css";//element-ui 样式文件
import "./style/app.scss";
Vue.use(VueRouter);
const router =new VueRouter({
    routes: [
        { path: "/login", component: Login },//登录页路由
        { path: "/register", component: Register },//注册页路由
        {//修改密码页路由
            path: "/password",
            component: Password,
            children: [
                { path: "", component: PwdStep1Cmp },
                { path: "step2", component: PwdStep2Cmp },
                { path: "step3", component: PwdStep3Cmp }
            ]
        },
        {//主界面路由
            path: "/main",
            component: MainCmp,
            children: [
                { path: "", component: Home },
                /*检查转诊首页*/
                { path: "videoConsultation/jczz", component:JczzConsultation},
                /*远程会诊*/
                { path: "remoteConsultation", component: RemoteConsultation },
                /*名医视频*/
                { path: "videoConsultation", component: VideoConsultation },
                {//转诊统计路由
                  path:"transferCount",component:TransferCount
                },
                {//日间手术转诊路
                  path:"arrange",component:Arrange,
                },{
                // 住院转诊路由
                    path:"remoteConsultation/remoteWork" ,component:RemoteWork
                },
                {
                    path:"arrange/newsTransfer",component:NewsTransfer
                 },
                {//公共问诊单
                    path:"commonBox",component:CommonBox
                },
                /*qkfz*/
                { path: "pictureConsulting", component: PictureConsulting },
                { path: "pictureConsulting/newswork", component: NewsWork },
            ]
        },
        {//设置页路由
            path: "/setUp",
            component: SetUp,
            children: [
                { path: "", component: SetUpInfo },
                { path: "changePwd", component: SetUpChangePwd },
                { path: "bindPhone", component: SetUpBindPhone },//绑定手机
                { path: "myAvatar", component: SetUpMyAvatar },//绑定手机
            ]
        }
    ]
});
new Vue({
    el: "#app" ,
    router,
    store,
    template: "<App/>",
    mounted: function () {
        let _this = this;
        window.onresize=function(){
            let clientH = document.documentElement.clientHeight || document.body.clientHeight;
            _this.$store.dispatch("getClientH", clientH - 1);
        }
    },
    components: {
        App,
        Home,
        Register,
        Password,
        PwdStep1Cmp,
        PwdStep2Cmp,
        PwdStep3Cmp,
        VideoConsultation,
        MainCmp,
        RemoteConsultation,
        PictureConsulting,
        SetUp,
        SetUpInfo,
        SetUpChangePwd,
        SetUpBindPhone,
        SetUpMyAvatar,
        TransferCount,
        NewsTransfer,
        NewsWork,
        CommonBox,
        JczzConsultation,
        RemoteWork
    }
});