import React, {useEffect} from 'react';
import {useStateValue} from '../core/StateProvider';
import {actionTypes} from '../core/reducer';
import { getSearch } from '../core/services';

const Results = ()=>{

const [{search,arrayAxiosContext, textInput},dispatch] = useStateValue(); //llamo las props que necesito utilizar en el componente

useEffect(() => {
  getSearch(search) //le paso a getSearch el parametro de search modificado en el componente Inputs y guardada en reducer
  .then (response => 

    dispatch({
        type: actionTypes.ADD_ARRAY_CONTEXT, //envio la info a mi reducer mediante el actioType ADD_ARRAY_CONTEXT
        arrayAxiosContext:response.data.results,
      })
   ).catch((err)=>{
    dispatch({
        type: actionTypes.ADD_ARRAY_CONTEXT,
        arrayAxiosContext:[],  
  })
})
console.log(search)
}, [search]);//agrego como modificador a search, es decir cada vez que search sufra un cambio se volvera a ejecutar

//UTILIZO LAS PROPS ALOJADAS EN MI REDUCER PARA SER RENDERIZADAS EN ESTE COMPONENTE
return(
    <>

        <div className='inputs'>
            <h2>RESULTADO </h2>
        </div>
        <div className='inputs' >


            <h3 >Total Encontrados {arrayAxiosContext.length}</h3>
            {arrayAxiosContext.map((item, index) => (
                <div key={index}>{item.title || item.name}</div>
            ))
            }
        </div>

        <div className='inputs'>
            <h4>Texto ingresado</h4>

            <h3>{textInput}</h3>
        </div>
    </>
)

}
export default Results;