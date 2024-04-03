import React from 'react';

const ProfileStructure = ({ name }) => {
  return (
    <div>
    <div className="d-flex flex-column align-items-center">
      <div className="rounded-circle overflow-hidden bg-primary" style={{ width: '150px', height: '150px' }}>
        <img src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp" alt="Profile" className="img-fluid rounded-circle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
    <div className="border  border-1">
        <div className="text-center bg-secondary p-3">
            <h5 className='text-white'>3232323323</h5>
        
        </div>
        
    </div>
    </div>
  );
};

export default ProfileStructure;
