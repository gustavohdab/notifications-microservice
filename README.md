## Notification Microservice-based on NestJS

### About the project

This is an notification microservice based Microservice Architecture with NestJS. It uses NodeJS, so you need to have NodeJS installed on your machine. Also used and recommend [Insomnia](https://insomnia.rest/download) to test the API endpoints.

### Some information about the project

- Project uses [NestJS](https://nestjs.com/) as framework
- Project uses [NodeJS](https://nodejs.org/en/) as runtime environment
- Project uses [TypeScript](https://www.typescriptlang.org/) as language
- Project uses [Prisma](https://www.prisma.io/) as ORM
- Project uses [KafkaJS](https://kafka.js.org/) as consumer and producer

### Some of the features

- [x] Create a notification
- [x] Read a notification
- [x] Unread a notification
- [x] Cancel a notification
- [x] Get all notifications from recipient
- [x] Count all notifications from recipient

OBS: The project was for knowledge consolidation, so some features may not be available. Also, some features may be changed in the future. Feel free to contribute to the project or use it as a base for your own project.

### How to run and test the project

- Clone this repository
- Run `npm install` to install all dependencies
- Run `npm run start:dev` to start the server in development mode
- Run `npm run test` to run the tests / `npm run test:watch` to run the tests in watch mode
- If you want to run the project in production mode, run `npm run build` and then `npm run start:prod`
- Use [Insomnia](https://insomnia.rest/download) or another one that you usually do, to test the API endpoints
- Use KafkaJS to test the message broker

### Kafka-Producer

- I also created a new folder just typed `npm init` and then `npm install kafkajs` and then I created a file called `producer.js`. In this file I created a producer following the documentation of KafkaJS. Then just run `node producer.js` and you can see the messages in the terminal where the project is running like an Consumer.

---

Made with ♥ by Gustavo Batista :wave: [LinkedIn](https://www.linkedin.com/in/gustavo-h-batista/) e [GitHub](https://github.com/gustavohdab)
