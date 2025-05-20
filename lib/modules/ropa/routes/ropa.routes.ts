import { RopaController } from "../controllers/ropa.controller";

export class RopaRoutes {
    private ropaController: RopaController = new RopaController();
    public routes(app): void {
        app.route('/ropa')
        .get(this.ropaController.obtenerRopas)
        .post(this.ropaController.crearRopa);

        app.route('/ropa/:id')
        .put(this.ropaController.actualizarRopa)
        .delete(this.ropaController.eliminarRopa);
    }
}