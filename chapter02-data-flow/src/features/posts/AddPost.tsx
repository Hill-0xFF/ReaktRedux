import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllPost, addNewPost } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPost = () => {
  const dispatch = useDispatch();
  const [newPostBody, setNewPostBody] = useState<string>('');
  const [newPostTitle, setNewPostTitle] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  
  const posts = useSelector(selectAllPost);
  const users = useSelector(selectAllUsers);

  const handleUserIdPost = (evt: React.ChangeEvent<HTMLSelectElement>) => setUserId(evt.currentTarget.value)

  const handleNewPost = () => {
    if (newPostTitle && newPostBody) {
      const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
      dispatch(
        addNewPost(id.toString(), newPostTitle, newPostBody, userId)
      );
    }

    setNewPostBody('');
    setNewPostTitle('');
  };

  const userOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  const save = Boolean(newPostTitle) && Boolean(newPostBody) && Boolean(userId)

  return (
    <form className="newPost__form">
      <h2>Add Post:</h2>
      <label htmlFor="postTitle">Title:</label>
      <input
        type="text"
        name="title"
        id="postTitle"
        value={newPostTitle}
        onChange={(evt) => setNewPostTitle(evt.currentTarget.value)}
        required
      />

      <label htmlFor="postUserId">User:</label>
      <select name="user" id="postUserId" value={userId} onChange={handleUserIdPost}>
        <option value=""></option>
        {userOptions}
      </select>

      <label htmlFor="postBody">Content:</label>
      <textarea
        name="content"
        id="postBody"
        cols={30}
        rows={10}
        value={newPostBody}
        onChange={(evt) => setNewPostBody(evt.currentTarget.value)}
        required
      ></textarea>

      <button type="submit" onClick={handleNewPost} disabled={!save}>
        Submit Post
      </button>
    </form>
  );
};

export default AddPost;
