
require(react_helper_path);
var rewire = require("rewire");

var StreakGroupsPanel = rewire(__component_base + 'streak_groups_panel').component;

describe('StreakGroupsPanel', function(){

  var message = 'dummy_message';

  beforeEach(function(done) {
    this.subject = jasmineReact.render(
      <StreakGroupsPanel message={message} />
    );
    done();
  });

  describe('.initialState', function(done) {
    it('sets message to message', function(done) {
      expect(this.subject.state.message).toEqual(message);
      done();
    });
  });
});