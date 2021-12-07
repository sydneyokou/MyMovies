// Navigation/Navigation.js

import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Image, StyleSheet} from 'react-native'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator({
    Search:{
        screen : Search,
        navigationOptions:{
            title:"Rechercher"
        }
    },
    FilmDetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
        screen: FilmDetail
      }
})

const FavoritesStackNavigator = createStackNavigator({
    Favorites:{
        screen : Favorites,
        navigationOptions:{
            title:"Favoris"
        }
    },
    FilmDetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
        screen: FilmDetail
      }
})

const MoviesTabNavigator = createBottomTabNavigator({
    Search: {
        screen : SearchStackNavigator,
        navigationOptions:{
            tabBarIcon: () => {return <Image source={require('../Images/ic_search.png')} style={styles.icon}/>}
        }
    },
    Favorites: {
        screen : FavoritesStackNavigator,
        navigationOptions:{
            tabBarIcon: () => {return <Image source={require('../Images/ic_favorite.png')} style={styles.icon}/>}
        }
    }
},{
        tabBarOptions: {
            showLabel : false,
            showIcon : true,
            activeBackgroundColor: '#DDDDDD',
            inactiveBackgroundColor: '#FFFFFF'
        }
    }
)

const styles = StyleSheet.create({
    icon : {
        width: 30,
        height: 30
    }
})

export default createAppContainer(MoviesTabNavigator)