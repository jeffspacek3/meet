import { useState } from "react";

const NumberOfEvents = ({  }) => {
  const [eventNumber, setEventNumber] = useState('32');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setEventNumber(value);
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