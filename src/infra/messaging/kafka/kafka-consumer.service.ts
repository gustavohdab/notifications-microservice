import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['decent-tetra-9847-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZGVjZW50LXRldHJhLTk4NDckOD0NGE6EmR-ztMDRGfT-T2GsuGUEFcpyMIbBSX4',
          password:
            'M5tYdDXA1OGafz_6ntODrvFLnciLT5kvl5eLKUpcE9TsiKSVrdox4G9HJtD__OISeyPShA==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
