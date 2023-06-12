import React from 'react';
import './Registration.css';
import { Form } from 'react-bootstrap';

const Registration1 = ({handleInputChange, formData}) => {
    return (
        <div>
        <div className='mb-3'>
            <h5>Tienda Física</h5>
            <div className='mt-4'>
                <p className='mb-2'>¿Cuentas con tienda física?</p>
                <div className="d-flex align-items-center gap-5">
                    <div className="custom-flex">
                        <input onChange={handleInputChange} checked={formData.physical_store === '1'} type="radio" value='1' name="physical_store" id="" />
                        <p>Sí</p>
                    </div>
                    <div className="custom-flex">
                        <input onChange={handleInputChange} checked={formData.physical_store === '0'} type="radio" value='0' name="physical_store" id="" />
                        <p>No</p>
                    </div>
                </div>
            </div>
            <p>Por el momento solamente estamos registrando 1 tienda física por negocio. Más adelante habrá una opción para tener +1 ubicación registrada.</p>
        </div>
        <div className='mt-2'>
            <Form.Group className='mb-3'>
                <Form.Label className='lebel'>Ubicación en Google Maps</Form.Label>
                <Form.Control onChange={handleInputChange} name='url_google' className='control' type="text" placeholder="Pega aquí el enlace de Maps a tu negocio" />
            </Form.Group>
        </div>
        <div className='mt-2'>
            <Form.Group className='mb-3'>
                <Form.Label className='lebel'>Días que abren</Form.Label>
                <div className='d-flex gap-2 align-items-baseline mb-2'>
                    <input onChange={handleInputChange} type="checkbox" checked={formData.business_days.includes('Lunes')} name="Lunes" id="" />
                    <p className='m-0'>Lunes</p>
                </div>
                <div className='d-flex gap-2 align-items-baseline mb-2'>
                    <input onChange={handleInputChange} type="checkbox" checked={formData.business_days.includes('Martes')} name="Martes" id="" />
                    <p className='m-0'>Martes</p>
                </div>
                <div className='d-flex gap-2 align-items-baseline mb-2'>
                    <input onChange={handleInputChange} type="checkbox" checked={formData.business_days.includes('Miércoles')} name="Miércoles" id="" />
                    <p className='m-0'>Miércoles</p>
                </div>
                <div className='d-flex gap-2 align-items-baseline mb-2'>
                    <input onChange={handleInputChange} type="checkbox" checked={formData.business_days.includes('Jueves')} name="Jueves" id="" />
                    <p className='m-0'>Jueves</p>
                </div>
                <div className='d-flex gap-2 align-items-baseline mb-2'>
                    <input onChange={handleInputChange} type="checkbox" checked={formData.business_days.includes('Viernes')} name="Viernes" id="" />
                    <p className='m-0'>Viernes</p>
                </div>
                <div className='d-flex gap-2 align-items-baseline mb-2'>
                    <input onChange={handleInputChange} type="checkbox" checked={formData.business_days.includes('Sábado')} name="Sábado" id="" />
                    <p className='m-0'>Sábado</p>
                </div>
                <div className='d-flex gap-2 align-items-baseline mb-2'>
                    <input onChange={handleInputChange} type="checkbox" checked={formData.business_days.includes('Domingo')} name="Domingo" id="" />
                    <p className='m-0'>Domingo</p>
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
                    <Form.Control onChange={handleInputChange} name='start_date' className='control' type="text" placeholder="HH-MM-SS" />
                    </Form.Group>
                </Form>
                </div>
                <div className="col-md-6">
                <Form>
                    <Form.Group className='mb-3'>
                    <Form.Label className='lebel'>Hora de cierre</Form.Label>
                    <Form.Control onChange={handleInputChange} name='end_date' className='control' type="text" placeholder="HH-MM-SS" />
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
                        <input onChange={handleInputChange} checked={formData.online_store === '1'} value='1' type="radio" name="online_store" id="" />
                        <p>Sí</p>
                    </div>
                    <div className="custom-flex">
                        <input onChange={handleInputChange} checked={formData.online_store === '0'} value='0' type="radio" name="online_store" id="" />
                        <p>No</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='pb-2'>
            <div className="row">
                <div className="col-md-6">
                <Form>
                    <Form.Group className='mb-3'>
                    <Form.Label className='lebel'>Sitio web</Form.Label>
                    <Form.Control onBlur={handleInputChange} name='social_networks' className='control' type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group>
                    <Form.Label className='lebel'>Instagram</Form.Label>
                    <Form.Control onBlur={handleInputChange} name='social_networks' className='control' type="text" placeholder="" />
                    </Form.Group>
                </Form>
                </div>
                <div className="col-md-6">
                <Form>
                    <Form.Group className='mb-3'>
                    <Form.Label className='lebel'>Facebook</Form.Label>
                    <Form.Control onBlur={handleInputChange} name='social_networks' className='control' type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group>
                    <Form.Label className='lebel'>TikTok</Form.Label>
                    <Form.Control onBlur={handleInputChange} name='social_networks' className='control' type="text" placeholder="" />
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
                    <Form.Select onChange={handleInputChange} name='category' aria-label="Default select example">
                            <option value="Papelería">Papelería</option>
                            <option value="Eventos">Eventos</option>
                            <option value="Regalos">Regalos</option>
                            <option value="Bienestar">Bienestar</option>
                            <option value="Hogar">Hogar</option>
                    </Form.Select>
                    </Form.Group>
                </Form>
                </div>
                <div className="col-md-6">
                <Form>
                    <Form.Group className='mb-3'>
                    <Form.Label className='lebel'>Ciudad</Form.Label>
                    <Form.Select onChange={handleInputChange} name='subcategory' aria-label="Default select example">
                            <option value="Muebles">Muebles</option>
                            <option value="Fragancias">Fragancias</option>
                            <option value="Decoración General">Decoración General</option>
                            <option value="Cocina">Cocina</option>
                            <option value="Mudanza">Mudanza</option>
                            <option value="Exterior">Exterior</option>
                            <option value="Casa Inteligente">Casa Inteligente</option>
                            <option value="Diseño de Interiores">Diseño de Interiores</option>
                    </Form.Select>
                    </Form.Group>
                </Form>
                </div>
            </div>
        </div>
        <hr />
        <div className='pb-2'>
            <Form>
                <Form.Group className='mb-3'>
                <Form.Label className='lebel'>Agrega el código, fecha de vencimiento y una pequeña descripción de lo que sería el beneficio.</Form.Label>
                <Form.Control onChange={handleInputChange} name='discount_code' className='control' type="text" placeholder='...' />
                <Form.Label className='lebel'>Ej. 10% de descuento en nuestra tienda en línea con el código LOCALLITY10 - vigencia al 30 de julio 2023.</Form.Label>
                </Form.Group>
            </Form>
        </div>
        </div>
    );
};

export default Registration1;