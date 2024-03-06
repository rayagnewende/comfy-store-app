/* eslint-disable react/prop-types */
const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder="Type here"
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </label>
  );
};

export default FormInput;
