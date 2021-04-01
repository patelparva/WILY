import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions'

export default class Transaction extends React.Component {
  constructor(){
    super();
    this.state={
      cameraPermissions:null,
      scanData:"",
      scanned:false,
      pressed:"normal"
    }
  }

  getCameraPermissions=async ()=>{
    const {status} = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      cameraPermissions:status==="granted",
      pressed:"clicked",
      scanned:false
    })
  }

  handleBarCodeData=async ({type,data})=>{
    this.setState({
      scanned:true,
      scanData:data,
      pressed:"normal"
    })
  }

  render(){
    if (this.state.cameraPermissions && this.state.pressed==="clicked") {
      return(
        <BarCodeScanner onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeData}/>
      )
    }

    else if(this.state.pressed==="normal") {
      return (
        <View>
          <Text>{this.state.cameraPermissions ? this.state.scanData : "Request Camera Permissions"}</Text>
          <TouchableOpacity onPress={this.getCameraPermissions}>
          <Text>Scan QR Code</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}