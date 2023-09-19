// File: sophisticated_code.js

// This code showcases a complex implementation of a social media application
// It includes features like user registration, login, posting, following, and comment functionality

// Data Models
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.following = [];
    this.followers = [];
  }

  createPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
  }

  follow(user) {
    this.following.push(user);
    user.followers.push(this);
  }
}

class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;
    this.comments = [];
  }

  addComment(author, content) {
    const comment = new Comment(author, content);
    this.comments.push(comment);
  }
}

class Comment {
  constructor(author, content) {
    this.author = author;
    this.content = content;
  }
}

// Application
const users = [];

function registerUser(name, email, password) {
  const user = new User(name, email, password);
  users.push(user);
  console.log(`User ${user.name} registered successfully!`);
}

function loginUser(email, password) {
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    console.log(`User ${user.name} logged in successfully!`);
    return user;
  } else {
    console.log(`Invalid email or password. Please try again.`);
    return null;
  }
}

function postContent(user, content) {
  user.createPost(content);
  console.log(`User ${user.name} posted: ${content}`);
}

function followUser(user, userToFollow) {
  user.follow(userToFollow);
  console.log(`User ${user.name} is now following ${userToFollow.name}`);
}

function addCommentToPost(user, post, content) {
  post.addComment(user, content);
  console.log(`User ${user.name} commented on a post: ${content}`);
}

// Example Usage

registerUser('John Doe', 'johndoe@example.com', 'password123');
registerUser('Jane Smith', 'janesmith@example.com', 'abcd1234');

const john = loginUser('johndoe@example.com', 'password123');
const jane = loginUser('janesmith@example.com', 'abcd1234');

postContent(john, 'Hello world!');
postContent(jane, 'Amazing photo!');
followUser(john, jane);
addCommentToPost(jane, john.posts[0], 'Nice post!');

console.log(john);
console.log(jane);
