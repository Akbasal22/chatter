import { redirect } from 'react-router-dom';
import store from '../redux/store'

export default function loginLoader() {
    const user = store.getState().user;
    if (user.isLoggedIn) {
        throw redirect('/chat')
    } else {
        return null;
    }
}