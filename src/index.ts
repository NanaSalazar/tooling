import axios from "axios"


const getAdress = async (cep) => {
    let url = `https://viacep.com.br/ws/${cep}/json/`
    try {
        const resposta = await axios.get(url)

        const json = resposta.data
        return json
    } catch (e) {
        throw e
    }
}
console.log("------")
getAdress("33202-584").then(data => console.log(data))