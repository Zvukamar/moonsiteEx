import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ScreenNames, navigateToDashboard } from '../../navigation';
import { login } from './actions';
import { useDispatch, useSelector } from 'react-redux';

const Login = ({ navigation }) => {

    const dispatch = useDispatch(null);

    const userInfo = useSelector(state => state.user);
    const loginInfo = useSelector(state => state.login);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onRegister = useCallback(() => {
        navigation.navigate(ScreenNames.Register);
    }, []);

    const onLogin = useCallback(() => {
        dispatch(login(email, password));
    }, [email, password]);

    const onEmailChange = useCallback(email => {
        setEmail(email);
    }, [setEmail]);

    const onPassChange = useCallback(password => {
        setPassword(password);
    }, [setPassword]);

    useEffect(() => {
        if (userInfo.user_id !== -1) navigateToDashboard(navigation);
    }, [userInfo.user_id])

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                onChangeText={onEmailChange}
                value={email}
                placeholder={'E-mail'}
                keyboardType={'email-address'}
            />
            <TextInput
                style={styles.textInput}
                placeholder={'Password'}
                onChangeText={onPassChange}
                value={password}
                secureTextEntry
            />
            {loginInfo.loading && (<ActivityIndicator />)}
            {!loginInfo.loading && !loginInfo.success && <Text>{loginInfo.errormessage}</Text>}
            <View style={styles.buttonContainer}>
                <Button
                    title={'login'}
                    onPress={onLogin} />
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