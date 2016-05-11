var React = require('react');

var StreakGroupTable = React.createClass({
  displayName: 'Streak Group Table',
  render: function() {
    return( 
      <table className="streak-group-table">
        <thead>
          <tr><th colSpan="2">Streak Group Category</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Username</td>
            <td>Streak</td>
          </tr>
        </tbody>
      </table>
    );
  }
});

module.exports = StreakGroupTable;