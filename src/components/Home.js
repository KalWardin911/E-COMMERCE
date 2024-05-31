// import React from 'react';

// function Home() {
//   return (
//     <div>
//     <center><h1>Home Page</h1></center>
//     <h2>Welcome to Our Home Page</h2> 
//     <div style={{display:"flex"}}>
//     <div style={{border:"2px solid black",height:"400px",width:"50%"}}>
//     <h1>Div 1 with Text</h1> <br/>
//     <ul>
//     <li>Text 1</li>
//     <li>Text 2</li>
//     <li>Text 3</li>
//     <li>Text 4</li>
    
//     </ul>
//     </div>
//     <div style={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR62joJU4LmXp6DFf74mar0CE4oolNrqeuYg&s)",height:"400px",width:"50%"}}></div>
//     </div>
//     </div>
    
//   );
// }

// export default Home;
// import React from 'react';

// function Home() {
//   return (
//     <div>
//       <center><h1>Home Page</h1></center>
//       <h2>Welcome to Our Home Page</h2> 
//       <div style={{display: "flex"}}>
//         <div id="lefts" style={{
//           height: "400px",
//           width: "50%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "20px"
//         }}>
//           <h1>Div 1 with Text</h1>
//           <ul style={{listStyleType: "none", padding: 0}}>
//             <li>Text 1</li>
//             <li>Text 2</li>
//             <li>Text 3</li>
//             <li>Text 4</li>
//           </ul>
//         </div>
//         <div style={{
//           backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKup4pFzOgSRFxZEo6e5osTceA1XW3AVCqA&s)",
//           height: "300px",
//           width: "50%",
//           backgroundSize: "cover",
//           backgroundPosition: "center"
//         }}></div>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from 'react';

function Home() {
  return (
    <div>
      <center><h1>Home Page</h1></center>
      
      <div style={{display: "flex"}}>
        <div id="lefts" style={{
          height: "400px",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px"
        }}>
          <h1>Welcome to FAST COMPANY</h1>
          <p>
            At FAST COMPANY, we are dedicated to providing exceptional service and quality products. Our team of experts is here to help you with whatever you need. We pride ourselves on our commitment to excellence and our ability to meet the unique needs of each of our customers.
          </p>
          <p>
            Explore our site to learn more about the wide range of services and products we offer. Whether you're looking for the latest innovations or seeking advice from our experienced staff, we're here to assist you every step of the way.
          </p>
          <p>
            Thank you for choosing FAST COMPANY. We look forward to serving you and helping you achieve your goals.
          </p>
        </div>
        <div style={{
          backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKup4pFzOgSRFxZEo6e5osTceA1XW3AVCqA&s)",
          height: "400px",  // Adjusted height to match the left div
          width: "50%",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
      </div>
    </div>
  );
}

export default Home;
