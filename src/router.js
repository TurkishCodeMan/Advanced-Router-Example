import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes=[
    {
        path:"/",
        name:"home",
        component:()=>import ("@/components/TwitterHome"),
        children:[
            {
                path:"home",
                name:"home",
                component:()=>import ("@/components/Main"),
                children:[
                    {
                        path:"",
                        name:"discovery-post",
                        component:()=>import ("@/components/MainComponents/DiscoveryPost"),

                    }
                ]

            }
        ]
        
    }
]

export const router=new VueRouter({
    mode:"history",
    routes
})