const envKey = process.env.NODE_BUILD_ENV || process.env.NODE_ENV;


// TODO: make browserLog
class BrowserLogger {
  constructor(environment: string) {
    this.environment = environment;
  }

  log(message) {
    switch (this.environment) {
      case 'test': {
        break;
      } case 'production': {
        break;
      } default: {
        console.log(message); // eslint-disable-line
      }
    }
  }

  error(message) {
    switch (envKey) {
      case 'test': {
        break;
      } case 'production': {
        break;
      } default: {
        console.error(message); // eslint-disable-line
      }
    }
  }

  debug(message) {
    switch (envKey) {
      case 'test': {
        break;
      } case 'production': {
        break;
      } default: {
        console.log(message); // eslint-disable-line
      }
    }
  }
}

export default BrowserLogger;
