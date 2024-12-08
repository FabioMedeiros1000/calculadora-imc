import { useState } from 'react';

import ImcTable from '../ImcTable';
import Result from '../Result';

import styles from './Forms.module.css'

const Forms = () => {
    const [imcCalculated, setImcCalculated] = useState(0);

    const [weigth, setWeigth] = useState(0);
    const [height, setHeight] = useState(0);

    const [showResult, setShowResult] = useState(false);

    const calculateImc = () => {
        const imcValue = weigth / (height * height);
        setImcCalculated(imcValue.toFixed(1));
        if (imcValue > 0 && imcValue < 100){
            setShowResult(true);
        } 
        else{
            setShowResult(false);
        }
    }

    return(
        <div className='container'>
            <form className={styles.form}>
                <div className={styles.formContainer}>
                    <label>Peso (kg):</label>
                    <input onBlur={(evento) => setWeigth(evento.target.value)} min='0' max='500' className={styles.formWeight} type="number" />
                </div>
                <div className={styles.formContainer}>
                    <label>Altura (m):</label>
                    <input onBlur={(evento) => setHeight(evento.target.value)} min='0' max='500' className={styles.formHeight} type="number" />
                </div>
                <button onClick={calculateImc} className={styles.formButton} type="button">Ver IMC</button>
            </form>
            {showResult && (
                <>
                    <Result imcValueProp={imcCalculated}/>
                    <ImcTable imcValueProp={imcCalculated} />
                </>
            )}
            {!showResult && (weigth.length > 0) && (height.length > 0) && (
                <h2>Digite um valor válido</h2>
            )}
        </div>
    )
}

export default Forms;