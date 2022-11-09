import Link from 'next/link';
import { FormEvent } from 'react';

import SubmitButton from '@components/Button/SubmitButton';
import { InputWithLabel } from '@components/Input/InputWithLabel';
import { form, linkWrapper } from '@containers/SignIn/signin.styled';
import useInputValidation from '@hooks/useInputValidation';
import useLogin from '@hooks/useLogin';
import validate from '@utils/validate';

const SignInContainer = () => {
  // const { isSubmitting, isSuccess, resultMsg, requestLogIn } = useLogin();
  const { values, results, isAllPass, eventHandler } = useInputValidation({
    names: ['email', 'password'],
    validate,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(results.email, results.password);
  };

  return (
    <form css={form} onSubmit={handleSubmit}>
      <h1>FIRE-Planner 🔥</h1>
      <InputWithLabel
        label="이메일"
        name="email"
        type="email"
        placeholder="이메일을 입력해주세요"
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
      <SubmitButton name="로그인" />
      <div css={linkWrapper}>
        <div>회원가입 하신 적이 없나요?</div>
        <Link href="/signup">회원가입 &rarr;</Link>
      </div>
    </form>
  );
};

export default SignInContainer;
