import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>HOME</Link>
          <Link to='/newpost'>NEW POST</Link>
          <Link to='/addpost'>ADD POST</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav