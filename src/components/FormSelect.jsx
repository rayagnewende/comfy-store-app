// eslint-disable-next-line react/prop-types
const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label htmlFor={label}>
        <span className="capitalize label-text">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        className={`input-sm ${size}`}
        defaultValue={defaultValue}
      >
        {
          // eslint-disable-next-line react/prop-types
          list.map((element) => {
            return (
              <option key={element} value={element}>
                {element}
              </option>
            );
          })
        }
      </select>
    </div>
  );
};

export default FormSelect;
