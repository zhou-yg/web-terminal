import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  machineName:DS.attr(),
  directoryName:DS.attr(),
  userName:DS.attr(),
  commandInput:DS.attr(),
    
  commandRecord:Ember.computed('machineName','directoryName','userName','commandInput',function(){
  	return {
  		machineName:this.get('machineName'),
  		directoryName:this.get('directoryName'),
  		userName:this.get('userName'),
  		commandInput:this.get('commandInput'),
  		text:true
  	};
  })

});
