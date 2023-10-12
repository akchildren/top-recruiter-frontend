'use client'

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'} color={'orange.500'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel color={useColorModeValue('gray.600', 'gray.600')}>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel color={useColorModeValue('gray.600', 'gray.600')}>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'orange.400'}>Forgot password?</Text>
            </Stack>
            <Button colorScheme={'orange'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://media.istockphoto.com/id/1176599995/photo/laptop-conceptual-stereoscopic-image-of-3d-rendered-shopping-cart-fully-toned-in-orange-color.jpg?s=612x612&w=0&k=20&c=J-H4DysVXIP5HjZmXxo9F3Mq3zb24s_d6hvgAaoeD0A='
          }
        />
      </Flex>
    </Stack>
  )
}