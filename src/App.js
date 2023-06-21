// import './App.css';
import { HomePage } from './containers';
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements
} from 'react-router-dom';


const router = createBrowserRouter(createRoutesFromElements(
    <Route index element={<HomePage />} />
))


function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
