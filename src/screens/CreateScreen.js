import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { addPost } = useContext(BlogContext);

  return (
    <View>
      <BlogPostForm onSubmit={(title, content) => {
        addPost(title, content, () => {
          navigation.navigate('Index')
        });
      }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
