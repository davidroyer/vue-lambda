import axios from 'axios';

export const $http = axios.create({
  baseURL: `https://vue-lambda.netlify.com/.netlify/git/github/`,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjIxOTQzMjYsInN1YiI6Ijg0ODBkYmQ5LTUwMTYtNDAwNC1hNmU3LTBhMWNiNDJlZjIyNyIsImVtYWlsIjoiZHJveWVyMDFAZ21haWwuY29tIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZ2l0aHViIn0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vYXZhdGFyczMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvODgzNDY5Mz92PTQiLCJmdWxsX25hbWUiOiJEYXZpZCBSb3llciJ9fQ.-CDgiVvgDlJFq7Urz4I5bAt167GXDJygMXFXCpv_8hg'
  }
})
