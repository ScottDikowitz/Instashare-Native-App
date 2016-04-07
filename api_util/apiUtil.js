import { receivePosts } from '../api_actions/apiActions';
export function fetchPosts() {
    debugger;
    fetch('http://www.instashare.scottdikowitz.com/api/posts').then((response) =>{
        return response.json();
    }).then((results)=>{
    //   this.setState({posts: results, stickyHeaderIndices:[0]});
    receivePosts(results);
  });
}
