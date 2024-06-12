import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/employee-list", element: <EmployeeList /> },
        { path: "/add-employee", element: <AddEmployee /> }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
