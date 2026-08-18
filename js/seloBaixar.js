const baixarBtn = document.getElementById("baixarBtn");

baixarBtn.addEventListener("click", function () {
  canvas.toBlob(function (blob) {
    const link = document.createElement("a");

    link.download = "foto-com-selo.png";
    link.href = URL.createObjectURL(blob);

    link.click();

    URL.revokeObjectURL(link.href);
  }, "image/png");
});
