'use client'

import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
    FcAbout,
    FcComboChart,
    FcCollaboration,
    FcReading,
    FcManager,
} from 'react-icons/fc'

interface CardProps {
    heading: string
    description: string
    icon: ReactElement
    href: string
}

const Card = ({ heading, description, icon, href }: CardProps) => {
    return (
        <Box
            maxW={{ base: 'full', md: '275px' }}
            w={'full'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}>
            <Stack align={'start'} spacing={2}>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    bg={useColorModeValue('gray.100', 'gray.700')}>
                    {icon}
                </Flex>
                <Box mt={2}>
                    <Heading size="md">{heading}</Heading>
                    <Text mt={1} fontSize={'sm'}>
                        {description}
                    </Text>
                </Box>
                <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                    Learn more
                </Button>
            </Stack>
        </Box>
    )
}

export default function HomeCardList() {
    return (
        <Box p={4}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                    We put our
                    <Text as={'span'} color={'orange.400'}>
                        &nbsp;job seekers&nbsp;
                    </Text>
                    first
                </Heading>
                <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                    At Top Recruiter we want the best experience for our job seekers and want to ensure that we connect closely with our users.
                </Text>
            </Stack>

            <Container maxW={'5xl'} mt={12}>
                <Flex flexWrap="wrap" gridGap={6} justify="center">
                    <Card
                        heading={'Metrics'}
                        icon={<Icon as={FcComboChart} w={10} h={10} />}
                        description={'We provide you metrics of your performance and reviews.'}
                        href={'#'}
                    />
                    <Card
                        heading={'Live Chat Service'}
                        icon={<Icon as={FcCollaboration} w={10} h={10} />}
                        description={'Live chatbot available 24/7'}
                        href={'#'}
                    />
                    <Card
                        heading={'Recruiter Vetting'}
                        icon={<Icon as={FcReading} w={10} h={10} />}
                        description={'We will conduct vetting so that our job seekers can ensure they are not wasting their time.'}
                        href={'#'}
                    />
                    <Card
                        heading={'Heading'}
                        icon={<Icon as={FcManager} w={10} h={10} />}
                        description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
                        href={'#'}
                    />
                    <Card
                        heading={'Heading'}
                        icon={<Icon as={FcAbout} w={10} h={10} />}
                        description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
                        href={'#'}
                    />
                </Flex>
            </Container>
        </Box>
    )
}