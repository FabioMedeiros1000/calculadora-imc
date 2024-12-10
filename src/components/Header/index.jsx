import styles from './Header.module.css'

const Header = () => {
    return (
        <div className='container'>
            <h1 className={styles.header}>Calculadora de IMC</h1>
        </div>
    )
}

export default Header;