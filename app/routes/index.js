import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  // This is fired to fetch the model for the route
  // Whatever this function returns is set as the model for the route and is
  // accessible from the handlebars by `model`
  model() {
    return $.getJSON("https://www.reddit.com/r/anime+buildapc+food+rarepuppers/.json");
  }
});
