import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import ProtectedRoute from './components/ProtectedRoute';
import SignIn from './pages/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
