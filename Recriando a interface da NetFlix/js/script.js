var closer = document.querySelector("#show1");
var clser = document.querySelector("#show2");
var coser = document.querySelector("#show3");
var cloer = document.querySelector("#show4");
var closr = document.querySelector("#show5");

function ocultar(elemento){    

    if(closer.style.display === "none"){
        closer.style.display = "flex";

        coser.style.display = "none";
        clser.style.display = "none";
        cloer.style.display = "none";
        closr.style.display = "none";

    } else{
        closer.style.display = "none";
    }
}

function esconder(elemento){   

    if(clser.style.display === "none"){
        clser.style.display = "flex";

        coser.style.display = "none";
        closer.style.display = "none";
        cloer.style.display = "none";
        closr.style.display = "none";

    } else{
        clser.style.display = "none";
    }
}

function mostrar(elemento){   

    if(coser.style.display === "none"){
        coser.style.display = "flex";  
        
        closer.style.display = "none";
        cloer.style.display = "none";
        closr.style.display = "none";
        clser.style.display = "none";

    } else{
        coser.style.display = "none";
    }
}

function exibir(elemento){

    if(cloer.style.display === "none"){
        cloer.style.display = "flex";

        closer.style.display = "none";
        coser.style.display = "none";
        closr.style.display = "none";
        clser.style.display = "none";

    } else{
        cloer.style.display = "none";
    }
}

function aparecer(elemento){

    if(closr.style.display === "none"){
        closr.style.display = "flex";

        closer.style.display = "none";
        coser.style.display = "none";
        cloer.style.display = "none";
        clser.style.display = "none";

    } else{
        closr.style.display = "none";
    }
}
