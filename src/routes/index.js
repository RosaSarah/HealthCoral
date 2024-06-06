import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tab.routes";
import React from 'react'

export default function Routes() {
    return(
        <NavigationContainer theme={{
            colors: {
                background: "white",
                card: "#0091CB",
                text: "white",
                primary: "white"
            }
        }}>
            <TabRoutes/>
        </NavigationContainer>
    )
}