let List = React.createClass({
  displayName: "List",

  getInitialState: function() {
    return {
      numbers: [ 1, 2, 3 ]
    }
  },

  render: function() {
    let items = this.state.numbers.map(function(item) {
      const props = {
        key: item,
        text: item
      };
      return React.createElement(Item, props)
    })
    let button = React.createElement("button", {onClick: reorderCapitals.bind(this)}, "Reverse order")
    return React.createElement("div", {}, [button, items])
  }
});

function reorderCapitals(order) {
  this.setState({numbers: this.state.numbers.reverse()})
}