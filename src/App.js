
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Main from './layouts/Main';
import Location from './Location/Location';
import Organization from './Organization/Organization';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Location></Location>,
        },
        {
          path:'about',
          element:<About></About>,
        },
        {
          path:'organization',
          element:<Organization></Organization>,
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
