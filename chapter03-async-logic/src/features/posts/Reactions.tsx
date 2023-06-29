import { useDispatch } from "react-redux"
import { incrementReaction, TypePosts } from "./postsSlice"



const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕'
}

type ReactionsProps = {
  post: TypePosts,
}

const Reactions = ({ post }: ReactionsProps) => {
  const dispatch = useDispatch()
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button key={name} type="button" className="reactionButtons" onClick={() => dispatch(incrementReaction({
        postId: post.id, reaction: name
      }))}
      >
        {emoji} {post.reactions[name]}
      </button>
      )
  })

  return <div className="reactionDiv">{reactionButtons}</div>
}

export default Reactions