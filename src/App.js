import { useState } from "react";

export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <h1>Pizza Order</h1>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        Add Pepperoni
      </label>
      <h2>Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {isChecked && <li>Pepperoni</li>}
      </ul>
    </div>
  );
}
