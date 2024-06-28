import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: '#DDDDDD',
    color: 'black',
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '20%',
    position: 'absolute',
    left: 40,
    bottom: 270,
  },
  buttonMax: {
    padding: 10,
    margin: 10,
    backgroundColor: '#DDDDDD',
    color: 'black',
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '20%',
    position: 'absolute',
    right: 40,
    bottom: 270,
  },
  temperatureText: {
    fontSize: 48,
    textAlign: 'center',
    marginVertical: 20,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  containerColor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerColor: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
});
