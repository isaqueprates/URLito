import './style.css';
import logo from '../../assets/logo-chaordic.png';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
        <img src={logo} alt="" />
        </header>
    );
    }

export default Header;