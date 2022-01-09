function handleEvent(event: Event) {
  this.disabled = true;
}

handleEvent(new Event("click"));

function handleEventModifies(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}

handleEventModifies(new Event("cliick")); // not ok

handleEventModifies;

const myButton = document.getElementsByTagName("button")[0];

const boundHandler = handleEvent.bind(myButton);

boundHandler(new Event("click")); // ok

handleEvent.call(myButton, new Event("click")); // ok
