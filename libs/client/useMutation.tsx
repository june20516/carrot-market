import { useState } from 'react';

export default function useMutation(
  url: URL | string
): [(data: any) => void, { loading: Boolean; responseData: Object | undefined; error: any }] {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [responseData, setResponseData] = useState<Object | undefined>(undefined);

  const mutation = async (data: any) => {
    setLoading(true);
    fetch(url, { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })
      .then(response => response.json())
      .then(setResponseData)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return [mutation, { loading, error, responseData }];
}
