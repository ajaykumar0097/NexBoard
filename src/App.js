import { BrowserRouter, RouterProvider, Routes } from "react-router-dom";
import { router } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";

const MyContext = createContext();

function App() {
  const [isToggleSideBar, setIsToggleSideBar] = useState(false);
  console.log(isToggleSideBar, "isToggleSideBar");

  const values = { isToggleSideBar, setIsToggleSideBar };
  return (
    <MyContext value={values}>
      <RouterProvider router={router} />
    </MyContext>
  );
}

export default App;

export { MyContext };
