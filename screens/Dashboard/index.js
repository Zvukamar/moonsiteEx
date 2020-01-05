import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getAllPosts } from '../../api';
import Post from '../../components/Post';
import ItemSeperator from '../../components/ItemSeperator';

class Dashboard extends Component {

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
                    keyExtractor={item => item.post_id}
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