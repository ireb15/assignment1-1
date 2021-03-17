function TextInput(props) {
  const { label, textValue, placeholderValue, onChangeHandler } = props;
  
  return (
    <div className="text-input">
      {label && 
        <label className="text-input__label">
          {label}
        </label>
      }
      <input placeholder={placeholderValue} type="text" value={textValue} onChange={e => onChangeHandler(e.target.value)} className="text-input__input" />
    </div>
  );
}

export default TextInput;
