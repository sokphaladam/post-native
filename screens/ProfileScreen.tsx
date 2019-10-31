//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

// create a component
class ProfileScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.profileheader}>
                        <View>
                            <Image source={{ uri: 'https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t1.0-9/70859446_1330098477164146_8531363087897329664_o.jpg?_nc_cat=111&_nc_oc=AQljnIDiHnPbeFrW5Z6VoR4_PGqxSGSVDJAWA4Z1sQj2u0Rkx-SUJZL50aoaBn06jhk&_nc_ht=z-p3-scontent.fpnh5-2.fna&oh=7ec26abc80fd7ed51bd736e5d7b3f312&oe=5E6578D0' }}
                                style={styles.profilepic} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 20 }}>
                            <View style={styles.profileheadertext}>
                                <Text>
                                    1
                            </Text>
                                <Text>Post</Text>
                            </View>
                            <View style={styles.profileheadertext}>
                                <Text>
                                    10
                            </Text>
                                <Text>Followers</Text>
                            </View>
                            <View style={styles.profileheadertext}>
                                <Text>
                                    200
                            </Text>
                                <Text>Following</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.nametext}>
                        <Text style={{ fontSize: 20 }}>Mr. Lonely</Text>
                    </View>
                    <View style={styles.editprofile}>
                        <Text>Edit Profile</Text>
                    </View>
                    <View style={styles.personalinfo}>
                        <Text style={{fontWeight: '900', fontSize: 20, padding: 10}}>Personal Information</Text>
                        <Text>Job: Developer</Text>
                        <Text>Gender: male</Text>
                        <Text>Relationship: married to his right hand</Text>
                        <Text>Hobbies: Watch porn and jerk off</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profilepic: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    profileheader: {
        flexDirection: 'row',
        marginTop: 50,
        marginLeft: 20
    },
    profileheadertext: {
        margin: 10,
        fontSize: 15
    },
    nametext: {
        marginLeft: 30,
        paddingTop: 10
    },
    editprofile: {
        borderWidth: 0.7,
        padding: 10,
        margin: 20,
        borderRadius: 10,
        alignItems: 'center'
        
    },
    personalinfo: {
        margin: 20
    }
});

//make this component available to the app
export default ProfileScreen;
