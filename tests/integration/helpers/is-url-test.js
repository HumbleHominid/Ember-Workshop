
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('is-url', 'helper:is-url', {
  integration: true
});

// Replace this with your real tests.
test('random text', function(assert) {
  this.set('inputValue', 'some random text');

  this.render(hbs`{{is-url inputValue}}`);

  assert.equal(this.$().text().trim(), 'false');
});

test('non-mime url', function(assert) {
  this.set('inputValue', 'https://my.url/baba');

  this.render(hbs`{{is-url inputValue}}`);

  assert.equal(this.$().text().trim(), 'false');
});

test('jpg url', function(assert) {
  this.set('inputValue', 'https://my.url.jpg');

  this.render(hbs`{{is-url inputValue}}`);

  assert.equal(this.$().text().trim(), 'true');
});

test('jpg mid-url', function(assert) {
  this.set('inputValue', 'https://my.jpg.url');

  this.render(hbs`{{is-url inputValue}}`);

  assert.equal(this.$().text().trim(), 'false');
});

test('png url', function(assert) {
  this.set('inputValue', 'https://my.url.png');

  this.render(hbs`{{is-url inputValue}}`);

  assert.equal(this.$().text().trim(), 'true');
});

test('png mid-url', function(assert) {
  this.set('inputValue', 'https://my.png.url');

  this.render(hbs`{{is-url inputValue}}`);

  assert.equal(this.$().text().trim(), 'false');
});

test('gif url', function(assert) {
  this.set('inputValue', 'https://my.url.gif');

  this.render(hbs`{{is-url inputValue}}`);

  assert.equal(this.$().text().trim(), 'true');
});

test('gif mid-url', function(assert) {
  this.set('inputValue', 'https://my.gif.url');

  this.render(hbs`{{is-url inputValue}}`);

  assert.equal(this.$().text().trim(), 'false');
});
