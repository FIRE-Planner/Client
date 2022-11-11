import { css } from '@emotion/react';

const button = css`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  color: white;
  background: #5c7cfa;
  margin-top: 12px;

  :disabled {
    background-color: #606060;
    cursor: not-allowed;
  }
`;

interface IProps {
  name: string;
  disabled: boolean;
}

const SubmitButton = ({ name = '제출', disabled }: IProps) => {
  return (
    <button css={button} type="submit" disabled={disabled}>
      {name}
    </button>
  );
};

export default SubmitButton;
