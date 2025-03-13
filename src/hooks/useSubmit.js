import { useMutation } from 'react-query';

export const useSubmit = ({ request, onSuccess, onError }) => {
  const mutation = useMutation(request, { onSuccess, onError });

  return {
    isError: mutation.isError,
    error: mutation.error?.message,
    onSubmit: mutation.mutate,
  };
};
