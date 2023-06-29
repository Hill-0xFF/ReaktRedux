import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

type PostUserProps = {
  userId: string,
}

const PostUser = ({userId}: PostUserProps) => {
  const users = useSelector(selectAllUsers)
  const user = users.find((user) => user.id === userId)
  return <span>By {user ? user.name : 'Unknown author'}</span>
}

export default PostUser;