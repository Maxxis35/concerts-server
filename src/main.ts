import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({credentials: true, origin: true});
  app.use(cookieParser());

  const config = new DocumentBuilder()
      .setTitle('Concerts server API')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    }
  });

  await app.listen(process.env.PORT || 5000, ()=> console.log(`Server started on port:${process.env.PORT}`));
}
bootstrap();
