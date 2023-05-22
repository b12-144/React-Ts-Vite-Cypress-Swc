# React Boostrap Application
This React application provides a bootstrap using:

* [Typescript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [Vitest](https://vitest.dev/)
* [Jest](https://jestjs.io/)
* [SWC](https://swc.rs/)
* [Cypress](https://www.cypress.io/)
* [Docker](https://www.docker.com/)
* [TailWindCSS](https://tailwindcss.com/)
* [GraphQL](https://graphql.org/)
* [Hooks](https://react.dev/reference/react)
* [Lottie animations](https://lottiefiles.com/)
* [Redux](https://react-redux.js.org/)
* [SASS](https://sass-lang.com/)
* [Formik](https://formik.org/)
* [Axios](https://axios-http.com/)
* [Urql](https://formidable.com/open-source/urql/)
* [Emotion](https://emotion.sh/docs/introduction)
* [Yup](https://github.com/jquense/yup)
* [react-i18next](https://react.i18next.com/)
* [Apollo Client](https://www.apollographql.com/docs/react/)
* [Luxon](https://moment.github.io/luxon/#/)
* [MUI](https://mui.com/)
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

