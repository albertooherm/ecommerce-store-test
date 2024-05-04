import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-1'
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16
  },
  icon: {
    width: 22,
    height: 22,
    tintColor: 'color-primary-500'
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'border-basic-color-4'
  },
  sectionHeader: {
    paddingVertical: 10,
    backgroundColor: 'background-basic-color-2'
  },
  sectionTitle: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: 'bold'
  }
});
