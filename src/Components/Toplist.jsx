import React from 'react';

const data = [
  { name: 'Roger Federer', description: 'Arguably the greatest tennis player ever', rating: 5 },
  { name: 'Rafael Nadal', description: 'The king of clay', rating: 4 },
  { name: 'Jannik Sinner', description: 'The rising phenom of the next generation', rating: 3 },
];

const Card = ({ name, description, rating }) => {
  const circles = [];
  for (let i = 0; i < 5; i++) {
    circles.push(<div key={i} className={i < rating ? 'circle filled' : 'circle'}></div>);
  }

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="rating">{circles}</div>
    </div>
  );
};

const CardList = () => (
  <div className="card-list">
    {data.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

const TopList = () => (
  <div className="app">
    <h1>Card List</h1>
    <CardList />
  </div>
);

export default TopList;


