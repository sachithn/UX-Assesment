import { List, ListItem, Box, Icon, Flex } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { Image } from "@chakra-ui/react"
import {
    FiHome,
    FiDatabase,
    FiBook,
    FiShoppingCart,
    FiClipboard,
} from "react-icons/fi";

export default function Sidebar() {
    return (

        <Box>
            <Image
                src="/img/logo.png"
                alt="Logo"
                mb={5}
            />

            <List color="black" fontSize="1.2em" fontFamily="Georgia, serif" spacing={4} >
                <ListItem>
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            color: isActive ? "blue" : "inherit",
                            background: isActive ? "blue.500" : "transparent",
                            borderRadius: "md",
                            padding: "0.5rem 1rem",
                            display: "block",
                            transition: "all 0.2s",
                        })}
                    >
                        <Flex align="center">
                            <Icon as={FiHome} mr={3} />
                            Dashboard
                        </Flex>
                    </NavLink>
                </ListItem>

                <ListItem>
                    <NavLink
                        to="/datalab"
                        style={({ isActive }) => ({
                            color: isActive ? "blue" : "inherit",
                            background: isActive ? "blue.500" : "transparent",
                            borderRadius: "md",
                            padding: "0.5rem 1rem",
                            display: "block",
                            transition: "all 0.2s",
                        })}
                    >
                        <Flex align="center">
                            <Icon as={FiDatabase} mr={3} />
                            Datalab
                        </Flex>
                    </NavLink>
                </ListItem>

                <ListItem>
                    <NavLink
                        to="/library"
                        style={({ isActive }) => ({
                            color: isActive ? "blue" : "inherit",
                            background: isActive ? "blue.500" : "transparent",
                            borderRadius: "md",
                            padding: "0.5rem 1rem",
                            display: "block",
                            transition: "all 0.2s",
                        })}
                    >
                        <Flex align="center">
                            <Icon as={FiBook} mr={3} />
                            Library
                        </Flex>
                    </NavLink>
                </ListItem>

                <ListItem>
                    <NavLink
                        to="/marketplace"
                        style={({ isActive }) => ({
                            color: isActive ? "blue" : "inherit",
                            background: isActive ? "blue.500" : "transparent",
                            borderRadius: "md",
                            padding: "0.5rem 1rem",
                            display: "block",
                            transition: "all 0.2s",
                        })}
                    >
                        <Flex align="center">
                            <Icon as={FiShoppingCart} mr={3} />
                            Marketplace
                        </Flex>
                    </NavLink>
                </ListItem>

                <ListItem>
                    <NavLink
                        to="/surveys"
                        style={({ isActive }) => ({
                            color: isActive ? "blue" : "inherit",
                            background: isActive ? "blue.500" : "transparent",
                            borderRadius: "md",
                            padding: "0.5rem 1rem",
                            display: "block",
                            transition: "all 0.2s",
                        })}
                    >
                        <Flex align="center">
                            <Icon as={FiClipboard} mr={3} />
                            Surveys
                        </Flex>
                    </NavLink>
                </ListItem>
            </List>

        </Box>


    )
}