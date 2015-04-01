
function getUniqueId() {

    var nextId = 0;

    return function() {
        return nextId++;
    }
}

module.exports = {
    getId: getUniqueId()
};
