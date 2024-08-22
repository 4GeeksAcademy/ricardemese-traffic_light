import React, { useState } from 'react';

export const TrafficLights = () => {
    const [colorActual, setColorActual] = useState(null);

    const cambiarColor = (color) => {
        setColorActual(color);
    };

    const buttonColor = () => {
        if (colorActual === 'red') {
            setColorActual('yellow');
        } else if (colorActual === 'yellow') {
            setColorActual('green');
        } else if (colorActual === 'green') {
            setColorActual('red');
        } else {
            setColorActual('red');
        }
    }

    return (
        <>
            <div style={{
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                marginTop: '50px',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '120px',
                borderRadius: '30px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            }}>
                <div
                    onClick={() => cambiarColor('red')}
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: colorActual === 'red' ? 'red' : 'darkred',
                        margin: '10px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        boxShadow: colorActual === 'red' ? '0 0 30px 15px #B22222' : 'none',
                    }}
                ></div>
                <div
                    onClick={() => cambiarColor('yellow')}
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: colorActual === 'yellow' ? 'yellow' : 'darkgoldenrod',
                        margin: '10px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        boxShadow: colorActual === 'yellow' ? '0 0 30px 15px #FFD700' : 'none',
                    }}
                ></div>
                <div
                    onClick={() => cambiarColor('green')}
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: colorActual === 'green' ? 'lime' : 'darkgreen',
                        margin: '10px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        boxShadow: colorActual === 'green' ? '0 0 30px 15px #7CFC00' : 'none',
                    }}
                ></div>
            </div>
            <button
                onClick={buttonColor}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    backgroundColor: '#333',
                    color: 'white',
                    border: 'none',
                }}
            >
                Change color
            </button>
        </>
    );
};
