import React from "react";
import {TouchableOpacity, Text, TouchableOpacityProps, StyleSheet } from "react-native";

interface BotoonProps extends TouchableOpacityProps {
    title: string;
    styleButton: object;
    styleText: object;
}

export const Botoon: React.FC<BotoonProps> = ({onPress, title, styleButton, styleText}) => {
    return(
        <TouchableOpacity style={styleButton} onPress={onPress}>
            <Text style={styleText}> {title} </Text>
        </TouchableOpacity>
    );
};


