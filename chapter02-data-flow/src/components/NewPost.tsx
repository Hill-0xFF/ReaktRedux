type NewPostProps = {
  newPostBody: string;
  setNewPostBody: React.Dispatch<React.SetStateAction<string>>;
  newPostTitle: string;
  setNewPostTitle: React.Dispatch<React.SetStateAction<string>>;
  handleNewPost: (evt: React.FormEvent<HTMLFormElement>) => void;
};

const NewPost = ({
  handleNewPost,
  setNewPostBody,
  setNewPostTitle,
  newPostBody,
  newPostTitle
}:NewPostProps) => {

  return (
    <form onSubmit={(evt) => handleNewPost(evt)} className="newPost__form">
      <h2>New Post:</h2>
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
      <button type="submit">Submit Post</button>
    </form>
  );
};

export default NewPost;
