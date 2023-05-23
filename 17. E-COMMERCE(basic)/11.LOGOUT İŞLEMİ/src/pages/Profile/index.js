
import { useAuth } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";

import { Button, Text } from "@chakra-ui/react";

function Profile(){
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        logout();

        navigate("../")
    }
    return (
        <div>
          <Text fontSize="22" > Profile </Text>
            <code> { JSON.stringify(user)} </code>

            <br/>
            <br/>
            <Button colorScheme="yellow" variant="solid" onClick={handleLogout}> Logout </Button>
           
        </div>
    )
}

export default Profile;