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
  , converter = new Showdown.converter()

React.initializeTouchEvents(true)

var key = '1AS60Zm5ytMoOI3AhvR0dcOF-G_3j2lpZR7VRBAzfBgE'

var sheet = Tabletop.init({
  key: key,
  callback: init,
  simpleSheet: true
})
var data = [{"name":"Old Salisbury City Fire Hall Headquarters","category":"Maryland Historical Trust","streetaddress1":"S Division St located across from public library","streetaddress2":"","city":"Salisbury","county":"Wicomico","state":"MD","zip":"21801","location":"38.364276119491755,-75.60018002986908","description":"","descriptionlong":"Originally known as Firehouse #1 was built at cost in 1927 for $50,000, Building of 2 floors with basement. The first floor housed the equipment, the second floor housed the volunteers and chief’s quarters and basement used to dry fire hoses. The building is neoclassical four-bay built with brick and concrete. Parapet wall encircles the roof with a decorative crest featuring the capital letter S. The roof shingles were green tiles.","dateofsite":"1927","nationalregister":"no","mdinventory":"no","inhistoricdistrict":"","website":"","categoryseconday":"","additionalinformation":"","photo":"http://www.onesalisbury.com/uploads/3/7/6/3/3763176/9893823_orig.jpg","datasource":"“at the crossroads” paul tourart book page 589","contactname":"Lower eastern shore heritage area council","contactemail":"Leshc1@aol.com","contactphone":"410-677-4706","rowNumber":1},{"name":"Site #2","category":"Maryland Historical Trust","streetaddress1":"","streetaddress2":"","city":"","county":"","state":"","zip":"","location":"38.1,-76","description":"","descriptionlong":"","dateofsite":"","nationalregister":"","mdinventory":"","inhistoricdistrict":"","website":"","categoryseconday":"","additionalinformation":"","photo":"http://apps.esrgc.org/scenicbyway/img/300.gif","datasource":"","contactname":"","contactemail":"","contactphone":"","rowNumber":2},{"name":"Site #3","category":"Maryland Historical Trust","streetaddress1":"","streetaddress2":"","city":"","county":"","state":"","zip":"","location":"38.2,-76.3","description":"","descriptionlong":"","dateofsite":"","nationalregister":"","mdinventory":"","inhistoricdistrict":"","website":"","categoryseconday":"","additionalinformation":"","photo":"http://apps.esrgc.org/scenicbyway/img/300.gif","datasource":"","contactname":"","contactemail":"","contactphone":"","rowNumber":3},{"name":"Site #4","category":"Maryland Historical Trust","streetaddress1":"","streetaddress2":"","city":"","county":"","state":"","zip":"","location":"38.3,-76","description":"","descriptionlong":"","dateofsite":"","nationalregister":"","mdinventory":"","inhistoricdistrict":"","website":"","categoryseconday":"","additionalinformation":"","photo":"http://apps.esrgc.org/scenicbyway/img/300.gif","datasource":"","contactname":"","contactemail":"","contactphone":"","rowNumber":4},{"name":"Site #5","category":"Maryland Historical Trust","streetaddress1":"","streetaddress2":"","city":"","county":"","state":"","zip":"","location":"38.4,-76","description":"","descriptionlong":"","dateofsite":"","nationalregister":"","mdinventory":"","inhistoricdistrict":"","website":"","categoryseconday":"","additionalinformation":"","photo":"http://apps.esrgc.org/scenicbyway/img/300.gif","datasource":"","contactname":"","contactemail":"","contactphone":"","rowNumber":5},{"name":"Site #6","category":"Maryland Historical Trust","streetaddress1":"","streetaddress2":"","city":"","county":"","state":"","zip":"","location":"38.5,-76","description":"","descriptionlong":"","dateofsite":"","nationalregister":"","mdinventory":"","inhistoricdistrict":"","website":"","categoryseconday":"","additionalinformation":"","photo":"http://apps.esrgc.org/scenicbyway/img/300.gif","datasource":"","contactname":"","contactemail":"","contactphone":"","rowNumber":6},{"name":"Site #7","category":"Maryland Historical Trust","streetaddress1":"","streetaddress2":"","city":"","county":"","state":"","zip":"","location":"38.6,-76","description":"","descriptionlong":"","dateofsite":"","nationalregister":"","mdinventory":"","inhistoricdistrict":"","website":"","categoryseconday":"","additionalinformation":"","photo":"http://apps.esrgc.org/scenicbyway/img/300.gif","datasource":"","contactname":"","contactemail":"","contactphone":"","rowNumber":7},{"name":"Site #8","category":"Maryland Historical Trust","streetaddress1":"","streetaddress2":"","city":"","county":"","state":"","zip":"","location":"38.7,-76","description":"","descriptionlong":"","dateofsite":"","nationalregister":"","mdinventory":"","inhistoricdistrict":"","website":"","categoryseconday":"","additionalinformation":"","photo":"http://apps.esrgc.org/scenicbyway/img/300.gif","datasource":"","contactname":"","contactemail":"","contactphone":"","rowNumber":8},{"name":"Site #9","category":"Maryland Historical Trust","streetaddress1":"","streetaddress2":"","city":"","county":"","state":"","zip":"","location":"38.8,-76","description":"","descriptionlong":"","dateofsite":"","nationalregister":"","mdinventory":"","inhistoricdistrict":"","website":"","categoryseconday":"","additionalinformation":"","photo":"http://apps.esrgc.org/scenicbyway/img/300.gif","datasource":"","contactname":"","contactemail":"","contactphone":"","rowNumber":9},{"name":"Site #10","category":"Points of Interest","streetaddress1":"","streetaddress2":"","city":"","county":"","state":"","zip":"","location":"38,-76","description":"","descriptionlong":"","dateofsite":"","nationalregister":"","mdinventory":"","inhistoricdistrict":"","website":"","categoryseconday":"","additionalinformation":"","photo":"http://apps.esrgc.org/scenicbyway/img/300.gif","datasource":"","contactname":"","contactemail":"","contactphone":"","rowNumber":10},{"name":"Site #11","category":"Public Water Access","streetaddress1":"","streetaddress2":"","city":"","county":"","state":"","zip":"","location":"38,-76","description":"","descriptionlong":"","dateofsite":"","nationalregister":"","mdinventory":"","inhistoricdistrict":"","website":"","categoryseconday":"","additionalinformation":"","photo":"http://apps.esrgc.org/scenicbyway/img/300.gif","datasource":"","contactname":"","contactemail":"","contactphone":"","rowNumber":11},{"name":"Site #12","category":"Hiker and Biker Trails","streetaddress1":"","streetaddress2":"","city":"","county":"","state":"","zip":"","location":"38,-76","description":"","descriptionlong":"","dateofsite":"","nationalregister":"","mdinventory":"","inhistoricdistrict":"","website":"","categoryseconday":"","additionalinformation":"","photo":"http://apps.esrgc.org/scenicbyway/img/300.gif","datasource":"","contactname":"","contactemail":"","contactphone":"","rowNumber":12},{"name":"Site #13","category":"Greenways","streetaddress1":"","streetaddress2":"","city":"","county":"","state":"","zip":"","location":"38,-76","description":"","descriptionlong":"","dateofsite":"","nationalregister":"","mdinventory":"","inhistoricdistrict":"","website":"","categoryseconday":"","additionalinformation":"","photo":"http://apps.esrgc.org/scenicbyway/img/300.gif","datasource":"","contactname":"","contactemail":"","contactphone":"","rowNumber":13},{"name":"Site #1","category":"Water Trails","streetaddress1":"","streetaddress2":"","city":"","county":"","state":"","zip":"","location":"38,-76","description":"","descriptionlong":"","dateofsite":"","nationalregister":"","mdinventory":"","inhistoricdistrict":"","website":"","categoryseconday":"","additionalinformation":"","photo":"http://apps.esrgc.org/scenicbyway/img/300.gif","datasource":"","contactname":"","contactemail":"","contactphone":"","rowNumber":14}]

function init(data, tabletop) {
  //console.log(JSON.stringify(data))
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
      <div className="footer-button" onClick={this.props.locate} onTouchEnd={this.props.locate}>
        <span>
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
        <div className="footer-tools">
        <Link to="siteList" params={{categoryName: this.props.category}}>
          <div className="footer-button">
            <i className="fa fa-list"></i>
          </div>
          </Link>
          <Link to="siteMap" params={{categoryName: this.props.category}}>
          <div className="footer-button">
            <i className="fa fa-map-marker"></i>
          </div>
          </Link>
          {locateButton}
        </div>
      </div>
    )
  }
})

var Site = React.createClass({
  mixins: [Router.State, Router.Navigation],
  back: function(e) {
    e.preventDefault()
    if (!this.goBack()) {
      this.transitionTo('siteMap', {categoryName: this.site.category})
    } else {
      this.goBack()
    }
  },
  render: function() {
    var id = +this.getParams().siteID
    this.site =  this.props.data[id]
    var p = {categoryName: this.site.category}
    return (
      <div className="page">
        <div className="page-title">
          <Link to="siteMap" params={p} onClick={this.back}><span className="home-button"><i className="fa fa-arrow-left"></i></span></Link>
          <h3>Site Details</h3>
        </div>
        <div className="page-inner">
          <div className="site-details">
            <h4 className="site-name">{this.site.name}</h4>
            <img className="img-responsive site-img" src={this.site.photo} />
            <span dangerouslySetInnerHTML={{__html: converter.makeHtml(this.site.descriptionlong)}} />
            <p><strong>Date</strong></p>
            <p>{this.site.dateofsite}</p>
            <p><strong>Address</strong></p>
            <p>
              <address>
              {this.site.streetaddress1}<br />
              {this.site.streetaddress2 ? this.site.streetaddress2 + '<br />' : ''}
              {this.site.city}, {this.site.state} {this.site.zip}<br />
              </address>
            </p>
            <p><strong>Contact</strong></p>
            <p>
              {this.site.contactname}<br />
              {this.site.contactemail}<br />
              {this.site.contactphone}<br />
            </p>
          </div>
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
        var popup = React.renderToString(<div className="popup"><p>{site.name}</p><p><img src={site.photo} /></p><p><a href={a}>More Information</a></p></div>)
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

//init(data, null)