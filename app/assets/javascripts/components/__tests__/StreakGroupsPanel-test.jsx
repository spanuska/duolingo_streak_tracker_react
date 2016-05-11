jest.dontMock('../StreakGroupsPanel');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('StreakGroupsPanel', function() {

    var StreakGroupsPanel = require('../StreakGroupsPanel');
    var renderer = TestUtils.createRenderer();
    var streakGroupsPanel;

    beforeEach(function() {
      renderer.render(<StreakGroupsPanel />);
      streakGroupsPanel = renderer.getRenderOutput();
    });
  
  it('should render a div component', function() {      
    expect(streakGroupsPanel.type).toBe('div');
    expect(streakGroupsPanel.props.className).toBe('streak-groups-panel');
  });

  // it('should have at least one StreakGroupTable Component child', function() {
  //   var StreakGroupTable = require('../StreakGroupTable')

  //   expect(streakGroupsPanel.props.children).toEqual([
  //     <div className="streak-groups-panel">,
  //       Streak Groups Component
  //       <StreakGroupTable />
  //     </div>
  //   ]);
  // });
});