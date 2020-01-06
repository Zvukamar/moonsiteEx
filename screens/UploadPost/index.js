import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    ToastAndroid,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import ImagePicker from 'react-native-customized-image-picker';
import { addPost } from '../../api';
import { useSelector } from 'react-redux';

const Title = ({ text }) => {
    return <Text>{text}</Text>
}

const UploadPost = ({ navigation }) => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const userInfo = useSelector(state => state.user);
    const onTitleChange = useCallback((text) => {
        setTitle(text);
    }, [setTitle]);

    const onImagePick = useCallback(() => {
        ImagePicker.openPicker({ width: 400, height: 400, includeBase64: true }).then(image => {
            setImage(image[0])
        });
    }, [setImage]);

    const onSubmit = useCallback(() => {
        if (!title || !image) {
            alert('All fields are mandatory');
            return;
        }
        setLoading(true);
        addPost(userInfo.token, title, `data:image/jpeg;base64,${image.data}`)
            .then(({ data }) => {
                const onPostSuccess = navigation.getParam('onPostSuccess', null)
                onPostSuccess && onPostSuccess();
                navigation.goBack()
            })
            .catch((err) => {
                console.log(err);
                ToastAndroid.show('Could not continue, please try again later', ToastAndroid.SHORT)
                setLoading(false);
            })
    }, [title, image]);

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Title text={'*Title:'} />
                <TextInput
                    maxLength={20}
                    value={title}
                    onChangeText={onTitleChange}
                    style={styles.titleInput}
                />
                <Title text='*Image:' />

                <TouchableOpacity
                    disabled={loading}
                    onPress={onImagePick}
                    style={styles.imagePicker}>
                    {image ? (
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={{
                                uri: image.path
                            }} />) : <Title text={'Press Here To Pick An Image'} />}
                </TouchableOpacity>
                <Button
                    onPress={onSubmit}
                    disabled={loading}
                    title='Submit' />
                {loading && <ActivityIndicator size='large' />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 20, backgroundColor: 'white', alignItems: 'center' },
    innerContainer: { width: '70%' },
    titleInput: { borderWidth: 1, fontSize: 16, paddingLeft: 10, marginBottom: 20 },
    imagePicker: { borderWidth: 1, height: 200, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }
});

export default UploadPost;