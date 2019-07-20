import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import { getItems, deleteItem } from "../actions/itemAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ShoppingList extends Component {

  static propTypes = {
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    item: PropTypes.object,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getItems();
  }
  handleDelete = id => {
    this.props.deleteItem(id);
  };
  render() {
    console.log("props", this.props.item);
    const { items } = this.props.item;    
    return (
      <Container>
        <div className="shopping-list">
          {items.map(item => (
            <ul className="list-group" key={item._id}>
              <li className="list-group-item">
                {item.name}
                {this.props.isAuthenticated? <Button
                  className="btn-remove"
                  style={{ float: "right" }}
                  color="danger"
                  size="sm"
                  onClick={this.handleDelete.bind(this, item._id)}
                >
                  &times;
                </Button> : null}
              </li>
            </ul>
          ))}
        </div>
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
  { getItems, deleteItem }
)(ShoppingList);


