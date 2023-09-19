interface Logger {
  log(str: string): void,
}

class ConsoleLogger implements Logger {
  public log(str: string): void {
    console.log(`1- ${str}`)
  }
}

class ConsoleLogger2 implements Logger {
  public log(str: string): void {
    console.log(`2- ${str}`)
  }
}

interface Database {
  logger: Logger,
  save(key: string, value: string): void,
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  public save(key: string, value: string) {
    this.logger.log(`${key}: ${value}`)
  }
}

const logger1 = new ConsoleLogger()
const logger2 = new ConsoleLogger2()

const database1 = new ExampleDatabase(logger1)
const database2 = new ExampleDatabase(logger2)
const database3 = new ExampleDatabase()

database1.save('batata', 'doce')
database2.save('chocolate', 'amargo')
database3.save('frango', 'grelhado')
