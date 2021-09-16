import {useState, useEffect} from 'react';

import {Instructor} from '@types';

type Output = [
  Array<Instructor>,
  boolean,
  string | Error,
]

export function useInstructors () {
  const [instructors, setInstructors] = useState<Array<Instructor>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null|string>(null);

  useEffect(() => {
    (async function fetchData () {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3000/instructors');
        const data = await response.json();
        console.log(data);
        setInstructors(data);

      } catch (e) {
        console.log('error', e);
        setError(e.message || e);
        setInstructors([]);
      }

      setLoading(false);
    })();
  }, []);

  return [
    instructors,
    loading,
    error,
  ] as Output;
}