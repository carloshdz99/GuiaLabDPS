import React from 'react';
import { Table, Button } from 'reactstrap';

//exportando tabla con datos 
const TableEmpleados = () => {
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <Button color="danger">Eliminar</Button>
                            <Button color="warning">Editar</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default TableEmpleados;