/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Registration.css';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import Registration1 from './Registration1';
import Registration2 from './Registration2';

const Register = ({handleInputChange, formData}) => {
    return (
        <div>
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
                        <input onChange={handleInputChange} type="radio" checked={formData.business_age === '0-1'} value="0-1" name="business_age" id="" />
                        <p>0 - 1 años</p>
                    </div>
                    <div className="custom-flex">
                        <input onChange={handleInputChange} type="radio" checked={formData.business_age === '2-5'} value="2-5" name="business_age" id="" />
                        <p>2 - 5 años</p>
                    </div>
                    <div className="custom-flex">
                        <input onChange={handleInputChange} type="radio" checked={formData.business_age === '5+'} value="5+" name="business_age" id="" />
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
                        <input onChange={handleInputChange} checked={formData.bill === '0'} value='0' type="radio" name="bill" id="" />
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
                        <Form.Select onChange={handleInputChange} name='municipality' aria-label="Default select example">
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
        </div>   
    );
}

const Registration = () => {
    const [switchPage, setSwitchPage] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        manager: '',
        cell_phone_number: '',
        business_age: '0-1',
        description: '',
        delivery: '1',
        shipping: '1',
        bill: '1',
        state: 'Nuevo León',
        city: 'Monterrey',
        municipality: '',
        physical_store: '1',
        url_google: '',
        business_days: '',
        start_date: '2023-05-26',
        end_date: '2023-10-26',
        online_store: '1',
        social_networks: '',
        category: '',
        subcategory: '',
        discount_code: '',
        price: '1000',
        antiquity: '5',
        questions: '5',
        event_classification: 'example',
        address_1: 'maxico city',
        address_2: 'maxico city',
        address_3: 'maxico city',
        capacity_people: '100',
        accepts_credit_cards: '1',
        is_owner_verified: '1',
        publication_likes: '100'
    });

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;

        if (name === 'social_networks') {
            setFormData((prevFormData) => {
                const updatedNetworks = [value, ...prevFormData.social_networks.split(',')].filter(Boolean).join(',');
                
                return {
                    ...prevFormData,
                    social_networks: updatedNetworks
                };
            });   
        }
        else if (type === 'checkbox') {
          const isChecked = e.target.checked;
    
          setFormData((prevFormData) => {
            let updatedDays = prevFormData.business_days.split(',');
            if (isChecked) {
              // Add the day to the array if checked
              updatedDays.push(name);
            } else {
              // Remove the day from the array if unchecked
              updatedDays = updatedDays.filter((day) => day !== name);
            }
            // Join the updated days array into a comma-separated string
            const updatedBusinessDays = updatedDays.join(',');
            return {
              ...prevFormData,
              business_days: updatedBusinessDays
            };
          });
        } else {
            // default
            setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
            }));
        }
        
      };

    const handleSubmit = async () => {
        console.log(formData);
        const data = new FormData();
        data.append('name', formData.name);
        data.append('price', '10000');
        data.append('manager', formData.manager);
        data.append('description', formData.description);
        data.append('event_classification', 'Birthday');
        data.append('capacity_people', '100');
        data.append('address_1', 'Juarez Ave. #123');
        data.append('address_2', 'Juarez Ave. #123');
        data.append('address_3', 'Juarez Ave. #123');
        data.append('city', formData.city);
        data.append('state', formData.state);
        data.append('country', 'Mexico');
        data.append('postal_code', '4100');
        data.append('cell_phone_number', formData.cell_phone_number);
        data.append('email', formData.email);
        data.append('event_type', 'Social');
        data.append('publication_likes', '100');
        data.append('questions', '5');
        data.append('policies_terms', 'policies and terms');
        data.append('delivery', formData.delivery);
        data.append('shipping', formData.shipping);
        data.append('bill', formData.bill);
        data.append('antiquity', formData.antiquity);
        data.append('physical_store', formData.physical_store);
        data.append('online_store', formData.online_store);
        data.append('url_google', formData.url_google);
        data.append('business_days', formData.business_days);
        data.append('category', formData.category);
        data.append('subcategory', formData.subcategory);
        data.append('discount_code', formData.discount_code);
        data.append('business_age', formData.business_age);
        data.append('municipality', formData.municipality);
        data.append('accepts_credit_cards', formData.accepts_credit_cards);
        data.append('is_owner_verified', '1');
        data.append('status', 'Activo');
        data.append('start_date', formData.start_date);
        data.append('end_date', formData.end_date);
        data.append('social_networks', formData.social_networks);

        try {
            const response = await axios.post(
              'https://api-locallity-production.up.railway.app/api/v1/locality',
              data
            );
        
            console.log(response);
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
                    {switchPage === 1 && <Register handleInputChange={handleInputChange} formData={formData} />}
                    {switchPage === 2 && <Registration1 handleInputChange={handleInputChange} formData={formData} />}
                    {switchPage === 3 && <Registration2 handleInputChange={handleInputChange} formData={formData} />}
                    <hr />
                    <div className='pb-5'>
                        {switchPage === 1 && 
                            <div className='btn-flex'>
                                <div className='btn-flex-child'>
                                    <p>Etapa 1 de 2</p>
                                    <button onClick={() => {
                                        setSwitchPage(2)
                                        window.scrollTo({ top: 0, behavior: 'instant' });
                                    }} className='px-5 rounded-1 btn btn-primary fs-6'>Siguiente</button>
                                </div>
                            </div>
                        } 
                        {switchPage === 2 && 
                            <div className='btn-flex-2'>
                                <button onClick={() => {
                                    setSwitchPage(1)
                                    window.scrollTo({ top: 0, behavior: 'instant' });
                                }} className='px-5 rounded-1 btn btn-light fs-6'>Atrás</button>
                                <p>Etapa 2 de 2</p>
                                <button onClick={handleSubmit} className='px-5 rounded-1 btn btn-primary fs-6'>Siguiente</button>
                            </div>
                        } 
                        {switchPage === 3 && 
                            <div className='btn-flex-2'>
                                <button onClick={() => {
                                    setSwitchPage(2)
                                    window.scrollTo({ top: 0, behavior: 'instant' });
                                }} className='px-5 rounded-1 btn btn-light fs-6'>Atrás</button>
                                <button className='px-5 rounded-1 btn btn-primary fs-6'>Enviar datos</button>
                            </div>
                        } 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;