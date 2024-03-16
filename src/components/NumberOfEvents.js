import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [eventNumber, setEventNumber] = useState('32');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setEventNumber(value);
    setCurrentNOE(value);
    let errorText;
    if (isNaN(value) || value <=0) {
      errorText = 'Please enter a valid number';
      setErrorAlert(errorText);
    } else {
      errorText ='';
      setErrorAlert(errorText);
      setCurrentNOE(value);
    }
  };

  return (
    <div id="numberOfEvents">
      <label htmlFor="eventNumberInput">Number of Events</label>
      <input
        type="text"
        id="eventNumberInput"
        value={eventNumber}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default NumberOfEvents;