import { View, ScrollView, Text } from 'react-native';
import styles from './styles';
import Task from './Task/task';

export default function Tasks(props) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.h1}>Tasks</Text>
                {props.tasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        onStatusChange={props.onStatusChange} // Pass the function here
                        onTaskRemoval={props.onTaskRemoval}
                    />
                ))}
            </ScrollView>
        </View>
    );
}