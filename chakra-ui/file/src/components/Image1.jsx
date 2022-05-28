import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";

const Image=()=>{
    return(
        <>
       <Container display="flex" gap="20px">
        <Box w='50%'>

        <Heading>Desktop Layout</Heading>

        <SimpleGrid columns={3} spacing={0}>
        <Box bg='skyblue' height='200px'color="white"fontSize="20px"fontWeight="bold">NAV</Box>
        <Box bg='orange' height='200px'color="white"fontSize="20px"fontWeight="bold">CONTENT</Box>
        <Box bg='red' height='200px'color="white"fontSize="20px"fontWeight="bold">WIDGET</Box>
        
    
      </SimpleGrid>
       </Box>
       <Box>
       <Heading>Mobile Layout</Heading>
       <SimpleGrid columns={1} spacing={1} width="60%">
            <Box bg='skyblue' height='80px'color="white"fontSize="20px"fontWeight="bold">NAV</Box>
            <Box bg='orange' height='80px'color="white"fontSize="20px"fontWeight="bold">CONTENT</Box>
            <Box bg='red' height='80px'color="white"fontSize="20px"fontWeight="bold">WIDGET</Box>
            
        </SimpleGrid>
       </Box>
       </Container>
      
       
       </>
      

    )
}
export default Image;