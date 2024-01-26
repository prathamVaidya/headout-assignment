import fs from 'fs';
import path from 'path';

// Function to generate random text
const generateRandomText = (size: number): string => {
  let text = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < size; i++) {
      text += characters.charAt(Math.floor(Math.random() * characters.length));

      // Add a line break randomly (1 in 5 chance)
      if (Math.random() < 0.2) {
          text += '\n';
      }
  }

  return text;
};


// Function to generate file with random text data
export const  generateFile = (filename: string, sizeInBytes: number): void => {
    const fileSizeInBytes = sizeInBytes;
    const textChunkSize = 1024; // 1KB chunks

    const directory = path.dirname(filename);

    // Ensure the directory exists
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }

    const fileStream = fs.createWriteStream(filename);

    for (let i = 0; i < fileSizeInBytes; i += textChunkSize) {
        const chunkSize = Math.min(textChunkSize, fileSizeInBytes - i);
        const randomText = generateRandomText(chunkSize);
        fileStream.write(randomText);
    }

    fileStream.end();
}
