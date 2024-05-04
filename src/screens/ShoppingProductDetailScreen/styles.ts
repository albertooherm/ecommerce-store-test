import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 16,
    paddingTop: 24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#223263',
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    color: '#223263',
    fontWeight: 'regular',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#9098B1',
    lineHeight: 24,
    marginBottom: 20,
  },
  details: {
    fontSize: 16,
    color: '#334E68',
    marginBottom: 10,
    lineHeight: 22,
  },
  button: {
    marginBottom: 20,
  },
  variants: {
    fontSize: 16,
    color: '#334E68',
    padding: 10,
    backgroundColor: '#F0F4F8',
    borderRadius: 5,
    marginVertical: 5,
    textAlign: 'center',
  },
  variantCard: {
    padding: 10,
    margin: 5,
    backgroundColor: '#E1E9F2',
    borderRadius: 8,
    width: 250,
  },
  variantText: {
    fontSize: 16,
    marginBottom: 5,
  },
  variantList: {
    marginTop: 10,
    marginBottom: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
