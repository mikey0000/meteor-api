var assert = require('assert');

suite('Startup', function() {
test('beacons collection exists on both server and client', function(done, server, client) {
    server.eval(function() {
      beacons.find().observe({
        added: addedNewPost
      });

      function addedNewPost(post) {
        emit('post', post);
      }
    });

    client.eval(function() {
      assert.
    });
  });


});