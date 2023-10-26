import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    borderRadius: 7,
  },
  h2:{
    fontSize: 13,
    fontWeight: 'bold',
  },
  h3:{
    color: 'grey'
  }, 
  modelContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  },
  model: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    padding: 45,
    margin: 30,
    borderRadius: 25,
    gap: 20,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    }

  },
  modelTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  close: {
    position: 'absolute',
    right: 0,
    top: -50,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

});

export default styles;