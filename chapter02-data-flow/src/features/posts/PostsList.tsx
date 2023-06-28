import { useSelector } from "react-redux";
import { PostsState } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector((state: PostsState) => state.posts)
  
  const renderedPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.length > 35 ? `${post.content.substring(0,30)}...` : post.content}</p>
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