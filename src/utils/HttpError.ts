class HttpError extends Error {
    statusCode: number;

    constructor(status: number, message: string) {
      super(message);
      this.name = "HttpError"
      this.statusCode = status
    }
  }

  export default HttpError;

  // use it along with Type HttpErrorI from /types
