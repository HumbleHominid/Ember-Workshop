
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('is-clip', 'helper:is-clip', {
  integration: true
});

// Replace this with your real tests.
test('clip', function(assert) {
  this.set('inputValue', 'clip');

  this.render(hbs`{{is-clip inputValue}}`);

  assert.equal(this.$().text().trim(), 'true');
});

test('baba', function(assert) {
  this.set('inputValue', 'baba');

  this.render(hbs`{{is-clip inputValue}}`);

  assert.equal(this.$().text().trim(), 'false');
});

test('1', function(assert) {
  this.set('inputValue', 1);

  this.render(hbs`{{is-clip inputValue}}`);

  assert.equal(this.$().text().trim(), 'false');
});

test('an object', function(assert) {
  this.set('inputValue', { a: 1 });

  this.render(hbs`{{is-clip inputValue}}`);

  assert.equal(this.$().text().trim(), 'false');
});
