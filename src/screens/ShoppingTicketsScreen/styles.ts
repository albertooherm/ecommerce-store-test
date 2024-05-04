import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#666',
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    marginTop: 8,
  },
  deleteButton: {
    marginTop: 10,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
