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

function List_item(props) {
  return (
    <ul className={props.listClass}>
      for(var i = 0; i < {props.time} ; i++){
        <li><a href="#">item{i + 1}</a></li>
      }
    </ul>
  );
}

List_item.propTypes = {
  time : React.PropTypes.number.isRequired,
  listClass : React.PropTypes.string.isRequired,
};

function Application(props) {
  return (
    <div>
      <header className="main-header">
        <h1 className="name"><a href="#">web title</a></h1>
        <List_item listClass="main-nav" time={6} />
        <img id="image" className="main_nav_replacer" src="img/menu.png"/>
        <List_item listClass="Menu" time={6} />
      </header>
      <div className="slogan">
        <h1 id="change">Welcome Message</h1>
      </div>
      <Container />
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById('webpage'));
