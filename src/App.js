import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from './layouts/layout/Layout';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />} path='/'>

    </Route>
  ))

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
