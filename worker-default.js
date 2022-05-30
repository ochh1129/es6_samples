onmessage = (e) => {
    console.warn('get data from main');

    const result = e.data[0] + e.data[1];
    console.warn('send to main');
    postMessage(result);
}