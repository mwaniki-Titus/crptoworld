
import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import './Verify.scss'; 

const VerifyOnline = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      // Here you can add image validation logic, such as checking for facial features.
      // For demonstration, let's assume we have a function `isValidImage` that checks the image.
      if (isValidImage(imageSrc)) {
        setImageSrc(imageSrc);
        setErrorMessage(null);
      } else {
        setErrorMessage("Invalid image. Please try again.");
      }
    } else {
      setErrorMessage("No image captured. Please try again.");
    }
  }, [webcamRef]);

  const isValidImage = (imageSrc) => {
    // Implement your image validation logic here.
    // For now, we'll just return true to simulate a valid image.
    return true;
  };

  return (
    <div className="verify-online-container">
      <h1>Verify Online</h1>
      <p>Scan your face to verify your identity</p>
      <p>Please Ensure that Your eye is visible, else verification failure.</p>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <Webcam
        className="webcam-preview"
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={544} // Adjusting width to fit the container
        height={900} // Adjusting height to fit the container
      />
      <button onClick={capture}>Capture Image</button>
      {imageSrc && (
        <div>
          <h2>FaceID</h2>
          <img src={imageSrc} alt="FaceID" />
          <button>CONTINUE</button>
        </div>
      )}
    </div>
  );
};

export default VerifyOnline;
