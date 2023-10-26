import { View, TextInput, Text, Switch, TouchableOpacity, Keyboard} from 'react-native';
import styles from './styles'
import { useState } from 'react';

export default function Form(props) {
    const handleAddPress = () => {
        if (taskDescription) {
            props.onAddTask(taskDescription, taskDone);

            setErrorMessage(null);
            setTaskDescription('');
            setTaskDone(false);
            Keyboard.dismiss();
        } else {
            setErrorMessage('The description is required.');
        }
    }

    const [taskDescription, setTaskDescription] = useState('');
    const handleDescriptionChange = (value) => { setTaskDescription(value); }

    const [taskDone, setTaskDone] = useState(false);
    const handleStatusChange = (value) => { setTaskDone(value); }

    const [errorMessage, setErrorMessage] = useState(null);
    return (
        <View style={styles.container}>
            {errorMessage && (
                <View style={styles.alert}>
                    <Text>Attention: {errorMessage}</Text>
                </View>)
            }
            <TextInput style={styles.input}
                placeholder='Enter a task description'
                maxLength={150}
                onChangeText={handleDescriptionChange}
                defaultValue={taskDescription}
            />

            <View style={styles.switch}>
                <Text>Completed:</Text>
                <Switch
                    value={taskDone}
                    onValueChange={handleStatusChange}
                />
            </View>

            <TouchableOpacity style={styles.bttn} onPress={handleAddPress}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    );
}