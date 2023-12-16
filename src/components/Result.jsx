import { calculateInvestmentResults, formatter } from '../util/investment';
export default function Result({userInput}) {

    const {initialInvestment, annualInvestment, expectedReturn, duration} = userInput;

    const resultData = calculateInvestmentResults({initialInvestment, annualInvestment, expectedReturn, duration});

    const tableRow = resultData.map((row, index) => {
        return (
            <tr key={index}>
                    <td>{row.year}</td>
                    <td>{row.annualInvestment}</td>
                    <td>{formatter.format(row.interest)}</td>
                    <td>{formatter.format(row.valueEndOfYear)}</td>
                </tr>
        );
    })

    console.log("The result is : ",resultData);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Annual investment</th>
                    <th>Interest</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                
                {tableRow}
               
            </tbody> 
        </table>
    );
}