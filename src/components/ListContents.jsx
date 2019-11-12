import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import Input from "./Input.jsx";
import {
  toggleUnReadUrlCheckBox,
  deleteUnReadUrlLists,
  addReadUrlLists
} from "../redux/redux";
import "../styles/styles.css";

class ListContents extends Component {
  checkBtn = indexVal => e => {
    const unReadUrlLists = this.props.unReadUrlLists;
    let index;
    unReadUrlLists.forEach((unReadUrlLists, i) => {
      if (unReadUrlLists.index === indexVal) index = i;
    });
    this.props.changeUnReadUrlCheckBox(index);
  };
  changeRead = () => {
    // DELETE FROM UN READ LIST
    const unReadUrlLists = this.props.unReadUrlLists;
    const nonDeleteList = unReadUrlLists.filter(
      unReadUrlList => !unReadUrlList.checked
    );
    if (nonDeleteList.length !== unReadUrlLists.length)
      this.props.deleteUnReadUrlLists(nonDeleteList);

    // ADD TO READ LIST
    const newReadList = unReadUrlLists.filter(
      unReadUrlList => unReadUrlList.checked
    );
    this.props.addReadUrlLists(newReadList);
  };
  render() {
    const unReadUrlLists = this.props.unReadUrlLists;
    const preventDefault = event => event.preventDefault();

    return (
      <div className="contents listContents">
        <Input />
        <Button
          variant="contained"
          color="secondary"
          onClick={this.changeRead}
          className="changeRead"
        >
          CHANGE TO READ
        </Button>
        <List>
          {console.log("all list", unReadUrlLists)}
          {unReadUrlLists.map((unReadUrlList, i) => (
            <ListItem key={i}>
              <ListItemAvatar>
                <Avatar alt="Avatar" src={`../images/image.png`} />
              </ListItemAvatar>
              <Link href={unReadUrlList.url} onClick={preventDefault}>
                {unReadUrlList.url}
              </Link>
              <ListItemText className="date" primary={unReadUrlList.date} />
              <ListItemSecondaryAction>
                <Checkbox
                  checked={unReadUrlList.checked}
                  onChange={this.checkBtn(unReadUrlList.index)}
                  color="primary"
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    unReadUrlLists: state.unReadUrlLists
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeUnReadUrlCheckBox: index => dispatch(toggleUnReadUrlCheckBox(index)),
    deleteUnReadUrlLists: nonDeleteList =>
      dispatch(deleteUnReadUrlLists(nonDeleteList)),
    addReadUrlLists: newReadList => dispatch(addReadUrlLists(newReadList))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListContents);
