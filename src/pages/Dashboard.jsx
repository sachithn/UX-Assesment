import { ChakraProvider, Box, Flex, Grid, Text, VStack, HStack, Image } from '@chakra-ui/react';

export default function Dashboard() {
  return (
    <ChakraProvider>
      <Box bg="blue.50" flex={1} p={5}>
        <Flex justifyContent="space-between" mb={5}>
          <Text fontFamily="Georgia, serif" fontSize="4xl" fontWeight="bold" color="blue.500">Dashboard</Text>
        </Flex>

        {/* Daily Active Users, Monthly Active Users, Daily Time Per Active User */}
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={5}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text fontFamily="Merriweather" fontSize="lg" fontWeight="bold">Daily Active Users</Text>
            <Text fontFamily="Merriweather" fontSize="2xl" fontWeight="bold">1051</Text>
            <Text fontFamily="Merriweather" fontSize="sm" color="gray.500">18 Mar 2020</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text fontFamily="Merriweather" fontSize="lg" fontWeight="bold">Monthly Active Users</Text>
            <Text fontFamily="Merriweather" fontSize="2xl" fontWeight="bold">1051</Text>
            <Text fontFamily="Merriweather" fontSize="sm" color="gray.500">18 Mar 2020</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text fontFamily="Merriweather" fontSize="lg" fontWeight="bold">Daily Time Per Active User</Text>
            <Text fontFamily="Merriweather" fontSize="2xl" fontWeight="bold">1051</Text>
            <Text fontFamily="Merriweather" fontSize="sm" color="gray.500">18 Mar 2020</Text>
          </Box>
        </Grid>

        <Box my={10} />

        {/* User Activity Section */}
        <Box shadow="md" borderWidth="1px" borderRadius="md" bg="blue.50" flex={1} mb={5}>
          <Text fontFamily="Merriweather" fontSize="2xl" fontWeight="bold" mb={4} mt={4} pl={4}>User Activity</Text>
          <Box w="50%" h="50%" bg="blue.50" pt={1} pl={10} pb={8} borderRadius="md">
            <Image
              src="/img/barchart.png"
              alt="User Activity Chart"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
        </Box>

        <Box my={10} />

        {/* Daily Active Users Breakdown and By Authentication Method */}
        <Grid templateColumns="repeat(1, 1fr)" gap={6} mb={5}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            {/* Flex container for content and image */}
            <Flex>
              {/* Content Section */}
              <Box fontFamily="Merriweather" flex={1}>
                <Text fontSize="2xl" fontWeight="bold" mb={4}>Daily Active Users</Text>
                <VStack align="start" spacing={3}>
                  <HStack>
                    <Box w="10px" h="10px" bg="blue.500" borderRadius="full" />
                    <Text fontSize="lg">Staff - 151</Text>
                  </HStack>
                  <HStack>
                    <Box w="10px" h="10px" bg="green.500" borderRadius="full" />
                    <Text fontSize="lg">Students - 200</Text>
                  </HStack>
                  <HStack>
                    <Box w="10px" h="10px" bg="green.500" borderRadius="full" />
                    <Text fontSize="lg">Students - 200</Text>
                  </HStack>
                  <HStack>
                    <Box w="10px" h="10px" bg="purple.500" borderRadius="full" />
                    <Text fontSize="lg">Other - 200</Text>
                  </HStack>
                </VStack>

                <Box my={10} />

                <Text fontFamily="Merriweather" fontSize="2xl" fontWeight="bold" mb={4}>By Authentication Method</Text>
                <Grid fontFamily="Merriweather" templateColumns="repeat(2, 1fr)" gap={2}>
                  <Box p={2} >
                    <Text fontSize="lg">Microsoft</Text>
                    <Text fontSize="2xl" fontWeight="bold">100</Text>
                  </Box>
                  <Box p={2} >
                    <Text fontSize="lg">Internal</Text>
                    <Text fontSize="2xl" fontWeight="bold">100</Text>
                  </Box>
                  <Box p={2}>
                    <Text fontSize="lg">SMAL</Text>
                    <Text fontSize="2xl" fontWeight="bold">100</Text>
                  </Box>
                </Grid>
              </Box>

              {/* Image Section */}
              <Box flex={1} display="flex" alignItems="center" justifyContent="center">
                <Image src="/img/piechart.png" alt="User Distribution Chart" borderRadius="md" />
              </Box>
            </Flex>
          </Box>
        </Grid>

        <Box my={10} />

        {/* Activity Log Section */}
        <Box fontFamily="Merriweather" p={5} shadow="md" borderWidth="1px" borderRadius="md" width="60%">
  <Text fontSize="2xl" fontWeight="bold" mb={4}>Activity Log</Text>
  <VStack align="start" spacing={2}>
    {/* First Line */}
    <Text>
      User name here Permissions changed to admin by admin123 <Text>2hrs ago</Text>
    </Text>

    {/* Second Line - Bold "User name" and gray "Successfully logged in" */}
    <Text>
      <Text as="span" fontWeight="bold">User name</Text>{" "}
      <Text as="span" fontWeight="bold" color="gray.500">Successfully logged in</Text>{" "}
      <Text>2hrs ago</Text>
    </Text>

    {/* Third Line */}
    <Text>
      User name here Permissions changed to admin by admin123 <Text>2hrs ago</Text>
    </Text>

    {/* Fourth Line */}
    <Text>
      User name here Permissions changed to admin by admin123 <Text>2hrs ago</Text>
    </Text>

    {/* Fifth Line - Bold "User name" and gray "Successfully logged in" */}
    <Text>
      <Text as="span" fontWeight="bold">User name</Text>{" "}
      <Text as="span" fontWeight="bold" color="gray.500">Successfully logged in</Text>{" "}
      <Text>2hrs ago</Text>
    </Text>
  </VStack>
</Box>
      </Box>
    </ChakraProvider>
  );
}