// Components/Favorites.js

import React from 'react'
import {StyleSheet, Text} from 'react-native'
import FilmList from "./FilmList.js";
import { connect } from 'react-redux'

class Favorites extends React.Component {
    
    render(){
        return (
            
           
            <FilmList
              films={this.props.favoritesFilm} // C'est bien le component Search qui récupère les films depuis l'API et on les transmet ici pour que le component FilmList les affiche
              navigation={this.props.navigation} // Ici on transmet les informations de navigation pour permettre au component FilmList de naviguer vers le détail d'un film
              favoriteList={true} // Ici on est bien dans le cas de la liste des films favoris. Ce booléen à true permettra d'empêcher de lancer la recherche de plus de films après un scroll lorsqu'on est sur la vue Favoris.
            />
            
          
        )
    }
}

const styles = StyleSheet.create({})


// On connecte le store Redux, ainsi que les films favoris du state de notre application, à notre component Favorites
const mapStateToProps = state => {
    return {
      favoritesFilm: state.favoritesFilm
    }
  }

export default connect(mapStateToProps)(Favorites)