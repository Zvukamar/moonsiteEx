import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { deletePostById } from '../../api';

const showAlert = (postId) => {
    Alert.alert(
        'Delete post',
        'Are you sure you want to delete this post?',
        [{
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        }, { text: 'OK', onPress: () => deletePostById(postId) }],
        { cancelable: false },
    );
}

const Trash = ({ postId }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.65}
            onPress={() => showAlert(postId)}
            style={styles.deleteButton}>
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
            {props.is_my_post && <Trash postId={props.postId} />}
        </View>
    );
}

Post.propTypes = {
    post_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    is_my_post: PropTypes.bool.isRequired,
    updated_at: PropTypes.any
};

const styles = StyleSheet.create({
    image: { width: '100%', height: 300 },
    container: { margin: 20 },
    title: { fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase', marginTop: 5, marginBottom: 5 },
    deleteButton: { backgroundColor: '#00000020', alignItems: 'center', padding: 10 }
});

export default Post;