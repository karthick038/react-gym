import Mylogo from '../../assets/gym-logo.png';

const HeaderLogo = ({ width = '100px', altText = 'Default Logo' }) => {
    return (
        <img className='gym-prime-logo' src={Mylogo} alt={altText} style={{ width }} />
    );
}

export default HeaderLogo;