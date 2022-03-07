
var TodoList = (props) => (
  <ul>
    {props.groceryItems.map(item =>
    <GroceryListItem grocery = {item} />
    )}
  </ul>
);


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver = {this.onListItemHover.bind(this)} onMouseOut = {this.onListItemHover.bind(this)}>
        {this.props.grocery}
        </li>
    );
  }
}

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList groceryItems = {['Kale', 'Banana', 'Milk']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));