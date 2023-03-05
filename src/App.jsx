
import {useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes' //LO IMPORTO EL ARHIVO

function App() {

  const [pacientes,setPacientes] = useState([]); //DEFINO UN ARRAY DE PACIENTES Y UNA FUNCION PARA PONERLE DATOS
  const [paciente,setPaciente] = useState({}) //SE LLENA RECIEN CUANDO LE DAMOS A ACTUALIZAR

  ////////////////////////////////


  useEffect(()=>{ //cUANDO CARGUE EL COMPONENTE, REVISARA  SI HAY ALGO EN EL LOCAL STORAGE, DE LO CONTRARIO LO SETEARA COMO VACIO A LOS PACIENTES
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; // CONVIERTO EL STRING DE PACIENTES A ARREGLO Y SI NO HAY NADA EN EL STORAGE, QUE ME PONGA UN ARREGLO VACIO
    if(pacientesLS.length>0){
      setPacientes(pacientesLS) //SETEO LOS PACIENTES DEL LOCALSTORAGE
    }

  },[])


  ////////////////

  
  useEffect(()=>{  // CADA VEZ QUE HAYUA UN CAMBIO EN PACIENTES, VAMOS A GUARDAR DENTRO DE LOCALSTORAGE LOS CAMBIOS
  
    localStorage.setItem('pacientes',JSON.stringify( pacientes ))//CONVERTIMOS EL ARREGLO DE PACIENTES A STRING YA QUE EN LOCAL STORAGE SOLO SE PUEDEN GUARDAR STRINGS

  },[pacientes])




  const eliminarPaciente = (id)=>{

    const pacientesActualizados = pacientes.filter(paciente=>paciente.id!=id) //BUSCO LOS PACIENTES QUE TENGAN ID DIFERENTE A LA QUE ESTAMOS BUSCANDO, YA QUE ME ARROJARA SOLO LOS OBJETOS QUE NO TENGAN ESA ID

    setPacientes(pacientesActualizados) //ACTUALIZAMOS LOS PACIENTES
    
  }
  

  
  return (
    <>
      <Header/>
      <div className="flex flex-col justify-center items-center md:items-center lg:flex-row lg:items-start ">
          <Formulario

             pacientes={pacientes} //le paso el array vacio a FORM.JSX
              setPacientes={setPacientes} //le paso la funcion A FORM.JSX
              paciente={paciente}
              setPaciente={setPaciente}
          />
          
          <ListadoPacientes
            pacientes ={pacientes}
            setPaciente = {setPaciente}
            eliminarPaciente={eliminarPaciente}

          />   {/*IMPORTO EL ARCHIVO LISTADO PACIENTES*/ }
          
       </div>
    </>
  )
}


export default App
