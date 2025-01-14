import React from 'react';
import Greeting from '../components/greeting';

const SayHello = () => {
  const kk = 'Krunal';
  return (
    <div>
      <Greeting name={kk} />
    </div>
  );
};

export default SayHello;