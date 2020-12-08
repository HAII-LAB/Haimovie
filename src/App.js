import React from 'react';

function Food({fav}){
  return <h1>I like {fav}.</h1>;
}

function App() {
  return (
    <div>
      <h1>Hi!</h1>
      <Food fav="Egg Bread"/>
    </div>
  );
}

export default App;
