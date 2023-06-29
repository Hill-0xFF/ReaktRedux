import { useSelector } from "react-redux";
import { selectAllPost } from "./postsSlice";
import PostUser from "./PostUser";
import TimePosted from "./Timestamp";

const PostsList = () => {
  // const posts = useSelector((state: PostsState) => state.posts)
  const posts = useSelector(selectAllPost)
  
  const renderedPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.length > 35 ? `${post.content.substring(0,30)}...` : post.content}</p>
      <p className="postCredit">
        <PostUser userId={post.userId}/>
      </p>
      <p>{post.datetime}</p>
      <TimePosted timestamp={post.datetime}/>
    </article>
  ))
  return (
    <section>
      <h2>POSTS</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList