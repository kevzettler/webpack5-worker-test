const worker = new Worker(new URL('./server.worker', import.meta.url));

worker.addEventListener('message', (event) => {
  console.log('from worker...', event);
});
