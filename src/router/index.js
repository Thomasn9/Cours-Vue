// Ici on va créer une instance de router et config des routes
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
// ====================================================\\HOME//=====================================================
        {
            path: '/',
            alias: '/home',
            name: 'home',
            component: () => import('../pages/Home.vue')
        },
// ====================================================\\EXO//=====================================================
        {
            path: '/exo',
            alias: '/exo',
            name: 'exo',
            component: () => import('../pages/exo/exo1.vue')
        },
        {
            path: '/exo2',
            alias: '/exo2',
            name: 'exo2',
            component: () => import('../pages/exo/exo2.vue')
        },
// ====================================================\\LESSONS//=====================================================
        {
            path: '/lesson1',
            name: '/lesson1',
            component: () => import('../pages/lessons/text-interpolation.vue')
        },
        {
            path: '/lesson2',
            name: '/lesson2',
            component: () => import('../pages/lessons/attribute-binding.vue')
        },
        {
            path: '/lesson3',
            name: '/lesson3',
            component: () => import('../pages/lessons/event-binding.vue')
        },
// ====================================================\\TP/=====================================================
        {
            path: '/tp',
            name: 'tp',
            component: () => import('../pages/TP/tp1.vue')
        },
// ====================================================\\ABOUT//=====================================================
        {
            path: '/about',
            name: 'about',
            component: () => import('../pages/About.vue')
        }
    ]
});

export default router;