import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';
import LibraryList from './LibraryList';

class TechStack extends Component {
  state = {
    loading: false
  };

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return <Button onPress={() => firebase.auth().signOut()}>Log out</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <LibraryList />
        </CardSection>
        <CardSection>
          <Input
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            label="Password"
            placeholder="password"
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
};

export default TechStack;
