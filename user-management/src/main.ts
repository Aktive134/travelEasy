import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  // Create microservice
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://kddurojm:nqhPv2jn1py1xsCD_r54MN0P98yhEK3Q@octopus.rmq3.cloudamqp.com/kddurojm'],
      queue: 'users_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  // Start microservice
  await app.listen();
  console.log('user-microservice is listening');
}

bootstrap();
