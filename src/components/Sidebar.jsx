import { List, ListItem, Box } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { Image } from "@chakra-ui/react"

export default function Sidebar() {
    return (

        <Box>
            <Image
                src="/img/logo.png" // Replace with your logo URL
                alt="Logo"
                mb={5} // Margin bottom to separate logo from navigation links
            />

            <List color="black" fontSize="1.2em" spacing={4}>
                <ListItem>
                    <NavLink to="/">
                        Dashboard
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/datalab">
                        Datalab
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/library">
                        Library
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/marketplace">
                        Marketplace
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/surveys">
                        Surveys
                    </NavLink>
                </ListItem>
            </List>

        </Box>


    )
}