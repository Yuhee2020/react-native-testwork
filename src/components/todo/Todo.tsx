import React, {useCallback} from "react";
import {deleteTodoTC, updateTodoTC} from "../../store";
import {EditablSpan} from "../common/editablSpan/EditablSpan";
import {useAppDispatch} from "../../hooks/hooks";
import {TodoType} from "../../api";
import {View} from "react-native";
import ExpoCheckbox from "expo-checkbox";
import {MaterialIcons} from "@expo/vector-icons";
import {IconButton} from "native-base";
import {styles} from "./todoStyles";

type PropsType = {
    todo: TodoType
}

export const Todo = React.memo(({todo: {status, name, _id}}: PropsType) => {
    const dispatch = useAppDispatch()

    const handleCheckboxChange = () => {
        dispatch(updateTodoTC({id: _id, status: !status}))
    }
    const changeTitle = useCallback((taskTitle: string) => {
        dispatch(updateTodoTC({id: _id, name: taskTitle}))
    }, [_id, dispatch])

    const onDeletePress = () => {
        dispatch(deleteTodoTC(_id))
    }

    return (
        <View style={styles.todoContainer}>
            <View style={styles.checkbox}><ExpoCheckbox
                onValueChange={handleCheckboxChange}
                value={status}
            />
            </View>
            <View style={styles.editablSpan}>
                <EditablSpan title={name}
                             changeTitle={changeTitle}/>
            </View>
            <View style={styles.button}>
                <IconButton
                    borderColor={"gray.300"}
                    size={"lg"}
                    onPress={onDeletePress}
                    variant="outline"
                    _icon={{
                        color:"white",
                        name: "delete",
                        as: MaterialIcons,
                    }}/>
            </View>
        </View>)
})


