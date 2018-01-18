
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('is-above-zero', 'helper:is-above-zero', {
  integration: true
});

// Replace this with your real tests.
test('1234', function(assert) {
  this.set('inputValue', 1234);

  this.render(hbs`{{is-above-zero inputValue}}`);

  assert.equal(this.$().text().trim(), 'true');
});

test('0', function(assert) {
  this.set('inputValue', 0);

  this.render(hbs`{{is-above-zero inputValue}}`);

  assert.equal(this.$().text().trim(), 'false');
});

test('-1', function(assert) {
  this.set('inputValue', -1);

  this.render(hbs`{{is-above-zero inputValue}}`);

  assert.equal(this.$().text().trim(), 'false');
});

test('null', function(assert) {
  this.set('inputValue', null);

  this.render(hbs`{{is-above-zero inputValue}}`);

  assert.equal(this.$().text().trim(), 'false');
});
