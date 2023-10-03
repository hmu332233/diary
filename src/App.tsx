import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';

let router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />, // TODO: Layout으로 변경
    children: [
      {
        index: true,
        Component: Main,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
