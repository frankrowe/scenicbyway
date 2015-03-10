var React = require('react')

var key = '1AS60Zm5ytMoOI3AhvR0dcOF-G_3j2lpZR7VRBAzfBgE'

var sheet = Tabletop.init({
  key: key,
  callback: handleSheet,
  simpleSheet: true,
  debug: true
})

function handleSheet(data, tabletop) {
  React.render(<App data={data} />, document.getElementById('app'))
}
 
var App = React.createClass({
  render: function() {
    var rows = this.props.data.map(function(row) {
      return <li><img src={row.image}/> {row.name}</li>
    })
    return <ul>{rows}</ul>
  }
})

