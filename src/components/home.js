import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { connect } from 'react-redux'

import { increment, decrement } from '../actions/index'

class App extends React.Component {
  render() {
      const props = this.props
    return (
      <View style={styles.container}>
        <Text>value: {props.value}</Text>
        <Button title='+1' onPress={props.increment}/>
        <Button title='-1' onPress={props.decrement}/>
        <Text onPress={props.increment}>+1</Text>
        <Text onPress={props.decrement}>-1</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
})

export default connect (mapStateToProps, mapDispatchToProps)(App)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


