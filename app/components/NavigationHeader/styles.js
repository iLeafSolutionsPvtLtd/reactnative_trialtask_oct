import {StyleSheet} from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#4273b3',
  },

  subContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  headerView:{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'white',paddingVertical:3,paddingHorizontal:20},
  titleText: {fontSize: 14, color: AppStyles.color.COLOR_WHITE,fontWeight:'bold'},
  imageDimension:{width:20,height:20}
});

export default styles;
