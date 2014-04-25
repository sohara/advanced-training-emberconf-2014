import Store from 'appkit/microdata/store';
var initializer = {
  name: 'microdata',
  initialize: function(container, application) {
    application.register("store:main", Store);
    application.inject('controller', 'store', 'store:main');
  }
};

export default initializer;
