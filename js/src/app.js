/* Scenic Byway Tour Guide for Lower Eastern Shore of Maryland 
 * By Frank Rowe, 2015
 */

var React = require('react')
  , Router = require('react-router')
  , Route = Router.Route
  , NotFoundRoute = Router.NotFoundRoute
  , DefaultRoute = Router.DefaultRoute
  , Link = Router.Link
  , RouteHandler = Router.RouteHandler
  , _ = require('lodash')

React.initializeTouchEvents(true)

var key = '1AS60Zm5ytMoOI3AhvR0dcOF-G_3j2lpZR7VRBAzfBgE'

var sheet = Tabletop.init({
  key: key,
  callback: init,
  simpleSheet: true
})

function init(data, tabletop) {
  Router.run(routes, function (Handler) {
    React.render(<Handler data={data}/>, document.getElementById('app'))
  })
}

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <h5><span>Maryland Lower Eastern Shore</span></h5>
        <h1><span>Scenic Byway</span></h1>
        <h3><span>Mobile Tour Guide</span></h3>
      </div>
    )
  }
})

var Site = React.createClass({
  mixins: [Router.State],
  render: function() {
    var id = +this.getParams().siteID
    var site =  this.props.data[id]
    return (
      <div className="site-details page">
        <div className="page-title">
          <Link to="categoryName" params={{categoryName: site.category}}><span className="home-button"><i className="fa fa-arrow-left"></i></span></Link>
          <h3>Site Details</h3>
        </div>
        <div className="page-inner">
          <p>Site Name: {site.name}</p>
          <img className="img-responsive" src={site.image} />
        </div>
      </div>
    )
  }
})

var Category = React.createClass({
  mixins: [Router.State],
  render: function() {
    var self = this
    var rows = this.props.data.map(function(site, idx) {
      if (site.category === self.getParams().categoryName) {
        var p = {siteID: idx}
        return <Link to="siteID" params={p} key={idx}><li className="list-group-item">{site.name}</li></Link>
      }
    })
    rows = _.compact(rows)
    return (
      <div className="category page">
        <div className="page-title">
          <Link to="/"><span className="home-button"><i className="fa fa-home"></i></span></Link>
          <h3>{this.getParams().categoryName}</h3>
        </div>
        <div className="page-inner">
          <ul className="list-group">{rows}</ul>
        </div>
      </div>
    )
  }
})

var CategoryList = React.createClass({
  render: function() {
    var rows = this.props.categories.map(function(category) {
      var p = {categoryName: category}
      return <Link to="categoryName" params={p} key={category}><li className="list-group-item">{category}</li></Link>
    })
    return <div className="category-list"><ul className="list-group">{rows}</ul></div>
  }
})

var Home = React.createClass({
  render: function() {
    var categories = _.uniq(_.pluck(this.props.data, 'category'))
    return (
      <div className="home page">
        <Header />
        <CategoryList categories={categories} />
      </div>
    )
  }
})


var App = React.createClass({
  render: function() {
    return (
      <RouteHandler data={this.props.data}/>
    )
  }
})

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" handler={Home}/>
    <Route name="category" handler={Category}>
      <Route name="categoryName"  path=":categoryName" handler={Category}/>
    </Route>
    <Route name="site" handler={Site}>
      <Route name="siteID"  path=":siteID" handler={Category}/>
    </Route>
    <DefaultRoute handler={Home}/>
  </Route>
)