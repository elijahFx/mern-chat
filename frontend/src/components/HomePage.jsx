import React from 'react'
import { Container, Box, Text, Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react'

export default function HomePage() {

  

  return (
    <Container maxW="xl" centerContent>
      <Box
      display="flex"
      justifyContent="center"
      p={3}
      bg={"white"}
      w="100%"
      m="40px 0 15px 0"
      borderRadius="10px"
      borderWidth="1px"
      >
        <Text
        fontSize="4x1"
        fontFamily="Work sans"
        color="black"
        >MERN Chat</Text>
      </Box>
      <Box color="black" bg="white" p="4" w="100%" borderRadius="10px" borderWidth="1px">
      <Tabs variant='soft-rounded'>
  <TabList mb="1em">
    <Tab width="50%">Войти</Tab>
    <Tab width="50%">Зарегестрироваться</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  )
}
