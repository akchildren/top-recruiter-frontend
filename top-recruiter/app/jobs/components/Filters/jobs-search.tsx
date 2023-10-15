'use client'

import {
    Box,
    Input,
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
    FormControl,
    FormLabel,
    FormErrorMessage,
} from '@chakra-ui/react'

import { Field, Form, Formik } from 'formik';

export default function JobSearch() {
    // The below import defines which components come from formik
    // import { Field, Form, Formik } from 'formik';

    function validateSearch(value: string) {
        let error
        if (!value) {
            error = 'Please enter a value'
        }
        return error
    }

    return (
        <Formik
            initialValues={{ name: '' }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                }, 1000)
            }}
        >
            {(props) => (
                <Form>
                    <Stack mt='15' spacing={3} direction={{ base: 'column', md: 'row' }}>

                        <Field name='name' validate={validateSearch}>
                            {({ field, form }: { field: object, form: any }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <Input borderColor={'grey'} {...field} placeholder='Job title, Keywords or Company' />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Button
                            colorScheme={'orange'}
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                            Submit
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    )

}