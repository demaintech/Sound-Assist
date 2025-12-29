import React from 'react';

interface user {
  name: string,
  age: number,
  username: string,

};

const ExampleProp: React.FC<user> = ({name, age, username }) => {

  return (
    <main>
      <h2>{name}</h2>
      <h5>{age}</h5>
      <h2>{username}</h2>
    </main>
  )
}

export default ExampleProp;