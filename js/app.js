const app = Vue.createApp({
	data() {
		return {
			state: true,
			inputName: '',
			names: [],
			error: 'show false name',
			showError: false,
		}
	},
	methods: {
		addNameToList() {
			const userName = this.inputName;

			if (this.validate(userName)) {
				this.names.push(userName);
				this.inputName = '';
				this.showError = false;
			} else {
				this.showError = true;
			}
		},
		validate(value) {
			this.error = '';

			if (value === '')  {
				this.error = 'sorry no empty name';
				return false;
			}

			if (this.names.includes(value)) {
				this.error = 'name must be unique';
				return false;
			}
			return true;
		},
		removeName(name) {
			console.log('name', name)
			const updatedNames = this.names.filter(n => n !== name);
			this.names = updatedNames;
		}
	}
}).mount('#app');