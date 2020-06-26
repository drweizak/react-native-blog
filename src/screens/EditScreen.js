import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const { state, editPost } = useContext(BlogContext);
  const id = navigation.getParam('id');
  const post = state.find(post => post.id === id);

  return (
    <View>
      <BlogPostForm title={post.title} content={post.content} onSubmit={(title, content) => {
        editPost(id, title, content, () => {
          navigation.pop()
        });
      }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
