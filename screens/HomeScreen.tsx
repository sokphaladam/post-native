import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { PostCardComponent } from '../src/components/PostCardComponent';

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <PostCardComponent 
          title="Irina"
          desc="lorem ipsum asdjaksdnzxncbkajsdnkasd"
          uriImage="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          profile="https://images.pexels.com/users/avatars/135125/irina-iriser-740.jpeg?w=256&h=256&fit=crop&crop=faces"
          
        />
        <PostCardComponent 
          uriImage="https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          profile="https://images.pexels.com/users/avatars/2659/pixabay-617.png?w=256&h=256&fit=crop&crop=faces"
          title="Irina"
          desc="lorem ipsum asdjaksdnzxncbkajsdnkasd"
        />
        <PostCardComponent 
          uriImage="https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          profile="https://images.pexels.com/users/avatars/230277/eugene-dorosh-854.jpeg?w=256&h=256&fit=crop&crop=faces"
          title="Irina"
          desc="lorem ipsum asdjaksdnzxncbkajsdnkasd"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
