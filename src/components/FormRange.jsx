import { useState } from "react";
import { formatPrice } from "../utils";
import PropTypes from "prop-types";
                                                                        
// eslint-disable-next-line react/prop-types
const FormRange = ({ label, name, size, price }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer ">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        id={name}
        min={0}
        value={selectedPrice}
        max={maxPrice}
        step={step}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={` range range-primary ${size}`}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

FormRange.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
};

export default FormRange;
