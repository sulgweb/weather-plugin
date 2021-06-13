/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-01-12 18:40:53
 * @LastEditTime: 2021-06-13 21:35:54
 * @Copyright: 1.0.0
 */
import myVue from "@/utils/myVue.js"
import app from './components/app.vue'

joinContent(app)
injectJsInsert()

function joinContent(element) {
	const div = document.createElement('div')
	div.id = 'joinContentApp'
	document.body.appendChild(div);
	const myApp = myVue(element)
	myApp.mount('#joinContentApp')
}

function injectJsInsert() {
	document.addEventListener('readystatechange', () => {
		const injectPath = 'js/inject.js'
		const script = document.createElement('script')
		script.setAttribute('type', 'text/javascript')
		script.src = chrome.extension.getURL(injectPath)
		document.body.appendChild(script)
	})
}
