import { RopaRoutes } from "./modules/ropa/routes/ropa.routes";
import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";

export class Routes {

    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();    
    private ropaRoutes: RopaRoutes = new RopaRoutes()

    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.ropaRoutes.routes(app);
    }
}