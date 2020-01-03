import React, { useCallback } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ScreenNames } from '../../navigation';

const Login = ({ navigation }) => {

    const onRegister = useCallback(() => {
        navigation.navigate(ScreenNames.RegisterScreen);
    }, []);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder={'E-mail'}
                keyboardType={'email-address'}
            />
            <TextInput
                style={styles.textInput}
                placeholder={'Password'}
                secureTextEntry
            />
            <View style={styles.buttonContainer}>
                <Button
                    title={'login'} />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={onRegister}
                    title={'register'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    textInput: {
        width: 200,
        borderWidth: 1,
        marginTop: 10,
        padding: 15
    },
    buttonContainer: {
        marginTop: 10
    }
});

export default Login;