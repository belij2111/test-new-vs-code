import { a, testVsCode } from "./test.js"
testVsCode()
let start = document.getElementsByTagName("button")[0]
start.addEventListener("click", test)

function test() {
	console.log(a)
}
