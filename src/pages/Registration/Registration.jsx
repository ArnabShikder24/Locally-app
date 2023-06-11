/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Registration.css';
import { Form } from 'react-bootstrap';
import axios from 'axios';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        manager: '',
        cell_phone_number: '',
        business_days: '',
        description: '',
        delivery: '',
        shipping: '',
        bill: '',
        state: 'Nuevo León',
        city: 'Monterrey',
        address_3: '',
        price: '1000',
        latitude: '37.7749',
        longitude: '-122.4194',
        antiquity: '5',
        physical_store: '1',
        questions: '5',
        online_store: '1',
        accepts_credit_cards: '1',
        is_owner_verified: '1',
        start_date: '2023-05-26',
        end_date: '2023-06-30',
        publication_likes: '100'
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(
              'https://api-locallity-production.up.railway.app/api/v1/locality',
              formData
            );
      
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
    }
      

    return (
        <div className='container p-2'>
            <div className='d-flex align-items-center'>
                <div className='registration mx-auto'>
                    <div className='text-center mt-4'>
                        <h3 className='mb-2'>Registra tu marca</h3>
                        <p className='fs-6 pb-1'>Completa el formulario para formar parte de la plataforma.</p>
                    </div>
                    <hr />
                    <div>
                        <h5 className='mb-3'>Información General</h5>
                        <div className="row">
                            <div className="col-md-6">
                            <Form>
                                <Form.Group className='mb-3'>
                                <Form.Label className='lebel'>Nombre del negocio</Form.Label>
                                <Form.Control onChange={handleInputChange} name='name' className='control' type="text" placeholder="Mi Negocio" />
                                </Form.Group>

                                <Form.Group>
                                <Form.Label className='lebel'>Correo electrónico</Form.Label>
                                <Form.Control onChange={handleInputChange} name='email' className='control' type="email" placeholder="ej. juanperez@gmail.com" />
                                </Form.Group>
                            </Form>
                            </div>
                            <div className="col-md-6">
                            <Form>
                                <Form.Group className='mb-3'>
                                <Form.Label className='lebel'>Nombre y apellido de contacto</Form.Label>
                                <Form.Control onChange={handleInputChange} name='manager' className='control' type="text" placeholder="ej. Juan Pérez" />
                                </Form.Group>

                                <Form.Group>
                                <Form.Label className='lebel'>Teléfono de contacto</Form.Label>
                                <Form.Control onChange={handleInputChange} name='cell_phone_number' className='control' type="text" placeholder="ej. +52000000000" />
                                </Form.Group>
                            </Form>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='mb-2'>Antigüedad del negocio</p>
                        <div className="d-flex align-items-center gap-5">
                            <div className="custom-flex">
                                <input type="radio" name="business_days" id="" />
                                <p>0 - 1 años</p>
                            </div>
                            <div className="custom-flex">
                                <input type="radio" name="business_days" id="" />
                                <p>2 - 5 años</p>
                            </div>
                            <div className="custom-flex">
                                <input type="radio" name="business_days" id="" />
                                <p>+5 años</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <Form.Group className='mb-3'>
                            <Form.Label className='lebel'>Breve descripción del negocio</Form.Label>
                            <Form.Control onChange={handleInputChange} name='description' className='control' type="text" placeholder="..." />
                        </Form.Group>
                    </div>
                    <div className='mt-4'>
                        <p className='mb-2'>¿Cuentas con servicio a domicilio?</p>
                        <div className="d-flex align-items-center gap-5">
                            <div className="custom-flex">
                                <input onChange={handleInputChange} checked={formData.delivery === '1'} value='1' type="radio" name="delivery" id="" />
                                <p>Sí</p>
                            </div>
                            <div className="custom-flex">
                                <input onChange={handleInputChange} checked={formData.delivery === '0'} value='0' type="radio" name="delivery" id="" />
                                <p>No</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='mb-2'>¿Cuentas con envíos nacionales?</p>
                        <div className="d-flex align-items-center gap-5">
                            <div className="custom-flex">
                                <input onChange={handleInputChange} checked={formData.shipping === '1'} value='1' type="radio" name="shipping" id="" />
                                <p>Sí</p>
                            </div>
                            <div className="custom-flex">
                                <input onChange={handleInputChange} checked={formData.shipping === '0'} value='0' type="radio" name="shipping" id="" />
                                <p>No</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 pb-4'>
                        <p className='mb-2'>¿Cuentas con facturación?</p>
                        <div className="d-flex align-items-center gap-5">
                            <div className="custom-flex">
                                <input onChange={handleInputChange} checked={formData.bill === '1'} value='1' type="radio" name="bill" id="" />
                                <p>Sí</p>
                            </div>
                            <div className="custom-flex">
                                <input onChange={handleInputChange} checked={formData.delivery === '0'} value='0' type="radio" name="bill" id="" />
                                <p>No</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='pt-4 pb-5'>
                        <div>
                            <h5>Filtro de Ubicación</h5>
                            <p>Completa de acuerdo a dónde es la sede de tu negocio o mercado principal.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <Form>
                                <Form.Group className='mb-3'>
                                <Form.Label className='lebel'>Estado</Form.Label>
                                <Form.Select onChange={handleInputChange} name='state' aria-label="Default select example">
                                    <option value='Nuevo León'>Nuevo León</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group>
                                <Form.Label className='lebel'>Municipio</Form.Label>
                                <Form.Select onChange={handleInputChange} name='address_3' aria-label="Default select example">
                                    <option value="Apodaca">Apodaca</option>
                                    <option value="Cadereyta Jiménez">Cadereyta Jiménez</option>
                                    <option value="García">García</option>
                                    <option value="General Escobedo">General Escobedo</option>
                                    <option value="Guadalupe">Guadalupe</option>
                                    <option value="Juárez">Juárez</option>
                                    <option value="Monterrey">Monterrey</option>
                                    <option value="Pesquería">Pesquería</option>
                                    <option value="Salinas Victoria">Salinas Victoria</option>
                                    <option value="San Nicolás de los Garza">San Nicolás de los Garza</option>
                                    <option value="San Pedro Garza García">San Pedro Garza García</option>
                                    <option value="Santa Catarina">Santa Catarina</option>
                                    <option value="Santiago">Santiago</option>   
                                </Form.Select>
                                </Form.Group>
                            </Form>
                            </div>
                            <div className="col-md-6">
                            <Form>
                                <Form.Group className='mb-3'>
                                <Form.Label className='lebel'>Ciudad</Form.Label>
                                <Form.Select onChange={handleInputChange} name='city' aria-label="Default select example">
                                    <option value='Monterrey'>Monterrey</option>
                                </Form.Select>
                                </Form.Group>
                            </Form>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='pb-5'>
                        <div className='btn-flex'>
                            <div className='btn-flex-child'>
                                <p>Etapa 1 de 2</p>
                                <button onClick={handleSubmit} className='px-5 rounded-1 btn btn-primary fs-6'>Siguiente</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;