import { Image, View, Text } from 'react-native';
import logo from '../../assets/logo.png';
import styles from './styles';

export default function Header() {
    return (
        <View style={styles.container} className='app-header'>
            <Image
                style={styles.img}
                source={logo}
            />
            <Text style={styles.text}>To-Dos</Text>
        </View>
    );
}