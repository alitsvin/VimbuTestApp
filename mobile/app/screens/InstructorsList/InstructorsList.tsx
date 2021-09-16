import React from 'react';
import {StyleSheet} from 'react-native';

/* components */
import {View, Text, TouchableOpacity} from 'react-native';
import InstructorsCarousel from './components/InstructorsCarousel';

/* hooks */
import {useEffect, useState} from 'react';

/* types */
import {Instructor} from '@types';

interface Props {};

export default function InstructorsList ({}: Props): JSX.Element {
  const [instructors, setInstructors] = useState<Array<Instructor>>([]);
  const [error, setError] = useState<null|string>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
  
  return (
    <View style={styles.mainContainer}>
      <Header/>
      <InstructorsCarousel
        data={instructors}
      />
    </View>
  );
}

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  text: {
    color: '#999999',
  },

  header: {
    flex: 0,
    height: 60,
    width: '100%',
  },
});
