import React from 'react';
import {useStateValue} from '../core/StateProvider'; //importo StateProvider para trabajar con los states necesario
import {actionTypes} from '../core/reducer'; //importo los actionTypes desde reducer para poder modificar el estado de mis props


const Inputs = ()=>{

const [{textInput},dispatch] = useStateValue(); //llamo la prop que necesito y acompaño del dispatch

console.log(textInput)
function search(event){

    dispatch({
        type: actionTypes.SEARCH, //envio a mi reducer los datos cargado en el input a mi prop search
        search:event,
      })

}

function changeText(event){
  dispatch({
      type: actionTypes.ADD_TEXT, //envio a mi reducer los datos cargado en el input a mi prop textInput
      textInput:event,
    })
  }
return(
<div > 

<div className='inputs'>
  <h2>INGRESO</h2>
</div>
<div className='inputs'>
  <h4>Buscar Pelicula</h4>
  <input type="text" placeholder="Busca la pelicula" id="ingreso" onKeyUp={(e) => {search(e.target.value)}}/>
   
  
</div>

<div className='inputs'>
  <h4>Texto ingresado</h4>
  <input type="text" placeholder="Ingresa Aqui tu texto" id="ingreso" onChange={(e) => {changeText(e.target.value)}}/>

</div>
</div>
)

}
export default Inputs;