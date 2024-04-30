import { Box, Flex, Text, VStack, Button, Link, Image } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={10} align="stretch">
      <Box bg="brand.800" color="white" p={5}>
        <Text fontSize="4xl" fontWeight="bold">John Doe</Text>
        <Text fontSize="xl">Developer | Designer | Creator</Text>
      </Box>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-around" p={5}>
        <VStack spacing={5}>
          <Text fontSize="3xl" fontWeight="bold">About</Text>
          <Text fontSize="md">I am a passionate software developer with a knack for building visually appealing and functional applications. My interests include web development, UI/UX design, and mobile app development.</Text>
        </VStack>
        <VStack spacing={5}>
          <Text fontSize="3xl" fontWeight="bold">Portfolio</Text>
          <Text fontSize="md">Here are some of my projects. This section will be updated regularly with new work.</Text>
          <Button colorScheme="blue">View More</Button>
        </VStack>
        <VStack spacing={5}>
          <Text fontSize="3xl" fontWeight="bold">Contact</Text>
          <Link href="mailto:john.doe@example.com" isExternal>
            <Button leftIcon={<FaEnvelope />} colorScheme="teal">Email Me</Button>
          </Link>
          <Link href="https://github.com/johndoe" isExternal>
            <Button leftIcon={<FaGithub />} colorScheme="gray">GitHub</Button>
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <Button leftIcon={<FaLinkedin />} colorScheme="blue">LinkedIn</Button>
          </Link>
        </VStack>
      </Flex>
      <Box bg="brand.700" color="white" p={5}>
        <Text fontSize="md" textAlign="center">© 2023 John Doe. All rights reserved.</Text>
      </Box>
    </VStack>
  );
};

export default Index;