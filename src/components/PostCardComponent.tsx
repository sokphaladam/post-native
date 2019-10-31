import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

type Props = {
  uriImage: string,
  profile: string,
  title: string,
  desc: string
}

export class PostCardComponent extends React.Component<Props>{
  render(){
    return(
      <View style={styles.container}>
        <Image source={{ uri: this.props.uriImage }} style={styles.image}/>
        <View style={styles.profile}>
          <Image source={{ uri: this.props.profile }} style={styles.profileImage}/>
          <View>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.desc}>{this.props.desc}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 400,
    backgroundColor: '#fff',
    margin: 10
  },
  image: {
    width: 320,
    height: 300,
  
  },
  profile: {
    width: 320,
    height: 100,
    justifyContent: 'space-between',
    flexDirection: "row",
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    padding: 10
  },
  profileImage: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    fontSize: 20
  },
  desc: {
    color: 'rgba(0,0,0,0.7)',
  }
});