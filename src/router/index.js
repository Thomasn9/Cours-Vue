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
            path: '/lessons',
            name: 'lessons',
            component: () => import('../pages/lessons/lesson1.vue')
        },
// ====================================================\\LESSONS//=====================================================
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