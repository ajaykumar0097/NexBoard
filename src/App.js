import { BrowserRouter, RouterProvider, Routes } from "react-router-dom";
import { router } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";

const MyContext = createContext();

function App() {
  const [isToggleSideBar, setIsToggleSideBar] = useState(false);
  const [isToggleSideBar1, setIsToggleSideBar1] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  useEffect(() => {
    if(themeMode===true){
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    localStorage.setItem("themeMode", "light");
    }else{
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("themeMode", "dark");
    }

  }, [themeMode]);
  console.log(isToggleSideBar, "isToggleSideBar");

  const values = {
    isToggleSideBar,
    setIsToggleSideBar,
    isToggleSideBar1,
    setIsToggleSideBar1,
    setThemeMode,
    themeMode
  };
  return (
    <MyContext value={values}>
      <RouterProvider router={router} />
    </MyContext>
  );
}

export default App;

export { MyContext };
