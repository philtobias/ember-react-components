import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('docs', function() {
    this.route('installation');

    this.route('features', function() {
      this.route('children');
    });

    this.route('api', function() {
      this.route('item', { path: '/*path' });
    });
  });
});

export default Router;