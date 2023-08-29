import React, { useState } from 'react';
import {
  ChakraProvider,
  CSSReset,
  Container,
  Flex,
  Box,
  VStack,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react';
import Login from '../src/component/Login';
import LockUnlockCard from '../src/component/Cardlockunlock';
import ReportLostStolenCard from '../src/component/CradReport';
import ShowChangePIN from '../src/component/Changepin';
import EnableDisableOnlinePayment from '../src/component/EnableDisablePayment';
import DebitCard from './component/DebitCard';
import theme from '../src/theme';

const CardManagement = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isCardLocked, setIsCardLocked] = useState(false);
  const[showAlert,setShowAlert]=useState(false)

  const handleLogin = () => {
    // Perform authentication logic
    setLoggedIn(true);
  };

  const handleToggleLock = (isLocked) => {
    setIsCardLocked(isLocked);
  };

  const handleSave=()=>{
    setShowAlert(true)
  }

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Container maxW="xl" centerContent>
        {loggedIn ? (
          <VStack spacing={4} align="stretch">
            <Heading size="lg">Card Management</Heading>
            <DebitCard
              cardNumber="1234567890123456"
              cardHolder="Sandip Bankar"
              expiry="12/24"
            />
            <Flex justify="space-between">
              <LockUnlockCard isLocked={isCardLocked} onToggleLock={handleToggleLock} />
              <ReportLostStolenCard />
              <ShowChangePIN />
              <EnableDisableOnlinePayment />
            </Flex>
            <Box>
              <FormControl>
                <FormLabel>Enter your name</FormLabel>
                <input type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Enter your email</FormLabel>
                <input type="email" />
              </FormControl>
              <Button colorScheme="blue" onClick={handleSave}>Save</Button>
            </Box>
            {showAlert && (
              <Alert status='success'>
              <AlertIcon/>
              <AlertTitle>Data saved Successfully</AlertTitle>


            </Alert>

            )}
            
          </VStack>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </Container>
    </ChakraProvider>
  );
};

export default CardManagement;