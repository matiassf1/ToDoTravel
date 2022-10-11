import { Header } from "./Header"
import { Footer } from "./Footer"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext";
import { Outlet } from "react-router-dom";

export const Layout = ({children}) => {

  const [logged, setLogged] = useState(false);
  const dataContext = useContext(UserContext);

  useEffect(() => {
    console.log('funciono');
    return dataContext?.loggedIn ? setLogged(true) : setLogged(false);
  
  }, [children])
  

    return (
        <>
         <Header />
          <Outlet />
         <Footer />
        </>
      )
}
