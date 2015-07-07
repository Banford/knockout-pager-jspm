import ko from 'knockout';

  export class PersonViewModel {
    constructor(){
        this.firstName = ko.observable('Nick');
    }
  }
