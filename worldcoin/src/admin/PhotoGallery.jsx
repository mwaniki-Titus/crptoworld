import React, { useState } from 'react';
import './PhotoGallery.scss';
import Sidebar from './sidebar';
import Modal from './Modal';
import TopBar from './Topbar'

const PhotoGallery = () => {
  const [users, setUsers] = useState([
    { id: 1, fullName: 'John Doe', kycPhotos: ['/path/to/photo1.jpg', '/path/to/photo2.jpg'] },
    { id: 2, fullName: 'Jane Smith', kycPhotos: ['/path/to/photo2.jpg', '/path/to/photo3.jpg'] },
    { id: 3, fullName: 'Alice Johnson', kycPhotos: ['/path/to/photo3.jpg', '/path/to/photo4.jpg'] },
    { id: 4, fullName: 'Bob Brown', kycPhotos: ['/path/to/photo4.jpg', '/path/to/photo5.jpg'] },
    { id: 5, fullName: 'John Doe', kycPhotos: ['/path/to/photo1.jpg', '/path/to/photo2.jpg'] },
    { id: 6, fullName: 'Jane Smith', kycPhotos: ['/path/to/photo2.jpg', '/path/to/photo3.jpg'] },
    { id: 7, fullName: 'Alice Johnson', kycPhotos: ['/path/to/photo3.jpg', '/path/to/photo4.jpg'] },
    { id: 8, fullName: 'Bob Brown', kycPhotos: ['/path/to/photo4.jpg', '/path/to/photo5.jpg'] },
    // Add more users as needed
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleClick = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <>
      <Sidebar />
      <>
      <TopBar pageTitle="Photo Gallery"/>
      </>
      <div className="photo-gallery">
        <h2>KYC Photo Gallery</h2>
        <div className="gallery">
          {users.map(user => (
            <div key={user.id} className="gallery-item" onClick={() => handleClick(user)}>
              <img src={user.kycPhotos[0]} alt={`${user.fullName} KYC`} className="kyc-photo" />
              <div className="user-info">
                <h3>{user.fullName}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal show={!!selectedUser} onClose={closeModal} user={selectedUser} />
    </>
  );
};

export default PhotoGallery;
