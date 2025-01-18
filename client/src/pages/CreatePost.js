import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


function CreatePost() {

    const initialValues = {
        title: '',
        postText: '',
        username: ''
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('You must input a title.'),
        postText: Yup.string().required('You must input a post.'),
        username: Yup.string().min(3).max(20).required('You must input a username.')
      });

    const onSubmit = (data) => {
        axios.post('http://localhost:3001/posts', data).then(() => {
            console.log('Post created');
        });
      }

  return (
    <div className="create-post-page">
      <h1>Create a Post</h1>
      <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit} 
      validationSchema={validationSchema}>
        <Form className="form-container">
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <Field
              autoComplete="off"
              id="input-title"
              type="text"
              name="title"
              placeholder="(Ex. John...)"
            />
            <ErrorMessage name="title" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="postText">Post:</label>
            <Field
              autoComplete="off"
              id="input-post"
              type="text"
              name="postText"
              placeholder="(Ex. Post...)"
            />
            <ErrorMessage name="postText" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <Field
              autoComplete="off"
              id="input-username"
              type="text"
              name="username"
              placeholder="(Ex. John123...)"
            />
            <ErrorMessage name="username" component="div" className="error-message" />
          </div>

          <button type="submit" className="submit-button">
            Create Post
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
