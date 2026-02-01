import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

function VehicleCarouselCard({ images, title }: { images: any[]; title?: string }) {
  const [index, setIndex] = useState(0);

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.card}>
      {title ? <Text style={styles.title}>{title}</Text> : null}

      <FlatList
        data={images}
        keyExtractor={(item, i) => i.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.image} resizeMode="cover" />
        )}
        scrollEnabled={false}
      />

      {/* Dots indicator */}
      <View style={styles.dotsContainer}>
        {images.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === index && styles.dotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

export default function ImagesCarousel() {
  const vehicleImages = [
    { uri: 'https://example.com/car1.jpg' },
    { uri: 'https://example.com/car2.jpg' },
    { uri: 'https://example.com/car3.jpg' },
  ];

  return (
    <View>
      <VehicleCarouselCard
        title="Véhicule - Peugeot 208"
        images={vehicleImages}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 10,
    overflow: 'hidden',
    // shadow iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation Android
    //elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 12,
    color: '#111',
  },
  image: {
    width: width - 32, // card margin * 2
    height: 200,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#3B4BFF',
  },
});
