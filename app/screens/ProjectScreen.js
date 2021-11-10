import React from 'react';
import { View, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { Card, Text, } from 'react-native-elements';

function ProjectScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <Card borderRadius={10} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../assets/xcode.png')} style={styles.image} />
                        <View style={styles.descriptionTitle}>
                            <Text style={styles.holidayTitle}>Write on Photos: Add Text!</Text>
                            <Text style={styles.day}>Ver: 2.0</Text>
                        </View>
                    </View>
                </Card>
                <Card borderRadius={10} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../assets/xcode.png')} style={styles.image} />
                        <View style={styles.descriptionTitle}>
                            <Text style={styles.holidayTitle}>Write on Photos: Add Text!</Text>
                            <Text style={styles.day}>Ver: 2.0</Text>
                        </View>
                    </View>
                </Card>
                <Card borderRadius={10} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../assets/xcode.png')} style={styles.image} />
                        <View style={styles.descriptionTitle}>
                            <Text style={styles.holidayTitle}>Write on Photos: Add Text!</Text>
                            <Text style={styles.day}>Ver: 2.0</Text>
                        </View>
                    </View>
                </Card>
                <Card borderRadius={10} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../assets/xcode.png')} style={styles.image} />
                        <View style={styles.descriptionTitle}>
                            <Text style={styles.holidayTitle}>Write on Photos: Add Text!</Text>
                            <Text style={styles.day}>Ver: 2.0</Text>
                        </View>
                    </View>
                </Card>
                <Card borderRadius={10} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../assets/xcode.png')} style={styles.image} />
                        <View style={styles.descriptionTitle}>
                            <Text style={styles.holidayTitle}>Write on Photos: Add Text!</Text>
                            <Text style={styles.day}>Ver: 2.0</Text>
                        </View>
                    </View>
                </Card>
                <Card borderRadius={10} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../assets/xcode.png')} style={styles.image} />
                        <View style={styles.descriptionTitle}>
                            <Text style={styles.holidayTitle}>Write on Photos: Add Text!</Text>
                            <Text style={styles.day}>Ver: 2.0</Text>
                        </View>
                    </View>
                </Card>
                <Card borderRadius={10} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../assets/xcode.png')} style={styles.image} />
                        <View style={styles.descriptionTitle}>
                            <Text style={styles.holidayTitle}>Write on Photos: Add Text!</Text>
                            <Text style={styles.day}>Ver: 2.0</Text>
                        </View>
                    </View>
                </Card>
                <Card borderRadius={10} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../assets/xcode.png')} style={styles.image} />
                        <View style={styles.descriptionTitle}>
                            <Text style={styles.holidayTitle}>Write on Photos: Add Text!</Text>
                            <Text style={styles.day}>Ver: 2.0</Text>
                        </View>
                    </View>
                </Card>
                <Card borderRadius={10} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../assets/xcode.png')} style={styles.image} />
                        <View style={styles.descriptionTitle}>
                            <Text style={styles.holidayTitle}>Write on Photos: Add Text!</Text>
                            <Text style={styles.day}>Ver: 2.0</Text>
                        </View>
                    </View>
                </Card>
                <Card borderRadius={10} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../assets/xcode.png')} style={styles.image} />
                        <View style={styles.descriptionTitle}>
                            <Text style={styles.holidayTitle}>Write on Photos: Add Text!</Text>
                            <Text style={styles.day}>Ver: 2.0</Text>
                        </View>
                    </View>
                </Card>
            </ScrollView>
        </SafeAreaView>



    )
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
    },
    descriptionTitle: {
        paddingLeft: 30,
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    holidayTitle: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20
    },
    day: {

        opacity: 0.5,
        fontSize: 20
    },
})

export default ProjectScreen;