import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, TextInput, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { register } from './actions';
import { navigateToDashboard } from '../../navigation';

const Register = ({ navigation }) => {

    const dispatch = useDispatch(null);
    const userInfo = useSelector(state => state.user);
    const registerInfo = useSelector(state => state.register);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = useCallback(email => {
        setEmail(email);
    }, [setEmail]);

    const onPassChange = useCallback(password => {
        setPassword(password);
    }, [setPassword]);

    const onRegister = useCallback(() => {
        dispatch(register(email, password));
    }, [email, password]);

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
            {registerInfo.loading && (<ActivityIndicator />)}
            {!registerInfo.loading && !registerInfo.success && <Text>{registerInfo.errormessage}</Text>}
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

export default Register;