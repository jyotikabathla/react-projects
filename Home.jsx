import React, { useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    alert('your help desk here ');
  };

  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}>Welcome to our xyz</h1>
      <p className={styles.tagline}>Any problem come  we are here </p>
      <button 
        className={styles.button} 
        onClick={handleClick}>
        Help!
      </button>
      <p>You clicked {clickCount} times.</p>
    </div>
  );
};

export default Home;

