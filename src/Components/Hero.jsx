import React, {useState, useEffect } from 'react';

const TypingComponent = () => {
  const [textIndex, setTextIndex] = useState(0);
  const textArray = ["Fresher", "Full-Stack Developer", "Frontend Developer", "Java Programmer", "Python Enthusiast"];
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(textArray[textIndex]);
      setTextIndex((index) => (index + 1) % textArray.length);
    }, 2000); // Change typing speed by modifying the interval duration (milliseconds)

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [textIndex, textArray]);

  return <span>{displayText}</span>;
}

export const Hero = () => {
  const onButtonClick = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1gzOCePGr60mowhTkhEPHq8mKKmuR0DXF/view?usp=sharing";

    const openPDFInNewTab = () => {
      window.open(pdfUrl);
    };

    

    const downloadPDF = () => {
      fetch(pdfUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "Adnan-Baig-Resume.pdf"; // Specify the desired file name here
          link.style.display = "none";

          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error("Error downloading PDF:", error);
        });
    };

    openPDFInNewTab();
    downloadPDF();
  };


  return (
    <div className="hero" id="home">
      <div className="container">
        <h1 className="hero-title mt-5" data-text="WEB DEVELOPER" >
        <TypingComponent />
        </h1>
        <p className="b-text mt-2 text-center w-lg-50 m-lg-auto">
          Software engineer with a passion for clean code and elegant solutions.
          Explore my work in this understated portfolio.
        </p>
        <div className="profile-links mt-4 d-flex gap-3 justify-content-center">
          <a target="_blank" rel="noreferrer" href="https://github.com/Mrinal26" >
            <i
              style={{ color: "white" }}
              className="fa-brands mt-3 fa-github fa-2xl"
            ></i>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mrinal-kumar-227817194/">
            <i
              style={{ color: "white" }}
              className="fa-brands mt-3 fa-linkedin fa-2xl"
            ></i>
          </a>
          <p onClick={onButtonClick} className="btn1 p-0 mb-2 text-start">
            <p className="mbrt-slot-hover">
              <span className="slot-mask">
                <span
                  style={{ background: "red", padding: "5px" }}
                  className="slot-content resume-button-2"
                  hidden-slot-text="RESUME"
                >
                  RESUME
                </span>
              </span>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};
