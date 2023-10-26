import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        alignSelf: 'stretch',
        backgroundColor: '#e7e7e7',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 50,
        paddingLeft: 10
    },
    img:{
        width: 40,
        height: 40
    },
    text:{
        color: '#FFAD00',
        fontWeight: 'bold',
        paddingLeft: 5
    }
  });
export default styles;