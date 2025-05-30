import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import DashboardPage from "@/app/dashboard";
import NotFound from "@/app/not-found";
import HomePage from "@/app/index";
import DashboardLayout from "@/app/dashboard/_layout";

// eslint-disable-next-line react-refresh/only-export-components
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <div>Login Page</div>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
