// @noImplicitAny: false
// type FormSubmitHandler = (data: FormData) => void;
// type MessageHandler = (evt: MessageEvent) => void;

// function handleMainEvent(
//   elem: HTMLFormElement | HTMLIFrameElement,
//   handler: FormSubmitHandler | MessageHandler
// ) {}

// const myIframe = document.getElementsByTagName('iframe')[0]

// handleMainEvent(myIframe, (val) => {

// })

// @noImplicitAny: false
type FormSubmitHandler = (data: FormData) => void;
type MessageHandler = (evt: MessageEvent) => void;

function handleMainEvent(elem: HTMLFormElement, handler: FormSubmitHandler);
function handleMainEvent(elem: HTMLIFrameElement, handler: MessageHandler);
function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {}

const myFrame = document.getElementsByTagName("iframe")[0];
//     ^?
const myForm = document.getElementsByTagName("form")[0];
//     ^?
handleMainEvent(myFrame, (val) => {
  //        ^?
});
handleMainEvent(myForm, (val) => {
  //        ^?
});

handleMainEvent;
