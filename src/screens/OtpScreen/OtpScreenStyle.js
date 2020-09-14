import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#fff', alignItems: 'center'},
  emptyContainer: {height: '20%'},
  inputContainer: {flexDirection: 'row'},
  optInput: {
    height: 50,
    width: '15%',
    backgroundColor: '#d3d3d3',
    fontSize: 18,
    borderRadius: 4,
    paddingLeft: 10,
    borderColor: '#FFF',
    borderWidth: 1.2,
    color: '#000',
  },
  submitContainer: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#d3d3d3',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {color: '#fff', fontSize: 24},
});
