import React from 'react';
import {StyleSheet} from 'react-native';

/* components */
import {View, Text} from 'react-native';
import BackgroundCircles from './components/BackgroundCircles';
import BackHeader from './components/BackHeader';
import {AvatarImage, BookButton} from '@components';

/* hooks */
import {useContext} from 'react';
import {useRoute} from '@react-navigation/native';
import {useInstructor} from './hooks/useInstructor';

/* ui */
import {colors} from '@ui';

/* types */
import {Instructor} from '@types';

const InstructorContext = React.createContext<Instructor | null>(null);

export default function InstructorProfile (): JSX.Element {
  const {instructorId} = useRoute().params || {};
  const [instructor, loading, error] = useInstructor(instructorId);
  

  return (
    <InstructorContext.Provider value={instructor}>
      <View style={styles.mainContainer}>
        <BackHeader>Profile</BackHeader>

        <View style={styles.mainInfoContainer}>
          <ProfileHeader/>
          <Description/>
        </View>

        <View style={styles.bookButtonContainer}>
          <BookButton/>
        </View>
        
        <BackgroundCircles/>
      </View>
    </InstructorContext.Provider>
  );
}

function ProfileHeader (): JSX.Element {
  const {photo, name, rating} = useContext(InstructorContext) || {};
  return (
    <View style={styles.profileHeader}>
      <AvatarImage
        src={{uri: photo}}
        style={styles.photo}
        size={80}
      />
      <View style={styles.profileHeaderRightContainer}>
        <Text style={styles.name}>{ name }</Text>
        <Text style={styles.rating}>{ rating }</Text>
      </View>
    </View>
  );
}

function Description (): JSX.Element {
  const {slogan, bio} = useContext(InstructorContext) || {};

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.slogan}>"{ slogan }"</Text>
      <Text style={styles.bio}>{ bio }</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  mainInfoContainer: {
    padding: 30,
  },
  
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0,
  },
  photo: {
    borderColor: colors.textLight,
  },
  profileHeaderRightContainer: {
    marginLeft: 30,
    marginBottom: 15,
    alignSelf: 'flex-end',
  },
  name: {
    color: colors.textLight,
    fontSize: 21,
    fontWeight: '500',
    letterSpacing: 1,
  },
  rating: {
    color: colors.textLight,
    fontSize: 11,
  },

  infoContainer: {
    marginTop: 10,
    flex: 0,
    maxHeight: 400,
  },
  slogan: {
    color: colors.textLight,
    fontSize: 18,
    fontStyle: 'italic',
    alignSelf: 'center',
    marginVertical: 20,
  },
  bio: {
    color: colors.textLight,
    letterSpacing: 0.5,
    fontSize: 13,
    lineHeight: 19,
  },

  bookButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
