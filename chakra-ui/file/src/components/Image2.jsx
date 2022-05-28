import { Box, Grid, GridItem, Heading } from "@chakra-ui/react"

const Image2=()=>{
    return(
        <>
        <Box>
        <Heading>Mobile</Heading>
        <Grid templateColumns='1fr' gap={1}>
            <GridItem w='20%' h='90px' bg='purple' />
            <GridItem w='20%' h='90px' bg='tomato' />
            <GridItem w='20%' h='90px' bg='skyblue' />
            
        </Grid>
        </Box>
        <Box>
        <Heading>Desktop</Heading>
        <Grid templateColumns='1fr 1fr' gap={1}>
            <GridItem w='20%' h='90px' bg='purple' />
            <GridItem w='20%' h='90px' bg='tomato' />
            <GridItem w='20%' h='90px' bg='skyblue' />
            
        </Grid>
        </Box>
        </>
    )
}
export default Image2;