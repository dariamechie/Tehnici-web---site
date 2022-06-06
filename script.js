let currentRecipeID;

function fetchRecipes() {
    let body = document.getElementsByClassName("daria")[0];
    let p = document.createElement('p');
    p.innerText = 'loading...';
    p.setAttribute('id', 'loading');
    body.appendChild(p);

    fetch('http://localhost:3000/recipes',
        {
            method:'get'
        }   
    ).then(function(response){
        response.json().then((data)=>{
            if(data.length) {
                console.log(data);
                body.removeChild(p);
            }

            for(let i=0; i<data.length; i++) {
                let image = document.createElement('img');
                image.setAttribute('src', data[i].img);
                image.width=100;
                body.appendChild(image);

                let h2 = document.createElement('h2');
                h2.innerText=data[i].name;
                body.appendChild(h2);

                let edit = document.createElement('button');
                edit.innerText = 'Edit';
                edit.onclick = function() {
                    document.getElementById('name').value = data[i].name;
                    document.getElementById('image').value = data[i].img;
                    currentRecipeID = data[i].id;
                }
                body.appendChild(edit);

                let Delete = document.createElement('button');
                Delete.innerText = 'Delete';
                Delete.onclick = function() {
                    deleteRecipe(data[i].id);
                }
                body.appendChild(Delete);

                let hr = document.createElement('hr');
                body.appendChild(hr);
            }
        })
    })
}

function addRecipe() {
    let body = document.getElementsByTagName('body')[0];
    let name = document.getElementById('name').value;
    let image = document.getElementById('image').value;

    let newRecipe = {
        name: name,
        img: image
    }

    fetch('http://localhost:3000/recipes', 
        {
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newRecipe)
        }).then(function(response) {
            window.location.reload();
        })
}

function updateRecipe() {
    let name = document.getElementById('name').value;
    let image = document.getElementById('image').value;
    let newRecipe = {
        name: name,
        img: image
    }

    fetch('http://localhost:3000/recipes/' + currentRecipeID, 
    {
        method: 'put',
        headers:  {'Content-Type': 'application/json'},
        body: JSON.stringify(newRecipe)
    }).then(function(response) {
        window.location.reload();
    })
}

function deleteRecipe(id) {
    let name = document.getElementById('name').value;
    let image = document.getElementById('image').value;

    fetch('http://localhost:3000/recipes/' + id, 
    {
        method: 'delete'
    }).then(function(response) {
        window.location.reload();
    })
}


fetchRecipes();

function culoare_fundal(){
    var vector_culori = ["pink", "yellow", "blue", "green", "purple", "navy"];
    document.body.style.backgroundColor = vector_culori[Math.floor(Math.random() * vector_culori.length)];
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'ShiftRight') {
        localStorage.setItem("culoare_b", document.body.style.backgroundColor);
        var valoare =setInterval(culoare_fundal, 1000);
    }
    else if(event.code == 'ShiftLeft') {
        document.body.style.backgroundColor = localStorage.getItem("culoare_b");
        clearInterval(valoare);
    }
  });