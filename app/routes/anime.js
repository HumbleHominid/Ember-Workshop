import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model() {
    return $.getJSON("https://www.reddit.com/r/anime/.json");
  }
});
