(function(global, jQuery){

  //creating a new Object & initializes its variables.
  //User uses this by doing: "var d = dylan('kek', 'wot', 'es');" for example.
  var dylan = function(firstName, lastName, language){
    return new dylan.init(firstName, lastName, language);
  }


  //These variables can be used by by all functions, but cant be altered.
  var supportedLangs = ['en', 'es'];

  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  var logMessages = {
    en: 'Logged in',
    es: 'Spanish logged in'
  };

  //All methods the user can access!
  //Theese methods have acces to all the variables in the IIFE
  dylan.prototype = {

    //return the first and lastname you passed through
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },

    //validating the language in the "this" (initialized dylan object).
    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        //throw an error if lang isnt set.
        throw "Invalid language";
      }
    },

    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName() + '.';
    },

    //Chainable method
    greet: function(formal) {
      var msg;

      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      //makes your method chainable.
      //by returning this (returning the object) you can add another method after this one
      return this;
    },

    //also chainable
    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }

      //also chainable.
      return this;
    },

    setLang: function(lang) {
      this.language = lang;

      //throw an error if lang isnt set.
      this.validate();

      return this;
    },

    HTMLGreeting: function(selector, formal) {

      //Is jQuery there?
      if (!$) {
        throw 'jQuery not loaded';
      }
      //Did you pass a selector?
      if (!selector) {
        throw 'Missing jQuery selector';
      }
      //creating variable msg and pass the greeting into it
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      $(selector).html(msg);

      return this;
    }

  };

  //Initializing the Object
  // "this" or "self" refers to the new Object that is created at "var dylan".
  //It refers to the dylan Object.
  dylan.init = function(firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

    self.validate();
  }

  dylan.init.prototype = dylan.prototype;

  global.dylan = global.D$ = dylan;

}(window, jQuery));
