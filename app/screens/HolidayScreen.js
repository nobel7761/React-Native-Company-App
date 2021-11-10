import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { Card, Text } from 'react-native-elements';




function HolidayScreen() {
    return (
        <View>

            <Card borderRadius={10} >
                <View style={{ flexDirection: "row" }}>
                    <View style={[styles.dateAndMonth, { backgroundColor: '#E77DEB', }]}>
                        <Text style={styles.date}>26</Text>
                        <Text style={styles.month}>Oct</Text>
                    </View>

                    <View style={styles.descriptionTitle}>
                        <Text style={styles.holidayTitle}>Vijayadashami</Text>
                        <Text style={styles.day}>Monday</Text>
                    </View>
                </View>
            </Card>

            <Card borderRadius={10}>
                <View style={{ flexDirection: "row" }}>
                    <View style={[styles.dateAndMonth, { backgroundColor: '#8C73E0', }]}>
                        <Text style={styles.date}>14</Text>
                        <Text style={styles.month}>Nov</Text>
                    </View>

                    <View style={styles.descriptionTitle}>
                        <Text style={styles.holidayTitle}>Laxmi Puja</Text>
                        <Text style={styles.day}>Saturday</Text>
                    </View>
                </View>
            </Card>

            <Card borderRadius={10}>
                <View style={{ flexDirection: "row" }}>
                    <View style={[styles.dateAndMonth, { backgroundColor: '#4BC18B', }]}>
                        <Text style={styles.date}>16</Text>
                        <Text style={styles.month}>Dec</Text>
                    </View>

                    <View style={styles.descriptionTitle}>
                        <Text style={styles.holidayTitle}>Victory Day of Bangladesh</Text>
                        <Text style={styles.day}>Wednesday</Text>
                    </View>
                </View>
            </Card>


            <Card borderRadius={10}>
                <View style={{ flexDirection: "row" }}>
                    <View style={[styles.dateAndMonth, { backgroundColor: '#E25454', }]}>
                        <Text style={styles.date}>25</Text>
                        <Text style={styles.month}>Dec</Text>
                    </View>

                    <View style={styles.descriptionTitle}>
                        <Text style={styles.holidayTitle}>Christmas Day</Text>
                        <Text style={styles.day}>Friday</Text>
                    </View>
                </View>
            </Card>



        </View>
    )
}

const styles = StyleSheet.create({
    dateAndMonth: {
        width: 70,
        padding: 10,
        fontSize: 100,
        borderRadius: 5,
    },
    date: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    },
    month: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    descriptionTitle: {
        paddingLeft: 10,
        alignSelf: 'flex-start',
    },
    holidayTitle: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20
    },
    day: {
        marginTop: 10,
        opacity: 0.5,
        fontSize: 20
    },
})

export default HolidayScreen;