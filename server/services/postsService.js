import Post from '../models/Post.js';

export async function createPost(data) {
    const post=new Post(data);
    await post.save()
}

export async function getAllPosts() {
  const posts= await Post.find();
  return posts;
}