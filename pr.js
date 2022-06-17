
// here we will be moving from callback to promises and then see some consitions like promise.all
// and promise.race
function watchTutorialCallback(callback, errorCallback) {
    let userLeft = true
    let userWatchingCatMeme = true
  
    if (userLeft) {
      errorCallback({
        name: 'hi', 
        message: ');'
      })
    } else if (userWatchingCatMeme) {
      errorCallback({
        name: 'fu',
        message: 'go back' 
      })
    } else {
      callback('actual call here')
    }
  }
  
  function watchTutorialPromise() {
    let userLeft = false
    let userWatchingCatMeme = false
    return new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: 'hi', 
          message: ');'
        })
      } else if (userWatchingCatMeme) {
        reject({
          name: 'fu',
          message: 'go back' 
        })
      } else {
        resolve('actual call here')
      }
    })
  }
  
  watchTutorialCallback(message => {
    console.log(message)
  }, error => {
    console.log(error.name + ' ' + error.message)
  })
  
  watchTutorialPromise().then(message => {
    console.log(message)
  }).catch(error => {
    console.log(error.name + ' ' + error.message)
  })
  
  const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
  })
  
  const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
  })
  
  const recordVideoThree = new Promise((resolve, reject) => {
    reject('Video 3 not Recorded')
  })
  

  Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(message => {
    console.log(message)
  }).catch(message =>{
    console.log(message);
  } )

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree.catch(error => {return error}),
  ]).then(messages => {
    console.log(messages)
  }).catch(messages => {
    console.log(messages);
  })