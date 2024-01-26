import { fileExists, getFileStream, getFileStreamByLineNumber } from "../services/file.service.js";
import { RequestI, ResponseI } from "../types/index.js";
import HttpError from "../utils/HttpError.js";

const FileController = async (req: RequestI, res: ResponseI): Promise<void> => {
  // Extract query parameters
  const fileName = req.query.n;
  const lineNumber = req.query.m ? parseInt(req.query.m) : null;

  if(!fileName || !fileName.trim()){
      throw new HttpError(400, "n is required parameter");
  }

  // Todo: Check any side cases validations

  const filePath = `tmp/data/${fileName}.txt`

  if(!await fileExists(filePath)){
    throw new HttpError(400, "n is invalid. No file found with name " + fileName);
  }

  // Line Number Content Only
  if(lineNumber){
    const fileStream = getFileStreamByLineNumber(filePath, lineNumber);
    fileStream.pipe(res)
    fileStream.on('error', (err) => {
      console.error('Error reading file:', err);
      // throw new HttpError(500, "Internal Server Error: Unable to Read file")
    });

    return;
  }

  // Whole File Content
  const fileStream = getFileStream(filePath);
  fileStream.pipe(res)
  fileStream.on('error', (err) => {
    console.error('Error reading file:', err);
    // throw new HttpError(500, "Internal Server Error: Unable to Read file")
  });
};

export default FileController;
