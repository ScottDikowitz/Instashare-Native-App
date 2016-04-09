import { receivePosts, receiveUserPage, insertComments } from '../api_actions/apiActions';
export function fetchPosts() {
    fetch('http://www.instashare.scottdikowitz.com/api/posts').then((response) =>{
        return response.json();
    }).then((results)=>{
    receivePosts(results);
  });
}

export function createComment(comment) {
        fetch('http://www.instashare.scottdikowitz.com/api/comments', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            comment: comment
          })
        }).then((response)=>{
            if(response.status >= 200 && response.status < 300){
                return response;
            }
            throw {
                badCredentials: response.status == 401,
                unknownError: response.status != 401
            }
        }).then((response)=>{
            return response.json();
        }).then((results)=>{
            insertComments(results);
        });
    }


    export function fetchUser(username) {
        fetch(`http://www.instashare.scottdikowitz.com/api/users/${username}`).then((response) =>{
            return response.json();
        }).then((results)=>{
        receiveUserPage(results);
      });
    }
