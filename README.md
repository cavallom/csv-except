# csv-except

The NPM package that quickly finds and returns differences between CSV files.

- [csv-except](#csv-except)
  - [Installation](#installation)
    - [Package check](#package-check)
  - [Usage](#usage)
    - [intersection](#intersection)
    - [difference](#difference)
    - [symDifference](#symdifference)
  - [Performance considerations](#performance-considerations)
  - [Comma-Separated Values (CSV)](#comma-separated-values-csv)
  - [License](#license)

## Installation

You can install this package via npm.

```bash
npm i csv-except
```

### Package check

Just to check the success of the installation, also returns basic package information.

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
|  |  |  | No parameters are required |

```bash
const csvexcept = require('csv-except');
console.log(csvexcept.itWorks());

#output : { json } > {
#    "itWorks": "Yes, it works!",
#    "package": "csv-except",
#    "version": "1.0.2"
#}
```

## Usage

### intersection

Returns values which are present in both two files compared.

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
| previousFilePath | string | true | Path to previous local CSV file |
| currentFilePath | string | true | Path to current local CSV file |

```bash
const csvexcept = require('csv-except');
console.log(csvexcept.booleanValidation('path-to-local-csv-file'));

#output : { bool } > true | false
```

### difference

Returns values ​​present only in the previous file.

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
| previousFilePath | string | true | Path to previous local CSV file |
| currentFilePath | string | true | Path to current local CSV file |

```bash
const csvexcept = require('csv-except');
console.log(csvexcept.jsonValidation('path-to-local-csv-file'));

#output { json } > successful validation: {
#    "csvFile": "path-to-local-csv-file",
#    "executiontime": "5496ms.",
#    "rowsCount": 1000001,
#    "columns": 9,
#    "badRowsLines": [],
#    "result": true,
#    "message": ""
#}

#output { json } > failed validation: {
#    "csvFile": "path-to-local-csv-file",
#    "executiontime": "4817ms.",
#    "rowsCount": 1000001,
#    "columns": 9,
#    "badRowsLines": [
#        394579,
#        941245
#    ],
#    "result": false,
#    "message": ""
#}

#output { json } > failed no such file: {
#    "csvFile": "path-to-local-csv-file",
#    "executiontime": "1ms.",
#    "rowsCount": null,
#    "columns": null,
#    "badRowsLines": null,
#    "result": false,
#    "message": "ENOENT: no such file or directory, open 'path-to-csv-file'"
#}
```

### symDifference

Returns rows that are only in previous CSV file or current, but not both ("exclusive or").

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
| previousFilePath | string | true | Path to previous local CSV file |
| currentFilePath | string | true | Path to current local CSV file |

```bash
# call example
# package inclusion
const csvexcept = require("csv-except");
# definition of parameters
const csvFile = 'path-to-local-csv-file';
const csvDelimiter = ','
const ignoreEmptyRows = true;
# call to the csv file reading function
let load = csvexcept.memorize(csvFile, csvDelimiter, ignoreEmptyRows);

#output : queryable csv array
```

## Performance considerations

**csv-except** is designed and tested to quickly compare even large csv files with millions of rows and many columns.

## Comma-Separated Values (CSV)

[RCF 4180 directives](https://www.rfc-editor.org/rfc/rfc4180.html)

## License

[MIT](https://opensource.org/blog/license/mit)
