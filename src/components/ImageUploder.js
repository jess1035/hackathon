import React, { useState } from "react";
import axios from "axios";
import "./ImageUploder.css";
function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

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

  return (
    <div className="ImageUploader">
      <h1 className="ImageUploader__heading">Upload an Image</h1>
      <div className="ImageUploader__contents">

      

      <input className="browseBtn__ImgUploader" type="file" accept="image/*" onChange={fileSelectedHandler} />
<div className="previewImg__container">

      {imagePreview && (
        <img src={imagePreview} className="preview_img" alt="this" />
        )}

        </div>
      <button className="uploadBtn__ImgUploader" onClick={fileUploadHandler}>Upload</button>

      <p>{message}</p>
        </div>
    </div>
  );
}

export default ImageUploader;
