// haute-u/src/components/ImageUpload.js

import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;

    setLoading(true);

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      onImageUpload(response.data); // Handle the response data from Flask
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Image'}
      </button>
    </div>
  );
};

export default ImageUpload;
