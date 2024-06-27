import React from 'react';
import Toplist from '../Components/Toplist'; // Import the TopList component
import '../Pages/Index.css'; // Import the Index.css file

const Index = () => {
  return (
    <div className="container">
      {/* You can add SideBar component or any other component you need */}
      <div className="content">
        <h1>Welcome to my website!</h1>
        <div className="card-container">
          {/* Render the TopList component here */}
          <Toplist />
        </div>
      </div>
    </div>
  );
};

export default Index;

// import React from 'react';
// import Toplist from '../Components/Toplist'; // Import the TopList component
// import '../Pages/Index.css'; // Import the Index.css file

// const Index = () => {
//   const data = [
//     { name: 'Roger Federer', description: 'Arguably the greatest tennis player ever', rating: 5 },
//     { name: 'Rafael Nadal', description: 'The king of clay', rating: 4 },
//     { name: 'Jannik Sinner', description: 'The rising phenom of the next generation', rating: 3 },
//   ];

//   return (
//     <div className="container">
//       {/* You can add SideBar component or any other component you need */}
//       <div className="content">
//         <h1>Welcome to my website!</h1>
//         <div className="card-container">
//           {/* Render the TopList component here */}
//           <Toplist data={data} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;


