import axios from 'axios';

export const $http = axios.create({
  baseURL: `https://vue-lambda.netlify.com/.netlify/git/github/`,
  headers: {
    Authorization: 'Bearer ' + process.env.GITHUB_TOKEN
  }
})
