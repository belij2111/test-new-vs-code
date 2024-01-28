import { a, b, testVsCode } from "./test.js"
testVsCode()
let start = document.getElementsByTagName("button")[0]
start.addEventListener("click", test)

function test() {
	console.log(a + " " + b)
}
