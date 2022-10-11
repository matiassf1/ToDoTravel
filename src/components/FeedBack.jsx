import { useState } from "react";
import { useEffect } from "react";

export const FeedBack = ({message, typeAlert}) => {

    const [alert, setAlert] = useState('');

    useEffect(() => {
        console.log({message, typeAlert});
      handleType();
    }, [])
    

    const handleType = () => {
        switch (typeAlert) {
            case 'Error':
                setAlert('bg-red-400');
                break;
        
            case 'Success':
                setAlert('bg-green-700');

                break;
            default:
                setAlert('bg-slate-700');

            break;
        }
    }

  return (
    <>
      <h3 className={`font-bold text-white w-1/3 ${alert} px-2 py-2 justify-center text-center mx-auto rounded-lg`}>{message}</h3> 
    </>
  )
}
