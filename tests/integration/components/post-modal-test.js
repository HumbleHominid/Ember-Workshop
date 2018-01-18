import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { run } from '@ember/runloop';

moduleForComponent('post-modal', 'Integration | Component | post modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{post-modal}}`);

  var response = this.$().text().trim();

  assert.ok(response.match(/.*Author:.*/) &&
      response.match(/.*Load Comments.*/));
});

test('click Load Comments', function(assert) {
  this.render(hbs`{{post-modal}}`);

  run(() => document.querySelector('.btn').click());

  assert.equal(this.$().text().trim().match(/.*Load Comments.*/), null);
});
