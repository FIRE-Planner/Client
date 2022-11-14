import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useEffect } from 'react';

import SubmitButton from '@components/Button/SubmitButton';
import { InputWithLabel } from '@components/Input/InputWithLabel';
import useInputValidation from '@hooks/useInputValidation';
import useSignUp from '@hooks/useSignUp';
import validate from '@utils/validate';

const form = css`
  padding: 42px;

  h1 {
    text-align: center;
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: 600;
  }
`;

const linkWrapper = css`
  display: flex;
  justify-content: space-between;
  margin: 24px 12px;

  a {
    color: #4c6ef5;
  }
`;

const SignUpContainer = () => {
  const router = useRouter();
  const { isSubmitting, isSuccess, resultMsg, requestSignUp } = useSignUp();
  const { values, results, isAllPass, eventHandler } = useInputValidation({
    names: ['name', 'id', 'email', 'password', 'checkPassword'],
    validate,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, id, email, password, checkPassword } = values;
    requestSignUp({
      name,
      id,
      email,
      password,
      secondPassword: checkPassword,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => router.push('/login'), 3000);
    }
  }, [isSuccess]);

  return (
    <form css={form} onSubmit={handleSubmit}>
      <h1>FIRE-Planner 🔥</h1>
      <InputWithLabel
        label="이름"
        name="name"
        type="text"
        placeholder="이름을 입력해주세요."
        onBlur={eventHandler}
        helperText={results.name.isError && results.name.errorMsg}
      />
      <InputWithLabel
        label="아이디"
        name="id"
        type="text"
        placeholder="ID를 입력해주세요."
        onBlur={eventHandler}
        helperText={results.id.isError && results.id.errorMsg}
      />
      <InputWithLabel
        label="이메일"
        name="email"
        type="email"
        placeholder="이메일을 입력해주세요."
        onBlur={eventHandler}
        helperText={results.email.isError && results.email.errorMsg}
      />
      <InputWithLabel
        label="비밀번호"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        onBlur={eventHandler}
        helperText={results.password.isError && results.password.errorMsg}
      />
      <InputWithLabel
        label="비밀번호 확인"
        name="checkPassword"
        type="password"
        placeholder="비밀번호를 다시 입력해주세요."
        onBlur={e => eventHandler(e, values.password)}
        helperText={
          results.checkPassword.isError && results.checkPassword.errorMsg
        }
      />
      <div>{resultMsg}</div>
      <SubmitButton name="회원가입" disabled={!isAllPass || isSubmitting} />
      <div css={linkWrapper}>
        <div>이미 회원이신가요?</div>
        <Link href="/signin">로그인 &rarr;</Link>
      </div>
    </form>
  );
};

export default SignUpContainer;
