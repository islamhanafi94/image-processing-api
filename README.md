# image-processing-api

This is a simple image resizing API using Nodejs/TS as part of Udacity's Advanced Full stack web development nanodegree.

## Running The Server

- Clone the project repo and `cd` to backend directory
- `npm install`
- Add `.env` file containing your environment variables like `.example.env` if needed
- Run the server `npm start`

### Testing

```bash
npm run test
```

### Linting

```
npm run lint

// or

npm run lint:fix
```

### Formatting

```
npm run format
```

### Usage

### Image API 

`GET` `/api/images`

valid options (As query strings)

- fileName=fjord&width=123&height=333
- width
- height

Example of a valid request : `/api/images?fileName=fjord&width=123&height=333`

