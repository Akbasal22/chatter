import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from './layouts/layout/Layout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import LoginPage from './pages/LoginPage/LoginPage'
import ChatPage from './pages/ChatPage/ChatPage'
import loginLoader from './loaders/loginLoader';
import chatLoader from './loaders/chatLoader';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />} path='/'>
      <Route element={<WelcomePage />} path='' />
      <Route element={<LoginPage />} path='login' loader={loginLoader} />
      <Route element={<ChatPage />} path='chat' loader={async () => await chatLoader()} />
    </Route>
  ), { basename: "/chatter-gitpages" });

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
