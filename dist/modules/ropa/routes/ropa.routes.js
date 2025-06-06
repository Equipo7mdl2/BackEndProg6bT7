"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RopaRoutes = void 0;
const ropa_controller_1 = require("../controllers/ropa.controller");
class RopaRoutes {
    constructor() {
        this.ropaController = new ropa_controller_1.RopaController();
    }
    routes(app) {
        app.route('/ropa')
            .get(this.ropaController.obtenerRopas)
            .post(this.ropaController.crearRopa);
        app.route('/ropa/:id')
            .put(this.ropaController.actualizarRopa)
            .delete(this.ropaController.eliminarRopa);
    }
}
exports.RopaRoutes = RopaRoutes;
//# sourceMappingURL=ropa.routes.js.map