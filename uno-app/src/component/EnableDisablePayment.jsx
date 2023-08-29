// EnableDisableOnlinePayment.js
import React, { useState } from 'react';
import { Button, useToast, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter,Image } from '@chakra-ui/react';
import cart from "../images/cartttt.png"

const EnableDisableOnlinePayment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnlinePaymentEnabled, setIsOnlinePaymentEnabled] = useState(true);
  const toast = useToast();

  const onClose = () => setIsOpen(false);
  const onToggle = () => {
    setIsOnlinePaymentEnabled(!isOnlinePaymentEnabled);
    onClose();
    toast({
      title: `Online payment ${isOnlinePaymentEnabled ? 'disabled' : 'enabled'}`,
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div>
      {/* <Button onClick={() => setIsOpen(true)}>Enable/Disable Online Payment</Button> */}
      <Image
        src={cart}
        alt="payment"
        maxW="40px"
        mx="auto"
        cursor="pointer"
        onClick={() => setIsOpen(true)}
      />
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>
            {isOnlinePaymentEnabled ? 'Disable' : 'Enable'} Online Payment
          </AlertDialogHeader>
          <AlertDialogBody>
            Are you sure you want to {isOnlinePaymentEnabled ? 'disable' : 'enable'} online payment?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button colorScheme="blue" onClick={onToggle} ml={3}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default EnableDisableOnlinePayment;
