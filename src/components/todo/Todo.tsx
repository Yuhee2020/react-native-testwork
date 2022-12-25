import React, {useCallback, useEffect, useRef} from "react";
import {deleteTodoTC, updateTodoTC} from "../../store";
import {EditablSpan} from "../common/editablSpan/EditablSpan";
import {useAppDispatch} from "../../hooks/hooks";
import {TodoType} from "../../api";
import {View, Animated} from "react-native";
import ExpoCheckbox from "expo-checkbox";
import {MaterialIcons} from "@expo/vector-icons";
import {IconButton} from "native-base";
import {styles} from "./todoStyles";
import {TodoImage} from "./todoImage/TodoImage";

type PropsType = {
    todo: TodoType
    index:number
}

export const Todo = React.memo(({todo: {status, name, _id,description},index}: PropsType) => {
    const opacity=useRef(new Animated.Value(0)).current

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

    useEffect(()=>{
        Animated.timing(opacity,{
            toValue:1,
            duration: 300,
            delay: 50*index,
            useNativeDriver:true
        }).start()
    })

    return (
        <Animated.View style={[styles.todoContainer,{opacity}]}>
            <View style={styles.checkbox}><ExpoCheckbox
                onValueChange={handleCheckboxChange}
                value={status}
            />
            </View>
            <View style={styles.editablSpan}>
                <EditablSpan title={name}
                             changeTitle={changeTitle}/>
            </View>
            <TodoImage todoImage={description} todoId={_id}/>
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
        </Animated.View>)
})


