import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);
  const id = navigation.getParam('id');
  const post = state.find(post => post.id === id);

  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.content}</Text>
    </View>
  );
};


ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
        <EvilIcons name="pencil" size={35} style={{ marginRight: 15 }} />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({});

export default ShowScreen;
