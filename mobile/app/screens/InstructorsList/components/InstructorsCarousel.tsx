import React from 'react';
import {StyleSheet} from 'react-native';

/* components */
import {View, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';

/* types */
import {Instructor} from '@types';

/* ui */
import {SCREEN_WIDTH} from '@ui';

interface CarouselProps {
  data: Array<Instructor>;
};

interface CardProps {
  item: Instructor;
  index: number;
};

export default function InstructorsCarousel ({data}: CarouselProps): JSX.Element {

  return (
    <Carousel
      data={data}
      renderItem={renderInstructor}
      sliderWidth={SCREEN_WIDTH}
      itemWidth={200}
      inactiveSlideScale={0.7}
      contentContainerCustomStyle={{alignItems: 'center'}}
      containerCustomStyle={styles.carousel}
    />
  );
}

function renderInstructor ({item, index}: CardProps): JSX.Element {
  return (
    <View style={styles.card}>
      <View style={styles.cardImageContainer}></View>
      <Text style={styles.cardTitle}>{ item.name }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    flex: 0,
    height: 200,
  },
  card: {
    width: '100%',
    height: 200,
    borderColor: '#999',
    borderWidth: 1,
    alignItems: 'center',
  },
  cardImageContainer: {
    width: 50,
    height: 50,
  },
  cardTitle: {},
});

