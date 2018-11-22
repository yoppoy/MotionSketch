import React, {Component} from 'react'
import {Container, Button, Text} from 'native-base';
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SigninScreenStyle'

class SigninScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  componentWillReceiveProps(newProps) {
    if(!newProps.finished && this.props.finished) {
      this.props.navigate('SomewhereScreen');
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Text>Sign In Screen</Text>
        <Text>Don't have an account Yet ?</Text>
        <Button onPress={() => this.props.navigation.navigate('SignUp')}><Text>Sign Up</Text></Button>
        <Button onPress={() => this.props.navigation.navigate('App')}><Text>Go to home</Text></Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen)
