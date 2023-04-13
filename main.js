function generateSegitiga(){
    var inputAngka=$("#angka").val()
    var element=document.getElementById("result");
    element.innerHTML="";
    try {
        $.ajax({
            type: 'GET',
            url : 'http://localhost:5974/generate/segitiga/'+inputAngka,
        }).success(function(data){
            var ul = document.createElement("ul");  
            for (let index = 0; index < data.value.length; index++) {  
                var li = document.createElement("li");  
                var textnode = document.createTextNode(data.value[index]);  
                li.appendChild(textnode);
                ul.appendChild(li);
            }
            element.appendChild(ul);
        });
    } catch (error) {
        console.log("Is Not Numeric");   
    }
}
function generateBilanganGanjil(){
    var inputAngka=$("#angka").val()
    var element=document.getElementById("result");
    element.innerHTML="";
    try {
        $.ajax({
            type: 'GET',
            url : 'http://localhost:5974/generate/ganjil/'+inputAngka,
        }).success(function(data){
            var ul = document.createElement("ul");  
            for (let index = 0; index < data.value.length; index++) {  
                var li = document.createElement("li");  
                var textnode = document.createTextNode(data.value[index]);  
                li.appendChild(textnode);
                ul.appendChild(li);
            }
            element.appendChild(ul);
        });
    } catch (error) {
        console.log("Is Not Numeric");   
    }
}
function generateBilanganPrima(){
    var inputAngka=$("#angka").val()
    var element=document.getElementById("result");
    element.innerHTML="";
    try {
        $.ajax({
            type: 'GET',
            url : 'http://localhost:5974/generate/prima/'+inputAngka,
        }).success(function(data){
            var label = document.createElement("label");  
            var result="Bukan Bilangan Prima"
            if(data.value) result="Bilangan Prima"
            var textnode = document.createTextNode(result);  
            label.appendChild(textnode);
            element.appendChild(label);
        });
    } catch (error) {
        console.log("Is Not Numeric");   
    }
}