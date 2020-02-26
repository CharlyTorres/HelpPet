 
import React from 'react'
import { Box, Stack, Button, Heading } from '@chakra-ui/core'
import customTheme from '../theme'

function Form({ width, children, title, submit }) {
  return (
    <Box onSubmit={submit} as="form" w={width || '350px'} marginTop="50px" rounded="md" bg={customTheme.themeColors[200]} boxShadow="xl">
      <Stack spacing={8} p={8}>
        <Heading textAlign="center" as="h1">
          {title}
        </Heading>
        {children}
        <Button bg={customTheme.themeColors[500]} type="submit">{title}</Button>
      </Stack>
    </Box>
  )
}

export default Form
