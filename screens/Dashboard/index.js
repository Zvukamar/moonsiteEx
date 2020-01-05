import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getAllPosts } from '../../api';
import Post from '../../components/Post';
import ItemSeperator from '../../components/ItemSeperator';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigateTo, ScreenNames } from '../../navigation';

class Dashboard extends Component {

    static navigationOptions = ({ navigation }) => {
        const onPress = () => {
            navigateTo(navigation, ScreenNames.UploadPost)
        }
        return {
            headerRight: () => (
                <TouchableOpacity
                    onPress={onPress}
                    style={{ padding: 15 }}>
                    < Icon name="plus" size={30} color="black" />
                </TouchableOpacity>
            )
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            posts: []
        }
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = () => {
        const { user } = this.props;
        getAllPosts(user.token).then(({ data }) => {
            this.setState({ posts: data.data }, () => {
                this.setState({ loading: false });
            })
        })
    }

    _renderLoading = () => {
        return (
            <View style={styles.centerredView}>
                {this.state.loading && <ActivityIndicator size='large' />}
            </View>
        );
    }

    _renderEmptyComponent = () => {
        return <Text style={styles.zeroResult}>Found 0 Results</Text>;
    }

    _renderItemSeperator = () => {
        return <ItemSeperator />
    }

    render() {
        if (this.state.loading) {
            return this._renderLoading();
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.posts}
                    renderItem={({ item }) => <Post {...item} />}
                    ListEmptyComponent={this._renderEmptyComponent()}
                    keyExtractor={item => item.post_id.toString()}
                    ItemSeparatorComponent={this._renderItemSeperator}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    zeroResult: { fontSize: 18, textAlign: 'center', marginTop: 20 },
    centerredView: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },
    container: { flex: 1, backgroundColor: 'white' }

});

export default connect(state => ({
    user: state.user
}))(Dashboard);