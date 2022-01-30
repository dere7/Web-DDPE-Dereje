function handleSwap() {
  let image = document.getElementById("image");
  let video = document.getElementById("video");
  let parent = document.querySelector("td#parent");
  let afterImage = image.nextElementSibling;
  parent.replaceChild(image, video);
  parent.insertBefore(video, afterImage);
}
function handleRemove() {
  let audio = document.getElementById("audio");
  if (audio != null) audio.remove();
  else console.error("audio deosn't exist");
}
function handleAdd() {
  let newSubtitle = document.createElement("h2"); // create new h2 node
  newSubtitle.className = "title";
  let text = document.createTextNode("New Subtitle🆕"); // create text node
  newSubtitle.appendChild(text); // add text node to h2
  let sibling = document.querySelector("h1#title"); // locate sibling
  sibling.insertAdjacentElement("afterend", newSubtitle); // insert after sibling
}
