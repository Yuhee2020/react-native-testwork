import React, {useEffect} from 'react';
import {addTodoTC, getTodosTC} from "../../store";
import {AddItemForm} from "../common/addItemForm/AddItemForm";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Todo} from "../todo/Todo";
import {getTodos} from "../../selectors";
import {FlatList, ListRenderItem, RefreshControl, ScrollView, Text, View} from "react-native";
import {styles} from "./todolistStyles";
import {TodoType} from "../../api";


export const Todolist = React.memo(() => {

    const dispatch = useAppDispatch()

    const todos = useAppSelector(getTodos)

    const addTask = (todoTitle: string) => {
        dispatch(addTodoTC(todoTitle))
    }

    const render: ListRenderItem<TodoType> = ({item, index}) => {
        return <Todo
            key={item._id}
            todo={item}
            index={index}/>
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
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={false} onRefresh={()=>dispatch(getTodosTC())} />}
            >
                <FlatList
                    data={todos}
                    renderItem={render}
                    ListEmptyComponent={<Text>add new task please</Text>}/>
            </ScrollView>
        </View>
    );
});

