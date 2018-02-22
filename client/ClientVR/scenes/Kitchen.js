import React, { Component } from 'react';
import {
  View,
  asset,
  Pano,
  VrButton,
  Text,
  StyleSheet,
  Image,
  AsyncStorage
} from 'react-vr';

import AsyncStorageUtils from '../utils/AsyncStorageUtils';

import MenuVr from '../components/MenuVr';
import PanoLayer from '../components/PanoLayer';
import IconButton from '../components/IconButton';
import PanoSwitch from '../components/PanoSwitch';

function decreasePanosLoading(state, props) {
  return {
    panosLoading: state.panosLoading - 1
  };
}

class Kitchen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scenePano: [],
      cabinetsPano: [],
      backsplashPano: [],
      counterPano: [],
      flooringPano: [],
      fireplacePano: [],
      nookPano: [],
      railPano: [],
      sceneLoading: false,
      panosLoading: 0,
      updatePhase: 'A',
      showLayerA: false,
      showLayerB: true,
    };
  }

  componentWillMount() {
    this.initScene(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.flooring !== nextProps.flooring ||
        this.props.backsplash !== nextProps.backsplash ||
        this.props.cabinets !== nextProps.cabinets ||
        this.props.counter !== nextProps.counter ||
        this.props.sunroomOn !== nextProps.sunroomOn ||
        this.props.fireplaceOn !== nextProps.fireplaceOn ||
        this.props.nookOn !== nextProps.nookOn ||
        this.props.railOn !== nextProps.railOn) {
      this.updateScene(nextProps);
    }
  }

  componentDidUpdate() {
    this.updateLoadingHandler();
  }

  initScene = async (props) => {
    const result = await Promise.all(
      [
        this.handleScene(props),
        this.handleCabs(props),
        this.handleBacksplash(props),
        this.handleCounter(props),
        this.handleFlooring(props),
        this.handleFireplace(props),
        this.handleNook(props),
        this.handleRail(props),
      ]
    );
    const stateObj = {};
    result.forEach(el => {
      if (el) {
        el.forEach(item => {
          stateObj[item.key] = item.value;
        });
      }
    });
    console.log(stateObj);
    const updateNumber = Object.keys(stateObj).length;
    this.initLoadingHandler(updateNumber);
    // TODO: set updatePhase to 'A'
    this.setState(stateObj);
  }

  updateScene = async (props) => {
    const promiseArr = [];
    if (props.flooring !== this.props.flooring) {
      promiseArr.push(this.handleFlooring(props));
    }
    if (props.cabinets !== this.props.cabinets) {
      promiseArr.push(this.handleCabs(props));
    }
    if (props.backsplash !== this.props.backsplash) {
      promiseArr.push(this.handleBacksplash(props));
    }
    if (props.counter !== this.props.counter) {
      promiseArr.push(this.handleCounter(props));
    }
    if (props.fireplaceOn !== this.props.fireplaceOn) {
      promiseArr.push(this.handleFireplace(props));
    }
    if (props.nookOn !== this.props.nookOn) {
      promiseArr.push(this.handleNook(props));
    }
    if (props.railOn !== this.props.railOn) {
      promiseArr.push(this.handleRail(props));
    }
    const result = await Promise.all([...promiseArr]);
    const stateObj = {};
    result.forEach(el => {
      if (el) {
        el.forEach(item => {
          stateObj[item.key] = item.value;
        });
      }
    });
    console.log(stateObj);
    const updateNumber = Object.keys(stateObj).length;
    this.initLoadingHandler(updateNumber);
    if (this.state.updatePhase === 'A') {
      this.setState({updatePhase: 'B'});
    } else {
      this.setState({updatePhase: 'A'});
    }
    this.setState(stateObj);
  }

  handleScene =  async (props) => {
    return await this.buildPanoStateAndSetAsyncStorage(
        'scenePano',
        props.storageKeyData.kitchen.scene,
        props.panoUriData.kitchen.scene
      );
  }

  handleCabs = async (props) => {
    if (props.cabinets === 'option2') {
      return await this.buildPanoStateAndSetAsyncStorage(
        'cabinetsPano',
        props.storageKeyData.kitchen.cabinets,
        props.panoUriData.kitchen.cabinets.option2
      );
    } else if (props.cabinets === 'option3') {
      return await this.buildPanoStateAndSetAsyncStorage(
        'cabinetsPano',
        props.storageKeyData.kitchen.cabinets,
        props.panoUriData.kitchen.cabinets.option3
      );
    }
  }

  handleBacksplash = async (props) =>  {
    if (props.backsplash === 'option2') {
      return await this.buildPanoStateAndSetAsyncStorage(
        'backsplashPano',
        props.storageKeyData.kitchen.backsplash,
        props.panoUriData.kitchen.backsplash.option2
      );
    } else if (props.backsplash === 'option3') {
      return await this.buildPanoStateAndSetAsyncStorage(
        'backsplashPano',
        props.storageKeyData.kitchen.backsplash,
        props.panoUriData.kitchen.backsplash.option3
      );
    }
  }

  handleCounter = async (props) => {
    if (props.counter === 'option2') {
      return await this.buildPanoStateAndSetAsyncStorage(
        'counterPano',
        props.storageKeyData.kitchen.counter,
        props.panoUriData.kitchen.counter.option2
      );
    } else if (props.counter === 'option3') {
      return await this.buildPanoStateAndSetAsyncStorage(
        'counterPano',
        props.storageKeyData.kitchen.counter,
        props.panoUriData.kitchen.counter.option3
      );
    }
  }

  handleFlooring = async (props) => {
    if (props.flooring === 'option2') {
      return await this.buildPanoStateAndSetAsyncStorage(
        'flooringPano',
        props.storageKeyData.kitchen.flooring,
        props.panoUriData.kitchen.flooring.option2
      );
    } else if (props.flooring === 'option3') {
      return await this.buildPanoStateAndSetAsyncStorage(
        'flooringPano',
        props.storageKeyData.kitchen.flooring,
        props.panoUriData.kitchen.flooring.option3
      );
    }
  }

  handleFireplace = async (props) => {
    return props.fireplaceOn
      ? await this.buildPanoStateAndSetAsyncStorage(
        'fireplacePano',
        props.storageKeyData.kitchen.fireplace,
        props.panoUriData.kitchen.fireplace
      )
      : console.log('fireplace off');
  }

  handleNook = async (props) => {
    return props.nookOn
      ? await this.buildPanoStateAndSetAsyncStorage(
        'nookPano',
        props.storageKeyData.kitchen.nook,
        props.panoUriData.kitchen.nook
      )
      : console.log('nook open');
  }

  handleRail =  async (props) => {
    return props.railOn
      ? await this.buildPanoStateAndSetAsyncStorage(
        'railPano',
        props.storageKeyData.kitchen.rail,
        props.panoUriData.kitchen.rail
      )
      : console.log('rail off');
  }

  buildPanoStateAndSetAsyncStorage = (stateKey, storageKey, uri) => {
    let uriString;
    uri instanceof Array ? uriString = JSON.stringify(uri) : uriString = uri;
    const stateObj = {
      key: stateKey,
      value: uri
    };
    AsyncStorageUtils.setPano(storageKey, uri);
    return [stateObj];
  }

  initLoadingHandler = async (updateNumber) => {
    await this.setState({
      sceneLoading: true,
      panosLoading: updateNumber
    });
    this.props.toggleLoading(this.state.sceneLoading)
    console.log(this.state.panosLoading);
  }

  updateLoadingHandler = async () => {
    if (this.state.sceneLoading && this.state.panosLoading === 0) {
      await this.setState({
        sceneLoading: !this.state.sceneLoading,
      });
      this.props.toggleLoading(this.state.sceneLoading);
      this.setState({
        showLayerA: !this.state.showLayerA,
        showLayerB: !this.state.showLayerB
      });
      console.log('scene loaded');
    }
  }

  sceneOnLoad = () => {
    console.log('pano loading');
  }

  sceneOnLoadEnd = async () => {
    console.log('pano loaded');
    if (this.state.panosLoading !== 0) {
      await this.setState(decreasePanosLoading);
      console.log(this.state.panosLoading);
    }
  }

  render() {
    if (this.state.scenePano.length > 0) {
      return (
        <View>
          <PanoLayer radius={1000}
                      onLoad={this.sceneOnLoad}
                      onLoadEnd={this.sceneOnLoadEnd}
                      source={asset(this.state.scenePano)}
          />
          {this.props.cabinets !== 'option1' && this.state.cabinetsPano.length > 0 ? (
            <PanoSwitch radius={950}
                        panoOnLoad={this.sceneOnLoad}
                        panoOnLoadEnd={this.sceneOnLoadEnd}
                        showLayerA={this.state.showLayerA}
                        showLayerB={this.state.showLayerB}
                        updatePhase={this.state.updatePhase}
                        uri={this.state.cabinetsPano}
            />
          ) : (
            <View />
          )}
          {this.props.backsplash !== 'option1' && this.state.backsplashPano.length > 0 ? (
            <PanoSwitch radius={900}
                        panoOnLoad={this.sceneOnLoad}
                        panoOnLoadEnd={this.sceneOnLoadEnd}
                        showLayerA={this.state.showLayerA}
                        showLayerB={this.state.showLayerB}
                        updatePhase={this.state.updatePhase}
                        uri={this.state.backsplashPano}
            />
          ) : (
            <View />
          )}
          {this.props.counter !== 'option1' && this.state.counterPano.length > 0 ? (
            <PanoSwitch radius={850}
                        panoOnLoad={this.sceneOnLoad}
                        panoOnLoadEnd={this.sceneOnLoadEnd}
                        showLayerA={this.state.showLayerA}
                        showLayerB={this.state.showLayerB}
                        updatePhase={this.state.updatePhase}
                        uri={this.state.counterPano}
            />
          ) : (
            <View />
          )}
          {this.props.flooring !== 'option1' && this.state.flooringPano.length > 0 ? (
            <PanoSwitch radius={800}
                        panoOnLoad={this.sceneOnLoad}
                        panoOnLoadEnd={this.sceneOnLoadEnd}
                        showLayerA={this.state.showLayerA}
                        showLayerB={this.state.showLayerB}
                        updatePhase={this.state.updatePhase}
                        uri={this.state.flooringPano}
            />
          ) : (
            <View />
          )}
          {this.props.fireplaceOn && this.state.fireplacePano.length > 0 ? (
            <PanoSwitch radius={750}
                        panoOnLoad={this.sceneOnLoad}
                        panoOnLoadEnd={this.sceneOnLoadEnd}
                        showLayerA={this.state.showLayerA}
                        showLayerB={this.state.showLayerB}
                        updatePhase={this.state.updatePhase}
                        uri={this.state.fireplacePano}
            />
          ) : (
            <View />
          )}
          {this.props.railOn && this.state.railPano.length > 0 ? (
            <PanoSwitch radius={700}
                        panoOnLoad={this.sceneOnLoad}
                        panoOnLoadEnd={this.sceneOnLoadEnd}
                        showLayerA={this.state.showLayerA}
                        showLayerB={this.state.showLayerB}
                        updatePhase={this.state.updatePhase}
                        uri={this.state.railPano}
            />
          ) : (
            <View />
          )}
          {this.props.nookOn && this.state.nookPano.length > 0 ? (
            <PanoSwitch radius={650}
                        panoOnLoad={this.sceneOnLoad}
                        panoOnLoadEnd={this.sceneOnLoadEnd}
                        showLayerA={this.state.showLayerA}
                        showLayerB={this.state.showLayerB}
                        updatePhase={this.state.updatePhase}
                        uri={this.state.nookPano}
            />
          ) : (
            <View />
          )}
          <IconButton toggleModal={ this.props.toggleModal } />
          {this.props.renderVrMenu && <MenuVr text={ this.props.vrMenuContent } />}
        </View>
      );
    } else {
      return (
        <View />
      )
    }

  }
}

export default Kitchen;
