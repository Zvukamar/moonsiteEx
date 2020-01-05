import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UploadPost = (props) => {
    return (
        <View style={styles.container}>
            <Text>Uploads</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' }
});

export default UploadPost;