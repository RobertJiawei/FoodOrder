import products from '@/assets/data/products';
import { View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import { Image, StyleSheet, Text } from 'react-native';

const product = products[0]

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image}/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  price: {  
    color: Colors.light.tint
  },
  image:{
    width: "100%",
    aspectRatio: 1
  }
});
