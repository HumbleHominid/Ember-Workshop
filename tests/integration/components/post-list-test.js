import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-list', 'Integration | Component | post list', {
  integration: true
});

test('default render', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{post-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#post-list}}
      template block text
    {{/post-list}}
  `);

  assert.equal(this.$().text().trim().replace(/\s+/g, ' '), 'template block text');
});
