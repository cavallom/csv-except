
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

load = function(previousFilePath, currentFilePath) {

    const start = Date.now();

    try {

        let files = new Array(previousFilePath, currentFilePath);
        let filesName = new Array();
        let filesarray = new Array();
    
        files.forEach(file => {
            
            filesName.push(file);
    
            const readFileLines = filename =>
            fs
            .readFileSync(filename)
            .toString('UTF8')
            .split('\n');
    
            filesarray.push(readFileLines(file));
    
        });

        return filesarray;

    } catch (error) {
        
        const end = Date.now();

        throw new csv_except_Error(
            'load'
            , `${(end - start)}ms.`
            , error.message);

    }
}

intersection = function(previousFilePath, currentFilePath) {

    const start = Date.now();

    try {

        let filesarray = new Array();

        filesarray = load(previousFilePath, currentFilePath);
    
        let intersection = filesarray[0].filter(x => filesarray[1].includes(x));
    
        let returnarray = new Array();
    
        intersection.forEach(element => {
            returnarray.push(element.replace('\r','').split(','))
        });
        
        return returnarray;    

    } catch (error) {
        
        const end = Date.now();

        throw new csv_except_Error(
            'intersection'
            , `${(end - start)}ms.`
            , error.message);

    }
}

except = function(previousFilePath, currentFilePath) {

    const start = Date.now();

    try {

        let filesarray = new Array();

        filesarray = load(previousFilePath, currentFilePath);
    
        let difference = filesarray[0].filter(x => !filesarray[1].includes(x));
    
        let returnarray = new Array();
    
        difference.forEach(element => {
            returnarray.push(element.replace('\r','').split(','))
        });
        
        return returnarray;    

    } catch (error) {
        
        const end = Date.now();

        throw new csv_except_Error(
            'except'
            , `${(end - start)}ms.`
            , error.message);

    }
}

symDifference = function(previousFilePath, currentFilePath) {

    const start = Date.now();

    try {

        let filesarray = new Array();

        filesarray = load(previousFilePath, currentFilePath);
    
        let symDifference = filesarray[0].filter(x => !filesarray[1].includes(x))
                        .concat(filesarray[1].filter(x => !filesarray[0].includes(x)));
    
        let returnarray = new Array();
    
        symDifference.forEach(element => {
            returnarray.push(element.replace('\r','').split(','))
        });
        
        return returnarray;    

    } catch (error) {
        
        const end = Date.now();

        throw new csv_except_Error(
            'symDifference'
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

module.exports = { itWorks, intersection, except, symDifference };