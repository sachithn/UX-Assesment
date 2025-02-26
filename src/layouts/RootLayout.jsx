import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { Grid, GridItem } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="blue.50">
      <GridItem
        as="aside"
        colSpan="1"
        bgColor="blue.100"
        minHeight="100hv"
        p="30px"
      >
        <Sidebar />
      </GridItem>

      <GridItem
      as="main"
      colSpan="5"
      p="40px"
      >
        <Outlet />
      </GridItem>
    </Grid>
  )
}
