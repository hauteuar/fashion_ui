import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [annotatedImageUrl, setAnnotatedImageUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (!file) {
      alert('Please upload an image');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://35.226.35.222:8080/predict_skin_tone', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(`Skin Color: ${response.data.skin_color}, Skin Tone: ${response.data.skin_tone}, Skin Texture: ${response.data.skin_texture}`);
      // Add a unique query parameter to the image URL to force refresh
      setAnnotatedImageUrl(`${response.data.annotated_image_url}?t=${new Date().getTime()}`);
    } catch (error) {
      console.error('Error analyzing skin tone:', error);
      alert('Error analyzing skin tone. Please try again.');
    }
  };

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
          <h2>Upload for Skin Analysis</h2>
          <ol>
            <li>Upload Your Image: Choose a clear photo of your face or skin.</li>
            <li>Let StyleSense AI Work: Our advanced AI analyzes your skin texture and tone.</li>
            <li>Get Personalized Recommendations: Receive fashion advice tailored just for you.</li>
          </ol>
          <div className="buttons">
            <input type="file" id="uploadTexture" onChange={handleFileChange} />
            <button onClick={handleAnalyze}>Analyze Skin</button>
          </div>
          <div id="textureResult">{result}</div>
          {annotatedImageUrl && <img src={annotatedImageUrl} alt="Annotated Result" />}
        </div>
      </section>
    </div>
  );
}

export default App;
