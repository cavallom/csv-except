
const fs = require('node:fs');
const pjson = require('./package.json');


itWorks = function() {
    
    const start = Date.now();

    try{
        
        return JSON.stringify({"itWorks": "Yes, it works!"
        , "package": pjson.name
        , "version": pjson.version
        });

    } catch (error) {
        
        const end = Date.now();

        throw new csv_except_Error(
            'itWorks'
            , `${(end - start)}ms.`
            , error.message);

    }

}

csv_except_Error = function(routine = "", executiontime = "", message = "") { 
    
    this.routine = routine;
    this.executiontime = executiontime; 
    this.message = message; 
    this.name = "csv_except_Error";

} 
csv_except_Error.prototype = Error.prototype;

module.exports = { itWorks };