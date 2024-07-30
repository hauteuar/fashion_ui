import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header></header>

      <section className="section1"></section>

      <section className="section2">
        <div className="text">
          <h2>Discover Your Perfect Style: Tailored Just for You</h2>
          <p>Ever wondered why some outfits make you shine while others fall flat? Our genAI technology not only identifies your skin tone but also analyzes your skin texture—be it oily, dry, or somewhere in between. By understanding these nuances, our Fashion Playground app offers personalized fashion advice tailored to highlight your natural beauty. Imagine having a personal stylist who knows exactly what colors and fabrics make you look your best. Say goodbye to guesswork and hello to a wardrobe that feels like it was made just for you! Shine bright and look fabulous every day with Haute-U AR.</p>
        </div>
        <div className="image">
          <img src="/SEC2.png" alt="Fashion" />
        </div>
      </section>

      <section className="section3">
        <div className="left-section">
          <h2>Upload for Skin Texture Analysis</h2>
          <ol>
            <li>Upload Your Image: Choose a clear photo of your face or skin.</li>
            <li>Let StyleSense AI Work: Our advanced AI analyzes your skin texture.</li>
            <li>Get Personalized Recommendations: Receive fashion advice tailored just for you.</li>
          </ol>
          <div className="buttons">
            <input type="file" id="uploadTexture" />
            <button onClick={() => alert('Analyzing Skin Texture')}>Analyze Skin Texture</button>
          </div>
          <div id="textureResult">Get texture prediction here</div>
        </div>
        <div className="right-section">
          <h2>Upload for Skin Tone Analysis</h2>
          <ol>
            <li>Upload Your Image: Choose a clear photo of your face or skin.</li>
            <li>Let StyleSense AI Work: Our advanced AI analyzes your skin tone.</li>
            <li>Get Personalized Recommendations: Receive fashion advice tailored just for you.</li>
          </ol>
          <div className="buttons">
            <input type="file" id="uploadTone" />
            <button onClick={() => alert('Analyzing Skin Tone')}>Analyze Skin Tone</button>
          </div>
          <div id="toneResult">Get tone prediction here</div>
        </div>
      </section>
    </div>
  );
}

export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   return (
//     <div className="App">
//       <header></header>

//       <section className="section1">
//         <div className="overlay">
//           {/* <h1>Revolutionizing Virtual Fashion</h1>
//           <p>Experience Virtual Fashion Like Never Before</p> */}
//         </div>
//       </section>

//       <section className="section2">
//         <div className="text">
//           <h2>Discover Your Perfect Style: Tailored Just for You</h2>
//           <p>Ever wondered why some outfits make you shine while others fall flat? Our genAI technology not only identifies your skin tone but also analyzes your skin texture—be it oily, dry, or somewhere in between. By understanding these nuances, our Fashion Playground app offers personalized fashion advice tailored to highlight your natural beauty. Imagine having a personal stylist who knows exactly what colors and fabrics make you look your best. Say goodbye to guesswork and hello to a wardrobe that feels like it was made just for you! Shine bright and look fabulous every day with Haute-U AR.</p>
//         </div>
//         <div className="image">
//           {/* <img src="C:\Users\ranve\OneDrive\Desktop\test\testing\public\SEC2.png" alt="Fashion" /> */}
//         </div>
//       </section>

//       <section className="section3">
//         <div className="image">
//           {/* <img src="C:\Users\ranve\OneDrive\Desktop\test\testing\public\SEC3.png" alt="Fashion Analysis" /> */}
//         </div>
//         <div className="text">
//           <h2>Introducing: StyleSense AI</h2>
//           <p>Uncover your ideal fashion by analyzing your skin tone and texture for personalized style recommendations.</p>
//           <ol>
//             <li>Upload Your Image: Choose a clear photo of your face or skin.</li>
//             <li>Let StyleSense AI Work: Our advanced AI analyzes your skin tone and texture.</li>
//             <li>Get Personalized Recommendations: Receive fashion advice tailored just for you.</li>
//           </ol>
//           <input type="file" id="upload" />
//           <button onClick={() => alert('Analyzing Skin')}>Analyze My Skin</button>
//           <div id="result">Get prediction here</div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App;