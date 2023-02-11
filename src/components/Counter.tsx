import React, { useState } from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button
        className={classes.btn}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add 1
      </button>
    </div>
  );
};

export default Counter;
