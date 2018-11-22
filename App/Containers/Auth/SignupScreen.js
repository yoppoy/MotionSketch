import React, {Component} from 'react'
import {Container, Button, Text, Icon} from 'native-base';
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SignupScreenStyle'

class SignupScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Create an account',
      headerLeft: (<Icon onPress={() => {
        navigation.goBack()
      }} name={'chevron-left'}/>)
    };
  };

  render() {
    return (

      <Container style={styles.container}>
        <Text>Signup Screen ?????</Text>
        <Button onPress={() => {
          this.props.navigation.goBack()
        }}><Text>LOsL</Text></Button>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)
