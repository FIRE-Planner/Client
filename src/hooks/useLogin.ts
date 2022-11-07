// import { logIn } from '@/apis/userAuth';
// import { saveAccessToken } from '@/utils/localStorage';
import { useState } from 'react';

const useLogin = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [resultMsg, setResultMsg] = useState('');

  const requestLogIn = async (email: string, password: string) => {
    setSubmitting(true);
    //   try {
    //     const { status, data } = await logIn(email, password);
    //     const isSuccess = status === 200 && data?.access_token;
    //     if (isSuccess) {
    //       setSuccess(true);
    //       saveAccessToken(data.access_token);
    //     }
    //   } catch (error) {
    //     setResultMsg('로그인에 실패하였습니다!');
    //   }
    //   setSubmitting(false);
    // };

    return { isSubmitting, isSuccess, resultMsg, requestLogIn };
  };
};

export default useLogin;
