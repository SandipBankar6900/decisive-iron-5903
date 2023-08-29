// LockUnlockCard.js
import React from 'react';
import { Button, useToast,Image } from '@chakra-ui/react';
import lock from "../images/Lock_icon.png";
import unlock from "../images/unlock_icon.png"

const LockUnlockCard = ({ isLocked, onToggleLock }) => {
  const toast = useToast();

  const toggleLock = () => {
    const newLockStatus = !isLocked;
    onToggleLock(newLockStatus);
    const status = newLockStatus ? 'locked' : 'unlocked';
    toast({
      title: `Card ${status}`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div>
      {/* <Button onClick={toggleLock}>
        {isLocked ? 'Unlock Card' : 'Lock Card'}
      </Button> */}

<Image
        src={isLocked ? lock : unlock}
        alt={isLocked ? 'Locked' : 'Unlocked'}
        maxW="35px"
        mx="auto"
        cursor="pointer"
        onClick={toggleLock}
      />
      {/* <FontAwesomeIcon icon="fa-solid fa-lock" /> */}

    </div>
  );
};

export default LockUnlockCard;
