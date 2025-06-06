"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RopaController = void 0;
const ropa_model_1 = require("../models/ropa.model");
class RopaController {
    constructor() {
        this.crearRopa = (req, res) => {
            const nuevaRopa = new ropa_model_1.default({
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
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'Ropa no creada'
                });
            });
        };
        this.obtenerRopas = (req, res) => {
            ropa_model_1.default.find()
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
        };
        this.actualizarRopa = (req, res) => {
            ropa_model_1.default.findByIdAndUpdate(req.params.id, {
                ropa: req.body.ropa
            })
                .then(ropaActualizada => {
                res.status(200).json({
                    ok: true,
                    ropa: ropaActualizada,
                    message: 'Ropa actualizada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'Ropa no actualizada'
                });
            });
        };
        this.eliminarRopa = (req, res) => {
            ropa_model_1.default.findByIdAndDelete(req.params.id)
                .then(ropaEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'Ropa eliminada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'Ropa no eliminada'
                });
            });
        };
    }
}
exports.RopaController = RopaController;
//# sourceMappingURL=ropa.controller.js.map