import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPost, addNewPost } from './features/posts/postsSlice';
import { Route, Switch, useHistory } from 'react-router-dom';
import PostsList from './features/posts/PostsList';
import NewPost from './components/NewPost';
import AddPost from './features/posts/AddPost'; 
// just added AddPost to show that it's possible to handle everything in that component

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPost);
  const [newPostBody, setNewPostBody] = useState<string>('');
  const [newPostTitle, setNewPostTitle] = useState<string>('');

  const handleNewPost = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    if (newPostTitle && newPostBody) {
      const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
      dispatch(
        addNewPost({
          id: id.toString(),
          title: newPostTitle,
          content: newPostBody,
        })
      );
    }

    setNewPostBody('');
    setNewPostTitle('');
  };

  return (
    <>
      <header>A BLOG POSTS</header>
      <NewPost
        handleNewPost={handleNewPost}
        setNewPostBody={setNewPostBody}
        setNewPostTitle={setNewPostTitle}
        newPostTitle={newPostTitle}
        newPostBody={newPostBody}
      />

      <AddPost />

      <main>
        <PostsList />
      </main>
    </>
  );
}

export default App;
