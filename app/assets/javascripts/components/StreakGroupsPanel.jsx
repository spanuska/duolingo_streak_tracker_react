var React = require('react');
var StreakGroupTable = require('./StreakGroupTable');

var StreakGroupsPanel = React.createClass({
  displayName: 'Streak Groups Panel',
  render: function() {
    return( 
      <div className="streak-groups-panel">
        Streak Groups Component
        <StreakGroupTable />
      </div>
    );
  }
});

module.exports = StreakGroupsPanel;