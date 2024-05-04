import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e4e9f2',
      },
      addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      },
      positionIcon: {
        flexDirection: 'row', alignItems: 'center',
      },
      locationIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
      },
      addressTextContainer: {
        flexDirection: 'column',
      },
      deliveryLabel: {
        fontSize: 12,
        color: '#8F9BB3',
        fontWeight: 'normal',
        marginBottom: 2,
      },
      addressText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#222B45',
      },
      iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8,
      },
      iconButtonContainer: {
        position: 'relative',
      },
      iconButton: {
        backgroundColor: 'transparent',
      },
      badgeContainer: {
        position: 'absolute',
        right: -6,
        top: -3,
        backgroundColor: '#3366ff',
        borderRadius: 15,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      },
      badge: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
      },
});

export default styles;
