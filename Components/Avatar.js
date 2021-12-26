// Components/Avatar.js

import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-crop-picker';


class Avatar extends React.Component {

    constructor(props) {
        super(props)
        this._avatarClicked = this._avatarClicked.bind(this)  //this.setState est appelé dans un callback dans showImagePicker, pensez donc bien à binder la fonction _avatarClicked
    }

  
    // Ici nous appellerons la librairie react-native-image-picker pour récupérer un avatar
    _avatarClicked() {
      
        ImagePicker.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((response) => {
            console.log('Photo : ', response.path )
            let requireSource = { uri: response.path }
            // On crée une action avec l'image prise et on l'envoie au store Redux
            const action = { type: "SET_AVATAR", value: requireSource }
            this.props.dispatch(action)
          })
          .catch((error) => {});
      
    }
  

  render() {
    return(
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={this._avatarClicked}>
          {/* A présent on peut récupérer notre avatar dans les props. Souvenez-vous Redux mappe notre state global et ses données dans les props de notre component. */}
          <Image style={styles.avatar} source={this.props.avatar} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  touchableOpacity: {
    margin: 5,
    width: 100, // Pensez bien à définir une largeur ici, sinon toute la largeur de l'écran sera cliquable
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#9B9B9B',
    borderWidth: 2
  }
})

// On mappe l'avatar aux props de notre component
const mapStateToProps = state => {
  return {
    avatar: state.setAvatar.avatar
  }
}

export default connect(mapStateToProps)(Avatar)