import React from 'react';
import { Box,Button,ButtonGroup,Container,Heading,Image, Input, SimpleGrid, Spacer, Stack, Text } from '@chakra-ui/react';

const Layout=()=>{
    return (
        <>
        <Box display="flex" border="1px solid blue"  w='100%' p={4} color='teal'>
            <Image  w="30px"src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"></Image>
            <Spacer/>
            <ButtonGroup variant='outline' spacing='6'>
                <Button colorScheme='blue'>Signin</Button>
                <Button colorScheme='blue'>Sign Up</Button>
            </ButtonGroup>
            
            
            <Button  bg="slateblue"colorScheme='teal' variant='solid'>
                Post a Job
            </Button>
    </Box>
    <Box >
    <Stack textAlign="center" margin="auto"marginTop="50px"spacing={2}>
  <Heading as='h3' size='4xl' noOfLines={0}>
     Find The Right
  </Heading>
  <Heading as='h2' size='3xl' color="slateblue" noOfLines={1}>Four-Day</Heading>
  <Heading as='h2' size='2xl'> Week Job</Heading>

  <Input margin="40%" w="40%" boxShadow='md' p='6' rounded='md' bg='white'placeholder='Type job title or keyword' />
  
  </Stack>
    </Box>
    <Stack direction='row' spacing={4} align='center'>
  <Button bg="slateblue"colorScheme='teal' variant='solid'>
   Remote
  </Button>
  <Button marginLeft="20px"bg="slateblue"colorScheme='teal' variant='solid'>
    Tech
  </Button>
  <Button bg="slateblue"colorScheme='teal' variant='solid'>
    Marketing
  </Button>
  
  
</Stack>
<Container w="100%" h="1000px" bg="whitesmoke" >
  <Heading color="slateblue">Recent Jobs</Heading>
<SimpleGrid columns={1} spacing={10}>
  <Box display="flex"bg='white'border="1px solid slateblue" borderRadius="20px" height='80px'>
    <Image w="30px" h="30px" margin="10px" src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75"></Image>
    <Stack spacing={0.5}>
    <Text>Talewind</Text>
    <Text color="black"fontWeight="bold">Lead Producer</Text>
    <Text>50K - 65K</Text>
    </Stack>
  </Box>


  <Box display="flex"bg='white'border="1px solid slateblue" borderRadius="20px"height='80px'>
  <Image w="30px" h="30px" margin="10px" src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75"></Image>
    <Stack spacing={0.5}>
    <Text>Talewind</Text>
    <Text color="black"fontWeight="bold">Lead Game Developer</Text>
    <Text>50K - 65K</Text>
    </Stack>
  </Box>


  <Box display="flex"bg='white'border="1px solid slateblue" borderRadius="20px" height='80px'>
  <Image w="30px" h="30px" margin="10px" src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fd74e52d1-6529-4ab1-98b2-a27b1b9947ed&w=1920&q=75"></Image>
    <Stack spacing={0.5}>
    <Text>Slim Wiki</Text>
    <Text color="black"fontWeight="bold">Full stack java Script Developer</Text>
    <Text>mid,senior</Text>
    </Stack>
  </Box>


  <Box display="flex"bg='white'border="1px solid slateblue" borderRadius="20px"height='80px'>
  <Image w="30px" h="30px" margin="10px" src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fd4f13259-d651-4b8a-8115-48bdfabd24aa&w=1920&q=75"></Image>
    <Stack spacing={0.5}>
    <Text>The wanderLust Group</Text>
    <Text color="black"fontWeight="bold">Director Of Marketing</Text>
    <Text>165K</Text>
    </Stack>
  </Box>


  <Box display="flex"bg='white'border="1px solid slateblue" borderRadius="20px"height='80px'>
  <Image w="30px" h="30px" margin="10px" src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75"></Image>
    <Stack spacing={0.5}>
    <Text>Jump Search</Text>
    <Text color="black"fontWeight="bold">Senior Software Engineer</Text>
    <Text>senior</Text>
    </Stack>
  </Box>


  <Box display="flex"bg='white'border="1px solid slateblue" borderRadius="20px"height='80px'>
  <Image w="30px" h="30px" margin="10px" src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75"></Image>
    <Stack spacing={0.5}>
    <Text>Jump Search</Text>
    <Text color="black"fontWeight="bold">Senior Software Engineer</Text>
    <Text>senior</Text>
    </Stack>
  </Box>

  <Box display="flex"bg='white'border="1px solid slateblue" borderRadius="20px"height='80px'>
  <Image w="30px" h="30px" margin="10px" src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fd4f13259-d651-4b8a-8115-48bdfabd24aa&w=1920&q=75"></Image>
    <Stack spacing={0.5}>
    <Text>The wanderLust Group</Text>
    <Text color="black"fontWeight="bold">Director Of Marketing</Text>
    <Text>165K</Text>
    </Stack>
  </Box>

  <Box display="flex"bg='white'border="1px solid slateblue" borderRadius="20px" height='80px'>
    <Image w="30px" h="30px" margin="10px" src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75"></Image>
    <Stack spacing={0.5}>
    <Text>Talewind</Text>
    <Text color="black"fontWeight="bold">Lead Producer</Text>
    <Text>50K - 65K</Text>
    </Stack>
  </Box>

  <Box display="flex"bg='white'border="1px solid slateblue" borderRadius="20px" height='80px'>
    <Image w="30px" h="30px" margin="10px" src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75"></Image>
    <Stack spacing={0.5}>
    <Text>Talewind</Text>
    <Text color="black"fontWeight="bold">Lead Producer</Text>
    <Text>50K - 65K</Text>
    </Stack>
  </Box>
</SimpleGrid>
</Container>
    </>
    )
}
export default Layout;