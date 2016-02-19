import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [{
			machineName:'110.2.34.3',
			directoryName:'root',
			userName:'zyg',
			stduot:'hahahhaah',
		},{
			machineName:'110.2.34.3',
			directoryName:'admin',
			userName:'zyg',
			stduot:'zzzddd',			
		}];
	}
});
