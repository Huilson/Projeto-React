import React from "react";
import { FlashList } from "@shopify/flash-list";
import styles from "@/styles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { Npc } from "@/models/npc";

interface renderItemProps {
    item: Npc
}

const ListNpcScreen = (props: Array<Npc>) => {
    const data = props;

    const renderItem = (props: renderItemProps) => {
        return(
            <View style={styles.item}>
                <Text>{props.item.nome}</Text>
            </View>
        )
    }

    <View style={styles.container}>
    <FlashList
        data={data}
        renderItem={renderItem} 
    />
    </View>
    
}

export default ListNpcScreen;