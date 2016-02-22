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

		console.log(this.store.findAll('commandRecord'))

		return [{
			machineName:'110.2.34.3',
			directoryName:'root',
			userName:'zyg',
			stduot:'hahahhaah',
			commandInput:'ls',
			text:true
		},{
			machineName:'110.2.34.3',
			directoryName:'admin',
			userName:'zyg',
			stduot:'zzzddd',			
		}];
	}
});
