import React, {Component} from 'react';
import {View, SafeAreaView,Image,FlatList,TouchableOpacity} from 'react-native';
import styles from './styles';
import Search from 'react-native-search-box';
 import { Dropdown } from 'react-native-material-dropdown';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import ListComponent from '../../components/ListComponent';
import Images from '../../config/images';

class CouponScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listArray:[],
      noColum:2,
      gridView:false,
      data:[{
        value: 'Pounds Captured 1',
      }, {
        value: 'Pounds Captured 2',
      }, {
        value: 'Pounds Captured 3',
      }]
    };
  }

  componentDidMount () {

    let listArray = [{
      id:1,
      image:Images.first_banner,
      rate:'8 lbs / $',
      weight:'10 LBS'
    },
    {
      id:2,
      image:Images.second_banner,
      rate:'10 lbs / $',
      weight:'30 LBS'
    },
    {
      id:3,
      image:Images.third_banner,
      rate:'80 lbs / $',
      weight:'112 LBS.'
    },
    {
      id:4,
      image:Images.forth_banner,
      rate:'500 lbs / $',
      weight:'11 LBS.'
    },
    {
      id:5,
      image:Images.fifth_banner,
      rate:'80-100 lbs / 2$',
      weight:'43 LBS.'
    },
    {
      id:6,
      image:Images.sixth_banner,
      rate:'10 lbs / $',
      weight:'200 LBS.'
    },
    {
      id:1,
      image:Images.first_banner,
      rate:'8 lbs / $',
      weight:'10 LBS.'
    },
    {
      id:2,
      image:Images.second_banner,
      rate:'10 lbs / $',
      weight:'30 LBS.'
    },
    {
      id:3,
      image:Images.third_banner,
      rate:'80 lbs / $',
      weight:'112 LBS.'
    },
    {
      id:4,
      image:Images.forth_banner,
      rate:'500 lbs / $',
      weight:'11 LBS.'
    },
    {
      id:5,
      image:Images.fifth_banner,
      rate:'80-100 lbs / 2$',
      weight:'43 LBS.'
    },
    {
      id:6,
      image:Images.sixth_banner,
      rate:'10 lbs / $',
      weight:'200 LBS.'
    }];
    this.setState({listArray})
  }

  renderView = ({item,index}) => {
    return(
      <ListComponent datas={item} adjustSize={this.state.gridView}/>
    )
  };

  render() {
    const {data} = this.state;
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.safeContainer}>
          <NavigationHeader headerTitle={'SHOP'} />
          <View>
            <Search backgroundColor={"#dcdcdc"}/>
          </View>
          <View style={styles.parentContainer}>
              <View style={styles.dropdownView}>
                <Dropdown baseColor={'transparent'} fontSize= {14}  value={data[0].value} data={data} containerStyle={styles.customDropDownStyle}/>
                <Image source={Images.dropdownArrow} style={styles.customDropDownBtn}/>
              </View>
              <View style={styles.listgridView}>
                <TouchableOpacity onPress={()=>{this.setState({gridView:true})}}>
                  <Image style={styles.listIcon} resizeMode="contain" source={this.state.gridView?Images.tileView3active:Images.tileViewInactive}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.setState({gridView:false})}}>
                  <Image  style={styles.listIcon}  resizeMode="contain" source={this.state.gridView? Images.tileView2inactive: Images.tileView}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.renderList}>
                  <Image style={styles.listIcon} resizeMode="contain" source={Images.listGrid}/>
                </TouchableOpacity>
              </View>
          </View>
          <View style={{flex:1}}>
          <FlatList 
            numColumns={this.state.noColum} 
            extraData={this.state} 
            keyExtractor={item => item.id} 
            key = {( this.state.gridView ) ? 1 : 0 } 
            numColumns = { this.state.gridView ? 3 : 2 }
            data={this.state.listArray} 
            renderItem={this.renderView} />
          </View>

          
        </View>
        
      </SafeAreaView>
    );
  }
}

export default CouponScreen;
