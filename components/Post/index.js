import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Post = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Image
                style={styles.image}
                resizeMode='contain'
                source={{ uri: props.image_url }} />
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
    title: { fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase' }
});

export default Post;