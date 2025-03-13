import { useMutation } from 'react-query';

import { postLogin } from '../services/api';

export const useFetch = () => {
  const mutation = useMutation(postLogin, {
    onSuccess: (data) => {
      console.log('SUCCESS', data);
    },
    onError: (error) => {
      console.log('ERROR BOSS', error);
    },
  });

  return { mutation };
};
