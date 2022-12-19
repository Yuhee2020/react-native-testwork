import React, {useState} from 'react';
import {View,} from "react-native";
import {Flex, FormControl, IconButton, Input, WarningOutlineIcon} from "native-base";
import {styles} from "./AIFStyles";

import {MaterialIcons} from '@expo/vector-icons';


type PropsType = {
    addItem: (title: string) => void
    label: string
}

export const AddItemForm = ({addItem, label}: PropsType) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (text: string) => {
        error && setError("")
        setTitle(text)
    }

    const addI = () => {
        if (title.trim() !== "") {
            addItem(title.trim())
            setTitle("")
        } else {
            setError("Title is required")
        }
    }

    return (
        <Flex style={styles.addItemBox} direction={"row"}>
            <View style={styles.input}>
                <FormControl isInvalid={!!error} w="100%" maxW="300px">
                    <Input style={styles.inputText}
                           size={"2xl"}
                           value={title}
                           placeholder={label}
                           onChangeText={onChangeHandler}
                           onBlur={addI}
                    />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs"/>}>
                        {error}
                    </FormControl.ErrorMessage>
                </FormControl>
            </View>
            <View style={styles.button}>
                <IconButton
                    borderColor={"gray.300"}
                    size={"lg"}
                onPress={addI}
                variant="outline"
                _icon={{
                    color:"white",
                    name: "add-task",
                    as: MaterialIcons,
                }}/>
            </View>
        </Flex>
    );
};


