const JSONService = (data = new FormData()) => {
    var object = {};

    data.forEach(function(value, key){
        object[key] = value;
    });

    return object;
}

export default JSONService;