import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      bottom: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#e7e7e7',
      display: 'flex',
      flexDirection: 'coloum',
      alignItems: 'center',
      // justifyContent: 'center',
      padding: 35,
      gap: 25
    },
    alert:{
      alignSelf: 'stretch',
    },
    input:{
      alignSelf: 'stretch',
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 5,
    },
    switch:{
      alignSelf: 'stretch',
      gap: 5,
    },
    bttn:{
      display: 'flex',
      alignItems: 'center',
      borderRadius: 5,
      backgroundColor: 'white',
      width: '50%',
      padding: 10,
      marginTop: 40,
    },
  });
export default styles;