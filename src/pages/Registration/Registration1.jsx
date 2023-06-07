import React from 'react';
import './Registration.css';
import { Form } from 'react-bootstrap';

const Registration1 = () => {
    return (
        <div className='container p-2'>
            <div className='d-flex align-items-center'>
                <div className='registration mx-auto'>
                    <div className='text-center mt-4'>
                        <h3 className='mb-2'>Registra tu marca</h3>
                        <p className='fs-6 pb-1'>Completa el formulario para formar parte de la plataforma.</p>
                    </div>
                    <hr />
                    <div className='mb-3'>
                        <h5>Tienda Física</h5>
                        <div className='mt-4'>
                            <p className='mb-2'>¿Cuentas con tienda física?</p>
                            <div className="d-flex align-items-center gap-5">
                                <div className="custom-flex">
                                    <input type="radio" name="shipping" id="" />
                                    <p>Sí</p>
                                </div>
                                <div className="custom-flex">
                                    <input type="radio" name="shipping" id="" />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                        <p>Por el momento solamente estamos registrando 1 tienda física por negocio. Más adelante habrá una opción para tener +1 ubicación registrada.</p>
                    </div>
                    <div className='mt-2'>
                        <Form.Group className='mb-3'>
                            <Form.Label className='lebel'>Ubicación en Google Maps</Form.Label>
                            <Form.Control name='description' className='control' type="text" placeholder="Pega aquí el enlace de Maps a tu negocio" />
                        </Form.Group>
                    </div>
                    <div className='mt-2'>
                        <Form.Group className='mb-3'>
                            <Form.Label className='lebel'>Días que abren</Form.Label>
                            <div className='d-flex gap-2 align-items-baseline mb-2'>
                                <input type="checkbox" name="" id="" />
                                <p className=' m-0'>Lunes</p>
                            </div>
                            <div className='d-flex gap-2 align-items-baseline mb-2'>
                                <input type="checkbox" name="" id="" />
                                <p className=' m-0'>Martes</p>
                            </div>
                            <div className='d-flex gap-2 align-items-baseline mb-2'>
                                <input type="checkbox" name="" id="" />
                                <p className=' m-0'>Miércoles</p>
                            </div>
                            <div className='d-flex gap-2 align-items-baseline mb-2'>
                                <input type="checkbox" name="" id="" />
                                <p className=' m-0'>Jueves</p>
                            </div>
                            <div className='d-flex gap-2 align-items-baseline mb-2'>
                                <input type="checkbox" name="" id="" />
                                <p className=' m-0'>Viernes</p>
                            </div>
                            <div className='d-flex gap-2 align-items-baseline mb-2'>
                                <input type="checkbox" name="" id="" />
                                <p className=' m-0'>Sábado</p>
                            </div>
                            <div className='d-flex gap-2 align-items-baseline mb-2'>
                                <input type="checkbox" name="" id="" />
                                <p className=' m-0'>Domingo</p>
                            </div>
                        </Form.Group>
                    </div>
                    <div className='pb-2'>
                        <h5 className='mb-3'>Horarios</h5>
                        <div className="row">
                            <div className="col-md-6">
                            <Form>
                                <Form.Group className='mb-3'>
                                <Form.Label className='lebel'>Hora de apertura</Form.Label>
                                <Form.Control name='name' className='control' type="text" placeholder="Hora de apertura" />
                                </Form.Group>
                            </Form>
                            </div>
                            <div className="col-md-6">
                            <Form>
                                <Form.Group className='mb-3'>
                                <Form.Label className='lebel'>Hora de cierre</Form.Label>
                                <Form.Control name='manager' className='control' type="text" placeholder="Hora de cierre" />
                                </Form.Group>
                            </Form>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h4>Tienda Online</h4>
                        <div className='mt-4'>
                            <p className='mb-2'>¿Cuentas con tienda online?</p>
                            <div className="d-flex align-items-center gap-5">
                                <div className="custom-flex">
                                    <input type="radio" name="shipping" id="" />
                                    <p>Sí</p>
                                </div>
                                <div className="custom-flex">
                                    <input type="radio" name="shipping" id="" />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pb-2'>
                        <h5 className='mb-3'>Información General</h5>
                        <div className="row">
                            <div className="col-md-6">
                            <Form>
                                <Form.Group className='mb-3'>
                                <Form.Label className='lebel'>Sitio web</Form.Label>
                                <Form.Control name='name' className='control' type="text" placeholder="" />
                                </Form.Group>

                                <Form.Group>
                                <Form.Label className='lebel'>Instagram</Form.Label>
                                <Form.Control name='email' className='control' type="text" placeholder="" />
                                </Form.Group>
                            </Form>
                            </div>
                            <div className="col-md-6">
                            <Form>
                                <Form.Group className='mb-3'>
                                <Form.Label className='lebel'>Facebook</Form.Label>
                                <Form.Control name='manager' className='control' type="text" placeholder="" />
                                </Form.Group>

                                <Form.Group>
                                <Form.Label className='lebel'>TikTok</Form.Label>
                                <Form.Control name='cell_phone_number' className='control' type="text" placeholder="" />
                                </Form.Group>
                            </Form>
                            </div>
                        </div>
                        <p className='pt-3'>Los enlaces aparecerán en el directorio para que los usuarios lleguen a tu tienda online.</p>
                    </div>
                    <hr />
                    <div className='pt-4 pb-3'>
                        <div>
                            <h5>Categoría y subcategoría</h5>
                            <p>Por el momento solo se puede selecccionar 1 categoría y 1 subcategoría por negocio. Selecciona aquellas en las que te gustaría aparecer.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <Form>
                                <Form.Group className='mb-3'>
                                <Form.Label className='lebel'>Categoría</Form.Label>
                                <Form.Select name='state' aria-label="Default select example">
                                        <option value="">Papelería</option>
                                        <option value="">Eventos</option>
                                        <option value="">Regalos</option>
                                        <option value="">Bienestar</option>
                                        <option value="">Hogar</option>
                                </Form.Select>
                                </Form.Group>
                            </Form>
                            </div>
                            <div className="col-md-6">
                            <Form>
                                <Form.Group className='mb-3'>
                                <Form.Label className='lebel'>Ciudad</Form.Label>
                                <Form.Select name='city' aria-label="Default select example">
                                        <option value="">Muebles</option>
                                        <option value="">Fragancias</option>
                                        <option value="">Decoración General</option>
                                        <option value="">Cocina</option>
                                        <option value="">Mudanza</option>
                                        <option value="">Exterior</option>
                                        <option value="">Casa Inteligente</option>
                                        <option value="">Diseño de Interiores</option>
                                </Form.Select>
                                </Form.Group>
                            </Form>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-4'>
                        <p className='mb-2'>¿Te gustaría agregar un código de descuento para los clientes que lleguen a tu negocio por medio de Locallity?</p>
                        <div className="d-flex align-items-center gap-5">
                            <div className="custom-flex">
                                <input type="radio" name="shipping" id="" />
                                <p>Sí</p>
                            </div>
                            <div className="custom-flex">
                                <input type="radio" name="shipping" id="" />
                                <p>No</p>
                            </div>
                        </div>
                    </div>
                    <div className='pb-2'>
                        <Form>
                            <Form.Group className='mb-3'>
                            <Form.Label className='lebel'>Agrega el código, fecha de vencimiento y una pequeña descripción de lo que sería el beneficio.</Form.Label>
                            <Form.Control name='manager' className='control' type="text" />
                            <Form.Label className='lebel'>Ej. 10% de descuento en nuestra tienda en línea con el código LOCALLITY10 - vigencia al 30 de julio 2023.</Form.Label>
                            </Form.Group>
                        </Form>
                    </div>
                    <hr />
                    <div className='pb-5'>
                        <div className='btn-flex-2'>
                            <button className='px-5 rounded-1 btn btn-light fs-6'>Atrás</button>
                            <p>Etapa 2 de 2</p>
                            <button className='px-5 rounded-1 btn btn-primary fs-6'>Siguiente</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration1;