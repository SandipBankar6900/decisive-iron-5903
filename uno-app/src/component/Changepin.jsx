// ShowChangePIN.js
import React, { useState } from 'react';
import { Button, useToast, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Input,Image } from '@chakra-ui/react';
import pin from "../images/keyboard.png"

const ShowChangePIN = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPIN, setShowPIN] = useState(true);
  const toast = useToast();

  const onClose = () => setIsOpen(false);
  const onConfirmChange = () => {
    setShowPIN(false);
    onClose();
    // Perform PIN change logic
    toast({
      title: 'PIN changed successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div>
      {/* <Button onClick={() => setIsOpen(true)}>Show/Change PIN</Button> */}
      <Image
        src={pin}
        alt="pin"
        maxW="40px"
        mx="auto"
        cursor="pointer"
        onClick={() => setIsOpen(true)}
      />
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>
            {showPIN ? 'PIN' : 'Change PIN'}
          </AlertDialogHeader>
          <AlertDialogBody>
            {showPIN ? 'Your PIN is 1234' : <Input placeholder="New PIN" />}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={onClose}>Close</Button>
            {showPIN && (
              <Button colorScheme="blue" onClick={() => setShowPIN(false)} ml={3}>
                Change PIN
              </Button>
            )}
            {!showPIN && (
              <Button colorScheme="green" onClick={onConfirmChange} ml={3}>
                Confirm Change
              </Button>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ShowChangePIN;
