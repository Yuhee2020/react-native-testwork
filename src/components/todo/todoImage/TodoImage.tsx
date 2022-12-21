import React from 'react';
import {convertFileToBase64} from "../../../utils/base64Converter";
import {useAppDispatch} from "../../../hooks/hooks";
import {setAppError, updateTodoTC} from "../../../store";
import {Image, StyleSheet, TouchableOpacity} from "react-native";
import * as DocumentPicker from 'expo-document-picker';


type PropsType = {
    todoImage: string
    todoId: string
}

export const TodoImage = ({todoImage, todoId}: PropsType) => {
    const dispatch = useAppDispatch();

   const docPicker= async () => {
        try {
            const res = await DocumentPicker.getDocumentAsync({
                type:'image/*',
            })
            if (res.type === 'success') {
                if (res.size && res.size < 50000) {
                    res.file && convertFileToBase64(res.file, (file64: string) => {
                        dispatch(updateTodoTC({id: todoId, description: file64}))
                    })
                }else {
                    dispatch(setAppError("Incorrect file size, file must be less than 50 kb"))
                }
            }
        } catch (err:any) {
            dispatch(setAppError(err))
        }
    }

    return (
        <TouchableOpacity onPress={docPicker}>
            {todoImage !== "no"
                ?  <Image style={styles.image}
                          source={{uri: todoImage}}/>

                :  <Image style={styles.image}
                source={require("D:/learning/react-native-testwork/src/images/no-image-icon.png")}
                />}
        </TouchableOpacity>
    );
};

export const styles = StyleSheet.create({
    image: {
        width: 48,
        height: 48,
        borderRadius: 4,
    },
});
