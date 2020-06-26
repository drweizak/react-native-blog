import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, getPosts, deletePost } = useContext(BlogContext);

  useEffect(() => {
    getPosts();

    const listener = navigation.addListener('didFocus', () => {
      getPosts();
    });

    return () => {
      listener.remove();
    }
  }, [])

  return (
    <View>
      <FlatList data={state} keyExtractor={post => post.id.toString()} renderItem={({ item }) => {
        return <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => deletePost(item.id)}>
              <Feather style={styles.icon} name="trash" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      }} />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather  name="plus" size={30} style={{marginRight: 15}} />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  },
  addButton: {
    padding: 15
  }
});

export default IndexScreen;
