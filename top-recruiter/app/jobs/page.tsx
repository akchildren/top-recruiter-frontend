'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
} from '@chakra-ui/react'

import JobSearch from './components/Filters/jobs-search'

export default function JobListings() {
  return (
    <main>
        <Stack direction={['column', 'row']} spacing='24px'>
            <Container>
              <JobSearch/>
            </Container>
        </Stack>
    </main>
  )
}
