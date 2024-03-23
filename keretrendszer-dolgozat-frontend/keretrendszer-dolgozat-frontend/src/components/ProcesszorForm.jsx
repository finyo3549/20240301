import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function ProcesszorForm(props) {
    const gyartoRef = useRef(null);
    const tipusRef = useRef(null);
    const orajelRef = useRef(null);
    const architekturaRef = useRef(null);
    const megjelenesDatumaRef = useRef(null);
    const { onSubmit, processzor, buttontext} = props;

    const registerProcesszor = async () => 
    {
        const processzor = {
            gyarto: gyartoRef.current.value,
            tipus: tipusRef.current.value,
            orajel: orajelRef.current.value,
            architektura: architekturaRef.current.value,
            megjelenes_datuma: megjelenesDatumaRef.current.value
        };
        console.log(processzor);
        const success = await onSubmit(processzor);

        if (success) {
            gyartoRef.current.value = '';
            tipusRef.current.value = '';
            orajelRef.current.value = '';
            architekturaRef.current.value = '';
            megjelenesDatumaRef.current.value = '';
        }

    }
    useEffect(() => {
        if (processzor) {
            gyartoRef.current.value = processzor.gyarto;
            tipusRef.current.value = processzor.tipus;
            orajelRef.current.value = processzor.orajel;
            architekturaRef.current.value = processzor.architektura;
            megjelenesDatumaRef.current.value = processzor.megjelenes_datuma;
        
    }}, [processzor]);
    
   
    return (
        <div className="container">
            <h2 className='text-center'>Processzor regisztráció</h2>
            <div className='row justify-content-center'>
                <div className='col-lg-6 col-md-8 col-sm-10'>
                    <form onSubmit={event => {event.preventDefault(); registerProcesszor();}}>
                        <div className="form-group">
                            <label htmlFor="gyarto">Gyártó</label>
                            <input className="form-control" type="text" id="gyarto" name="gyarto" ref={gyartoRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tipus">Típus</label>
                            <input className="form-control" type="text" id="tipus" name="tipus" ref={tipusRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="orajel">Órajel</label>
                            <input className="form-control" type="number" id="orajel" name="orajel" ref={orajelRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="architektura">Architektúra</label>
                            <input className="form-control" type="text" id="architektura" name="architektura" ref={architekturaRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="megjelenesDatuma">Megjelenés Dátuma</label>
                            <input className="form-control" type="date" id="megjelenesDatuma" name="megjelenesDatuma" ref={megjelenesDatumaRef} />
                        </div>
                        <button type="submit" className='btn btn-primary mt-3'>{buttontext}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

ProcesszorForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    processzor: PropTypes.object,
    buttontext: PropTypes.string
};

ProcesszorForm.defaultProps = {
    processzor: null,
    buttontext: 'Mentés'
    
};

export default ProcesszorForm;
