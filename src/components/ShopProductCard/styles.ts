import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  productName: {
    marginVertical: 10,
  },
  price: {
    marginBottom: 10,
    color: '#333',
  },
  button: {
    marginVertical: 10,
  },
});

export default styles;
