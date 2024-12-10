import { useState } from "react";

import ImcTable from "../ImcTable";
import Result from "../Result";

import styles from "./Forms.module.css";

const Forms = () => {
    const [imcCalculated, setImcCalculated] = useState(null);

    const [weigth, setWeigth] = useState(null);
    const [height, setHeight] = useState(null);

    const [showResult, setShowResult] = useState(false);
    const [valuesValid, setValuesValid] = useState(true);

    const calculateImc = () => {
        const parsedWeight = parseFloat(weigth);
        const parsedHeight = parseFloat(height);
        
        if (
            isNaN(parsedWeight) ||
            isNaN(parsedHeight) ||
            parsedWeight <= 0 || parsedHeight > 500 ||
            parsedHeight <= 0 || parsedHeight > 3
        ) {
            setValuesValid(false);
            setShowResult(false);
            setImcCalculated(null);
            return;
        }

        const imcValue = parsedWeight / (parsedHeight * parsedHeight);
        setImcCalculated(imcValue.toFixed(1));

        if (Math.floor(imcValue) >= 4 && Math.floor(imcValue) <= 347) {
            setShowResult(true);
            setValuesValid(true);
        } else {
            setShowResult(false);
            setValuesValid(false);
        }
    };

    return (
        <div className="container">
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Peso (kg):</label>
                    <input
                        onFocus={() => setShowResult(false)}
                        onBlur={(event) => setWeigth(event.target.value)}
                        min="0"
                        max="500"
                        className={styles.formWeight}
                        type="number"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Altura (m):</label>
                    <input
                        onFocus={() => setShowResult(false)}
                        onBlur={(event) => setHeight(event.target.value)}
                        min="0"
                        max="500"
                        className={styles.formHeight}
                        type="number"
                    />
                </div>
                <button
                    onClick={calculateImc}
                    className={showResult ? styles.formButtonHighlight : styles.formButton}
                    type="button"
                >
                    Ver IMC
                </button>
            </form>
            {showResult && imcCalculated !== null && (
                <>
                    <Result imcValueProp={imcCalculated} />
                    <ImcTable imcValueProp={imcCalculated} />
                </>
            )}
            {!valuesValid && <h2>Digite valores válidos!</h2>}
        </div>
    );
};

export default Forms;
