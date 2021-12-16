class NetworkError extends Error {
    constructor(message) {
      super(message);
      this.name = 'NetworkError';
    }
}

function fetchingUserFromInternet(isOffline){
    return new Promise((resolve,reject) => {
          if (!isOffline){
              resolve({ name: 'John', age: 18 })
          }else{
              reject(new NetworkError('Fail get data from internet'))
          }
      })
}
  
async function gettingUserName(){
    try{
          const user = await fetchingUserFromInternet(false);
          return user.name
    }catch(e){
          return e.message
    }
}
gettingUserName()