
import Paciente from './Paciente' //Importo el componente paciente

function ListadoPacientes(props){
const {setPaciente} = props;
const{pacientes} = props;
const{eliminarPaciente} = props;


    return(
     
        <div className="mx-8 sm:w-full md:w-1/2 lg:h-screen lg:overflow-y-scroll"> 
                {Array.isArray(pacientes) && pacientes.length>0  && pacientes 
                
                    ? (
                        
                        <>
                            <h2 className="text-center font-black text-3xl">Listado</h2>
                            <p className="text-xl mt-5 text-center">Administra tus{' '}
                                <span className="text-indigo-600 font-bold">Pacientes y citas</span>
                            </p>

                                
                            {pacientes.map((paciente)=>{ //UN MAP SIEMPRE TIENE QUE TENER UN RETURN Y UNA KEY | RECORRO EL ARREGLO DE PACIENTES
                                return(
                                    <Paciente 
                                        key = {paciente.id} //LE PASO LA ID A PACIENTE
                                        paciente={paciente} //LE PASO EL PACIENTE ACTUAL
                                        setPaciente={setPaciente} //LE PASO LA FUNCION PARA SETEAR AL PACIENTE EN APP.JSX
                                        eliminarPaciente={eliminarPaciente}
                                    />
                                )
                            })}

                            
                        </>

                    ) /*CIERRO RETURN DE SI HAY PACIENTES*/ 
                    : (
                            <>
                                <h2 className="text-center font-black text-3xl">No Hay Pacientes</h2>
                                <p className="text-xl mt-5 text-center">Comienza agregando tus pacientes{' '}
                                    <span className="text-indigo-600 font-bold uppercase text-md">y apareceran en este lugar</span>
                                </p>
                            </>
                    ) //CIERRO RETURN DE SI NO HAY PACIENTES
                }
                
    </div>
    
    ) //cierro return principal

}

export default ListadoPacientes; //EXPORTO EL COMPONENTE PARA QUE SE PUEDA IMPORTAR EN APP.JSX