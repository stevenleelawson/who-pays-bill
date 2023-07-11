const app = Vue.createApp({
	data() {
		return {
			state: true,
			inputName: '',
			names: [],
			error: 'show false name',
			showError: false,
			result: ''
		}
	},
	computed: {
		isReady() {
			// REMEMBER: computed property methods ALWAYS must return something!!!
			return this.names.length > 1;
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
		removeName(idx) {
			// *************************
			// from mdn:
			// splice(start, deleteCount)

			this.names.splice(idx, 1);

			console.log('namesArr', this.names)


			// const updatedNames = this.names.filter(n => n !== name);
			// this.names = updatedNames;
		},
		getRandomName() {
			return this.names[Math.floor(Math.random() * this.names.length)]
		},
		generateResult() {
			let rand = this.getRandomName();
			if (this.result !== '') {
				while (rand === this.result) {
					rand = this.getRandomName()
				}
			}
			this.result = rand;
		},
		resetApp() {
			this.state = true;
			this.names = [];
			this.inputName = '';
			this.showError = false;
			this.result = '';
		},
		showResults() {
			this.generateResult()
			this.state = false;
		},
		getNewResult() {
			this.generateResult();
		}
	}
}).mount('#app');