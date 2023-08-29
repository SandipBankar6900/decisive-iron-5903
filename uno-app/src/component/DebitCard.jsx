// DebitCard.js
import React from 'react';
import { Box, Text, Flex ,Image} from '@chakra-ui/react';
import image from "../images/UNOBank.png"


const DebitCard = ({ cardNumber, cardHolder, expiry }) => {
  return (
    <Box
      p={4}
      bg="rgb(255,231,144)"
      borderRadius="md"
      boxShadow="md"
      maxW="300px"
      w="100%"
    >
         <Flex justifyContent="flex-end" mb={2}>
        <Image src={image} alt="Card Logo" maxW="70px" maxH="70px"   h="65px" />
      </Flex>
      <Text fontSize="sm" color="gray.500" mb={2}>
        Debit Card
      </Text>
      <Text fontSize="lg" fontWeight="bold">
        **** **** **** {cardNumber.slice(-4)}
      </Text>
      <Flex justifyContent="space-between" mt={2}>
        <Text fontSize="sm">{cardHolder}</Text>
        <Text fontSize="sm">{expiry}</Text>
      </Flex>
    </Box>
  );
};

export default DebitCard;
