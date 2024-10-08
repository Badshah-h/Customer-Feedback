import React from 'react';
import logo from '../../assets/images/New Project (2).png';

const Loader = ({ message }) => {
    return (
        <div className="loader-container">
            <div className="loader">
                <img src={logo} alt="Loading..." className="loader-logo" />
                <p>{message}</p>
            </div>
            <style>{`
                .loader-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255, 255, 255, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999; 
                }
                .loader-logo {
                    height: 100px; 
                    width: auto;
                }
            `}</style>
        </div>
    );
};

export default Loader;
