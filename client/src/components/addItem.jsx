import React, { Component } from "react";
import { addItem } from "../actions/itemAction";
import uuid from "uuid";
import { connect } from "react-redux";
import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { AUTH_ERROR } from "../actions/types";
import PropTypes from "prop-types";

class AddItem extends Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool
  }; 
  state = {
    modal: false,
    name: ""
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const item = {
      name: this.state.name
    };
    this.props.addItem(item);
    this.toggle();
  };

  render() {
   
    return (
      <Container>
         {this.props.isAuthenticated? <Button
          color="dark"
          style={{ marginBottom: "2rem", marginTop: "2rem" }}
          onClick={this.toggle}
        >
          Add Item
        </Button> :null}
        
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  onChange={this.onChange}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onSubmit} >
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addItem }
)(AddItem);
