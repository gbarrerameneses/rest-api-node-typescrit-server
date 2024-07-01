import { Router } from 'express'

const router = Router() // De esta forma vas a tener acceso a todas las funciones del Router de Express

// Routing
router.get('/', (req, res) =>{
    res.json('Desde GET')
})

router.post('/', (req, res) =>{
    res.json('Desde POST')
})

router.put('/', (req, res) =>{
    res.json('Desde PUT')
})

router.patch('/', (req, res) =>{
    res.json('Desde PATCH')
})

router.delete('/', (req, res) =>{
    res.json('Desde DELETE')
})

export default router