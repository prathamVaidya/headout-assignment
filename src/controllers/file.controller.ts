import { RequestI, ResponseI } from "../types/index.js";
import HttpError from "../utils/HttpError.js";

const FileController = (req: RequestI, res: ResponseI): void => {
  // Extract query parameters
  const queryParams = new URL(req.url).searchParams;
  const fileName = queryParams.get('m');
  const lineNumber = queryParams.get('n');

  if(!fileName || !fileName.trim()){
      throw new HttpError(500, "m is required parameter");
  }

  // You can now use m and n as needed
  console.log('Query Parameter m:', fileName);
  console.log('Query Parameter n:', lineNumber);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('File Found');
};

export default FileController;
