## Table of Contents

- [Table of Contents](#table-of-contents)
- [About ](#about-)
- [Getting Started ](#getting-started-)
	- [Installing](#installing)
- [Usage ](#usage-)

## About <a name = "about"></a>

This is a simple project to upload files to a page and return a JSON object with the file name, file type and the file size.

## Getting Started <a name = "getting_started"></a>

To get started simply clone the repo and run the following commands:

```npm run dev-start```

This will start a nodemon server on port 3000.

### Installing

Installation is simple, just run npm install and you are good to go.

```npm install```

## Usage <a name = "usage"></a>

There is just the one endpoint that you can use to upload a file `/`.

The endpoint accepts a `POST` request with a `upfile` field containing a file.

The response will be a JSON object with the following fields:

- `name` - The name of the file
- `type` - The type of the file
- `size` - The size of the file in bytes

**Please note that files are stored in memory on the server and are not persisted!**