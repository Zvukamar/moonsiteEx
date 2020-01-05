import React from 'react';
import { View, StyleSheet } from 'react-native';

const ItemSeperator = (props) => {
    return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
    seperator: { width: '100%', backgroundColor: 'black', height: 2 }
});

export default ItemSeperator;