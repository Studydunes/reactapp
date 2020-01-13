import React from "react";
import { Text, StyleSheet, View, FlatList, Button } from "react-native";


const EventComponent =(props) => {
    const { events } = props;
    console.log("events",events)
    return (
        <View>
            <Button
                title="Add Event"
                onPress={() => 
                    props.navigation.push(MOBILE_VERIFICATION_CONTAINER_AFTER, {
                        authUserInfo: user,
                        isFromUserProfile: true,
                        userInfo: userInfo,
                        mobileNumber: userInfo.mobileNumber
                    })
                }
            />
           <FlatList
                data={events}
                renderItem={({ item }) => <ReviewRowItem item={item} />}
            />
        </View>
    );
}
const ReviewRowItem = (props) => {
    const { item } = props;

    
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            <Text style={styles.sectionDescription}>{item.description}</Text>
            <Text>{item.price}</Text>
        </View >
    )
}
const styles = StyleSheet.create({
    section: {
        backgroundColor:"grey",
        padding: 7
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '400',
        color: "black",
    },
    sectionTitle: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '800',
        color: "black",
    },
});
export default EventComponent;