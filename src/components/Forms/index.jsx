import { useState } from 'react';

import ImcTable from '../ImcTable';
import Result from '../Result';

import styles from './Forms.module.css'

const Forms = () => {
    const [imcCalculado, setImcCalculado] = useState(0);

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const [mostraResultado, setMostraResultado] = useState(false);

    const calculaImc = () => {
        const imcValue = peso / (altura * altura);
        setImcCalculado(imcValue.toFixed(1));
        if (imcValue > 0 && imcValue < 100){
            setMostraResultado(true);
        } 
        else{
            setMostraResultado(false);
        }
    }

    return(
        <div className='container'>
            <form className={styles.form}>
                <div className={styles.formContainer}>
                    <label>Peso (kg):</label>
                    <input onBlur={(evento) => setPeso(evento.target.value)} min='0' max='500' className={styles.formWeight} type="number" />
                </div>
                <div className={styles.formContainer}>
                    <label>Altura (m):</label>
                    <input onBlur={(evento) => setAltura(evento.target.value)} min='0' max='500' className={styles.formHeight} type="number" />
                </div>
                <button onClick={calculaImc} className={styles.formButton} type="button">Ver IMC</button>
            </form>
            {mostraResultado && (
                <>
                    <Result imcValueProp={imcCalculado}/>
                    <ImcTable imcValueProp={imcCalculado} />
                </>
            )}
            {!mostraResultado && (peso.length > 0) && (altura.length > 0) && (
                <h2>Digite um valor válido</h2>
            )}
        </div>
    )
}

export default Forms;