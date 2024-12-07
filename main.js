const ModelCompact = require("./model").CompactModelProxy;

class Test extends ModelCompact{}
const child = new Test();
console.log(child.currentModelDefaut());
//module.exports.add = ModelCompact;