import styles from './Result.module.css'

const Result = ({imcValueProp}) => {
    return (
        <div className={styles.result}>
            <h2 className={styles.resultTitle}>Seu resultado!</h2>
            <p>Seu IMC é: <b>{imcValueProp}</b> </p>
        </div>
    )
}

export default Result;