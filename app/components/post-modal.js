import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  data: null,
  comments: null,
  showProgress: false,

  actions: {
    loadComments() {
      this.set('showProgress', true);

      $.getJSON(`https://www.reddit.com${this.get('data.permalink')}.json`).then((data) => {
        this.set('comments', data);
      });
    }
  }
});
