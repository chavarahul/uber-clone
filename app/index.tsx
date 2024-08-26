import { Redirect } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const PreLoader = ({ onAnimationEnd }: any) => {
  const [loading, setLoading] = useState(true);
  const colorAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(colorAnim, {
      toValue: 1,
      duration: 8000,
      useNativeDriver: false,
    }).start(() => {
      setLoading(false);
      onAnimationEnd();
    });
  }, []);

  const fillWidth = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: 'black' }]}>Ryde</Text>
        <Animated.View
          style={[
            styles.fillOverlay,
            {
              width: fillWidth,
            },
          ]}
        >
          <Text style={[styles.text, styles.fillText]}>Ryde</Text>
        </Animated.View>
      </View>
          <Text className='text-black text-center leading-6 ' style={{fontFamily:'Jakarta-Medium'}}>Streamlined bookings, real-time tracking, and seamless travel experiences</Text>
    </View>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleAnimationEnd = () => {
    setIsLoading(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <PreLoader onAnimationEnd={handleAnimationEnd} />
      ) : (
        <Redirect href={'/(auth)/welcome'} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal:30
  },
  textContainer: {
    position: 'relative',
  },
  text: {
    fontSize: 55,
    fontFamily: 'Jakarta-ExtraBold'
  },
  fillOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
  },
  fillText: {
    color: '#0286FF',
  },
});

export default Home;
