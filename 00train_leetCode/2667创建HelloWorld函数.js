/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

    console.log(createHelloWorld()()); 

    // const f = createHelloWorld();
    // console.log(f());   // "Hello World"
