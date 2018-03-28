const low = require('lowdb')

const FileSync = require('lowdb/adapters/FileSync')
let adapter;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV ) {
  adapter= new FileSync('./db.json')
} else {
  adapter= new FileSync('./public/db.json')
}


const db = low(adapter)

// db._.mixin(lodashId)

export function handler(event, context, callback) {
  // console.log('Event: ', event); console.log('Context: ', context);

  const PostsCollection = db.get('posts')
  const PostsArray = PostsCollection.value()

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(PostsArray)
  })
}





// function createPost() {
//   const newPost = PostsCollection.push(
//     { "id": 3, "title": "Post Title 3", "content": "Content for post 3" },
//   ).write();
// }
