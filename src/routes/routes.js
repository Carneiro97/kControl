import Login from '../pages/Login';
import Home from '../pages/Home';

export const routes = [
    {
        id: 1,
        url: '/login',
        component: Login,
        isPrivate: false
    },
    {
        id: 1,
        url: '/home',
        component: Home,
        isPrivate: true
    }
]