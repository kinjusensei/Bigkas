import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

type Slide = {
  id: string;
  title: string;
  description: string;
  image: any;
  color: string;
  bg: string;
};

const SLIDES: Slide[] = [
  {
    id: '1',
    title: 'Learn Kapampangan',
    description:
      'Discover the rich language of Pampanga. Learn greetings, numbers, family words and more through fun interactive lessons.',
    image: require('../assets/images/pampanga_map.png'),
    color: '#D85A30',
    bg: '#FAECE7',
  },
  {
    id: '2',
    title: 'Learn Tagalog',
    description:
      'Master the national language of the Philippines. Build your vocabulary step by step with our guided lesson system.',
    image: require('../assets/images/manila_map.png'),
    color: '#1D9E75',
    bg: '#E1F5EE',
  },
  {
    id: '3',
    title: 'Learn Waray',
    description:
      'Explore the language of Eastern Visayas. Learn Waray words and phrases through our engaging quiz and lesson system.',
    image: require('../assets/images/samar_map.png'),
    color: '#534AB7',
    bg: '#EEEDFE',
  },
];

export default function IntroSlidesScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  function handleNext() {
    if (currentIndex < SLIDES.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    } else {
      router.push('/create-account' as any);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      flatListRef.current?.scrollToIndex({ index: prevIndex, animated: true });
      setCurrentIndex(prevIndex);
    }
  }

  function handleSkip() {
    router.push('/create-account' as any);
  }

  // Sync dot indicator when user swipes manually
  function onViewableItemsChanged({ viewableItems }: any) {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index ?? 0);
    }
  }

  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  return (
    <SafeAreaView style={styles.container}>

      {/* Top row — back + skip */}
      <View style={styles.topRow}>
        {currentIndex > 0 ? (
          <Pressable onPress={handlePrev}>
            <Text style={styles.backText}>← Back</Text>
          </Pressable>
        ) : (
          <View />
        )}
        <Pressable onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
      </View>

      {/* Slides — swipable */}
      <FlatList
        ref={flatListRef}
        data={SLIDES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyExtractor={(item) => item.id}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>

            {/* Image */}
            <View style={[styles.imageContainer, { backgroundColor: item.bg }]}>
              <Image
                source={item.image}
                style={styles.slideImage}
                resizeMode="contain"
              />
              <View style={styles.imageOverlay}>
                <View style={[styles.dialectBadge, { backgroundColor: item.color }]}>
                  <Text style={styles.dialectBadgeText}>🇵🇭 {item.title}</Text>
                </View>
              </View>
            </View>

            {/* Text content */}
            <View style={styles.textContent}>
              <Text style={[styles.slideTitle, { color: item.color }]}>
                {item.title}
              </Text>
              <Text style={styles.slideDescription}>
                {item.description}
              </Text>
            </View>

          </View>
        )}
      />

      {/* Bottom section */}
      <View style={styles.bottom}>

        {/* Dot indicators — tappable */}
        <View style={styles.dotsRow}>
          {SLIDES.map((slide, index) => (
            <Pressable
              key={index}
              onPress={() => {
                flatListRef.current?.scrollToIndex({ index, animated: true });
                setCurrentIndex(index);
              }}
            >
              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      index === currentIndex
                        ? SLIDES[currentIndex].color
                        : '#E5E7EB',
                    width: index === currentIndex ? 24 : 8,
                  },
                ]}
              />
            </Pressable>
          ))}
        </View>

        {/* Next / Get Started button */}
        <Pressable
          style={[styles.nextBtn, { backgroundColor: SLIDES[currentIndex].color }]}
          onPress={handleNext}
        >
          <Text style={styles.nextBtnText}>
            {currentIndex === SLIDES.length - 1 ? 'Get Started' : 'Next →'}
          </Text>
        </Pressable>

        {/* Page counter */}
        <Text style={styles.pageCounter}>
          {currentIndex + 1} of {SLIDES.length}
        </Text>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  backText: {
    fontSize: 14,
    color: '#999',
    fontWeight: '600',
  },
  skipText: {
    fontSize: 14,
    color: '#999',
    fontWeight: '600',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    width: width,
    height: width * 0.85,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  dialectBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
  },
  dialectBadgeText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  textContent: {
    paddingHorizontal: 28,
    paddingTop: 24,
    gap: 12,
    alignItems: 'center',
  },
  slideTitle: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
  },
  slideDescription: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  bottom: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    gap: 16,
    alignItems: 'center',
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  dot: {
    height: 8,
    borderRadius: 999,
  },
  nextBtn: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  nextBtnText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  pageCounter: {
    fontSize: 13,
    color: '#999',
    fontWeight: '500',
  },
});