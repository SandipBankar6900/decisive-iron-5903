// ReportLostStolenCard.js
import React, { useState } from 'react';
import { Button, useToast, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter,Image } from '@chakra-ui/react';
import stolen from "../images/stolen.png"

const ReportLostStolenCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const toast = useToast();

  const onClose = () => setIsOpen(false);
  const onConfirm = () => {
    setIsConfirmed(true);
    onClose();
    // Perform OTP verification and card cancellation logic
    toast({
      title: 'Card reported as lost or stolen',
      status: 'warning',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div>
      {/* <Button onClick={() => setIsOpen(true)}>Report Lost/Stolen Card</Button> */}
      <Image
        src={stolen}
        alt="stolen"
        maxW="40px"
        mx="auto"
        cursor="pointer"
        onClick={() => setIsOpen(true)}
      />
      
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Confirm Action</AlertDialogHeader>
          <AlertDialogBody>
            Are you sure you want to report the card as lost or stolen?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button colorScheme="red" onClick={onConfirm} ml={3}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {isConfirmed && (
        <div>
          <p>OTP verification successful.</p>
          <p>Card cancellation confirmed.</p>
          <p>New card ordered.</p>
        </div>
      )}
    </div>
  );
};

export default ReportLostStolenCard;
