import React from 'react';
import '../../index.scss';


const ContainedButtons = ({ start, stop, reset, wait }) => {

    return (
        <>
            <div className="container">
                <button type="button" className="button is-dark" onClick={start}>
                    Start
                </button>
                <button type="button" className="button is-dark" onClick={stop}>
                    Stop
                </button>
                <button type="button" className="button is-dark" onClick={reset}>
                    Reset
                </button>
                <button type="button" className="button is-dark" onClick={wait}>
                    Wait
                </button>
            </div>
        </>
    );
}

export default ContainedButtons;