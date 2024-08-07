import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { TasksProvider } from './TasksContext';
import Home from './routes/Home';
import Tasks from './routes/Tasks';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <TasksProvider>
        <App />
      </TasksProvider>
    ),
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        index: true,
        element: <Home />,
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
