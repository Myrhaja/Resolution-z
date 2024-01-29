var btn = document.getElementById("resp");
var list = document.getElementById("navbar");
var nav = document.getElementById("navnav");
var head = document.getElementById("head");
var pagination = document.getElementById("pagin")
var fluid = document.getElementById("fluid")
var i = 0;
btn.addEventListener("click" , function(){
    i++;
    if (i === 1)
    {
        var div = document.createElement("div");
        var ul1 = document.createElement("ul");
        var li1 =document.createElement("li");
        var li2 =document.createElement("li");
        var li3 =document.createElement("li");
        var li4 =document.createElement("li");
        var li5 =document.createElement("li");
        var li6 =document.createElement("li");
        var a1 = document.createElement("a");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
        var a4 = document.createElement("a");
        var a5 = document.createElement("a");
        var a6 = document.createElement("a");
        var id = document.createAttribute("id");
        var src1 = document.createAttribute("href");
        var src2= document.createAttribute("href");
        var src3= document.createAttribute("href");
        var src4= document.createAttribute("href");
        var src5= document.createAttribute("href");
        var src6= document.createAttribute("href");
        id.value= "divremove";
        src1.value="#";
        src2.value="#";
        src3.value="#";
        src4.value="#";
        src5.value="#";
        src6.value="#";
        div.setAttributeNode(id);
        a1.setAttributeNode(src1);
        a2.setAttributeNode(src2);
        a3.setAttributeNode(src3);
        a4.setAttributeNode(src4);
        a5.setAttributeNode(src5);
        a6.setAttributeNode(src6);
        ul1.classList = "nav navbar-nav"
        a1.innerHTML = "Accueil";
        a2.innerHTML = "Services";
        a3.innerHTML = "Blog";
        a4.innerHTML = "Contact";
        a5.innerHTML = "Se connecter";
        a6.innerHTML = "S'inscrire";
        li1.append(a1);
        li2.append(a2);
        li3.append(a3);
        li4.append(a4);
        li5.append(a5);
        li6.append(a6);
        div.append(ul1);
        ul1.append(li1 , li2 , li3 , li4 ,li5 ,li6);
        ul1.style.marginLeft = "15px"
        div.style.backgroundColor = "#337ab7";
        div.style.width = "135px"
        div.style.height = "600px"
        div.style.position = "fixed";
        div.style.zIndex = 10;
        head.style.backgroundColor = "#337ab7"
        head.style.color = "white"
        a1.style.color = "white"
        a2.style.color = "white"
        a3.style.color = "white"
        a4.style.color = "white"
        a5.style.color = "white"
        a6.style.color = "white"
        nav.append(div);
        
    } else 
    {
        i = 0
        var div = document.getElementById("divremove");
        div.remove();
        head.style.backgroundColor = "white"
        head.style.color = "#337ab7";
    }
})
