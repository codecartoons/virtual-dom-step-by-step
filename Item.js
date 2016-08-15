let Item = React.createClass({
  displayName: "Item",

  render: function() {
    return React.createElement("div", {}, this.props.text)
  }
});
