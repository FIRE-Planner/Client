import { css } from '@emotion/react';
import { InputHTMLAttributes, ReactNode } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  helperText: ReactNode;
}

const container = css`
  display: flex;
  flex-direction: column;
  padding: 12px 0;

  label {
    font-size: 18px;
    margin-bottom: 8px;
  }

  input {
    padding: 8px 12px;
    border: 1px solid #dee2e6;
    border-radius: 4px;
  }
`;

const HelperText = css`
  padding-top: 10px;
  font-size: small;
  color: #800024;
`;

const InputWithLabel = ({ name, label, helperText, ...rest }: IProps) => {
  return (
    <div css={container}>
      <label htmlFor="input">{label}</label>
      <input name={name} {...rest} />
      {helperText && <div css={HelperText}>{helperText}</div>}
    </div>
  );
};

export { InputWithLabel };
