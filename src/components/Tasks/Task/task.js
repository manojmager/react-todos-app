import { View, Text, Pressable, Modal, Switch, Alert} from 'react-native';
import { useState } from 'react';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export default function Task(props) {
    const [showModal, setShowModal] = useState(false);
    const handleModalToggle = () => {
        setShowModal(!showModal);
    }

    const handleStatusChangePress = () => {
        props.onStatusChange(props.task.id)
    }

    const handleRemovePress = () => {
        Alert.alert(
            'Remove Task',
            'This action will permanently delete this task. This action cannot be undone!', [
            {
                text: 'Confirm',
                onPress: () => {
                    props.onTaskRemoval(props.task.id);
                    setShowModal(false);
                }
            },
            {
                text: 'Cancel'
            }
        ]);
    }
    return (
        <>
            <Pressable onPress={handleModalToggle}>
                <View style={styles.container}>
                    <Text style={styles.h2}>{props.task.description}</Text>
                    <Text style={styles.h3}>Id: {props.task.id}</Text>
                    <Text style={styles.h3}>Status: {props.task.done ? 'Completed' : 'Open'}</Text>
                </View>
            </Pressable>

            <Modal visible={showModal} animationType='fade' transparent={true}>
                <View style={styles.modelContainer}>
                    <View style={styles.model}>
                        <Text style={styles.modelTitle}>{props.task.description}</Text>

                        <Pressable onPress={handleModalToggle}>
                            <View style={styles.close}><Ionicons name="close-sharp" size={24} color="black" /></View>
                        </Pressable>
                        <View style={styles.action}>
                            <View>
                                <Switch
                                    value={props.task.done}
                                    onValueChange={handleStatusChangePress}
                                />
                                <Text>Toggle Status</Text>
                            </View>
                            <View>
                                <Pressable onPress={handleRemovePress}>
                                    <MaterialCommunityIcons name="delete" size={30} color="black" />
                                    <Text>Delete</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
}