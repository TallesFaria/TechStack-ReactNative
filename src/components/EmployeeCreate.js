import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: 'shift', value })}
            style={{ flex: 1 }}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tueday" value="Tueday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Monday" value="Monday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>Add Employee</Button>
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
