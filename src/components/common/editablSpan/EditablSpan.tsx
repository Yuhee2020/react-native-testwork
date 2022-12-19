import React, {useState} from "react";
import {Text} from "react-native";
import {Input} from "native-base";
import {styles} from "./eSStyles";


type PropsType = {
    title: string
    changeTitle: (title: string) => void
}

export const EditablSpan =React.memo( ({title, changeTitle}: PropsType) => {
    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(title)


    const setInputMode = () => {
        setEdit(!edit)
    }
    const setSpanMode=()=>{
        setEdit(!edit)
        changeTitle(newTitle)
    }

    return edit
        ? <Input
            style={styles.input}
            onChangeText={(text) => setNewTitle(text)}
            value={newTitle}
            autoFocus
            onBlur={setSpanMode}
            />
        : (<Text style={styles.text} onPress={setInputMode}>{title}</Text>)
});


