import React from 'react';
import { Table, Button } from 'reactstrap';

//exportando tabla con datos 
const TableEmpleados = ({ onGetEmpleadoUpdate, datosEmpleados, onGetEmpleadoDelete }) => {
    return (
        <div>
            <Table dark hover striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Cargo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {datosEmpleados.map((response) => (
                        <tr key={response.id}>
                            <th scope="row">{response.id}</th>
                            <td>{response.nombres}</td>
                            <td>{response.apellidos}</td>
                            <td>{response.cargo}</td>
                            <td>
                                <Button onClick={onGetEmpleadoDelete} color="danger">Eliminar</Button>{''}
                                <Button onClick={onGetEmpleadoUpdate} color="warning">Editar</Button>{''}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TableEmpleados;