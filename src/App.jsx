
import React from 'react'
import { useState } from "react";

function App() {

  
  const [InputState, setInputState] = useState({
    num1:"",
    num2:"",
  })
  const [operacion,setoperacion]=useState("") //crea el historial mandando a llamar las operaciones 
  const[result,setresult]=useState(0)
  const initialState= JSON.parse(localStorage.getItem("Operaciones"))||[];
  const [lista,setlista]=useState(initialState)
  

  const handleInputChange = (event) => {
    setInputState({
      ...InputState,
      [event.target.name]: event.target.value,
    });
  };

  const handleLimpiar=()=>{ //sirve para borrar el cual al borrar lo lleva al historial
    const listaOpe={num1:InputState.num1,ope:operacion,num2:InputState.num2,res:result}
    const nuevoArreglo = [...lista, listaOpe]
    setlista([...nuevoArreglo]);
    localStorage.setItem("Operaciones", JSON.stringify(nuevoArreglo));
    setInputState({
      num1:"",
      num2:"",
    })
    setoperacion("")
    setresult("")
  }

  const handleSumar=()=>{ //crea todas las operaciones ya sea suma, resta, multiplicacion y division
    setresult(Number(InputState.num1)+Number(InputState.num2))
    setoperacion('+')
  }

  const handleRestar=()=>{
    setresult(Number(InputState.num1)-Number(InputState.num2))
    setoperacion('-')
  }
  const handleMultiplicar=()=>{
    setresult(Number(InputState.num1)*Number(InputState.num2))
    setoperacion('*')
  }
  const handleDividir=()=>{
    setresult(Number(InputState.num1)/Number(InputState.num2))
    setoperacion('/')
  }

  const handleBorrarTodo=()=>{ //nos ayuda a borrar todo lo que esta almacenado en el historial
    setlista([])
    localStorage.setItem("Operaciones", JSON.stringify([]));
  }

 //estan dentro todo lo que son los botones y labels dentro de la pag.
  return (
    <>
        <input id='conte' type="text" Value={result}/>

      <div className='App Container'>
        <div className='row'>
        
          <div className='col'>
            <h3>Ingresa los numeros y la operación</h3>
            <input
            name="num1"
            type="text"
            id="num1" 
            onChange={handleInputChange}
            value={InputState.num1}
            />
            <input
            name="num2"
            type="text"
            id="num2"
            onChange={handleInputChange}
            value={InputState.num2}
            />
                  <button className="btn btn-primary" type="button" onClick={handleSumar}>Sumar</button>
                  <button className="btn btn-primary" type="button" onClick={handleRestar}>Restar</button>
                    <button className="btn btn-primary" type="button" onClick={handleDividir}>Dividir</button>
                  <button className="btn btn-primary" type="button" onClick={handleMultiplicar}>Multiplicar</button>
                  <button id='btnlim' className="btn btn-primary" type="button" onClick={handleLimpiar}>Limpiar</button>
            
          </div>

        </div>
        <div className='row'>
            <h3>Historial</h3>
            <div id='global'>
              <div >
              {
            lista.length===0 &&
            "Historial vacio"
          }
          {
            lista.length !== 0 && (
              <ol>
                {lista.map((item, index)=>{
                  return(
                    <li key={index}>
                      {item.num1}{item.ope}{item.num2}={item.res}&nbsp;&nbsp;&nbsp;
                      <br />
                    </li>
                  )
                })}
              </ol>
            )
          }
              </div>
            </div>

            <button id='btnbor' className="btn btn-primary" type="button" onClick={handleBorrarTodo}>Borrar Historial</button>
        </div>
        

      </div>

    
    </>
  )
}

export default App