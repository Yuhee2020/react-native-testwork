import React, {useEffect} from 'react';
import {addTodoTC, getTodosTC} from "../../store";
import {AddItemForm} from "../common/addItemForm/AddItemForm";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Todo} from "../todo/Todo";
import {getTodos} from "../../selectors";
import {ScrollView, Text, View} from "react-native";
import {styles} from "./todolistStyles";


export const Todolist = React.memo(() => {

    const dispatch = useAppDispatch()

    const todos = useAppSelector(getTodos)

    const addTask = (todoTitle: string) => {
        dispatch(addTodoTC(todoTitle))
    }

    useEffect(() => {
        dispatch(getTodosTC())
    }, [dispatch])

    return (
        <View style={styles.todolist}>
            <View style={styles.appTitleBox}>
               <Text style={styles.appTitleText}>What to do?</Text>
            </View>
            <AddItemForm label={"Enter new todo title"} addItem={addTask}/>
            <ScrollView>
                <View>
                    {todos ? todos.map(todo =>
                    <Todo
                        key={todo._id}
                        todo={todo}/>
                ) : <View>add new task please</View>}
                </View>
            </ScrollView>
        </View>
    );
});

