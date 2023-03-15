import { StyleSheet, Image, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/images.jpeg')}
      />
      <Text>$35</Text>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/images.jpeg')}
      />
      <Text>$35</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  book: {
    width: 50,
    height: 50,
  },
});
