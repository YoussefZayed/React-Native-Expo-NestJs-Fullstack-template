import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import { Env } from './core/config/env';
import { INestApplication } from '@nestjs/common';
// import { healthContract } from './health/health.contract';
// import { generateOpenApi } from '@ts-rest/open-api';

function setupSwagger(app: INestApplication): void {
  // For ideal Swagger documentation with ts-rest, install '@ts-rest/open-api'
  // and uncomment the lines above and the replacement for this function body.
  // pnpm add @ts-rest/open-api
  /*
  const openApiDocument = generateOpenApi(
    healthContract,
    {
      info: {
        title: 'API',
        version: '1.0.0',
      },
    },
    { setOperationId: true },
  );
  SwaggerModule.setup('api', app, openApiDocument);
  */

  const config = new DocumentBuilder()
    .setTitle('API')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
}


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  app.useLogger(app.get(Logger));

  const configService = app.get<ConfigService<Env, true>>(ConfigService);
  const port = configService.get('PORT');

  setupSwagger(app);

  app.enableShutdownHooks();

  await app.listen(port);
}
bootstrap();
