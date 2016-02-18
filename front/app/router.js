import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('aside', function () {
    this.route('about')
  });
  this.route('out');
});

export default Router;
