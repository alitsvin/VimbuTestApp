import React from 'react';
import {StyleSheet} from 'react-native';

/* components */
import {Text, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {AvatarImage} from '@components';

/* hooks */
import {useNavigation} from '@react-navigation/native';

/* ui */
import {colors, SCREEN_WIDTH} from '@ui';

/* types */
import {Instructor} from '@types';

interface CarouselProps {
  data: Array<Instructor>;
};

interface CardProps {
  instructor: Instructor;
  onPress: () => void;
};

export default function InstructorsCarousel ({data}: CarouselProps): JSX.Element {
  const {navigate} = useNavigation();

  const openInstructorProfile = (instructor: Instructor): void => {
    navigate('InstructorProfile', {instructorId: instructor.id});
  }

  return (
    <Carousel
      data={data}
      renderItem={({item}) => (
        <InstructorCard
          onPress={() => openInstructorProfile(item)}
          instructor={item}
          key={item.id}
        />
      )}
      sliderWidth={SCREEN_WIDTH}
      itemWidth={cardSize}
      inactiveSlideScale={0.7}
      contentContainerCustomStyle={{alignItems: 'center'}}
      containerCustomStyle={styles.carousel}
      slideStyle={styles.cardContainer}
    />
  );
}

const maxBioLength = 90;
function InstructorCard ({instructor, onPress}: CardProps): JSX.Element {

  const shortenedBio = instructor.bio.length > maxBioLength
    ? instructor.bio.slice(0, maxBioLength).trim() + '...'
    : instructor.bio;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.card}
      activeOpacity={0.9}
    >
      <AvatarImage
        src={{uri: instructor.photo}}
        size={95}
      />
      <Text style={styles.cardTitle}>{ instructor.name.toUpperCase() }</Text>
      <Text style={styles.cardBio}>
        { shortenedBio }
        <Text style={styles.showMoreLink}>Show More</Text>
      </Text>
    </TouchableOpacity>
  );
}

const cardSize = 250;

const styles = StyleSheet.create({
  carousel: {
    flex: 0,
    height: cardSize,
    maxHeight: cardSize,
  },
  cardContainer: {
    height: cardSize,
    shadowColor: '#999',
    shadowRadius: 6,
    shadowOpacity: 0.7,
    shadowOffset: {width: 0, height: 0},
    padding: 10,
  },
  card: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#ffffffcc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  cardTitle: {
    color: colors.textDarkGray,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  cardBio: {
    color: colors.textGray,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 1,
    textAlign: 'center',
  },
  showMoreLink: {
    color: colors.buttonBlue,
  },
});

