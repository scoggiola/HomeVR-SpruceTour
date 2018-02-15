import React, { Component } from 'react';
import {
  Pano,
  View,
  asset,
  AsyncStorage,
  Prefetch
} from 'react-vr';
import AsyncStorageUtils from '../utils/AsyncStorageUtils';

import PanoLayer from '../components/PanoLayer';
import MenuVr from '../components/MenuVr';

class Foyer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scenePano: '',
      bedroom5Pano: '',
      fireplacePano: '',
      prefetchUris: [],
    };
  }

  componentWillMount() {
    this.initScene(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateScene(nextProps);
    //this.updatePrefetchUris(nextProps.storageKeyData.kitchen.all);
  }

  initScene = (props) => {
    this.setState({scenePano: props.panoUriData.foyer.scene});
  }

  updateScene = (props) => {
    if (props.bedroom5On !== this.props.bedroom5On || props.fireplaceOn !== this.props.fireplaceOn) {
      this.handleBedroom5(props);
      this.handleFireplace(props);
    }
  }

  handleBedroom5 = (props) => {
    props.bedroom5On
      ? this.setState({bedroom5Pano: props.panoUriData.foyer.bedroom5})
      : console.log('bedroom5 off');
  }

  handleFireplace = (props) => {
    props.fireplaceOn
      ? this.setState({fireplacePano: props.panoUriData.foyer.fireplace})
      : console.log('bedroom5 off');
  }

  updatePrefetchUris = async (keys) => {
    try {
      await this.clearPrefetchUris();
      await this.setPrefetchUris(keys);
    } catch (err) {
      throw new Error(`failed to update prefetchUris: ${err}`);
    }
  }

  setPrefetchUris = async (keys) => {
    try {
      const prefetchValueArr = await this.buildPrefetchArr(keys);
      await this.pushToPrefetchUris(prefetchValueArr);
    } catch (err) {
      throw new Error(`failed to set prefetchUris: ${err}`);
    }
  }

  clearPrefetchUris = () => {
    this.setState({prefetchUris: []});
  }

  buildPrefetchArr = async (keys) => {
    let valueArr = [];
    const keyValues = await AsyncStorage.multiGet(keys);
    keyValues.forEach((keyValue) => {
      const key = keyValue[0];
      let value = keyValue[1];
      if (isJsonString(value)) {
        value = JSON.parse(value);
      }
      if (value !== null) {
        valueArr.push(value)
      } else {
        if (key === 'KitchenScenePano') {
          console.log(`${key} undefined... setting ${key}`);
          valueArr.push(this.props.panoUriData.kitchen.scene.americanClassic);
        }
      }
    });
    return valueArr;

    function isJsonString(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    }
  }

  pushToPrefetchUris = async (valueArr) => {
    await this.setState(prevState => ({
      prefetchUris: [...prevState.prefetchUris, ...valueArr]
    }));
  }

  render() {
    const listPrefetch = this.state.prefetchUris.map((uri) => {
      if (uri instanceof Array) {
        return (
          <Prefetch key={uri} source={
            [
              asset(uri[0]), asset(uri[1]), asset(uri[2]),
              asset(uri[3]), asset(uri[4]), asset(uri[5])
            ]
          } />
        );
      } else {
        return (
          <Prefetch key={uri} source={asset(uri)} />
        );
      }
    });

    return (
      <View>
        <Pano source={ asset(this.state.scenePano) }>
          {this.props.bedroom5On ? (
            <PanoLayer radius={990} source={ asset(this.state.bedroom5Pano) } />
          ) : (
            <View />
          )}
          {this.props.fireplaceOn ? (
            <PanoLayer radius={980} source={ asset(this.state.fireplacePano) } />
          ) : (
            <View />
          )}
        </Pano>
        {this.props.renderVrMenu && <MenuVr menuData={ this.props.menuData } />}
        {listPrefetch}
      </View>
    );
  }
}

export default Foyer;
