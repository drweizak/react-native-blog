import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const BlogPostForm = (props) => {
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);

    return (
        <View>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={value => setTitle(value)} />
            <Text style={styles.label}>Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={value => setContent(value)} />
            <Button title="Save Post" onPress={() => {
                props.onSubmit(title, content, () => {
                    navigation.navigate('Index')
                });
            }} />
        </View>
    );
};

BlogPostForm.defaultProps = {
    title: '',
    content: ''
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
    }
});

export default BlogPostForm;
