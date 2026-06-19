// CounterGrid.jsx
import React, { useEffect, useState } from 'react';
import './components.css';

const countersData = [
  { id: 1, label: 'No. of trials', count: 10 },
  { id: 2, label: 'No. of demos', count: 20 },
  { id: 3, label: 'No. of appointments', count: 100 },
  { id: 4, label: 'No. of patient reports created', count: 50 },
];

const Counter = ({ count, label }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = count;
    const duration = 4000; // 2 seconds
    const increment = Math.ceil(end / (duration / 50)); // update every 50ms

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCurrentCount(start);
    }, 100);

    return () => clearInterval(counter);
  }, [count]);

  return (
    <div className="counter">
      <h4>{currentCount}+</h4>  {/* Added + symbol here */}
      <p>{label}</p>
    </div>
  );
};


const CounterGrid = () => {
  return (
    <div className="container counter-grid">
      {countersData.map(item => (
        <Counter key={item.id} count={item.count} label={item.label} />
      ))}
    </div>
  );
};

export default CounterGrid;
