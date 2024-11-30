import styles from './ImcTable.module.css';
import PropTypes from 'prop-types';

const ImcTable = ({ imcValueProp }) => {
    const dataTable = [
        { id: 1, imcRange: 'Menor que 16,9', imcResult: 'Muito abaixo do peso', limInf: 0, limSup: 16.9 },
        { id: 2, imcRange: '17 a 18,4', imcResult: 'Abaixo do peso', limInf: 17, limSup: 18.4 },
        { id: 3, imcRange: '18,5 a 24,9', imcResult: 'Peso normal', limInf: 18.5, limSup: 24.9 },
        { id: 4, imcRange: '25 a 29,9', imcResult: 'Acima do peso', limInf: 25, limSup: 29.9 },
        { id: 5, imcRange: '30 a 34,9', imcResult: 'Obesidade grau I', limInf: 30, limSup: 34.9 },
        { id: 6, imcRange: '35 a 40', imcResult: 'Obesidade grau II', limInf: 35, limSup: 40 },
        { id: 7, imcRange: 'Maior que 40', imcResult: 'Obesidade grau III', limInf: 40, limSup: Infinity }
    ];

    return (
        <table cellSpacing="0" className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.tableCol}>IMC</th>
                    <th className={styles.tableCol}>Classificação</th>
                </tr>
            </thead>
            <tbody>
                {dataTable.map((item) => {
                    const shouldHighlight = imcValueProp >= item.limInf && imcValueProp <= item.limSup;
                    return (
                        <tr key={item.id}>
                            <td className={`${styles.tableCol} ${shouldHighlight ? styles.highlight : ''}`}>
                                {item.imcRange}
                            </td>
                            <td className={`${styles.tableCol} ${shouldHighlight ? styles.highlight : ''}`}>
                                {item.imcResult}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

ImcTable.propTypes = {
    imcValueProp: PropTypes.number.isRequired
};

export default ImcTable;
