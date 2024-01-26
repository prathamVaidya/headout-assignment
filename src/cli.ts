import { program } from "commander"
import { generateFile } from "./seeders/file.seeder.js"

program
.command('seed')
.description('Generate a file with specified size')
.option('-s, --size <size>', 'Specify the file size in bytes')
.option('-n, --total <total>', 'Total files to create')
.action((cmd) => {
  if (!cmd.size) {
    console.error('Error: Size parameter is required');
    process.exit(1);
  }

  const fileSize = parseInt(cmd.size);
  const total = parseInt(cmd.total ?? 1);

  // generate n files from user input
  for(let i=1; i <= total; i++){
    generateFile(`tmp/data/${i}.txt`, fileSize);
  }

});

program.parse(process.argv);

// Display help if no arguments are provided
if (process.argv.length < 3) {
  program.help();
}
