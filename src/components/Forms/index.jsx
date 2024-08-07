import { useEffect, useState } from 'react';

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
        setImcCalculado(imcValue.toFixed(3));
        if (imcValue > 0 && imcValue < 100){
            setMostraResultado(true);
        } 
        else{
            setMostraResultado(false);
        }
    }

    // useEffect(calculaImc, [imcCalculado]);

    return(
        <>
            <form className={styles.form}>
                <input onBlur={(evento) => setPeso(evento.target.value)} min='0' max='500' className={styles.formWeight} type="number" placeholder="Digite o seu peso" />
                <input onBlur={(evento) => setAltura(evento.target.value)} min='0' max='500' className={styles.formHeight} type="number" placeholder="Digite sua altura" />
                <button onClick={calculaImc} className={styles.formButton} type="button">Ver IMC</button>
            </form>
            {mostraResultado && (
                <>
                    {console.log(imcCalculado)}
                    <ImcTable imcValueProp={imcCalculado} />
                    <Result imcValueProp={imcCalculado}/>
                </>
            )}
            {!mostraResultado &&(
                <h2>Digite um valor válido</h2>
            )}
        </>
    )
}

export default Forms;