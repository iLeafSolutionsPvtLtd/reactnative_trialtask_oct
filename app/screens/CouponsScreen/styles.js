import {StyleSheet} from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    
  },
  container: {
    backgroundColor: AppStyles.color.COLOR_WHITE,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10
  },
  parentContainer:{width:"100%",height:60,flexDirection:'row',justifyContent:'space-between',padding:10},
  dropdownView:{width:"60%",justifyContent:'center',borderRadius:5,borderWidth:1,borderColor:AppStyles.color.COLOR_GREY},
  customDropDownStyle:{padding:0,top:-9,left:5},
  customDropDownBtn:{position:'absolute',right:10},
  listgridView:{padding:10, flex:1,alignItems:'center',flexDirection:'row',justifyContent:'space-between'},
  listIcon:{width:20 , height:20}
});

export default styles;
