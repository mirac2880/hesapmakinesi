import React, { Component } from 'react';
import { Button,  StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      input1:'',
      input2:'',
      sonuc:0
    }
    //this deki statelere erişebilmek için
    this.topla=this.topla.bind(this)
    this.cikar=this.cikar.bind(this)
    this.carp=this.carp.bind(this)
    this.bol=this.bol.bind(this)
    this.clear=this.clear.bind(this)
  }
  topla(){
    const sayi1 =parseFloat(this.state.input1)
    const sayi2=parseFloat(this.state.input2)
    const sonuc= sayi1+sayi2;
    //yazdırma
    this.setState({
      sonuc:sonuc
    })
  }
  cikar(){
    const sayi1 =parseFloat(this.state.input1)
    const sayi2=parseFloat(this.state.input2)
    const sonuc= sayi1-sayi2;
    //yazdırma
    this.setState({
      sonuc:sonuc
    })
  }
  carp(){
    const sayi1 =parseFloat(this.state.input1)
    const sayi2=parseFloat(this.state.input2)
    const sonuc= sayi1*sayi2;
    //yazdırma
    this.setState({
      sonuc:sonuc
    })
  }
  bol(){
    const sayi1 =parseFloat(this.state.input1)
    const sayi2=parseFloat(this.state.input2)
    const sonuc= sayi1/sayi2;
    //yazdırma
    this.setState({
      sonuc:sonuc
    })
  }
  clear(){
    this.setState({
      sonuc:'0',
      input1:'0',
      input2:'0'
    
    })
  }
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.headertext}>HESAP MAKİNESİ</Text>
              </View>
              <View style={styles.contentWrapper}>
              <TextInput style={styles.input}
                     placeholder='birinci sayı'
                     onChangeText={(text) => {
                       this.setState({
                         input1: text
                       })
                     }}
                     value={this.state.input1}
            />
            <View style={styles.buttonwrapper}>
              <Button  
                        onPress={this.topla}
                        color="#841584"
                        title='+'
                        
                        
              />
              <Button  onPress={this.cikar}
                        color="#841584"
                        title='-'
              />
              <Button  onPress={this.bol}
                        color="#841584"
                        title='/'
              />
              <Button  onPress={this.carp}
                        color="#841584"
                        title='*'
              />
              <Button  onPress={this.clear}
                        color="#841584"
                        title='AC'
              />
            </View>
            <TextInput style={styles.input}
                     placeholder='ikinci sayı'
                     onChangeText={(text) => {
                       this.setState({
                         input2: text
                       })
                     }}
                     value={this.state.input2}
            />
                <Text style={styles.sampletext}>{this.state.sonuc}</Text>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      flexDirection:'column'
  },
    header: {
       height:80,
       paddingTop:30,
       shadowColor:'#000000',
       shadowOffset:{width:0, height:2},
       shadowOpacity:0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    headertext: {
        textAlign: 'center',
        fontSize:20
    },
    contentWrapper:{
      padding:20,
      flexDirection:'column',
      justifyContent:'center'
    },
    input:{
      height:40
    },
    sampletext:{
      height:30,
      fontSize:25
    },
    buttonwrapper:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      
    },
    
});