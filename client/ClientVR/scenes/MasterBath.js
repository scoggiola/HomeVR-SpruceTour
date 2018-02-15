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

class MasterBath extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scenePano: '',
      sinkPano: '',
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
    this.setState({scenePano: props.panoUriData.masterBath.scene});
    this.handleSink(props);
  }

  updateScene = (props) => {
    if (props.sink !== this.props.sink) {
      this.handleSink(props);
    }
  }

  handleSink = (props) => {
    props.sink === 'double'
      ? this.setState({sinkPano: props.panoUriData.masterBath.sink})
      : console.log('nook open');
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
          {this.props.sink !== 'single' ? (
            <PanoLayer radius={990} source={ asset(this.state.sinkPano) } />
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

export default MasterBath;
