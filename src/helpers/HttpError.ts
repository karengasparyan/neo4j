export default class HttpError extends Error {
  status: number;
  messages?: object;
  constructor(props: {status: number, message: string, messages?: object}) {
    super()
    const {status, message, messages} = props;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError)
    }
    this.status = status;
    this.message = JSON.stringify({message, messages});
    this.name = 'Http error';
  }
}
