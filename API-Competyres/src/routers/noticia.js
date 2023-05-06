const Noticia = require('../models/noticia')
const express = require('express')
const autentificacion = require('../middleware/autentificacion')
const router = new express.Router()

router.post('/noticia', autentificacion,async (req, res) => {
    const noticia = new Noticia(req.body)

    try {
        await noticia.save()
        res.status(201).send(noticia)
    } catch (e) {
        res.status(400).send()
    }
})


router.get('/noticias',async (req, res)=>{
    try {
        const noticias = await Noticia.find({})
        res.status(200).send(noticias)
    }catch (e) {
        res.status(500).send()
    }

})

router.get('/noticia/:id', autentificacion,async (req, res)=>{
    const _id = req.params.id
    try{
        const noticia = await Noticia.findById(_id)
        

        if (!noticia) return res.status(404).send()

        res.status(200).send(noticia)

    }catch (e){
        res.status(500).send();
    }

})


router.delete('/noticia/:id', autentificacion,async (req, res) => {
    try {
        const noticia = await Noticia.findByIdAndDelete(req.params.id)

        if (!noticia) res.status(404).send()

        res.send(noticia)
    } catch (e) {
        res.status(500).send()
    }
})



module.exports = router