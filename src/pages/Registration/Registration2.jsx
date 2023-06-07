import React from 'react';
import { Form } from 'react-bootstrap';

const Registration2 = () => {
    return (
        <div className='container p-2'>
            <div className='d-flex align-items-center'>
                <div className='registration mx-auto'>
                    <div className='text-center mt-4'>
                        <h3 className='mb-2'>Registra tu marca</h3>
                        <p className='fs-6 pb-1'>Completa el formulario para formar parte de la plataforma.</p>
                    </div>
                    <hr />
                    <div className="pt-4">
                        <p>Atención: esta etapa es opcional, y no es estrictamente necesario que la completes ahora.</p>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Sube alguna imagen que represente tus productos/servicios (opcional).</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Sube el logo del negocio en alta resolución (opcional).</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <p>Al enviar los datos, aceptas nuestros términos y condiciones.</p>
                    </div>
                    <hr />
                    <div className='pb-5'>
                        <div className='btn-flex-2'>
                            <button className='px-5 rounded-1 btn btn-light fs-6'>Atrás</button>
                            <button className='px-5 rounded-1 btn btn-primary fs-6'>Enviar datos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration2;