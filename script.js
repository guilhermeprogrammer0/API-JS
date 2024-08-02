let btnFetchUsers = document.getElementById("fetch-users");
btnFetchUsers.addEventListener("click",fetchUsers);
/* Primeira Forma
function fetchUsers(){
    const userList = document.getElementById("user-list");
    userList.innerHTML = "Carregando...";
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then((data)=>{
        userList.innerHTML = '';
       data.forEach((user)=>{
        const userDiv = document.createElement("div");
        userDiv.classList.add("estiloDiv");
        userDiv.innerHTML = `
            <h3> ${user.name} </h3>
            <p><strong> Email: </strong> ${user.email} </p>
           <p><strong> Telefone: </strong> ${user.phone} </p>
            <p><strong> Site: </strong> <a href="https://${user.website}" target="_black">${user.website}</p>
        `;
        userList.appendChild(userDiv);
       })
    })
    .catch((error)=>{console.log(`ERRO ao buscar usuários:${error}`);
    userList.innerHTML = "Ocorreu um erro ao buscar usuários";

})
}*/
//Segunda Forma
async function fetchUsers(){
    const userList = document.getElementById("user-list");
    userList.innerHTML = "Carregando...";
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        userList.innerHTML = "";
        data.forEach((user)=>{
            const userDiv = document.createElement("div");
            userDiv.classList.add("estiloDiv");
            userDiv.innerHTML = `
                <h3> ${user.name} </h3>
                <p><strong> Email: </strong> ${user.email} </p>
                <p><strong> Telefone: </strong> ${user.phone} </p>
                <p><strong> Site: </strong> <a href="https://${user.website}" target="_black">${user.website}</p>
            
            `;
            userList.appendChild(userDiv);
        })
    }
    catch(erro){
        console.log(`Erro ao buscar os usuários: ${erro}`);
        userList.innerHTML = "Ocorreu um erro ao buscar usuários";
    }
}