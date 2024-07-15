const colorPicker = document.getElementById("colorpicker");
const canvasColor = document.getElementById("canvascolor");
const canvas = document.getElementById("mycanvas");
const clearBtn = document.getElementById("clearbtn");
const saveBtn = document.getElementById("savebtn");
const retrieveBtn = document.getElementById("retrievebtn")
const fontPicker = document.getElementById("fontpicker");
const ctx =canvas.getContext("2d");

let isDrawing = false;
let lastX = 0;
let lastY = 0;

colorPicker.addEventListener("change" , (e) => {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
})

canvas.addEventListener("mousedown",(e) => {
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
})

canvas.addEventListener("mousemove",(e) => {
    if(isDrawing){
        ctx.beginPath();
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(event.offsetX,event.offsetY);
        ctx.stroke();

        lastX = event.offsetX;
        lastY = event.offsetY;
    }
})

canvas.addEventListener("mouseup",() => {
    isDrawing = false
})

canvasColor.addEventListener("change",(e) => {
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0,0,800,500)
})

fontPicker.addEventListener("change",(e) => {
    ctx.lineWidth = e.target.value;
})

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });


  saveBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "my-signature.png";
    link.click();
  });

  
  
    saveBtn.addEventListener("click",() => {
    localStorage.setItem("canvasContent",canvas.toDataURL());

    let link = document.createElement("a");

    link.download = "my-canvas.png";

    link.href = canvas.toDataURL();

    link.click();
})


  



