import { Controller, Get, Post, Body, Param, ParseFloatPipe } from '@nestjs/common';
import { PostBodyDto } from './dto/post-body.dto';

@Controller()
export class AppController {

  // 1. GET / -> Devuelve Nombre y Apellido
  @Get()
  getNombreApellido() {
    return {
      nombre: 'Adán',    
      apellido: 'Godoy', 
    };
  }

  // 2. GET /:number -> Devuelve ((number+5)*2)
  // ParseFloatPipe asegura que sea número. Si envían /hola, devuelve error 400 (no 500).
  @Get(':number')
  getCalculo(@Param('number', ParseFloatPipe) numero: number) {
    const resultado = (numero + 5) * 2;
    return {
      resultado: resultado,
    };
  }

  // 3. POST / -> Recibe JSON y devuelve frase y calculo
  @Post()
  postDatos(@Body() body: PostBodyDto) {
    const calculo = body.edad / body.n;
    const frase = `Hola ${body.nombre}, tu edad dividida por el número ingresado es igual a ${calculo}`;
    
    return {
      frase: frase,
      calculo: calculo,
    };
  }
}
