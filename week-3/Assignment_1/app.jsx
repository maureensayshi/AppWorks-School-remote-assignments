function List_item(props) {
  return (
    <ul className={props.listClass}>
      <li><a href="#">item1</a></li>
      <li><a href="#">item2</a></li>
      <li><a href="#">item3</a></li>
      <li><a href="#">item4</a></li>
    </ul>
  );
}

List_item.propTypes = {
  listClass : React.PropTypes.string.isRequired,
};

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <h1 onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Welcome' : 'Have a good time'}
      </h1>
    );
  }
}

function Column(props){
  return (
    <div className={props.boxcss}>
      <h3>{props.boxtitle}</h3>
      <p>{props.boxcontent}</p>
    </div>
  );
}

Column.propTypes = {
  boxcss: React.PropTypes.string.isRequired,
  boxtitle: React.PropTypes.string.isRequired,
  boxcontent: React.PropTypes.string.isRequired,
};

function Container(props) {
  return (
    <div>
      <div className="container clearfix">
        <header>
          <div className="top">
            <h2>Section Title</h2>
          </div>
        </header>
        <Column boxcss="one col" boxtitle="content box 1" boxcontent="content box 1content box 1content box 1content box 1" />
        <Column boxcss="two col" boxtitle="content box 2" boxcontent="content box 1content box 1content box 1content box 1" />
        <Column boxcss="three col" boxtitle="content box 3" boxcontent="content box 1content box 1content box 1content box 1" />
        <Column boxcss="four col" boxtitle="content box 4" boxcontent="content box 1content box 1content box 1content box 1" />
      </div>

      <div className="bottom">
            Call-to-Action
      </div>

      <div className="hidden">
        <div className="container">
          <Column boxcss="one col" boxtitle="content box 1" boxcontent="content box 1content box 1content box 1content box 1" />
          <Column boxcss="two col" boxtitle="content box 2" boxcontent="content box 1content box 1content box 1content box 1" />
          <Column boxcss="three col" boxtitle="content box 3" boxcontent="content box 1content box 1content box 1content box 1" />
          <Column boxcss="four col" boxtitle="content box 4" boxcontent="content box 1content box 1content box 1content box 1" />
        </div>
      </div>
    </div>
  );
}

function Application(props) {
  return (
    <div>
      <header className="main-header">
        <h1 className="name"><a href="#">web title</a></h1>
        <List_item listClass="main-nav" />
        <img id="image" className="main_nav_replacer" src="img/menu.png"/>
        <List_item listClass="Menu" />
      </header>
      <div className="slogan">
        <Toggle />
      </div>
      <Container />
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById('webpage'));
