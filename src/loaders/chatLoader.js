import { redirect } from 'react-router-dom';
import store from '../redux/store';

export default async function chatLoader() {
    const user = JSON.parse(store.getState().user);
    if (!user.isLoggedIn) {
        throw redirect('/login');
    } else {
        return null;
    }
}