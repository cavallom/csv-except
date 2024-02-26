
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

jesonize = function(csvArray, header) {

    // JSON output
    const csvArrayToJson = (rows) => {  
        return rows.reduce((jsonArray, row) => {
            const item = row.reduce((item, value, index) => {
            return {...item, [header[index]]: value};
            }, {});
            return jsonArray.concat(item);
        }, []);
    };
    
    const csvJsonArray = csvArrayToJson(csvArray);

    return JSON.stringify(csvJsonArray);
    
}

load = function(leftFilePath, rightFilePath) {

    const start = Date.now();

    try {

        let files = new Array(leftFilePath, rightFilePath);
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

exceptLeft = function(leftFilePath, rightFilePath) {

    const start = Date.now();

    try {

        let filesarray = new Array();

        filesarray = load(leftFilePath, rightFilePath);
    
        let _exceptLeft = filesarray[1].filter(x => !filesarray[0].includes(x));
    
        let returnarray = new Array();
    
        _exceptLeft.forEach(element => {
            returnarray.push(element.replace('\r','').split(','))
        });
        
        return returnarray;    

    } catch (error) {
        
        const end = Date.now();

        throw new csv_except_Error(
            'exceptLeft'
            , `${(end - start)}ms.`
            , error.message);

    }
}

exceptRight = function(leftFilePath, rightFilePath) {

    const start = Date.now();

    try {

        let filesarray = new Array();

        filesarray = load(leftFilePath, rightFilePath);
    
        let _exceptRight = filesarray[0].filter(x => !filesarray[1].includes(x));
    
        let returnarray = new Array();
    
        _exceptRight.forEach(element => {
            returnarray.push(element.replace('\r','').split(','))
        });
        
        return returnarray;    

    } catch (error) {
        
        const end = Date.now();

        throw new csv_except_Error(
            'exceptRight'
            , `${(end - start)}ms.`
            , error.message);

    }
}

intersect = function(leftFilePath, rightFilePath) {

    const start = Date.now();

    try {

        let filesarray = new Array();

        filesarray = load(leftFilePath, rightFilePath);
    
        let _intersect = filesarray[0].filter(x => filesarray[1].includes(x));
    
        let returnarray = new Array();
    
        _intersect.forEach(element => {
            returnarray.push(element.replace('\r','').split(','))
        });
        
        return returnarray;    

    } catch (error) {
        
        const end = Date.now();

        throw new csv_except_Error(
            'intersect'
            , `${(end - start)}ms.`
            , error.message);

    }
}

notintersect = function(leftFilePath, rightFilePath) {

    const start = Date.now();

    try {

        let filesarray = new Array();

        filesarray = load(leftFilePath, rightFilePath);
    
        let _notintersect = filesarray[0].filter(x => !filesarray[1].includes(x))
                        .concat(filesarray[1].filter(x => !filesarray[0].includes(x)));
    
        let returnarray = new Array();
    
        _notintersect.forEach(element => {
            returnarray.push(element.replace('\r','').split(','))
        });
        
        return returnarray;    

    } catch (error) {
        
        const end = Date.now();

        throw new csv_except_Error(
            'notintersect'
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

module.exports = { itWorks, jesonize, exceptLeft, exceptRight, intersect, notintersect };