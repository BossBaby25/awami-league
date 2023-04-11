
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Info from './Info/Info';
import Main from './layouts/Main';
import Location from './Location/Location';
import Organization from './Organization/Organization';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: (params) => fetch(`https://awami-league-server.vercel.app/organizations/${params.unitId}`),
          element: <Location></Location>,
        },
        {
          path: 'about',
          element: <About></About>,
        },
        {
          path: 'search',
          element: <Organization></Organization>,
        },
        {
          path:'info',
          element:<Info></Info>,
        }

      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
