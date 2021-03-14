import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        children: [
            {
                path: "",
                name: "home",
                component: () => import("@/components/Main"),
                children:[
                    {
                        path:"admin",
                        name:"admin",
                        component:()=>import("@/components/Admin"),
                        meta:{layout:"adminLayout"}
                    }
                ]

            }
        ]

    },
  
]

export const router = new VueRouter({
    mode: "history",
    routes
})