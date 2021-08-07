import './form-input.styles.scss';

const FormInput = ({ id, handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" 
        id={id}
        onChange={handleChange}
        {...otherProps}
      />
      { 
        label && 
        <label 
          htmlFor={id}
          className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      }
    </div>
  )
}

export default FormInput;
