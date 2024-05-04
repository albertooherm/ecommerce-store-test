import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    padding: 16,
    borderRadius: 4,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalContent: {
    fontSize: 16,
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#3366FF',
    borderColor: '#3366FF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderColor: '#3366FF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
