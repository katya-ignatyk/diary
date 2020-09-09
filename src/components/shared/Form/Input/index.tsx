import React from 'react';
import styles from './styles.css';

type inputType = 'checkbox'|'file'|'hidden'|'image'|'password'|'radio'|'reset'|'submit'|'text'|'email'|'number';

interface IInputProps {
  text : string;
  name : string;
  id : string;
  type : inputType;
  value ?: string | number;
  onChange ?: (eventOrPath : string | React.ChangeEvent<unknown>) => void | ((eventOrTextValue : string | React.ChangeEvent<unknown>) => void);
}

function Input(props : IInputProps) {
  const { text, name, id, type, value, onChange } = props;
  return (
    <>
      <label className={styles['form-group__label']} htmlFor={id}>{text}
        <input
          id={id}
          name={name}
          type={type}
          className={styles['form-group__input']}
          onChange={onChange}
          value={value}
        />
      </label>
    </>
  );
}

export default Input;