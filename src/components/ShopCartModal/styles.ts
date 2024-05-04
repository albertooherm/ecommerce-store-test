import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContainer: {
        padding: 16,
        borderRadius: 16,
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
      },
      modalContent: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      button: {
        marginHorizontal: 10,
      },
});

export default styles;
