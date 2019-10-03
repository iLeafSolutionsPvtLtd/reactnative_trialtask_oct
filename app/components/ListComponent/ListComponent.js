import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import Images from '../../config/images';
import Styles from './style';

class ListComponent extends Component {
    state= {
        favoriteStatus:false
    }
    render(){
        const {datas,adjustSize} = this.props;
        const {favoriteStatus} =this.state;
        const {favorite,coupons,highlightFavorite } = Images;
        const testImage = datas.image;
        const paddingTile = adjustSize ? 5 : 10;
        return(
           
             <View style={[Styles.container,{padding:paddingTile}]}>
                <View style={[Styles.parentView,{padding:paddingTile}]}>
                    <View style={Styles.favImageView}>
                        <TouchableOpacity onPress ={()=>this.setState({favoriteStatus : !this.state.favoriteStatus})}>
                            <Image source = {favoriteStatus ? highlightFavorite: favorite} style={Styles.imageDimension} resizeMode="contain"/>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.bannerView}>
                        <Image source = {testImage} style={Styles.bannerImageDimension} resizeMode="contain"/>
                    </View>
                    <View style={Styles.bannerView}>
                        <Text style={Styles.rateFont}>{datas.rate}</Text>
                        <Text style={Styles.textColor}>{datas.weight}</Text>
                     </View>
                    <View style={Styles.couponImageDimension}>
                        <Image source={coupons} style={Styles.imageDimension} resizeMode="contain"/>
                    </View>
                </View>
            </View> 
        )
    }

}
export default ListComponent;