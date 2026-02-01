
import { StyleSheet, View } from 'react-native';
import DynamicList from '../components/DynamicList';
import Header from '../components/Header';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', gap: 8 }}>
      <Header />
      <DynamicList />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  textTitle: { 
    fontSize: 24, fontWeight: '700', color: '#3B4BFF'
  }
});
