import React from 'react';
import DBLogo from '../assets/logoDB.png';
import { FaRegUser } from "react-icons/fa";

const Header = () => {
    return (
        <header style={{ background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <img src={DBLogo} alt="Logo" style={{ width: '150px', height: '50px' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.15rem' }} className='font-bold text-bold font-georama'>Furry Fun for Everyone</span>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <FaRegUser size={20} />
            </div>
        </header>
    );
};

export default Header;
