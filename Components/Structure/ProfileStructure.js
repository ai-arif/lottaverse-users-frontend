import React from 'react'

const ProfileStructure = ({name}) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
    <div className="rounded-circle overflow-hidden border border-primary" style={{ width: '150px', height: '150px' }}>
      <img src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp" alt="Profile" className="img-fluid" />
    </div>
    <div className="text-center mt-2">
      <h5>{name}</h5>
      <p>Member</p>
      </div>
  </div>
  )
}

export default ProfileStructure
