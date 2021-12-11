// Components/Test.js


import React from 'react'
import { StyleSheet, View, Platform, Animated } from 'react-native'

//On a créé 2 components  HelloWorld : HelloWorld.ios.js et HelloWorld.android.js -> React sait automatiquement lequel utilliser
import HelloWorld from './HelloWorld'

class Test extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            topPosition : new Animated.Value(0)
        }
    }

    componentDidMount(){
        Animated.timing(
            this.state.topPosition,
            {
                toValue: 100,
                duration: 3000,
                useNativeDriver: false
            }
        ).start()
    }

  render() {
    return (
      <View style={styles.main_container}>
        <Animated.View style={[styles.subview_container, {top:this.state.topPosition}]}>
            <HelloWorld/>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subview_container: {
      // Le module react native Platform permet de réaliser du développement spécifique :
    ...Platform.select({
        ios: {
            backgroundColor: 'red'
        },
        android : {
            backgroundColor: 'blue'
        }
    }),
            // On peut aussi l'écrire : backgroundColor: Platform.OS === 'ios' ? 'red' : 'blue',

    height : 50,
    width : 50
  }
})

export default Test