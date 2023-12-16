import logo from '../assets/investment-calculator-logo.png';
import '../index.css';

export default function Header() {
    return(
        <header id='header'>
                <img src={logo} alt='logo'/>
                <h1>Investment calculator</h1>
         </header>
    );
}