document.getElementById("buttonsid").onclick = function() {check()};


function check() {
    str = document.getElementById('fname').value
    var res = str.charAt(str.length-1);
    console.log(res)
    var a = "ა";
    var e = "ე";
    var i = "ი";
    var o = "ო";
    var u = "უ"
    if ((res == a)) {
        xmovanfudziani();
        console.log("xmovani")
    }
    if ((res == e)) {
        xmovanfudziani();
        console.log("xmovani")
    }
    if ((res == i)) {
        tanxmovanfudze();
        console.log("tanx")
    }
    if ((res == o)) {
        xmovanfudziani();
        console.log("xmovani")
    }
    if ((res == u)) {
        xmovanfudziani();
        console.log("xmovani")
    }
}


function xmovanfudziani() {
    var line = document.createElement("P");
    line.innerText = "_____________________________________________";  
    document.body.appendChild(line);
    hello = document.getElementById('fname').value
    var line = document.createElement("P");
    line.innerText = hello;  
    document.body.appendChild(line);
    console.log(hello)
    removed = hello.substring(0, hello.length - 1);
    console.log(removed);
    მოთხ = hello + "-მ"
    var motx = document.createElement("P");
    motx.innerText = მოთხ;   
    document.body.appendChild(motx);
    console.log(მოთხ)
    მიც = hello + "-ს"
    var mic = document.createElement("P");
    mic.innerText = მიც;   
    document.body.appendChild(mic);
    console.log(მიც)
    ნათ = hello + "-სი"
    var nat = document.createElement("P");
    nat.innerText = ნათ;   
    document.body.appendChild(nat);
    console.log(ნათ)
    მოქმ = hello + "-თი"
    var moqm = document.createElement("P");
    moqm.innerText = მოქმ;   
    document.body.appendChild(moqm);
    console.log(მოქმ)
    ვით = hello + "-დ"
    var vit = document.createElement("P");
    vit.innerText = ვით;   
    document.body.appendChild(vit);
    console.log(ვით)
    წოდ = hello + "(ვ)"
    var wod = document.createElement("P");
    wod.innerText = წოდ;   
    document.body.appendChild(wod);
    console.log(წოდ)
    var xmovan = document.createElement("P");
    xmovan.innerText = "ხმოვანფუძიანი";   
    document.body.appendChild(xmovan); 
    var line = document.createElement("P");
    line.innerText = "_____________________________________________";   
    document.body.appendChild(line); 
} 

function tanxmovanfudze() {
    var line = document.createElement("P");
    line.innerText = "_____________________________________________";   
    document.body.appendChild(line);
    hello = document.getElementById('fname').value
    console.log(hello)
    hello = hello.substring(0, hello.length - 1);
    console.log(hello);
    სახ = hello + "-ი"
    var sax = document.createElement("P");
    sax.innerText = სახ;   
    document.body.appendChild(sax);
    console.log(სახ)
    მოთხ = hello + "-მა"
    var motx = document.createElement("P");
    motx.innerText = მოთხ;   
    document.body.appendChild(motx);
    console.log(მოთხ)
    მიც = hello + "-ს"
    var mic = document.createElement("P");
    mic.innerText = მიც;   
    document.body.appendChild(mic);
    console.log(მიც)
    ნათ = hello + "-ის"
    var nat = document.createElement("P");
    nat.innerText = ნათ;   
    document.body.appendChild(nat);
    console.log(ნათ)
    მოქმ = hello + "-ით"
    var moqm = document.createElement("P");
    moqm.innerText = მოქმ;   
    document.body.appendChild(moqm);
    console.log(მოქმ)
    ვით = hello + "-ად"
    var vit = document.createElement("P");
    vit.innerText = ვით;   
    document.body.appendChild(vit);
    console.log(ვით)
    წოდ = hello + "-ო"
    var wod = document.createElement("P");
    wod.innerText = წოდ;   
    document.body.appendChild(wod);
    console.log(წოდ)
    var tanx = document.createElement("P");
    tanx.innerText = "თანხმოვანფუძიანი";   
    document.body.appendChild(tanx); 
    var line = document.createElement("P");
    line.innerText = "_____________________________________________";   
    document.body.appendChild(line);
} 
