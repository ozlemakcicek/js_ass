const veriGetir=()=>{
    fetch("./tv-shows.json")
    .then(res)=>{
        if(!res.ok){
            throw new Error("hata var")
        }
        return res.json()
    }
}
veriGetir()