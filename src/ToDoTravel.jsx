import { useContext } from 'react';
import { Home } from './Home';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import { useFetch } from './hooks';
import { UserProvider } from './context/UserProvider';
import { Login } from './Login';
import { Layout } from './layout/Layout';


export const ToDoTravel = () => {
  const { getFetch, postFetch, data, isLoading, hasError } = useFetch(
    'http://localhost:4000/api/cities'
  );

  const context = useContext(UserContext);

  const handleFetch = async (data) => {
    if (data.ciudadcostera == 'false') {
      data.ciudadcostera = false;
    } else {
      data.ciudadcostera = true;
    }
    await postFetch(data);
  };

  return (
    <UserProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>

        <Route path='/login' element={<Login />} />
      </Routes>
    </UserProvider>
  );
};
