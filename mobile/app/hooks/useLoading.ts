import {useState} from 'react';

type Output = [
  loading: boolean,
  wrapper: (cb: Function) => Promise<void>,
  setLoading: (newState: boolean) => void,
];

export function useLoading (initialState: boolean = false): Output {
  const [loading, setLoading] = useState(initialState);

  const wrapper = async (cb: Function) => {
    setLoading(true);
    await cb();
    setLoading(false);
  };

  return [
    loading,
    wrapper,
    setLoading,
  ];
}
