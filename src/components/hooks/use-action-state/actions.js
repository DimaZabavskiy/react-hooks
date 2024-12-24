export const sendData = (prevState, queryData) => {
  console.log({prevState, queryData});
  const value = queryData.get('useActionStateInput');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve({
          status: 'success',
          message: 'SUCCESS',
        })
      } else {
        resolve({
          status: 'error',
          message: 'ERROR',
        })
      }
    }, 3000)
  })
}