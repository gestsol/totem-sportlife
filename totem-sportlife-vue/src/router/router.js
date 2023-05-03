import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './../pages/home.vue'
import Inicio from './../pages/Inicio.vue'
import Promo from './../pages/Promo.vue'
import QR from './../layouts/LayoutQR.vue'
import Compra from './../pages/Compra.vue'
import Contacto from './../pages/Contacto.vue'

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
        path: '/inicio',
        name: 'inicio',
        component: Inicio,
    },

    {
        path: '/promo',
        name: 'promo',
        component: Promo
    },

    {
        path: '/qr',
        component: QR,
        children: [
            {
                path: 'compra/:mes',
                name: 'compra',
                component: Compra,
                props: (route) => {
                    const mes = Number(route.params.mes)
                    return isNaN(mes) ? { mes: 1 } : { mes }
                }
            },
            {
                path: 'contacto',
                name: 'contacto',
                component: Contacto
            }
        ]
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router