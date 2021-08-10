import React from 'react';
import setTimeFormat from '../../utils/helper';
import ButtonComponent from '../Button/Button';

const DisplayComponent = ({
  time,
  start,
  stop,
  reset,
  wait,
}) => (
  <>
    <header className="header">
      <h1 className="stopwatch headline">
        Hello word!
      </h1>
      <h1 className="stopwatch indicator">
        {setTimeFormat(time)}
      </h1>
    </header>
    <section className="main">
      <div className="container">
        <ButtonComponent
          start={start}
          stop={stop}
          reset={reset}
          wait={wait}
        />
      </div>
    </section>
  </>
);

export default DisplayComponent;

