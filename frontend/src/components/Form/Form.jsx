import React from 'react'
import './form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label } from 'reactstrap';

export default function Form({ onClose, onSubmit }) {
  return (
    <Modal isOpen={true} toggle={onClose}>
      <ModalBody className='form'>
        <form onSubmit={onSubmit}>
          <FormGroup>
            <Label for="cnpj">CPF/CNPJ:</Label>
            <Input type="number" name="cnpj" id="cnpj" />
          </FormGroup>
          <FormGroup>
            <Label for="nome">Nome:</Label>
            <Input type="text" name="nome" id="nome" />
          </FormGroup>
          <FormGroup>
            <Label for="produtos">Produtos:</Label>
            <Input type="text" name="produtos" id="produtos" />
          </FormGroup>
          <Button>Enviar</Button>
        </form>
      </ModalBody>
    </Modal>
  )
}