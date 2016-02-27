import Ember from 'ember';

export default Ember.Route.extend({
	init(){
		// this.store.createRecord('commandRecord',{
		// 	machineName:'110.2.34.3',
		// 	directoryName:'root',
		// 	userName:'zyg',
		// 	commandInput:'ls',
		// })
	},
	model(){

		return this.store.findAll('commandRecord');
	}
});
