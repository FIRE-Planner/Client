import { useState } from 'react';

import { signUp, USER } from '@apis/userAuth';

const useSignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [resultMsg, setResultMsg] = useState('');

  const requestSignUp = async (user: USER) => {
    setSubmitting(true);
    try {
      const { status, statusText } = await signUp(user);
      const isRequestSuccess = status === 201 && statusText === 'Created';
      if (isRequestSuccess) {
        setSuccess(true);
        setResultMsg('회원가입에 성공! 3초후 로그인 페이지로 이동합니다.');
      }
    } catch (error) {
      setResultMsg('회원가입에 실패하였습니다.');
    }

    setSubmitting(false);
  };

  return { isSubmitting, isSuccess, resultMsg, requestSignUp };
};

export default useSignUp;
