import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-modal', 'Integration | Component | post modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{post-modal}}`);

  var response = this.$().text().trim().replace(/\s+/g, ' ');

  assert.ok(response.match(/.*Author:.*/) &&
      response.match(/.*Load Comments.*/));

});
