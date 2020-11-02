import React, { useEffect, useState } from 'react';
//importando componentes
import FormEmpleado from './Form';
import TableEmpleados from './Empleados';
//importando firebase
import { db } from '../firebase/firebase';
//importando alertas de firebase
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//importando pagina
const PageEmpleados = () => {
    //creando state
    const [id, setId] = useState('');
    const initialForm = {
        nombres: '',
        apellidos: '',
        cargo: ''
    }
    const [formEmpleado, setFormEmpleado] = useState(initialForm);
    //trayendo empleados de la base
    const [datosEmpleados, setDatosEmpleados] = useState([]);
    useEffect(() => {
        db.collection('empleados').onSnapshot(response => {
            const empleados = response.docs.map(empleado => ({ ...empleado.data(), id: empleado.id }))
            setDatosEmpleados(empleados);
        });
    }, []);
    //cambiando el estado
    const onChangeForm = (e) => {
        setFormEmpleado({
            ...formEmpleado,
            [e.target.name]: e.target.value
        })
    }
    //enviando datos a la base
    const onSubmit = (e) => {
        e.preventDefault();
        //insertando en la base de datos
        if (id != '') {

        } else {
            db.collection('empleados').add(formEmpleado);
            toast.success("Empleado registrado");
        }
        //reiniciando estado
        setFormEmpleado(initialForm);
    }
    //limpiando campos
    const onCancel = (e) => {
        e.preventDefault();
        setFormEmpleado(initialForm);
    }
    //tomando dato para editar
    const onGetEmpleado = (e) => {
        const id = e.target.parentElement.parentElement.children[0].textContent;
        setId(id);
        db.collection('empleados').doc(id).onSnapshot(response => {
            setFormEmpleado({ ...response.data() })
        })
    }

    return (
        <div className="container py-5">
            <ToastContainer />
            <FormEmpleado
                onChangeForm={onChangeForm}
                formEmpleado={formEmpleado}
                onSubmit={onSubmit}
                onCancel={onCancel}
            />
            <TableEmpleados
                datosEmpleados={datosEmpleados}
                onGetEmpleado={onGetEmpleado}
            />
        </div>
    )
}

export default PageEmpleados;