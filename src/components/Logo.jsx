import logoImage from '../../public/logobarber.png'; 

function Logo() {
    return (
      <div className='logo'>
        <img src={logoImage} alt="Logo da barbearia" style={{ width: '300px', height: 'auto' }} />
      </div>
    );
  }

export default Logo;