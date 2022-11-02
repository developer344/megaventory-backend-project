import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app/app.module';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  await app.listen(8000);
}
bootstrap();


// `sudo apt-get install wget libnss3-tools -y`

// `wget https://github.com/FiloSottile/mkcert/releases/download/v1.4.3/mkcert-v1.4.3-linux-amd64`

// `sudo mv mkcert-v1.4.3-linux-amd64 /usr/bin/mkcert`

// `sudo chmod +x /usr/bin/mkcert`

// `mkcert -install`
