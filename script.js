// Canvas init
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100, 100, 20, 0, Math.PI * 2); // Outer circle
ctx.strokeStyle = "red";
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();
