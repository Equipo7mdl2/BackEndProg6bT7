import { Request, Response } from 'express';
import * as _ from 'lodash';
import Ropa from '../models/ropa.model';

export class RopaController {
    crearRopa = (req: Request, res: Response) =>  {
        const nuevaRopa = new Ropa({
            ropa: req.body.ropa
        });

        nuevaRopa.save()
        .then(ropaCreada => {
            res.status(201).json({
                ok: true,
                ropa: ropaCreada,
                message: 'Ropa creada'
            });
        })
        .catch(error =>{
            
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'Ropa no creada'
            });
        });
    }

    obtenerRopas = (req: Request, res: Response) => {
        Ropa.find()
        .then(ropas => {
            res.status(200).json({
                ok: true,
                ropas: ropas
            });
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: error.message
            });
        });
    }

    actualizarRopa  = (req: Request, res: Response) => {
        Ropa.findByIdAndUpdate(req.params.id, {
            ropa: req.body.ropa
        })
        .then(ropaActualizada => {
            res.status(200).json(
                {
                    ok: true,
                    ropa: ropaActualizada,
                    message: 'Ropa actualizada'    
                }
            );
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'Ropa no actualizada'
            });
        });
    }

    eliminarRopa  = (req: Request, res: Response) => {
        Ropa.findByIdAndDelete(req.params.id)
        .then(ropaEliminada => {
            res.status(200).json(
                {
                    ok: true,                   
                    message: 'Ropa eliminada'    
                }
            );
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'Ropa no eliminada'
            });
        });
    }

    

}