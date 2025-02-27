import { ChakraProvider, Box, Flex, Grid, Text, VStack, HStack, Image } from '@chakra-ui/react';

export default function Dashboard() {
  return (
    <ChakraProvider>
      <Box bg="blue.50" flex={1} p={5}>
        <Flex justifyContent="space-between" mb={5}>
          <Text fontSize="3xl" fontWeight="bold">Dashboard</Text>
        </Flex>

        {/* Daily Active Users, Monthly Active Users, Daily Time Per Active User */}
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={5}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Daily Active Users</Text>
            <Text fontSize="2xl" fontWeight="bold">1051</Text>
            <Text fontSize="sm" color="gray.500">18 Mar 2020</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Monthly Active Users</Text>
            <Text fontSize="2xl" fontWeight="bold">1051</Text>
            <Text fontSize="sm" color="gray.500">18 Mar 2020</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Daily Time Per Active User</Text>
            <Text fontSize="2xl" fontWeight="bold">1051</Text>
            <Text fontSize="sm" color="gray.500">18 Mar 2020</Text>
          </Box>
        </Grid>

        {/* User Activity Section */}
        <Box bg="blue.50" flex={1} mb={5}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>User Activity</Text>
          <Box w="50%" h="50%" bg="gray.100" p={5} borderRadius="md">
            <Image
              src="/img/chart.png" // Path to the chart image in the public/img folder
              alt="User Activity Chart"
              w="100%" // Make the image fill the container width
              h="100%" // Make the image fill the container height
              objectFit="cover" // Ensure the image fits nicely
            />
          </Box>
        </Box>

        {/* Daily Active Users Breakdown and By Authentication Method */}
        <Grid templateColumns="repeat(2, 1fr)" gap={6} mb={5}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold" mb={4}>Daily Active Users</Text>
            <VStack align="start" spacing={2}>
              <HStack>
                <Box w="10px" h="10px" bg="blue.500" borderRadius="full" />
                <Text>Staff - 151</Text>
              </HStack>
              <HStack>
                <Box w="10px" h="10px" bg="green.500" borderRadius="full" />
                <Text>Students - 200</Text>
              </HStack>
              <HStack>
                <Box w="10px" h="10px" bg="green.500" borderRadius="full" />
                <Text>Students - 200</Text>
              </HStack>
              <HStack>
                <Box w="10px" h="10px" bg="purple.500" borderRadius="full" />
                <Text>Other - 200</Text>
              </HStack>
            </VStack>
            <Box my={5} />
            <Text fontSize="lg" fontWeight="bold" mb={4}>By Authentication Method</Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={2}>
              <Text>Microsoft</Text>
              <Text>100</Text>
              <Text>SMALL</Text>
              <Text>100</Text>
              <Text>Internal</Text>
              <Text>100</Text>
            </Grid>
          </Box>

          <Box gridColumn="3 / 4" display="flex" alignItems="center" justifyContent="center">
    <Image src="your-image-url.jpg" alt="Description of image" borderRadius="md" />
  </Box>
          
        </Grid>

        {/* Activity Log Section */}
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={4}>Activity Log</Text>
          <VStack align="start" spacing={2}>
            <Text>User name here Permissions changed to admin by admin123 - 2hrs ago</Text>
            <Text>User name Successfully logged in - 2hrs ago</Text>
            <Text>User name here Permissions changed to admin by admin123 - 2hrs ago</Text>
            <Text>User name here Permissions changed to admin by admin123 - 2hrs ago</Text>
            <Text>User name Successfully logged in - 2hrs ago</Text>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}