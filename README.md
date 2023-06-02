# React Boostrap Application
This React application provides a bootstrap using the tools below. It's not intended as an architecture blueprint, but as a project that provides several useful tools and how to use them in your React app.

* [Apollo Client](https://www.apollographql.com/docs/react/)
* [Axios](https://axios-http.com/)
* [Cypress](https://www.cypress.io/)
* [Docker](https://www.docker.com/)
* [Emotion](https://emotion.sh/docs/introduction)
* [Use-Immer](https://github.com/immerjs/use-immer)
* [Formik](https://formik.org/)
* [GraphQL](https://graphql.org/)
* [Hooks](https://react.dev/reference/react)
* [Jest](https://jestjs.io/)
* [Lottie animations](https://lottiefiles.com/)
* [Luxon](https://moment.github.io/luxon/#/)
* [MUI](https://mui.com/)
* [react-i18next](https://react.i18next.com/)
* [Redux](https://react-redux.js.org/)
* [SASS](https://sass-lang.com/)
* [SWC](https://swc.rs/)
* [TailWindCSS](https://tailwindcss.com/)
* [Typescript](https://www.typescriptlang.org/)
* [Urql](https://formidable.com/open-source/urql/)
* [Vite](https://vitejs.dev/)
* [Vitest](https://vitest.dev/)
* [Yup](https://github.com/jquense/yup)
* Others... 

# Docker
In case you want to use Docker, you can create the docker image and test it by executing the following commands from the root folder:
```bash
docker build -t mydockeraccount/my-react-app:latest .
docker run -p 80:80 -d --name myapp --restart always mydockeraccount/my-react-app:latest
```
## Docker Hub
Publish the image into your docker hub account, by executing the following commands:
```bash
docker login
docker push mydockeraccount/my-react-app:latest
```

# Github Actions

There is a workflow defined [here](./.github/workflows/docker-image.yml) to create a docker image. 

Enjoy! :heart:

