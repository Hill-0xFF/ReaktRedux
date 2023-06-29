import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import PostsList from './features/posts/PostsList';
import NewPost from './components/NewPost';
import AddPost from './features/posts/AddPost';
// just added AddPost to show that it's possible to handle everything in that component
import { selectAllPost, addNewPost } from './features/posts/postsSlice';
import { selectAllUsers } from './features/users/usersSlice';
import Nav from './components/Nav';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPost);
  const usrs = useSelector(selectAllUsers);
  const history = useHistory();

  const [newPostBody, setNewPostBody] = useState<string>('');
  const [newPostTitle, setNewPostTitle] = useState<string>('');
  const [userId, setUserId] = useState<string>('');

  const handleUserIdPost = (evt: React.ChangeEvent<HTMLSelectElement>) =>
    setUserId(evt.currentTarget.value);

  const handleNewPost = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (newPostTitle && newPostBody) {
      const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
      dispatch(addNewPost(id.toString(), newPostTitle, newPostBody, userId, new Date().toISOString()));
    }

    setNewPostBody('');
    setNewPostTitle('');
    setUserId('');
    history.push('/');
  };

  const userOptions = usrs.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const newPostSave =
    Boolean(userId) && Boolean(newPostBody) && Boolean(newPostTitle);

  return (
    <>
      <header>A BLOG POSTS</header>
      <Nav />
      <Switch>
        <Route exact path="/">
          <main>
            <PostsList />
          </main>
        </Route>

        <Route exact path="/newpost">
          <NewPost
            userOptions={userOptions}
            handleNewPost={handleNewPost}
            handleUserIdPost={handleUserIdPost}
            userId={userId}
            // setUserId={setUserId}
            setNewPostBody={setNewPostBody}
            setNewPostTitle={setNewPostTitle}
            newPostTitle={newPostTitle}
            newPostBody={newPostBody}
            newPostSave={newPostSave}
          />
        </Route>

        <Route exact path="/addpost">
          <AddPost />
        </Route>
      </Switch>
    </>
  );
}

export default App;
