import * as fs from 'fs';
import * as readline from 'readline';
import { Readable } from 'stream';

export const fileExists = async (filePath: string): Promise<boolean> => {
  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

export const getFileStream = (filePath: string): fs.ReadStream | null => {
  try {
    const stream = fs.createReadStream(filePath);
    return stream;
  } catch (error) {
    console.error('Error creating file stream:', error);
    return null;
  }
};


export const getFileStreamByLineNumber = (filePath: string, lineNumber: number): null | Readable => {
  try {
    const stream = getFileStream(filePath);

    if (!stream) {
      return null;
    }

    const rl = readline.createInterface({
      input: stream,
      crlfDelay: Infinity,
    });

    let currentLineNumber = 1;

    // Readable stream for characters in the specified line number
    const charStream = new Readable({
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      read() {
      },
    });

    // Listen for the 'line' event and push each character

    let lineFound = false;

    rl.on('line', (line) => {
      if (currentLineNumber === lineNumber) {
        lineFound = true;
        charStream.push(line + '\n');
        rl.close();
      }

      currentLineNumber++;
    });

    rl.on('close', () => {
      charStream.push(null); // End the stream in both cases (line exists or not)
      stream.close();
      if(!lineFound){
        charStream.emit("LineNotFound");
      }
    });

    return charStream;
  } catch (error) {
    console.error('Error creating char stream:', error);
    return null;
  }
};

