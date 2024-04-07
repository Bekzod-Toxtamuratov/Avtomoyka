import { Module } from '@nestjs/common';

import { BotModule } from './modules/bot/bot.module';
import { ClientModule } from './modules/client/client.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotName } from './app.constants';
@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: BotName,
      useFactory: () => ({
        token: '6313671284:AAE0VuuQB5vee2ZHV4Ubu83Gc9fddVYQw44',
        middlewares: [],
        include: [BotModule],
      }),
    }),
    BotModule,
    ClientModule,
  ],
})
export class AppModule {}
