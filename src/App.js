import React from 'react';

function Food({name, pic}){
  return(
    <div>
      <h2>I like {name}</h2>
      <img src={pic} />
    </div>
  )

}

const foodILike = [
  {
    name: "Egg Bread",
    image: "http://www.maangchi.com/wp-content/uploads/2016/03/gyerangppang-cut.jpg"
  },
  {
    name: "Hotdog",
    image: "https://potatorolls.com/wp-content/uploads/Basic-Hot-Dogs.jpg"
  }
];

function App() {
  return (
    <div>
      <h1>Hi!</h1>
      {
        foodILike.map(dish => 
          <Food name={dish.name} pic={dish.image}/>
        )
      }
    </div>
  );
}

export default App;
