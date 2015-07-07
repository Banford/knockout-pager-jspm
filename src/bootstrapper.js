import $ from 'jquery';
import ko from 'knockout';

export function bootstrap() {

    class PersonViewModel {
      constructor(){
          this.firstName = ko.observable('Nick');
      }
    }

    $(function() {
      console.log('App loading...');
      ko.applyBindings(new PersonViewModel());
    })
}
