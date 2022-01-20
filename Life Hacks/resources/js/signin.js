let inputElements = document.getElementsByTagName("input");

for (let i = 0; i < inputElements.length; i++) {
	inputElements[i].onkeyup = handleKeyboardEvent;
	inputElements[i].onfocus = toggleFocus;
	inputElements[i].onblur = toggleFocus;
}

function handleKeyboardEvent(e) {
	msg = document.getElementById("message");
	msg.style.display = "block"
	msg.innerHTML = "Key pressed: " + e.keyCode + " Char: "
		+ String.fromCharCode(e.keyCode);
}

function toggleFocus(e) {
	if (e.type == "focus")
		e.target.className = "focused"
	else if (e.type == "blur")
		e.target.className = ""
}
