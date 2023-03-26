import React, { useState, useRef } from "react";
import axios from "axios";
import "./ImageUploder.css";
import Result from './Result';
function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [data, setData] = useState(null);

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const fileUploadHandler = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("http://localhost:5000/upload", formData)
      .then((response) => {
        setMessage("Image uploaded successfully!");
      })
      .catch((error) => {
        console.error(error);
        setMessage("Error uploading image");
      });
  };
  const targetRef = useRef(null);

  const handleClick = () => {

    fetch('http://localhost:5000/api/data', {
      method: 'POST'
  })
  .then(response => response.json())
  .then(data => setData(data));

    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="main">

    <div className="ImageUploader">

      <div className="someshit">
      <h1>Instructions</h1>
      <p>
        1. Use a neutral background: Choose a plain, light-colored background to highlight your feet clearly.<br></br>
      </p>
      <p>
        2. Position your feet: Stand or sit comfortably in a well-lit area and position your feet to capture the desired view.<br></br>
      </p>
      <p>
        3. Use good lighting: Make sure the area is well-lit to capture clear, detailed images of your feet.<br></br>
      </p>
      <p>
        4. Avoid filters or enhancements: To provide accurate images, avoid using filters or enhancements that can alter the appearance of your feet.<br></br>
      </p>
        </div>
      
      <div className="ImageUploader__contents">
        <h1 className="ImageUploader__heading">Upload an Image</h1>

        <label class="custom-file-upload">
        <input
          className="browseBtn__ImgUploader"
          type="file"
          accept="image/*"
          onChange={fileSelectedHandler}
        />
        Choose your file
        </label>
        <div className="previewImg__container">
          {imagePreview && (
            <img src={imagePreview} className="preview_img" alt="this" />
          )}
        </div>
        <button
          className="uploadBtn__ImgUploader"
          onClick={() => {
            fileUploadHandler();
            handleClick();
            
          }}
          >
          Upload
        </button>

    <a href="#">
        <span></span>
        <div className="liquid"></div>
    </a>
        <p>{message}</p>

        <div ref={targetRef}></div>
      </div>
     
    </div>
    <div className="foot_name">
          
          {data && (
            <div>
                  <p>{data.message}</p>
                  
              </div>
          )}
      </div>
          </div>
  );
}

export default ImageUploader;
