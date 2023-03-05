function Paciente({paciente,setPaciente,eliminarPaciente}){ //HAGO DESTRUCTURING DE PACIENTE

    function handleEliminar(){
        const respuesta = confirm("Deseas eliminar Este paciente?");
        if(respuesta){
            eliminarPaciente(paciente.id)
        }
    }
    return(
    <div className="bg-white shadow-md p-8 m-4 rounded-md flex flex-col justify-between">
        <div>
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}
                    <span className="font-normal normal-case">{paciente.nombre}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{' '}
                    <span className="font-normal normal-case">{paciente.propietario}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Email:{' '}
                    <span className="font-normal normal-case">{paciente.email}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta:{' '}
                    <span className="font-normal normal-case">{paciente.date}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:{' '}
                    <span className="font-normal normal-case">{paciente.sintomas} </span>
                </p>
            </div>
            <div className="flex flex-row w-2/5">

                <button type="submit" className="bg-violet-600 text-white p-2 mr-2 w-full rounded"
                    onClick={()=>setPaciente(paciente)}>Actualizar
                </button>

                <button type="submit" onClick={()=>{handleEliminar()}} className="bg-red-600 text-white p-2 w-full rounded">Eliminar</button>
            </div>
        </div>
    )

}

export default Paciente;