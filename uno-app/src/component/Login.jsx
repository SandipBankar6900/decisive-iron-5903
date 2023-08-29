import React, { useState } from 'react';
import { Button, Input, Box, Heading, FormControl } from '@chakra-ui/react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here
    onLogin();
  };

  return (
    <Box>
      <Heading>Login</Heading>
      <FormControl>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mt={2}
        />
        <Button onClick={handleLogin} mt={4}>
          Log In
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
