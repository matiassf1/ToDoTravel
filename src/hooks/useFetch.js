import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    hasError: null,
  });


  const postFetch = async(obj) => {
    setState({
      ...state,
      isLoading: true,
    });
      const settings = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    };
    try {                                  //De momento no necesito variables env.
        const fetchResponse = await fetch(url, settings);
        const data = await fetchResponse.json();
        if (data.message === 'Bad Request. Please fill all field.') {
         return setState({
            ...state,
            hasError: data.message,
          })
        }
        setState({
          data,
          isLoading: false,
          hasError: null,
        });
    } catch (e) {
        setState({
        data: null,
        isLoading: false,
        hasError: e,
      });
    }    
  }


  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  // useEffect(() => {
  //   getFetch();
  // }, [url]);

  return {
    postFetch,
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
