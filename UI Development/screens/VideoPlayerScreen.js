import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VideoPlayerScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Video Player</Text>
      {/* Add video player component here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default VideoPlayerScreen;
