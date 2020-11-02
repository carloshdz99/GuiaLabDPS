import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalDelete = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div>
            <Button color="danger" onClick={toggle}>Prueba eliminar</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>id seleccionado</ModalHeader>
                <ModalBody>
                    Estas seguro de eliminar?
          </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>Eliminar</Button>{' '}
                    <Button color="warning" onClick={toggle}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalDelete;