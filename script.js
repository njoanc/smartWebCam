const video = document.getElementById("webcam");
const liveView = document.getElementById("liveView");
const demoSection = document.getElementById("demos");
const enableWebcamButton = document.getElementById("webcamButton");

//check if webcam access is supported
function getUserMediaSupported() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

//If webcam supported, add event listener to button for when user
//wants to activate it to call enableCam function which we will define in the next step

if (getUserMediaSupported()) {
  enableWebcamButton.addEventListener("click", enableCam);
} else {
  console.warn("getUserMedia() is not supported by your browser");
}

//Ebale the live webcam view and start classification
function enableCam(event) {
  //Only continue if the COCO-SSD has finished loading
  if (!model) {
    return;
  }

  //hide the button once clicked
  event.target.classList.add("removed");

  //getUserMedia parameters to force video but not audio

  const constraints = {
    video: true,
  };

  //Activate the webcam stream

  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    video.srcObject = stream;
    video.addEventListener("loadeddata", predictWebcam);
  });
}

//Placeholder model function for next step

function predictWebcam() {}

//Pretend model has loaded so we can try out the webcam code

var model = true;

demoSection.classList.remove("invisible");
