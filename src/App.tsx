import {
  QueryClient,
  QueryClientProvider,
  useIsFetching,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { IdeaDisplay } from "./components/MealDisplay";
import { EditMeal } from "./components/EditMeal";
import { MealPage } from "./components/MealPage";
import { NewMealForm } from "./components/NewMeal";
import { Sidebar } from "./components/Sidebar";
import { Spinner } from "./components/Spinner";

function Shell() {
  const isFetching = useIsFetching();
  return (
    <div className="flex flex-row h-full">
      <Sidebar />
      <div className="flex-grow pl-8 pt-8">
        <h1 className="text-5xl pb-8">Meal Ideas</h1>
        <Outlet />
      </div>
      {isFetching ? (
        <div className="absolute top-4 right-4">
          <Spinner />
        </div>
      ) : null}
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Shell />,
    children: [
      {
        path: "/",
        element: <IdeaDisplay />,
      },
      {
        path: "/meal/:id",
        element: <MealPage />,
      },
      {
        path: "/meal/:id/edit",
        element: <EditMeal />,
      },
      {
        path: "/meal/new",
        element: <NewMealForm />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
