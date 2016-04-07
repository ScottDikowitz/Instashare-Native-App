import { receivePosts } from '../api_actions/apiActions';
export function fetchPosts() {
    fetch('http://www.instashare.scottdikowitz.com/api/posts').then((response) =>{
        return response.json();
    }).then((results)=>{
    receivePosts(results);
  });
}
