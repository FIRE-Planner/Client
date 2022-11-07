import { css } from '@emotion/react';

const button = css`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  color: white;
  background: #5c7cfa;
  margin-top: 12px;
`;

interface IProps {
  name?: string;
}

const SubmitButton = ({ name = '제출' }: IProps) => {
  return (
    <button css={button} type="submit">
      {name}
    </button>
  );
};

export default SubmitButton;
