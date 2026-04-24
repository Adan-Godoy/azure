import { PostBodyDto } from './dto/post-body.dto';
export declare class AppController {
    getNombreApellido(): {
        nombre: string;
        apellido: string;
    };
    getCalculo(numero: number): {
        resultado: number;
    };
    postDatos(body: PostBodyDto): {
        frase: string;
        calculo: number;
    };
}
