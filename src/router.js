import { createWebHistory, createRouter } from "vue-router"; //경로가 아니라 라이브러리를 import로 함 createRouter는 라우터 생성을 위함

import Intro from './components/Intro.vue'
import List from './components/List.vue';
import Detail from './components/Detail.vue';
import Comment from './components/Comment.vue';


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
        path: "/detail/:id", // Angular처럼 /:로도 표현 됨 밑은 파라매터를 바디에 넣어 전달하는 방식이고
        component: Detail,
        //물론 :식별자에 정규식을 추가하여 식별자에 들어가는 유효성체크를 시킬수가있음
        //정규식 적용은 vue-router4 자료를 기준으로 참고
        children: [
            { // nested routes를 만드는 법 routes path안에 새로운 children으로 내부 path설정
                path: "comment", // 맨앞'/'는 루트(홈)부터 의미 여기서는 빼준다, 상대경로로 작성
                component: Comment,
                //Detail 내부에 router-view를 둬서 보여줄 장소도 물론 마련해야함
            },
            {
                path: "author",
                component: Comment, //컴포넌트 봐야함
            },
        ]
    },
    // {
    //     path: "/detail", //
    //     component: Detail,
    //     name: 'detail',
    //     props: true // param으로 전달한 데이터를 props로 받게함
    // },
    // {
    //     path: "/:anythig(.*)", 이런식으로 파라미터 문법과 정규식을 이용하면 에러페이지 적용도 가능
    //     component: 404Error,  라우터 적용은 위에서부터 적용되므로 에러페이지를 하단에 두면 됨
    // },
];

const router = createRouter({   //vue-router4는 creatRouter안에 설정을 집어넣는다
    history: createWebHistory(),
    routes, //
});

export default router;

// 위 사항은 vue-router를 만든 사람이 제작한 템플릿 법칙이니 이해보다는 구조를 그냥 저렇구나 하고 알고가믄 됨

/* 5/1 : Nested routes : 컴포넌트 페이지 단위를 세부적으로 나눌때
        >> detail/id/comments 라던가
        (물론 모달창이나 컴포넌트를 동일 화면에 보여주기도 동일효과 but URL를 나눌경우 사용)
        (URL을 나누면 자원식별 용이 및 기록추적도 가능(뒤로가기등도 가능))

        $route(URL관련 정보) >> .params.식별파라미터(파라미터값), .fullPath(전체경로)
        $router(페이지 이동 관련) >> push('상대경로') 페이지 이동, go(n) n앞으로 가기 -n은 뒤로가기 방문 히스토리 조작

        named views >> 여러개의 컴포넌트를 한번에 보여줄때
                    >> 위 path의 컴포넌트 파트를 {}로 다시 오브젝트화 시켜서 각각의 키에 넣으면 된다
                    >> router-view를 여러개 만들고 컴포넌트 변수명으로 router-view name=""을 설정

                    이런 자료들은 vue공식 문서 참조 (강의공부 +알파 정도로 하기에 좋은 꽤 보기 편한 문서다)

        redirect: {name: ''} or redirect: '경로' 를 위 라우터 path 다음에 둠으로서
                 >> redirection 기능 가능 (어떤 페이지 접속시 다른 페이지로 강제로 안내함)

                 암튼 필요하면 그때그때 찾아보기

*/