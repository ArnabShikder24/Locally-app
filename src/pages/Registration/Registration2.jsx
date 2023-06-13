import React from 'react';
import { Form } from 'react-bootstrap';

const Registration2 = ({handleInputChange, handleFileChange}) => {
    return (
        <div>
            <div className="pt-4 pb-2">
                <p>Atención: esta etapa es opcional, y no es estrictamente necesario que la completes ahora.</p>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Sube alguna imagen que represente tus productos/servicios (opcional).</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Sube el logo del negocio en alta resolución (opcional).</Form.Label>
                    <Form.Control onChange={handleInputChange} type="file" />
                </Form.Group>
                <p>Al enviar los datos, aceptas nuestros términos y condiciones.</p>
            </div>
        </div>
    );
};

export default Registration2;