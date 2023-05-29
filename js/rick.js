const apirick=async(pagina)=>{
    let url="https://rickandmortyapi.com/api/character/?page="+pagina;
    const api=await fetch(url);
    const data=await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado")
    data.results.map(item=>{
        divItem=document.createElement(`div`)
        divItem=innerHTML=`
        >
</div>

        `
        divRes.appendchild(divItem);
    });

}

apijs(1)