import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './../pages/home.vue'
// import Index from './../pages/Index.vue'
import Inicio from './../pages/Inicio.vue'
import Saber from './../pages/Saber.vue'
import Promo from './../pages/Promo.vue'
import Pago from './../pages/Pago.vue'
import QR from './../pages/QR.vue'
// import Test from './../pages/Test.vue'

const routes = [
    {
        path: '/',
        redirect: '/inicio'
    },

    {
        path: '/home',
        name: 'home',
        component: Home
    },

    {
        path: '/index',
        name: 'index',
        component: Inicio
    },

    {
        path: '/inicio',
        name: 'inicio',
        component: Inicio,
    },

    {
        path: '/saber',
        name: 'saber',
        component: Saber
    },

    {
        path: '/promo',
        name: 'promo',
        component: Promo
    },

    {
        path: '/pago',
        name: 'pago',
        component: Pago
    },

    // {
    //     path: '/test',
    //     name: 'test',
    //     component: Test
    // },
    {
        path: '/qr',
        name: 'qr',
        component: QR
    }


    // {
    //     path: '/pokemon',
    //     name: 'pokemon',
    //     component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
    //     children: [
    //         { 
    //             path: 'home', 
    //             name: 'pokemon-home',
    //             component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage'),
    //         },
    //         { 
    //             path: 'about', 
    //             name: 'pokemon-about',
    //             component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')
    //         },
    //         { 
    //             path: 'pokemonid/:id',
    //             name: 'pokemon-id',
    //             component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
    //             props: ( route ) => {
    //                 const id = Number( route.params.id );
    //                 return isNaN( id ) ? { id: 1 } : { id }
    //             }
    //         },
    //         {
    //             path: '',
    //             redirect: { name: 'pokemon-about' }
    //         },
    //     ]
    // },
  
    // { 
    //     path: '/:pathMatch(.*)*', 
    //     component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound')
    // },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router