import { useSelector } from 'react-redux';
import { selectAllPost } from './postsSlice';
import PostUser from './PostUser';
import TimePosted from './Timestamp';
import Reactions from './Reactions';

/*
Geanie Billie, a high regard musician, entered the store and asked for some slices of the last album. What happened Next, made everybody React!
*/

const PostsList = () => {
  const posts = useSelector(selectAllPost);
  const postByTime = posts.posts
    .slice()
    .sort((a, b) => b.datetime.localeCompare(a.datetime));

  const renderedPosts = postByTime.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>
        {post.content.length > 35
          ? `${post.content.substring(0, 30)}...`
          : post.content}
      </p>
      <p className="postCredit">
        <PostUser userId={post.userId} />
      </p>
      <p>{post.datetime}</p>
      <TimePosted timestamp={post.datetime} />
      <Reactions post={post} />
    </article>
  ));
  return (
    <section>
      <h2>POSTS</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
