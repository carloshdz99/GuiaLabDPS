import React from 'react';
import { Form, FormGroup, Button, Label, Input, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

const FormDatos = ({ onChangeForm, formEmpleado, onSubmit, onCancel }) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Formulario de empleados</CardTitle>
                    <Form onSubmit={onSubmit}>
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label>Nombre</Label>
                                    <Input
                                        type="text" name="nombre" placeholder="nombre..."
                                        value={formEmpleado.nombres}
                                        onChange={onChangeForm}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input
                                        type="text" name="apellido" placeholder="apellido..."
                                        value={formEmpleado.apellidos}
                                        onChange={onChangeForm}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Cargo</Label>
                                    <Input
                                        type="select" name="cargo"
                                        value={formEmpleado.cargo}
                                        onChange={onChangeForm}

                                    >
                                        <option>Admin</option>
                                        <option>Empleado</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup check row>
                            <Col>
                                <Button color="primary" type="submit">Guardar</Button>
                                <Button color="warning" onClick={onCancel} type="button">Cancelar</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default FormDatos;