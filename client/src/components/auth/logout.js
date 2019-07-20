import React, { Component } from "react";
import { logout } from "../../actions/authAction";
import { connect } from "react-redux";
import { NavLink } from "reactstrap";
import PropTypes from "prop-types";

class LogOut extends Component {
    static propTypes = {
       logout: PropTypes.func.isRequired
      };
  state = {};
  render() {
    return (
      <fragment>
        <NavLink onClick={this.props.logout} href='#'>Logout</NavLink>
      </fragment>
    );
  }
}


export default connect(
 null,
  { logout }
)(LogOut);
