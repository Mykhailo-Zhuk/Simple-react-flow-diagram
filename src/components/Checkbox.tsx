import React, { useState } from 'react';

const Checkbox = ({ label, onClick }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prevState) => !prevState)}
          onClick={() => onClick(label)}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;
