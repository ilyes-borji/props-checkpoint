import React from 'react'

const ProfileComponent = (props) => {
    //props ={ilyes:'ingenieur'}
    return (
        <div className='Profile'opk>
        
            <h2>{props.ilyes.profession}</h2>
            <h2>{props.ilyes.bio}</h2>
            <h2>{props.ilyes.fullName}</h2>
        </div>
    )
}
Profile.Proptypes={fullName:Proptypes.string,
bio:Proptypes.string,bio:proptypes.string}

export default Profile
