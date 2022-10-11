import React, { useState } from 'react';
import { useForm, useFetch } from '../hooks';
import { Separador } from './Separador';
import { Loading } from './Loading';


// desarrollo pausado hasta aprender y poder implementar correctamente /FORMIK/
// Sera una ventana para permitir agregar al usuario un lugar que desea agregar

// La intencion principal de la aplicacion web sera la de seleccionar sobre lugares
// que ya existen en la base de datos, si no es asi, se dara lugar a este formulario

export const ToDoTravelForm = ({handleFetch, isLoading, hasError}) => {
  const {
    nombre,
    pais,
    continente,
    idioma,
    atractivos,
    onInputChange,
    onResetForm,
    formState,
  } = useForm({
    nombre: '',
    pais: '',
    continente: '',
    idioma: '',
    ciudadcostera: '',
    atractivos: '',
  });

  const [succesfully, setSuccesfully] = useState(false);
  const [error, setError] = useState(false)
  

  const onFormSubmit = async (event) => {
    event.preventDefault();
    await handleFetch(formState);
    if (hasError === null) {
      setSuccesfully(true);
      setError(false);
    }else{
      
      setError(true);
    }
    onResetForm();
    setTimeout(() => {
      setSuccesfully(false);
      setError(false);
    }, 4000);
    return;
  };

  return (
    <>
      {error && <h3 className='font-bold text-gray-50 bg-red-400 w-1/3 text-center mx-auto mb-5 rounded-lg'>{hasError}</h3> }
      {succesfully && <h3 className='font-bold text-gray-50 bg-green-700 w-1/3 text-center mx-auto mb-5 rounded-lg'>City added!</h3>}
      {isLoading && <Loading />}

        <form
        onSubmit={onFormSubmit}
        className='h-max w-full md:w-2/3 lg:w-3/5 sm:w-3/4 flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-4 bg-slate-400 rounded-md mx-auto sm:justify-items-center sm:place-items-center'>
        <div className='ml-4 sm:ml-0 my-4'>
          <label className='font-medium text-white mx-1'>
            A donde quiere ir?
          </label>
          <Separador />
          <input
            className='rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 mx-1 pl-4'
            type='text'
            name='nombre'
            value={nombre}
            onChange={onInputChange}
            placeholder='Ingrese la ciudad'
          />
        </div>

        <div className='ml-4 sm:ml-6 md:ml-10 lg:ml-16 my-4'>
          <label className='font-medium text-white mx-1'>
            De que pais es la ciudad?
          </label>
          <Separador />
          <input
            className='rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 mx-1 pl-4'
            type='text'
            value={pais}
            name='pais'
            onChange={onInputChange}
            placeholder='Ingrese el pais'
          />
        </div>

        <div className='ml-4 sm:ml-0 my-4'>
          <label className='font-medium text-white mx-1'>
            A que continente pertenece?
          </label>
          <Separador />
          <input
            className='rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 mx-1 pl-4'
            type='text'
            value={continente}
            name='continente'
            onChange={onInputChange}
            placeholder='Ingrese el continente'
          />
        </div>

        <div className='ml-4 sm:ml-6 md:ml-10 lg:ml-16 my-4'>
          <label className='font-medium text-white mx-1'>
            Que idioma hablan alli?
          </label>
          <Separador />
          <input
            className='rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 mx-1 pl-4'
            type='text'
            value={idioma}
            name='idioma'
            onChange={onInputChange}
            placeholder='Ingresa el/los idiomas'
          />
        </div>

        <div className='sm:row-start-3 sm:col-span-2 sm:ml-0 ml-4 my-4'>
          <label className='font-medium text-white mx-1'>
            Es una ciudad costera?
          </label>
          <select
            onChange={onInputChange}
            name='ciudadcostera'
            className='rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 mx-1 pl-2'>
            <option disabled={true} selected>
              Select one
            </option>
            <option value={true}>Si, si tiene playa</option>
            <option value={false}>No, no tiene playa</option>
          </select>
        </div>

        <div className='sm:row-start-4 sm:col-span-2 ml-4 sm:ml-0 my-4'>
          <label className='font-medium text-white'>Atractivos:</label>
          <Separador />
          <textarea
            className='rounded-md shadow-sm mx-1 mt-2 mb-3 w-2/3 sm:w-full h-10'
            name='atractivos'
            value={atractivos}
            onChange={onInputChange}
            rows='2'></textarea>
        </div>

        <input
          className='bg-lime-800 w-2/4 mx-auto rounded-lg text-white font-semibold col-span-2 mb-5'
          type='submit'
          value='Guardar!'
        />
      </form>
    </>
  );
};
