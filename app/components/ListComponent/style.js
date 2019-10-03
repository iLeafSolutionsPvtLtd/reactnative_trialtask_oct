import {StyleSheet} from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
    container:{flex:1},
    parentView:{borderWidth:1,borderRadius:3,borderColor:AppStyles.color.COLOR_GREY,height:125},
    favImageView:{justifyContent:'flex-start'},
    imageDimension:{width:20,height:20},
    bannerView:{alignItems:'center',justifyContent:'center'},
    bannerImageDimension:{width:100,height:40},
    textColor:{color:AppStyles.color.COLOR_GREEN,fontWeight:'bold',fontSize:13},
    rateFont:{fontSize:13},
    couponImageDimension:{position:'absolute',bottom:5,right:5}
});

export default styles;