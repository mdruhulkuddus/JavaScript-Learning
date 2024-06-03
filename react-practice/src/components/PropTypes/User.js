import React from 'react'
import PropTypes from 'prop-types'

const User = props => {
  return (
    <div>
      <h1>{props.userName}</h1>
      <h1>{props.userId}</h1>
      <h3>{props.user.id}</h3>
      <h3>{props.user.name}</h3>
    </div>
  )
}

User.propTypes = {
  // userName: PropTypes.number
  userName: PropTypes.string,
  userId: PropTypes.string,
  user: PropTypes.object.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  })
}

User.defaultProps = {
  userName: "Default",
  userId: 10
}
export default User
