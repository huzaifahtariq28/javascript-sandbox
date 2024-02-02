class Post {
  constructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.isLive = false;
    this.views = 0;
    this.comments = [];
  }
}

const blogPost = new Post('Post 1', 'Body of Post 1', 'Author of Post 1');

console.log(blogPost);
