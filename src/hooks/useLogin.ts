import { useState } from 'react';

import { logIn } from '@apis/userAuth';
import { saveAccessToken } from '@utils/token';

const useLogIn = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [resultMsg, setResultMsg] = useState('');

  const requestLogIn = async (email: string, password: string) => {
    setSubmitting(true);
    try {
      const { status, data } = await logIn(email, password);
      const isRequestSuccess = status === 200 && data?.access_token;
      if (isRequestSuccess) {
        setSuccess(true);
        saveAccessToken(data.access_token);
      }
    } catch (error) {
      setResultMsg('로그인에 실패하였습니다!');
    }
    setSubmitting(false);
  };

  return { isSubmitting, isSuccess, resultMsg, requestLogIn };
};

export default useLogIn;
