import React, { Component } from 'react';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { employeeSave, employeeUpdate } from '../actions';
import { Card, CardSection, Button } from './common';
import { EmployeeForm } from './EmployeeForm';

class EmployeeEdit extends Component {
  componentWillMount = () => {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  };

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onFirePress.bind(this)}>Fire</Button>
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;

  return {
    name,
    phone,
    shift
  };
};

export default connect(mapStateToProps, { employeeSave, employeeUpdate })(
  EmployeeEdit
);
