import { useContext, useEffect } from 'react';
import { ToDoTravelForm } from "./components/ToDoTravelForm";
import { ToDoTravelList } from "./components/ToDoTravelList";
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import { NavBar } from './components/NavBar';

export const Home = () => {

    const {user, loggedIn} = useContext(UserContext);

    const navigateTo = useNavigate();

    useEffect(() => {
      loggedIn ? console.log('Estas logeado :D') : navigateTo('/login')
    }, [Home])
    

  return (
    <>
      <NavBar />
      <h3 className='font-medium text-white mb-5 text-center'>
        No tengas miedo a empezar una nueva aventura!
      </h3>

      {/* 
      Esto se habilitara/redireccionara al no encontrar el destino buscado
       <ToDoTravelForm
        handleFetch={handleFetch}
        isLoading={isLoading}
        hasError={hasError}
      /> */}

      <h2 className='font-bold text-gray-50 text-center mt-12'>
        Ya agregaste tu destino? Los encontraras aqui abajo
      </h2>
      <ToDoTravelList />
    </>
  );
};
