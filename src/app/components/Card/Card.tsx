import React, { useState } from 'react';
import Modal from 'react-modal';

interface CardProps {
  name: string;
  number: number;
}

const Card = ({ name, number }: CardProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState('images/icons/default.png');

  const handleAvatarClick = () => {
    setShowModal(true);
  };

  const handleOptionClick = (avatarUrl: string) => {
    setSelectedAvatar(avatarUrl);
    setShowModal(false);
  };

  const avatarOptions = [
    'images/icons/bauble.png',
    'images/icons/beanie.png',
    'images/icons/candy.png',
    'images/icons/gingerbread.png',
    'images/icons/house.png',
    'images/icons/reindeer.png',
    'images/icons/santa.png',
    'images/icons/scarf.png',
    'images/icons/sleigh.png',
    'images/icons/snowman.png',
  ];

  return (
    <div className="text-center">
      <img
        src={selectedAvatar}
        className="mx-auto mb-4 w-32 rounded-lg cursor-pointer"
        alt="Avatar"
        onClick={handleAvatarClick}
      />
      <h5 className="mb-2 text-xl font-medium leading-tight">{name}</h5>
      <p className="text-neutral-500 dark:text-neutral-400">{number}</p>

      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Escolha um avatar"
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          },
          content: {
            width: '50%',
            maxWidth: '400px',
            margin: 'auto',
            borderRadius: '8px',
            padding: '20px',
            maxHeight: '80vh', 
            display: 'flex',
            flexDirection: 'column',
            flexWrap:'wrap'
          },
        }}
      >
        <p className="text-sm font-medium mb-2">Escolha um avatar:</p>
        <div className="flex space-x-2">
          {avatarOptions.map((avatarUrl, index) => (
            <img
              key={index}
              src={avatarUrl}
              className="w-8 h-8 rounded-full cursor-pointer"
              alt={`Avatar ${index}`}
              onClick={() => handleOptionClick(avatarUrl)}
            />
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Card;