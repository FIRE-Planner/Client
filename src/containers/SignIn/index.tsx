import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useEffect } from 'react';

import SubmitButton from '@components/Button/SubmitButton';
import { InputWithLabel } from '@components/Input/InputWithLabel';
import { form, linkWrapper } from '@containers/SignIn/signin.styled';
import useInputValidation from '@hooks/useInputValidation';
import useLogIn from '@hooks/useLogIn';
import validate from '@utils/validate';

const SignInContainer = () => {
  const router = useRouter();
  const { isSubmitting, isSuccess, resultMsg, requestLogIn } = useLogIn();
  const { values, results, isAllPass, eventHandler } = useInputValidation({
    names: ['email', 'password'],
    validate,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = values;
    requestLogIn(email, password);
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
      <div>{resultMsg}</div>
      <SubmitButton name="로그인" disabled={!isAllPass || isSubmitting} />
      <div css={linkWrapper}>
        <div>회원가입 하신 적이 없나요?</div>
        <Link href="/signup">회원가입 &rarr;</Link>
      </div>
    </form>
  );
};

export default SignInContainer;
