import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import BridgeService from './app/services/bridge';

export default class App extends React.Component {
  state = {
    loaded: false
  }

  constructor() {
    super();
    BridgeService.load(v => this.setState({loaded: true}));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loaded ? <Text style={styles.titleText}>Light It Up</Text> : <Text>Discovering bridges...</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
