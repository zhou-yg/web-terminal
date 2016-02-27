import Ember from 'ember';

export default Ember.Controller.extend({

  keyDown(e){
    //enter
    if(e.keyCode === 13){

      var inputCommand = this.get('inputCommand');

      //request

    }
  },
  actions:{
    commandInput(value){

      console.log('Controller commandInput');

      this.set('inputCommand',value);
    }
  }
});
