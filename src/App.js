import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from './layouts/layout/Layout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import LoginPage from './pages/LoginPage/LoginPage'
import ChatPage from './pages/ChatPage/ChatPage'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />} path='/'>
      <Route element={<WelcomePage />} path='' />
      <Route element={<LoginPage />} path='login' />
      <Route element={<ChatPage />} path='chat' />
    </Route>
  ))

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
