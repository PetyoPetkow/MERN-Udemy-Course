import { FC, HTMLInputTypeAttribute } from 'react';

const FormRow: FC<FormRowProps> = ({ type, name, labelText, defaultValue }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ''}
        required
      />
    </div>
  );
};

interface FormRowProps {
  type: HTMLInputTypeAttribute;
  name: string;
  labelText?: string;
  defaultValue?: string | number;
}

export default FormRow;
