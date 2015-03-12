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

// var sheet = Tabletop.init({
//   key: key,
//   callback: init,
//   simpleSheet: true
// })

var data = [
  {
    "name": "Old Salisbury City Fire Hall Headquarters",
    "category": "Maryland Historical Trust",
    "streetaddress1": "S Division St located across from public library",
    "streetaddress2": "",
    "city": "Salisbury",
    "county": "Wicomico",
    "state": "MD",
    "zip": "21801",
    "location": "38.364276119491755,-75.60018002986908",
    "description": "",
    "descriptionlong": "Originally known as Firehouse #1 was built at cost in 1927 for $50,000, Building of 2 floors with basement. The first floor housed the equipment, the second floor housed the volunteers and chief’s quarters and basement used to dry fire hoses. The building is neoclassical four-bay built with brick and concrete. Parapet wall encircles the roof with a decorative crest featuring the capital letter S. The roof shingles were green tiles.",
    "dateofsite": "1927",
    "nationalregister": "no",
    "mdinventory": "no",
    "inhistoricdistrict": "",
    "website": "",
    "categoryseconday": "",
    "additionalinformation": "",
    "photo": "http://www.onesalisbury.com/uploads/3/7/6/3/3763176/9893823_orig.jpg",
    "datasource": "“at the crossroads” paul tourart book page 589",
    "contactname": "Lower eastern shore heritage area council",
    "contactemail": "Leshc1@aol.com",
    "contactphone": "410-677-4706",
    "rowNumber": 1
  },
  {
    "name": "Salisbury Steamboats",
    "category": "Maryland Historical Trust",
    "streetaddress1": "",
    "streetaddress2": "",
    "city": "Salisbury",
    "county": "Wicomico",
    "state": "MD",
    "zip": "21801",
    "location": "38.36, -75.60",
    "description": "",
    "descriptionlong": "“One year after the formation of Wicomico County, the Maryland Steamboat Company was formed from the remnants of the Individual Enterprise Line, the previous steamboat company to operate on the Wicomico. Operating from Pier Three on Light Street in Baltimore, the steamboats of the Maryland Steamboat Company made stops at ten different landings on the Wicomico River en-route to Salisbury.         Baltimore, Chesapeake and Atlantic Railroad Company purchased the Eastern Shore Steamboat                                                                                                  Salisbury steamboat Enoch Pratt then replaced by the Tivoli, then the Virginia, then the Joppa” “In 1830 a man named George Weems introduced steamboats to the Wicomico River. Weems saw the necessity of steamboat travel to what had become the “thriving community” of Salisbury. [8] Later that year Weems’ steamboat the Patuxent became the first steamboat to reach Salisbury. The Patuxent began sailing for Salisbury on a regular basis, but the river’s shallow depth and sharp turns at times limited its voyage to Whitehaven, a small fishing community several miles southwest of Salisbury In addition to the shipping of bulk cargo, the Patuxent served as a general store when it came to town. When the Patuxent set out from the Maryland wharf in Baltimore business-minded Weems made sure it was stocked full of merchandise from Baltimore and beyond, which he dealt to consumers on an individual basis. The Patuxent continued to make the trip from Baltimore up the Wicomico on and off over the next few decades, depending on the river’s depth and recent success of crops”* \n\n“Although the Patuxent was successful dealing in Salisbury, the difficult travel on the Wicomico’s upper reaches limited other ships to destinations south of Salisbury. In the 1840’s and 50’s steamships such as the Franklin, the Thomas Jefferson, and the Hugh Jenkins found success dealing on the Wicomico at Whitehaven and Shad PointTwo years later, the Wilson Small made its way up the Wicomico to Cotton Patch, a wharf and warehouse located two miles below Salisbury”*” In 1903 the BC&A introduced a new steamboat, the Virginia, to the Wicomico River Route. Departing Baltimore from Pratt Street at 5:00pm Tuesdays, Thursdays, and Saturdays, the Virginia arrived at its steamboat wharf next to the Salisbury Roller Flour Mill at 9:00am the next morning. [48] “Weather and tide permitting”, the Virginia left Salisbury for Baltimore at noon on Mondays, Wednesdays, and Fridays. [49] The Virginia, which served Salisbury continuously until 1924”",
    "dateofsite": "",
    "nationalregister": "",
    "mdinventory": "",
    "inhistoricdistrict": "",
    "website": "Excerpts taken from Dan Landsman “The Heart of Salisbury” *http://faculty.salisbury.edu/~mllewis/wicomico_river/chapter_two.htm#_",
    "categoryseconday": "",
    "additionalinformation": "",
    "photo": "http://apps.esrgc.org/scenicbyway/img/300.gif",
    "datasource": "",
    "contactname": "Lower eastern shore heritage area council",
    "contactemail": "Leshc1@aol.com",
    "contactphone": "410-677-4706",
    "rowNumber": 2
  },
  {
    "name": "Salisbury old courthouse",
    "category": "Maryland Historical Trust",
    "streetaddress1": "Corner of Division & Main St",
    "streetaddress2": "",
    "city": "Salisbury",
    "county": "Wicomico",
    "state": "MD",
    "zip": "21801",
    "location": "38.36576507634026,-75.59996008872986",
    "description": "",
    "descriptionlong": "Was built in 1878 over the razed historic tavern Byrd Tavern, one of few structures that survived great fire of 1886. Soon after the courthouse was built it was here that Fredrick Douglas spoke*  The building of American Gothic design, consists of courthouse and jail cells. No longer an active jail, the Court House still actively houses Clerk of the Court and other offices.  It is 3 stories tall with a clock tower.",
    "dateofsite": "1878",
    "nationalregister": "",
    "mdinventory": "",
    "inhistoricdistrict": "",
    "website": "https://aahistorydelmarva.wordpress.com/2013/12/02/salisburys-slave-pens/",
    "categoryseconday": "",
    "additionalinformation": "",
    "photo": "http://apps.esrgc.org/scenicbyway/img/courthouse.jpg",
    "datasource": "",
    "contactname": "Lower eastern shore heritage area council",
    "contactemail": "Leshc1@aol.com",
    "contactphone": "410-677-4707",
    "rowNumber": 3
  },
  {
    "name": "Salisbury Bandstand",
    "category": "Maryland Historical Trust",
    "streetaddress1": "Salisbury City Park ",
    "streetaddress2": "",
    "city": "Salisbury",
    "county": "Wicomico",
    "state": "MD",
    "zip": "21801",
    "location": "38.36424457346446,-75.59106588363647",
    "description": "",
    "descriptionlong": "Aproximately built 1934. 80 years old The octagonal bandstand was built along with the nearby, high-arched footbridge in the late-1930s as part of a Great Depression-era work program.  Still actively used every year for seasonal  concerts in the park. ",
    "dateofsite": "1934",
    "nationalregister": "",
    "mdinventory": "",
    "inhistoricdistrict": "",
    "website": "",
    "categoryseconday": "",
    "additionalinformation": "",
    "photo": "http://apps.esrgc.org/scenicbyway/img/bandstand.jpg",
    "datasource": "",
    "contactname": "Lower eastern shore heritage area council",
    "contactemail": "Leshc1@aol.com",
    "contactphone": "410-677-4708",
    "rowNumber": 4
  },
  {
    "name": "City Park Fountain",
    "category": "Maryland Historical Trust",
    "streetaddress1": "Salisbury City Park ",
    "streetaddress2": "",
    "city": "Salisbury",
    "county": "Wicomico",
    "state": "MD",
    "zip": "21801",
    "location": "38.364934376791126, -75.589719414711",
    "description": "",
    "descriptionlong": "The electric water fountain was built prior to the Salisbury Bicentennial in 1932.* The area that encompasses the Salisbury City Park was once covered by Humphrey’s Lake. The City Park owes its existence to the failure of the Humphrey’s Lake mill dam on May 29, 1909. After the lake was drained, the area east of the railroad bridge was an abandoned wasteland. In 1925, Salisbury Mayor Thomas L Parker Sr. negotiated the purchase of the 53 acre exposed lake bottom for $5000, in order to construct a new municipal water plant and well field.  Since the new water system only took up a small portion of the lake bottom, the balance of the land was developed as the municipal park. In 1927, Mayor Parker appointed the first Park Commission to oversee the park.\u2028\n\nWinding through the early park was the east prong of the Wicomico River, spanned by a series of simple timber footbridges. The devastating Atlantic storm of August 1933 damaged the Schumaker Lake dam, flooding the park and destroying most of the improvements.  In the years following this storm, with aid from Depression Era federal work programs such as the WPA, the park lands were redesigned and improved with trees, shrubs, bridges, roads and walkways. Two of the most distinctive structures built during this time were the octagonal bandstand and the arched footbridge.*",
    "dateofsite": "",
    "nationalregister": "",
    "mdinventory": "",
    "inhistoricdistrict": "",
    "website": "http://www.geocaching.com/geocache/GC4B6JF_wgd-2013-salisbury-city-park",
    "categoryseconday": "",
    "additionalinformation": "",
    "photo": "http://apps.esrgc.org/scenicbyway/img/300.gif",
    "datasource": "",
    "contactname": "Lower eastern shore heritage area council",
    "contactemail": "Leshc1@aol.com",
    "contactphone": "410-677-4709",
    "rowNumber": 5
  },
  {
    "name": "City Park",
    "category": "Maryland Historical Trust",
    "streetaddress1": "E Main St, Snow Hill Rd, N Park Drive, S Park Drive, Beaglin Park Drive",
    "streetaddress2": "",
    "city": "Salisbury",
    "county": "Wicomico",
    "state": "MD",
    "zip": "21801",
    "location": "38.362353889791386,-75.58568000793457",
    "description": "",
    "descriptionlong": "Park encompasses over 95 acres and includes the Salisbury Zoological Park. Free and open to the public visitors enjoy trails, playgrounds, river walk running throughout.",
    "dateofsite": "Aprox 1930",
    "nationalregister": "",
    "mdinventory": "",
    "inhistoricdistrict": "",
    "website": "",
    "categoryseconday": "",
    "additionalinformation": "",
    "photo": "http://apps.esrgc.org/scenicbyway/img/citypark.jpg",
    "datasource": "",
    "contactname": "Lower eastern shore heritage area council",
    "contactemail": "Leshc1@aol.com",
    "contactphone": "410-677-4710",
    "rowNumber": 6
  },
  {
    "name": "Site #7",
    "category": "Maryland Historical Trust",
    "streetaddress1": "",
    "streetaddress2": "",
    "city": "",
    "county": "",
    "state": "",
    "zip": "",
    "location": "38.36, -75.60",
    "description": "",
    "descriptionlong": "",
    "dateofsite": "",
    "nationalregister": "",
    "mdinventory": "",
    "inhistoricdistrict": "",
    "website": "",
    "categoryseconday": "",
    "additionalinformation": "",
    "photo": "http://apps.esrgc.org/scenicbyway/img/300.gif",
    "datasource": "",
    "contactname": "Lower eastern shore heritage area council",
    "contactemail": "Leshc1@aol.com",
    "contactphone": "410-677-4711",
    "rowNumber": 7
  },
  {
    "name": "Site #8",
    "category": "Maryland Historical Trust",
    "streetaddress1": "",
    "streetaddress2": "",
    "city": "",
    "county": "",
    "state": "",
    "zip": "",
    "location": "38.36, -75.60",
    "description": "",
    "descriptionlong": "",
    "dateofsite": "",
    "nationalregister": "",
    "mdinventory": "",
    "inhistoricdistrict": "",
    "website": "",
    "categoryseconday": "",
    "additionalinformation": "",
    "photo": "http://apps.esrgc.org/scenicbyway/img/300.gif",
    "datasource": "",
    "contactname": "Lower eastern shore heritage area council",
    "contactemail": "Leshc1@aol.com",
    "contactphone": "410-677-4712",
    "rowNumber": 8
  },
  {
    "name": "Site #9",
    "category": "Maryland Historical Trust",
    "streetaddress1": "",
    "streetaddress2": "",
    "city": "",
    "county": "",
    "state": "",
    "zip": "",
    "location": "38.36, -75.60",
    "description": "",
    "descriptionlong": "",
    "dateofsite": "",
    "nationalregister": "",
    "mdinventory": "",
    "inhistoricdistrict": "",
    "website": "",
    "categoryseconday": "",
    "additionalinformation": "",
    "photo": "http://apps.esrgc.org/scenicbyway/img/300.gif",
    "datasource": "",
    "contactname": "Lower eastern shore heritage area council",
    "contactemail": "Leshc1@aol.com",
    "contactphone": "410-677-4713",
    "rowNumber": 9
  },
  {
    "name": "Site #10",
    "category": "Points of Interest",
    "streetaddress1": "",
    "streetaddress2": "",
    "city": "",
    "county": "",
    "state": "",
    "zip": "",
    "location": "38.36, -75.60",
    "description": "",
    "descriptionlong": "",
    "dateofsite": "",
    "nationalregister": "",
    "mdinventory": "",
    "inhistoricdistrict": "",
    "website": "",
    "categoryseconday": "",
    "additionalinformation": "",
    "photo": "http://apps.esrgc.org/scenicbyway/img/300.gif",
    "datasource": "",
    "contactname": "Lower eastern shore heritage area council",
    "contactemail": "Leshc1@aol.com",
    "contactphone": "410-677-4714",
    "rowNumber": 10
  },
  {
    "name": "Site #11",
    "category": "Public Water Access",
    "streetaddress1": "",
    "streetaddress2": "",
    "city": "",
    "county": "",
    "state": "",
    "zip": "",
    "location": "38.36, -75.60",
    "description": "",
    "descriptionlong": "",
    "dateofsite": "",
    "nationalregister": "",
    "mdinventory": "",
    "inhistoricdistrict": "",
    "website": "",
    "categoryseconday": "",
    "additionalinformation": "",
    "photo": "http://apps.esrgc.org/scenicbyway/img/300.gif",
    "datasource": "",
    "contactname": "Lower eastern shore heritage area council",
    "contactemail": "Leshc1@aol.com",
    "contactphone": "410-677-4715",
    "rowNumber": 11
  },
  {
    "name": "Site #12",
    "category": "Hiker and Biker Trails",
    "streetaddress1": "",
    "streetaddress2": "",
    "city": "",
    "county": "",
    "state": "",
    "zip": "",
    "location": "38.36, -75.60",
    "description": "",
    "descriptionlong": "",
    "dateofsite": "",
    "nationalregister": "",
    "mdinventory": "",
    "inhistoricdistrict": "",
    "website": "",
    "categoryseconday": "",
    "additionalinformation": "",
    "photo": "http://apps.esrgc.org/scenicbyway/img/300.gif",
    "datasource": "",
    "contactname": "Lower eastern shore heritage area council",
    "contactemail": "Leshc1@aol.com",
    "contactphone": "410-677-4716",
    "rowNumber": 12
  },
  {
    "name": "Site #13",
    "category": "Greenways",
    "streetaddress1": "",
    "streetaddress2": "",
    "city": "",
    "county": "",
    "state": "",
    "zip": "",
    "location": "38.36, -75.60",
    "description": "",
    "descriptionlong": "",
    "dateofsite": "",
    "nationalregister": "",
    "mdinventory": "",
    "inhistoricdistrict": "",
    "website": "",
    "categoryseconday": "",
    "additionalinformation": "",
    "photo": "http://apps.esrgc.org/scenicbyway/img/300.gif",
    "datasource": "",
    "contactname": "Lower eastern shore heritage area council",
    "contactemail": "Leshc1@aol.com",
    "contactphone": "410-677-4717",
    "rowNumber": 13
  },
  {
    "name": "Site #14",
    "category": "Water Trails",
    "streetaddress1": "",
    "streetaddress2": "",
    "city": "",
    "county": "",
    "state": "",
    "zip": "",
    "location": "38.36, -75.60",
    "description": "",
    "descriptionlong": "",
    "dateofsite": "",
    "nationalregister": "",
    "mdinventory": "",
    "inhistoricdistrict": "",
    "website": "",
    "categoryseconday": "",
    "additionalinformation": "",
    "photo": "http://apps.esrgc.org/scenicbyway/img/300.gif",
    "datasource": "",
    "contactname": "Lower eastern shore heritage area council",
    "contactemail": "Leshc1@aol.com",
    "contactphone": "410-677-4718",
    "rowNumber": 14
  }
]

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
        var popup = React.renderToString(<div className="popup"><h5>{site.name}</h5><p><a href={a}><img className="img-responsive" src={site.photo} /></a></p><p><a href={a}>More Information</a></p></div>)
        marker.bindPopup(popup)
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