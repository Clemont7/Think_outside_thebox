function  acenderLampada(){

    console.log('AAA')
    let div = document.getElementById("divCorpo");
    div.style.background = "#fee74f";

    let novoItem = `<img  style="width: 200px; margin-left:50%; margin-top:20%;" src="C:\\Users\\USER-\\Desktop\\Outside_the_box_web__GAME\\gato.png">`;

    let img = document.createElement('img')
    img.className = 'gato'
    img.src = "C:\\Users\\USER-\\Desktop\\Outside_the_box_web__GAME\\gato.png"
   

    div.innerHTML += novoItem;
    // div.appendChild(img)
}

