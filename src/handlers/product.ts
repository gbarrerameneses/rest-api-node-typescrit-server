import { Request, Response } from 'express'

export const createProduct = (req: Request, res: Response) =>{ // traemos la función de router
    
    
    
    res.json('Desde POST')
}