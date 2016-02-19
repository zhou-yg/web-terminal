import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'p',
  classNames:['command-input-box'],

  keyDown(e){
    //enter
    if(e.keyCode === 13){

      var inputCommand = this.get('inputCommand');

      this.set('directory',inputCommand)

      //request

    }
  },
  actions:{
    commandInput(value){

      this.set('inputCommand',value);
    }
  }
});
