import { Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="white" color="black">
        {/* Header */}
        <Flex justify="space-between" p={4} borderBottom="1px" borderColor="gray.200">
          <Box>
            <Text fontWeight="bold">Health Insights</Text>
            <Text fontWeight="bold">Blog</Text>
            <Text fontWeight="bold">Explore</Text>
            <Text fontWeight="bold">About Us</Text>
          </Box>
          <Box>
            <Text>Current Health Trends</Text>
            <Button bg="#8A2BE2" color="white">Sign Up</Button>
          </Box>
        </Flex>

        {/* Teaser Area */}
        <Flex direction="column" align="center" justify="center" p={10}>
          <Heading>Revolutionizing Health with Innovation</Heading>
          <Text color="gray.600" mt={2}>Discover the latest in wellness and health technology.</Text>
          <Box mt={4} p={6} border="1px" borderColor="gray.300" borderRadius="full" width="33%">
            <Text fontSize="5xl" color="green.400">87</Text>
            <Text>Peak Wellness</Text>
          </Box>
        </Flex>

        {/* Feature Section */}
        <Box p={4}>
          <SimpleGrid columns={5} spacing={10}>
            <Text>Health Services</Text>
            <Text>Benefits</Text>
            <Text>Subscription Plans</Text>
            <Text>User Ratings</Text>
            <Text>Popularity</Text>
          </SimpleGrid>
        </Box>

        {/* Content Cards */}
        <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4}>
          <GridItem>
            <Box p={4} border="1px" borderColor="gray.200">
              <Text>Health Tips</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={4} border="1px" borderColor="gray.200">
              <Text>Trending Health Programs</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={4} border="1px" borderColor="gray.200">
              <Text>Expert Insight</Text>
            </Box>
          </GridItem>
        </Grid>

        {/* Footer */}
        <Flex direction="column" p={4} borderTop="1px" borderColor="gray.200">
          <Flex justify="space-between">
            <Text fontWeight="bold">Service Plans</Text>
            <Text fontWeight="bold">FAQ</Text>
            <Text fontWeight="bold">Contact Info</Text>
            <Text fontWeight="bold">Careers</Text>
          </Flex>
          <Flex mt={4} justify="space-between">
            <Text color="gray.600">© 2023 Health Platform</Text>
            <Flex>
              <Icon as={FaFacebook} m={1} color="gray.600" />
              <Icon as={FaInstagram} m={1} color="gray.600" />
              <Icon as={FaTwitter} m={1} color="gray.600" />
              <Icon as={FaYoutube} m={1} color="gray.600" />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;