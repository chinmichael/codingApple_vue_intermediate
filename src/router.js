import { createWebHistory, createRouter } from "vue-router"; //경로가 아니라 라이브러리를 import로 함 createRouter는 라우터 생성을 위함

import Intro from './components/Intro.vue'
import List from './components/List.vue';
import Detail from './components/Detail.vue';


//라우팅 경로 변수는 Array Object임
const routes = [
    {
        path: "/", //제일 처음에 보여줘야하니까
        component: Intro,
    },
    {
        path: "/list", //url에 들어가는 /경로
        component: List, //띄어야하는 컴포넌트 (import해와야함)
    },
    {
        path: "/detail", //
        component: Detail,
        name: 'detail',
        props: true // param으로 전달한 데이터를 props로 받게함
    }
];

const router = createRouter({   //vue-router4는 creatRouter안에 설정을 집어넣는다
    history: createWebHistory(),
    routes, //
});

export default router;

// 위 사항은 vue-router를 만든 사람이 제작한 템플릿 법칙이니 이해보다는 구조를 그냥 저렇구나 하고 알고가믄 됨