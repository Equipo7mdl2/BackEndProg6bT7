"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const ropa_routes_1 = require("./modules/ropa/routes/ropa.routes");
const usuario_routes_1 = require("./modules/usuario/routes/usuario.routes");
class Routes {
    constructor() {
        this.usuarioRoutes = new usuario_routes_1.UsuarioRoutes();
        this.ropaRoutes = new ropa_routes_1.RopaRoutes();
    }
    routes(app) {
        this.usuarioRoutes.routes(app);
        this.ropaRoutes.routes(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map