import { MidwayError } from '@midwayjs/core';

export class NewsError extends MidwayError {
  constructor(err?: Error) {
    super('news data is empty', {
      cause: err,
    });
    if (err?.stack) {
      this.stack = err.stack;
    }
  }
}
