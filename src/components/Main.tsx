import React from 'react';
import {Todolist} from "./todolist/Todolist";
import {ActivityIndicator, View} from "react-native";
import {useAppSelector} from "../hooks/hooks";
import {getAppStatus} from "../selectors";
import {styles} from "./mainStyles";
import {Error} from "./common/error/Error"

export const Main = () => {
    const appStatus=useAppSelector(getAppStatus)

    return (
        <View style={styles.container}>
            <Error/>
            {appStatus=="loading" && <View style={styles.spinner}><ActivityIndicator size={"large"}/></View>}
            <Todolist/>
        </View>
    );
};

