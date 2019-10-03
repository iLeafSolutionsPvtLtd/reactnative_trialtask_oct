import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CouponsScreen from '../screens/CouponsScreen';
import MoreScreen from '../screens/MoreScreen';
import FeaturedScreen from '../screens/FeaturedScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import {Image} from 'react-native';
import React, { PureComponent } from 'react';
import images from '../config/images';




const TabNavigator = createBottomTabNavigator({
  Favorites : FavouritesScreen,
  Featured:FeaturedScreen,
  Coupons: CouponsScreen,
  Categories: CategoriesScreen,
  More:MoreScreen
},

{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
       let iconName;
      if (routeName === 'Favorites') {
         iconName = images.favoritetab;
      } else if (routeName === 'Featured') {
         iconName = images.featuredTab;
      }
      else if (routeName === 'Coupons') {
        iconName = images.couponsTab;
      }else if (routeName === 'Categories') {
        iconName = images.catogoriesTab;
      }else if (routeName === 'More') {
        iconName = images.moreTab;
      }
      return <Image style={{width:20,height:20}} resizeMode="contain" source={iconName} />;
    },
    tabBarOptions: {
      style: {
        backgroundColor: '#323232',
      },
    },
    
  }),
  
 
},);


const App = createAppContainer(TabNavigator);
export default App;
