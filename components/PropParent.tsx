import React from 'react';
import ExampleProp from './ExampleProp';

const PropParent = () => {
  return (
    <div>
      
      <ExampleProp name="Demain" age={25} username="demaintech" />
    </div>
  )
}

export default PropParent;