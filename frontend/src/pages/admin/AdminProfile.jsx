import React from 'react'

import {useSelector} from 'react-redux'

const AdminProfile = () => {
    const {currUser} = useSelector((state)=>state.user);
  return (
    <div>
        Name:{currUser.name}
        <br />
        Email:{currUser.email}
        <br />
        School:{currUser.school}
        <br />
    </div>
  )
}

export default AdminProfile