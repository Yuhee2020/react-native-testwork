import {AlertDialog, Center} from "native-base";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {getAppError} from "../../../selectors";
import {setAppError} from "../../../store";

export const Error = () => {

    const dispatch = useAppDispatch()
    const error=useAppSelector(getAppError)
    const onClose = () =>
        dispatch(setAppError(""))

    const cancelRef = React.useRef(null);

    return <Center>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={!!error} onClose={onClose}>
            <AlertDialog.Content>
                <AlertDialog.CloseButton />
                <AlertDialog.Header>ERROR</AlertDialog.Header>
                <AlertDialog.Body>
                    {error}
                </AlertDialog.Body>
            </AlertDialog.Content>
        </AlertDialog>
    </Center>;
};


// export const styles = StyleSheet.create({
//     body: {
//       color:"red"
//     }
// });