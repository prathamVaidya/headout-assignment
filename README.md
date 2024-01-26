# Headout File Server Assignment
### By Pratham Vaidya

## Installation

Before getting started, ensure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from [https://nodejs.org/](https://nodejs.org/).

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

2. Install dependencies:

```bash
npm install
```

or

```bash
yarn install
```

## Build

To build the project, run:

```bash
npm run build
```

or

```bash
yarn build
```

## Seed Data

Generate dummy files for testing purposes. This command will create 5 dummy files, each of 100MB (configurable) by default. The process takes approximately 30 seconds.

```bash
npm run seed
```

or

```bash
yarn seed
```

### Seed Command Options:

- `-s, --size`: Specify the file size in bytes.
- `-n, --total`: Specify the total number of files to generate.

Example:

```bash
npm run seed -s 200000000 -n 10
```

This will generate 10 dummy files, each of 200MB.

## Running the Server

To start the server, use the following command:

```bash
npm run start
```

or

```bash
yarn start
```

## CLI (Command Line Interface)

To access the CLI, run:

```bash
npm run cli
```

or

```bash
yarn cli
```

### Supported Commands:

- **Seed:**

  Generate dummy files via the command line.

  **Parameters:**

  - `-s, --size`: Specify the file size in bytes.
  - `-n, --total`: Specify the total number of files to generate.

  Example:

  ```bash
  npm run cli seed -s 200000000 -n 10
  ```

  This will generate 10 dummy files, each of 200MB.

### Optimization

  ### File Reading in Stream
  The file is input in stream in chunks.

  ### Writing Server Response as Stream
  The server responses with the stream of byte chunks that are piped from the file stream. 

  #### Memory Restriction
  To achieve the Docker container size should allocate maximum of 1500 MB RAM and 2000m/2 Core CPU.

  The restriction is added to package.json start command

  ```
"start": "node build/src/main.js --max-old-space-size=1500 --cpu-shares=1024",
  ```

 
### Todo

 - Converting file generating function to async,  we can generate files parallelly decreasing the seed time.
