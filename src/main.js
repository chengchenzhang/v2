import App from './App.svelte';
import Entry from './Entry.svelte';

const title = 'TFT World';
const c1 = new Entry({
	target: document.body,
	props: {
		title: title,
		contents: 'yes',
		src: './images/colored_head.png'
	}
})

const content = new Entry({
	target: document.body,
	props: {
		title: 'How to Not Suck at TFT',
		contents: 'Step 1: Don\'t be bad',
		src: './images/doggo.png'

	}
});

const c2 = new Entry({
	target: document.body,
	props: {
		title: 'How to Suck at TFT',
		contents: 'Step 1: Tilt Roll',
		src: './images/tilt.png'
	}
})
export default content;
