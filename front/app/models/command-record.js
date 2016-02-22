import DS from 'ember-data';

export default DS.Model.extend({
  machineName:DS.attr('string'),
  directoryName:DS.attr('string'),
  userName:DS.attr('string'),
  commandInput:DS.attr('string'),

  commandRecord:Ember.computed('machineName','directoryName','userName','commandInput',function(){
  	return {
  		machineName:this.get('machineName'),
  		directoryName:this.get('directoryName'),
  		userName:this.get('userName'),
  		commandInput:this.get('commandInput'),
  		text:true
  	}
  })
});
