  import express from "express";
  import conectaNaDataBase from "./config/dbConnect.js";

  const conexao = await conectaNaDataBase();

  conexao.on("error", (erro)=>{
    console.log("Erro de conexão", erro);
  });

  conexao.once("open", ()=>{
    console.log("Conexão feita com sucesso!")
  });

  const app = express();
  app.use(express.json())
  
    app.get('/', (req, res) => {
      res.status(200).send('KSA Imports');
    }) 
    app.get('/nome', (req, res) => {
        res.status(200).json(nome)
    })

    app.post('/nome', (req, res) => {
      nome.push(req.body);
      res.status(201).send('Cadastrado com Sucesso!')
    })

    app.put('/nome/:id', (req, res) => {
      let index = buscaVaga(req.params.id);
      nome[index].titulo = req.body.titulo;
      res.json(nome);
    })
    
    app.get('/nome/:id', (req, res)=>{
      const index = buscaVaga(req.params.id);
      res.status(201).json(nome[index]);

    })

    app.delete('/nome/:id',(req, res)=>{
      const index = buscaVaga(req.params.id);
      if (index !== -1) {
        nome.splice(index, 1); 
        res.status(204).send(); 
      } else {
        res.status(404).send('Vaga não encontrada'); 
      }
    })
    

    export default app 

        

