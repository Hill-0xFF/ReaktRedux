import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPost, addNewPost } from './postsSlice';

const AddPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPost);
  const [newPostBody, setNewPostBody] = useState<string>('');
  const [newPostTitle, setNewPostTitle] = useState<string>('');

  const handleNewPost = () => {
    if (newPostTitle && newPostBody) {
      const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
      dispatch(
        addNewPost(id.toString(), newPostTitle, newPostBody)
      );
    }

    setNewPostBody('');
    setNewPostTitle('');
  };

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
      <button type="submit" onClick={handleNewPost}>
        Submit Post
      </button>
    </form>
  );
};

export default AddPost;
