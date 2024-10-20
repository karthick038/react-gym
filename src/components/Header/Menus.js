import { Link } from 'react-router-dom';

const Mynav = () => {
    return(
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Service</Link></li>
        </ul>
    </nav>
    );
}

export default Mynav;