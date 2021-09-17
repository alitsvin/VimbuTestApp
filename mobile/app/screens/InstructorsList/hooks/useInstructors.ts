import {useState, useEffect} from 'react';
import {useLoading} from '@hooks';

import API from '@services/APIService';

import {Instructor} from '@types';

type Output = [
  Array<Instructor>,
  boolean,
  string | Error,
]

export function useInstructors () {
  const [instructors, setInstructors] = useState<Array<Instructor>>([]);
  const [loading, withLoading] = useLoading(false);
  const [error, setError] = useState<null|string>(null);

  useEffect(() => {
    withLoading(async function fetchData () {
      try {
        const data = await API.get('/instructors');
        setInstructors(data);

      } catch (e) {
        console.warn('Failed to load instructors', e);
        setError(e.message || e);
        setInstructors([]);
      }
    });
  }, []);

  return [
    instructors,
    loading,
    error,
  ] as Output;
}