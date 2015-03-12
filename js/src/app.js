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

// var sheet = Tabletop.init({
//   key: key,
//   callback: init,
//   simpleSheet: true
// })

var data = [{"image":"http://apps.esrgc.org/scenicbyway/img/300.gif","name":"Site #1","category":"Maryland Historical Trust","location":"38,-76","rowNumber":1},{"image":"http://apps.esrgc.org/scenicbyway/img/300.gif","name":"Site #2","category":"Maryland Historical Trust","location":"38.1,-76","rowNumber":2},{"image":"http://apps.esrgc.org/scenicbyway/img/300.gif","name":"Site #3","category":"Maryland Historical Trust","location":"38.2,-76.3","rowNumber":3},{"image":"http://apps.esrgc.org/scenicbyway/img/300.gif","name":"Site #4","category":"Maryland Historical Trust","location":"38.3,-76","rowNumber":4},{"image":"http://apps.esrgc.org/scenicbyway/img/300.gif","name":"Site #5","category":"Maryland Historical Trust","location":"38.4,-76","rowNumber":5},{"image":"http://apps.esrgc.org/scenicbyway/img/300.gif","name":"Site #6","category":"Maryland Historical Trust","location":"38.5,-76","rowNumber":6},{"image":"http://apps.esrgc.org/scenicbyway/img/300.gif","name":"Site #7","category":"Maryland Historical Trust","location":"38.6,-76","rowNumber":7},{"image":"http://apps.esrgc.org/scenicbyway/img/300.gif","name":"Site #8","category":"Maryland Historical Trust","location":"38.7,-76","rowNumber":8},{"image":"http://apps.esrgc.org/scenicbyway/img/300.gif","name":"Site #9","category":"Maryland Historical Trust","location":"38.8,-76","rowNumber":9},{"image":"http://apps.esrgc.org/scenicbyway/img/300.gif","name":"Site #10","category":"Points of Interest","location":"38,-76","rowNumber":10},{"image":"http://apps.esrgc.org/scenicbyway/img/300.gif","name":"Site #11","category":"Public Water Access","location":"38,-76","rowNumber":11},{"image":"http://apps.esrgc.org/scenicbyway/img/300.gif","name":"Site #12","category":"Hiker and Biker Trails","location":"38,-76","rowNumber":12},{"image":"http://apps.esrgc.org/scenicbyway/img/300.gif","name":"Site #13","category":"Greenways","location":"38,-76","rowNumber":13},{"image":"http://apps.esrgc.org/scenicbyway/img/300.gif","name":"Site #1","category":"Water Trails","location":"38,-76","rowNumber":14}]

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

var LocateButton = React.createClass({
  render: function() {
    return (
      <div className="footer-button">
        <span onClick={this.props.locate} onTouchEnd={this.props.locate}>
          <i className="fa fa-location-arrow"></i>
        </span>
      </div>
    )
  }
})

var Footer = React.createClass({
  render: function() {
    var locateButton
    if (this.props.locate) {
      locateButton = <LocateButton locate={this.props.locate} />
    }
    return (
      <div className="page-footer">
        <div className="footer-button">
          <Link to="siteList" params={{categoryName: this.props.category}}><i className="fa fa-list"></i></Link>
        </div>
        <div className="footer-button">
          <Link to="siteMap" params={{categoryName: this.props.category}}><i className="fa fa-map-marker"></i></Link>
        </div>
        {locateButton}
      </div>
    )
  }
})

var Site = React.createClass({
  mixins: [Router.State, Router.Navigation],
  back: function() {
    window.history.back()
  },
  render: function() {
    var id = +this.getParams().siteID
    var site =  this.props.data[id]
    return (
      <div className="site-details page">
        <div className="page-title">
          <span className="home-button" onClick={this.back} onTouchEnd={this.back}><i className="fa fa-arrow-left"></i></span>
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

var SiteList = React.createClass({
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
        <Footer category={self.getParams().categoryName}/>
      </div>
    )
  }
})

var SiteMap = React.createClass({
  mixins: [Router.State, Router.Navigation],
  componentDidMount: function() {
    this.createMap()
  },
  createMap: function() {
    var self = this
    this.map = L.map('map').setView([38, -76], 8)
    L.tileLayer('http://{s}.tiles.mapbox.com/v3/fsrw.lecn9mia/{z}/{x}/{y}.png', {
      maxZoom: 18
    }).addTo(this.map)
    this.siteLayer = L.featureGroup()
    this.sites.forEach(function(site) {
      if (site.location) {
        var coords = site.location.split(',').map(Number)
        var marker = L.marker(coords)
        var p = {siteID: site.idx}
        var a = self.makeHref('siteID', p)
        var popup = React.renderToString(<div><p>{site.name}</p><p><a href={a}>More Information</a></p></div>)
        marker.bindPopup(popup)
        //marker.bindPopup(React.renderToString(<div><p>{site.name}</p><p><Link to="siteID" params={p}>More Information</Link></p></div>))
        self.siteLayer.addLayer(marker)
      }
    })
    this.siteLayer.addTo(this.map)
    this.map.fitBounds(this.siteLayer.getBounds())
    this.map.invalidateSize()
  },
  locate: function() {
    this.map.locate({setView: true, maxZoom: 16})
  },
  render: function() {
    var self = this
    this.map = {}
    this.sites = this.props.data.map(function(site, idx) {
      if (site.category === self.getParams().categoryName) {
        site.idx = idx
        return site
      }
    })
    this.sites = _.compact(this.sites)
    return (
      <div className="category page">
        <div className="page-title">
          <Link to="/"><span className="home-button"><i className="fa fa-home"></i></span></Link>
          <h3>{this.getParams().categoryName}</h3>
        </div>
        <div className="page-inner">
          <div id="map" ref="mapdiv"></div>
        </div>
        <Footer category={self.getParams().categoryName} locate={this.locate}/>
      </div>
    )
  }
})

var CategoryList = React.createClass({
  render: function() {
    var rows = this.props.categories.map(function(category) {
      var p = {categoryName: category}
      return <Link to="siteMap" params={p} key={category}><li className="list-group-item">{category}</li></Link>
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
    <Route name="category" handler={App}>
      <Route name="siteMap"  path="map/:categoryName" handler={SiteMap}/>
      <Route name="siteList"  path="list/:categoryName" handler={SiteList}/>
    </Route>
    <Route name="site" handler={Site}>
      <Route name="siteID"  path=":siteID" handler={Site}/>
    </Route>
    <DefaultRoute handler={Home}/>
  </Route>
)

init(data, null)