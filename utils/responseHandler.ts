type SetData<T = unknown> = (data: T) => void;
type SetMessage = (message: string) => void;
type SetError = (message: string) => void;
type SetLoading = (loading: boolean) => void;

type ApiResponse<T = unknown> = {
  data?: {
    status?: boolean;
    data?: T;
    message?: string;
  };
};

export const handleResponse = <T = unknown>(
  response: ApiResponse<T>,
  setData: SetData<T> = () => { },
  setMessage: SetMessage = () => { },
  setLoading: SetLoading = () => { }
): boolean => {
  const success = response?.data?.status;

  if (!success) {
    console.error(
      "Unexpected API response:",
      response
    );

    setLoading(false);
    return false;
  }

  if (response.data?.data !== undefined) {
    setData(response.data.data);
  }

  setMessage(
    response.data?.message ||
    "Request successful"
  );

  setLoading(false);

  return true;
};

export const handleError = (
  error: any,
  setError: SetError = () => { },
  setLoading: SetLoading = () => { }
): boolean => {
  console.error(
    "API Error:",
    error
  );

  const errorMessage =
    error?.response?.data?.message ||
    error?.message ||
    "An error occurred";

  setError(errorMessage);
  setLoading(false);

  return false;
};