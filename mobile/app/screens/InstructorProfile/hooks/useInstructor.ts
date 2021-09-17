import {useState, useEffect} from 'react';
import {useLoading} from '@hooks';

import API from '@services/APIService';

import {Instructor} from '@types';

type Output = [
  instructor: Instructor | null,
  loading: boolean,
  error: Error | string | null,
];

export function useInstructor (id: string): Output {
  const [instructor, setInstructor] = useState<Instructor | null>(null);
  const [loading, withLoading] = useLoading(false);
  const [error, setError] = useState<null|string>(null);

  useEffect(() => {
    withLoading(async function getInstructor (): Promise<void> {
      try {
        const instructor = await API.get(`/instructors/${id}`);
        if (instructor) {
          setInstructor(instructor);
        } else {
          console.log('Something went wrong during fetching instructor');
        }

      } catch (e) {
        console.warn('Failed to toad instructor', e);
        setError(e.message || e);
      }
      
    });
  }, [id]);

  return [
    instructor,
    loading,
    error,
  ];
}
