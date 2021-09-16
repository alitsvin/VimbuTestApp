import React from 'react';
import {StyleSheet} from 'react-native';

/* components */
import {View, Text, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Image from 'react-native-fast-image';

/* types */
import {Instructor} from '@types';

/* ui */
import {colors, SCREEN_WIDTH} from '@ui';

interface CarouselProps {
  data: Array<Instructor>;
};

interface CardProps {
  item: Instructor;
};

export default function InstructorsCarousel ({data}: CarouselProps): JSX.Element {

  return (
    <Carousel
      data={data}
      renderItem={renderInstructor}
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
function renderInstructor ({item: instructor}: CardProps): JSX.Element {
  const shortenedBio = instructor.bio.length > maxBioLength
    ? instructor.bio.slice(0, maxBioLength).trim() + '...'
    : instructor.bio;

  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={{uri: instructor.photo}}
        resizeMode={Image.resizeMode.cover}
      />
      <Text style={styles.cardTitle}>{ instructor.name.toUpperCase() }</Text>
      <Text style={styles.cardBio}>
        { shortenedBio }
        <Text style={styles.showMoreLink}>Show More</Text>
      </Text>
    </View>
  );
}


const cardSize = 250;
const photoSize = 95;

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
  cardImage: {
    width: photoSize,
    height: photoSize,
    borderRadius: photoSize / 2,
    borderWidth: 3,
    borderColor: colors.buttonBlue,
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

