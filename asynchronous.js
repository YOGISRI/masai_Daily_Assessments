function timer(duration, onComplete) {
    setTimeout(() => {
        let message = `Timer of ${duration} ms finished`;
        onComplete(message); // calling the callback with the message
    }, duration);
}
timer(2000, function(result) {
    console.log(result);
});
