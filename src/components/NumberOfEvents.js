import { useState } from "react";

const NumberOfEvents = ({ setCurrentNoe, setErrorAlert }) => {
  const [eventNumber, setEventNumber] = useState('32');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setEventNumber(value);
    setCurrentNoe(value);
    let errorText;
    if (isNaN(value)) {
      errorText = 'Please enter a valid number';
    } else if (value < 0) {
      errorText = 'The number must be greater than 0';
    } else {
      errorText ='';
    }
    setErrorAlert(errorText);
  }

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