import axios from "axios";
import {PostsInterface} from "../interfaces/interfaces";

export default class PostService {
  static url = 'https://jsonplaceholder.typicode.com/posts';

  // static async getAll() {
  //   return await axios.get<PostsInterface[]>(this.url);
  // }

  static async queryPosts(limit = 10, page = 1) {
    try {
      return await axios.get<PostsInterface[]>(this.url, {
        params: {
          _limit: limit,
          _page: page
        }
      });
    } catch (e) {
      console.error(e);
    }
  }

  // export async function getStaticProps() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const users    = await response.json();
  //
  //   return {
  //     props: {users},
  //   }
  // }

  // static async queryPostById(id) {
  //   return await axios.get(this.url + `/${id}`);
  // }
  //
  // static async queryCommentsById(id) {
  //   return await axios.get(this.url + `/${id}/comments`);
  // }
}