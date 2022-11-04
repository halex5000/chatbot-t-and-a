# Quick Run Down of how to get started

it's here: https://chatbot.letsgobuild.dev/

## Prereqs

- Node 16-18 installed
- `git clone` the repo
- `npm install` in the project root
- `npm run dev` to run the project
- `http://localhost:5173` site is running



## How it works so far

Hit send adds a message to the queue

Bot always responds the same

Float is working well, but the alignment of messages isn't quite right yet

LaunchDarkly SDK is installed, but not wired in

Same with our API call to the Chatbot API

we'll put the keys for both in the ENV file, but not commit that file, it's gitignored



## Tools we're using:

- XO: https://github.com/xojs/xo - linting
- Husky: https://typicode.github.io/husky/ - git hooks
- Mantine: https://mantine.dev/ - component lib
- Vite: https://vitejs.dev/ - build and bundle
- Axios: https://axios-http.com/docs/intro - http requests (not using yet, but installed)

