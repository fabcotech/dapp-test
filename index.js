const isReactLoaded = document.getElementsByClassName("is-react-loaded")[0];
isReactLoaded.innerHTML = "React is loaded";
isReactLoaded.setAttribute("style", "color: #6A6;");

const isJavascriptEvaluated = document.getElementsByClassName(
  "is-javascript-evaluated"
)[0];
isJavascriptEvaluated.innerHTML = "javascript is correctly evaluated";
isJavascriptEvaluated.setAttribute("style", "color: #6A6;");

alert("This alert should not pop");

try {
  window.parent.document;
} catch (e) {
  const isAccessingParentContext = document.getElementsByClassName(
    "is-parent-context-blocked"
  )[0];
  isAccessingParentContext.innerHTML = "parent context is blocked";
  isAccessingParentContext.setAttribute("style", "color: #6A6;");
}

const form = document.getElementById("form");
form.submit();

window.open("https://rchain.coop/");
