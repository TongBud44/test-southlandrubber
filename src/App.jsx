import { useState } from "react";
import "./App.css";

function App() {
  // Logic ข้อที่ 3
  const [numberDisplay, setNumberDisplay] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const fileContent = e.target.result;
        const notePad = fileContent.split(/\s+/); // Array

        let currentIndex = 0;
        let numberSequence = "";

        const interval = setInterval(() => {
          const currentValue = notePad[currentIndex];
          console.log("currentValue", currentValue);

          if (!isNaN(currentValue)) {
            numberSequence = numberSequence + currentValue;
          } else {
            numberSequence = numberSequence + " ";
          }

          setNumberDisplay(numberSequence);
          console.log("numberSequence", numberSequence);

          currentIndex++;

          if (currentIndex >= notePad.length) {
            clearInterval(interval);
          }
        }, 1000);
      };

      reader.readAsText(file);
    }
  };

  return (
    <>
      <div className="main-content">
        <div className="container">
          <div className="box">Box-1</div>
          <div className="box">Box-2</div>
          <div className="box">Box-3</div>
          <div className="box">Box-4</div>
          <div className="box">Box-5</div>
          <div className="box">Box-6</div>
          <div className="box">Box-7</div>
          <div className="box">Box-8</div>
          <div className="box">Box-9</div>
          <div className="box">Box-10</div>
        </div>
        <div className="input-container">
          <input
            className="input"
            type="file"
            accept=".txt"
            onChange={handleFileChange}
          />
          <h1 className="display">{numberDisplay}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
