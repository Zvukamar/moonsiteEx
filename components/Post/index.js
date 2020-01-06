import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { deletePostById, addFollower } from '../../api';

const showDeleteAlert = (token, postId, onDeleteSuccess) => {
    Alert.alert(
        'Delete post',
        'Are you sure you want to delete this post?',
        [{
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        }, {
            text: 'OK', onPress: () => deletePostById(token, postId).then(({ response }) => {
                onDeleteSuccess && onDeleteSuccess(postId);
                ToastAndroid.show('The post has been successfully removed', ToastAndroid.LONG);
            }).catch(error => {
                console.log('error', error.message);
                ToastAndroid.show('Error in delete this post, maybe it was already deleted.', ToastAndroid.LONG);
            })
        }],
        { cancelable: false },
    );
}

const showFollowMessage = (token, userId) => {
    addFollower(token, userId);
    ToastAndroid.show('You are following this user!', ToastAndroid.LONG);
}

const Follow = ({ token, userId }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.65}
            onPress={() => showFollowMessage(token, userId)}
            style={styles.button}>
            <Icon name="user-plus" size={30} color="black" />
            <Text>Follow</Text>
        </TouchableOpacity>
    )
}

const Trash = ({ token, postId, onDeleteSuccess }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.65}
            onPress={() => showDeleteAlert(token, postId, onDeleteSuccess)}
            style={styles.button}>
            <Icon name="trash" size={30} color="black" />
            <Text>Delete</Text>
        </TouchableOpacity>
    );
}

const Post = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Image
                style={styles.image}
                resizeMode='contain'
                source={{ uri: props.image_url }} />
            {props.is_my_post && <Trash
                token={props.token}
                onDeleteSuccess={props.onDeleteSuccess}
                postId={props.post_id} />}
            {!props.is_my_post && <Follow
                token={props.token}
                userId={props.user_id} />}
        </View>
    );
}

Post.propTypes = {
    token: PropTypes.string.isRequired,
    post_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    is_my_post: PropTypes.bool.isRequired,
    updated_at: PropTypes.any,
    onDeleteSuccess: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    image: { width: '100%', height: 300 },
    container: { margin: 20 },
    title: { fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase', marginTop: 5, marginBottom: 5 },
    button: { backgroundColor: '#00000020', alignItems: 'center', padding: 10 },
});

export default Post;