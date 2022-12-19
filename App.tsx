import {AppRegistry} from 'react-native';
import {Provider} from "react-redux";
import {store} from "./src/store";
import React from "react";
import {NativeBaseProvider} from "native-base";
import {Main} from "./src/components/Main";


export default function App() {



    return (
        <Provider store={store}>
            <NativeBaseProvider>
                   <Main/>
            </NativeBaseProvider>
        </Provider>

    );
}

AppRegistry.registerComponent("react-native-testwork", () => App);


