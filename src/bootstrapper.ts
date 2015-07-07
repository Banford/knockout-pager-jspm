import $ from 'jquery';
import ko from 'knockout';

import ViewModels = require('./viewmodels/PersonViewModel');

export function bootstrap() {
    $(function() {
      console.log('App loading...');
      ko.applyBindings(new ViewModels.PersonViewModel());
    })
}
