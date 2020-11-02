import React, { useState } from 'react';
//importando componentes
import FormEmpleado from './Form';
import TableEmpleados from './Empleados';

//importando pagina
const PageEmpleados = () => {
    //creando state
    const initialForm = {
        nombres: '',
        apellidos: '',
        cargo: ''
    }
    const [ formEmpleado, setFormEmpleado ] = useState(initialForm);
    //cambiando el estado
    const onChangeForm = (e) => {
        setFormEmpleado({
            [e.target.name]: e.target.value
        })
    }
    //enviando datos a la base
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formEmpleado);
    }
    //limpiando campos
    const onCancel = (e) => {
        e.preventDefault();
        setFormEmpleado(initialForm);
    }

    return (
        <div className="container py-5">
            <FormEmpleado 
                 onChangeForm = {onChangeForm}
                 formEmpleado = {formEmpleado}
                 onSubmit = {onSubmit}
                 onCancel = {onCancel}
            />
            <TableEmpleados />
        </div>
    )
}

export default PageEmpleados;