const app = Vue.createApp({
	data() {
		return {
			state: true,
			inputName: '',
			names: []
		}
	},
	methods: {
		addNameToList(e) {
			console.log('here', e)
			const userName = this.inputName;

			if (this.validate(userName)) {
				this.names.push(userName);
				this.inputName = '';
				console.log('names', this.names)
			} else {
				console.log('error')
			}
		},
		validate(value) {
			return true;
		}
	}
}).mount('#app');