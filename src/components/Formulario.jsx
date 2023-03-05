import { useState, useEffect } from 'react';
import Error from './Error'
import Paciente from './Paciente';
import Success from './Success'

function Formulario(props) {
    const { setPacientes } = props //RECIBO LA FUNCION PARA PASARLE EL OBJETO CON TODOS LOS DATOS DEL PACIENTE

    const { pacientes } = props; //RECIBO EL ARRAY VACIO DE APP.JSX
    const { paciente } = props;

    const { setPaciente } = props;

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false); //PARA CONTROLAR SI HAY ERRORES

    const [success, setSuccess] = useState(false);

    useEffect(() => {

        if (Object.keys(paciente).length > 0) { //COMPRUEBA SI UN OBJETO TIENE ALGO

            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setDate(paciente.date)
            setSintomas(paciente.sintomas)

        }


    }, [paciente]) //VA A REVISAR ESTE VALOR CUANDO CAMIBE


    function generarId() { //GENERA UNA ID RANDOM
        const rand = Math.random().toString(36).substring(2); //HAGO UN MATH RANDOM, LO PASO A UN STRING DE HASTA 36 CARACTERES Y CON EL SUBSTRING, EXTRAEMOS 2 CARACTERES
        const fecha = Date.now().toString(36) //date.now() nos genera un numero random y lo pasamos a string
        return rand + fecha; //UNIMOS STRINGS
    }

    /////////////CREO FUNCION QUE ME HABILITA O DESHABILITA UN TEXT AREA
    function habilitarText() {
        const textSintomas = document.querySelector('#sintomas');

        if (textSintomas.hasAttribute('disabled')) { //ME FIJO SI TIENE EL ATRIBUTO QUE NOS INDICA SI TIENE EL ATRIBUTO DISABLED QUE PERMITE QUE NO SE PUEDA MODIFICAR UN INPUT O TEXT AREA
            textSintomas.removeAttribute('disabled', false) //EN CASO DE QUE LO TENGA Y TOQUE EL BOTON DE EDITAR, SE SALE EL DISABLED
            return;
        }
        textSintomas.setAttribute('disabled', true) //EN CASOD E QUE NO LO TENGA, LO HABILITO PARA QUE SE BLOQUEE
    }

    function handleSubmit(e) {
        e.preventDefault();
        //VALIDACION DEL FORMULARIO
        if ([nombre, propietario, email, date, sintomas].includes('')) {
            setError(true);
            setSuccess(false)
            return;
        } setError(false)
        setSuccess(true)



        //CREAMOS OBJETO DE PACIENTES Y GUARDA LOS MISMOS DATOS QUE PUSIMOS DE LOS INPUTS

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            date,
            sintomas,
         
        }
       
        if (paciente.id) {
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map((pacienteActualizado) => {
               
                return pacienteActualizado.id === paciente.id ? objetoPaciente : pacienteActualizado;

            }) //eSTO NOS RETORNA UN ARREGLO NUEVO CON TODOS LOS PACIENTES ACTUALIZADOS, SI ACTUALIZAMOS 1, DEVUEWLVE EL ACTUALIZADO, SINO EL NORMAL

          
            setPacientes(pacientesActualizados) //SUSTITUYO EL ARREGLO DE PACIENTES
            setPaciente({}) //VACIO AL PACIENTE LUEGO DE ACTUALIZARLO


        } else {
            objetoPaciente.id = generarId();//LLAMAMOS A FUNCION GENERAR ID Y VA A TENER EL VALOR QUE RETORNA LA FUNCION
            setPacientes([...pacientes, objetoPaciente]) //CREO UNA COPIA DEL ARRAY Y LE AGREGA EL OBJETO al array de APP.JSX


        }



        //BLANQUEO TODO EL FORM
        setNombre('')
        setPropietario('')
        setDate('')
        setEmail('')
        setSintomas('');

    }

    return (
        <div className="sm:w-full md:w-1/2 lg:w-2/5">

            <h1 className="font-black text-3xl text-center">Seguimiento de pacientes</h1>

            <p className="text-lg mt-5 text-center ">Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form action="#" onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-8 mt-4">

                {error && <Error><p>Todos los campos deben estar completos</p></Error>}
                {success && <Success><p>Paciente registrado correctamente</p></Success>}


                <div className="mb-6">

                    <label htmlFor="mascota" className="block font-bold uppercase">Nombre Mascota</label>
                    <input id="mascota" type="text" placeholder="Nombre de la mascota" className="mt-2 ease-in-out duration-300 
                outline-none border-b-2 border-indigo-500 w-1/2 hover:w-full"
                        value={nombre} onChange={(e) => setNombre(e.target.value)} />

                </div>

                <div className="mb-6">

                    <label htmlFor="propietario" className="block font-bold uppercase">Nombre Propietario</label>
                    <input id="propietario" type="text"
                        placeholder="Nombre del Propietario" className="mt-2 ease-in-out duration-300 
                outline-none border-b-2 border-indigo-500 w-1/2 hover:w-full"
                        value={propietario}
                        onChange={(e) => { setPropietario(e.target.value) }}
                    />

                </div>


                <div className="mb-6">

                    <label htmlFor="email" className="block font-bold uppercase">Email</label>
                    <input id="email" type="email" placeholder="Email de contacto" className="mt-2 ease-in-out duration-300 
                outline-none border-b-2 border-indigo-500 w-1/2 hover:w-full"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />

                </div>


                <div className="mb-6">

                    <label htmlFor="alta" className="block font-bold uppercase">Fecha de ingreso</label>
                    <input id="alta" type="date" className="mt-2 ease-in-out duration-300 
                outline-none border-b-2 border-indigo-500 w-1/2 hover:w-full"
                        value={date}
                        onChange={(e) => { setDate(e.target.value) }}
                    />

                </div>

                <div className="mb-6">

                    <label htmlFor="sintomas" className="block font-bold uppercase">Sintomas</label>
                    <textarea name="sintomas" id="sintomas" cols="30" rows="10" placeholder="Describe los sintomas" disabled className="border-2 w-full focus:outline-indigo-500"
                        value={sintomas}
                        onChange={(e) => { setSintomas(e.target.value) }} />
                    <p className="cursor-pointer" onClick={() => { habilitarText() }}>Editar</p>

                </div>
                <input type="submit" value={paciente.id ? "Editar Paciente" : "Agregar Paciente"} className="ease-in duration-300 border-2 p-2 mx-auto border-indigo-500 cursor-pointer hover:bg-indigo-500 hover:text-white hover:scale-110 hover:ml-2 "

                />

            </form>


        </div>



    )
}

export default Formulario;