import Tasks from "../../components/Tasks/tasks";
export default function HomeScreen(props){
    return(
        <Tasks
            tasks={props.tasks}
            onStatusChange={props.onStatusChange}
            onTaskRemoval={props.onTaskRemoval}
        />
    );
}