const express = require('express')
const cors    = require('cors')
const User    = require('./config')
const app     = express()

app.use(express.json())
app.use(cors())

app.get("/consult", async (req,res) => {
    const snapshot = await User.get()
    const lista = snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}))
    res.send(lista)
})

app.post("/create", async (req, res) => {

    try{    
        const  { nome }    = req.body
        const  { pontos }  = req.body

        console.log("nome: " + nome)
        console.log("pontos: " + pontos)
    
        await User.add({
            "nome":nome,
            "pontos":pontos
        })
    
        res.send({msg: "User Added"})

    }catch(err){
        console.log(err)
    }
})

app.listen(4000, () => console.log("Servidor Rodando: Porta 4000"))
