'use strict'

window.addEventListener("load", function () {

    // Fetch (ajax) y peticiones a servicios / apis rest
    var divUsuarios = document.querySelector("#usuarios");
    var divProfesor = document.querySelector("#profesor");
    var divJanet = document.querySelector("#janet");

    getUsuarios()
        .then(data => data.json())  //Esto se ejecutará cuando el fetch haya recibido los datos
        .then(users => {            //Esto se ejecutará cuando el then anterior haya finalizado
            listadoUsuarios(users.data); //Como entrada se recibe el retorno de la función anterior
            return getInfo();
        })
        .then(data => {
            divProfesor.innerHTML = data;
            return getJanet();
        })
        .then(data => data.json())
        .then(user => {
            mostrarJanet(user.data);
        })
        .catch(error => {
            console.log(error);
            alert("Error en las peticiones");
        });

    //Nota:
    // data => data.json()
    // es lo mismo que:
    // function(data) { return data.json(); }

    function getUsuarios() {
        return fetch("https://reqres.in/api/users")
    }

    function getJanet() {
        return fetch("https://reqres.in/api/users/2")
    }

    //Como crear una promise desde cero
    function getInfo() {

        var profesor = {
            nombre: "Victor",
            apellidos: "Robles",
            url: "http://victorrobles.es"
        };

        return new Promise((resolve, reject) => {
            var profesor_string = "";
            //Simulamos que tarda 3s en procesarse
            setTimeout(function () {
                var profesor_string = JSON.stringify(profesor);

                if (typeof profesor_string != "string" || profesor_string == "")
                return reject("error");

                return resolve(profesor_string);
            }, 3000);

            
        });
    }

    function listadoUsuarios(usuarios) {
        console.log(usuarios);
        //El map es lo mismo que hacer un foreach pero el cuerpo es una función de callback
        usuarios.map((user, i) => {
            let nombre = document.createElement("h3");
            nombre.innerHTML = i + " " + user.first_name + " " + user.last_name;
            divUsuarios.appendChild(nombre);
        });
        document.querySelector(".loading").style.display = "none";
    }

    function mostrarJanet(user) {
        let nombre = document.createElement("h4");
        let avatar = document.createElement("img");

        nombre.innerHTML = user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = "100";

        divJanet.appendChild(nombre);
        divJanet.appendChild(avatar);

        document.querySelector("#janet .loading").style.display = "none";
    }

});