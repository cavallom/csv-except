# csv-except

The NPM package that quickly finds and returns differences between CSV files.

- [csv-except](#csv-except)
  - [Installation](#installation)
    - [Package check](#package-check)
  - [Usage](#usage)
    - [exceptLeft](#exceptleft)
    - [exceptRight](#exceptright)
    - [intersect](#intersect)
    - [notintersect](#notintersect)
    - [jesonize](#jesonize)
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

### exceptLeft

Returns rows which are present in **leftFilePath** excluding rows ​​that are also present in **rightFilePath**. So the rows ​​that are only in **leftFilePath**.

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
| leftFilePath | string | true | Path to left local CSV file |
| rightFilePath | string | true | Path to right local CSV file |

```bash
const csvexcept = require('csv-except');
console.log(csvexcept.exceptLeft('path-to-local-csv-file', 'path-to-local-csv-file'));

#output : { array[][] } > rows
```

### exceptRight

Returns rows which are present in **rightFilePath** excluding rows ​​that are also present in **leftFilePath**. So the rows ​​that are only in **rightFilePath**.

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
| leftFilePath | string | true | Path to left local CSV file |
| rightFilePath | string | true | Path to right local CSV file |

```bash
const csvexcept = require('csv-except');
console.log(csvexcept.exceptRight('path-to-local-csv-file', 'path-to-local-csv-file'));

#output : { array[][] } > rows
```

### intersect

Returns rows which are present in both **leftFilePath** and **rightFilePath**.

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
| leftFilePath | string | true | Path to left local CSV file |
| rightFilePath | string | true | Path to right local CSV file |

```bash
const csvexcept = require('csv-except');
console.log(csvexcept.intersect('path-to-local-csv-file', 'path-to-local-csv-file'));

#output : { array[][] } > rows
```

### notintersect

Returns rows in **leftFilePath** which are not present in **rightFilePath** and rows in **rightFilePath** which are not present in **leftFilePath**.

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
| leftFilePath | string | true | Path to left local CSV file |
| rightFilePath | string | true | Path to right local CSV file |

```bash
const csvexcept = require('csv-except');
console.log(csvexcept.notintersect('path-to-local-csv-file', 'path-to-local-csv-file'));

#output : { array[][] } > rows
```

### jesonize

Returns the output array converted to json.

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
| csvArray | Array[][] | true | A queryable csv array loaded with the **memorize** function |
| header | Array of strings | true | Defines the column names of the csv file |

```bash
const csvexcept = require('csv-except');
const header = new Array("Index","Organization Id","Name","Website","Country","Description","Founded","Industry","Number of employees");
console.log(csvexcept.jesonize(exceptLeft|exceptRight|intersect|notintersect, header);

#output : { json } >
#[
#    {
#        "Index": "91",
#        "Organization Id": "7ABc3c7ecA03B34",
#        "Name": "Sampson-Griffith",
#        "Website": "http://hendricks.org/",
#        "Country": "Benin",
#        "Description": "Multi-layered composite paradigm",
#        "Founded": "1972",
#        "Industry": "Textiles",
#        "Number of employees": "3881"
#    },
#    {
#        "Index": "100",
#        "Organization Id": "e9eB5A60Cef8354",
#        "Name": "Watkins-Kaiser",
#        "Website": "http://www.herring.com/",
#        "Country": "Togo",
#        "Description": "Synergistic background access",
#        "Founded": "2009",
#        "Industry": "Financial Services",
#        "Number of employees": "2785"
#    }
#]
```

## Performance considerations

**csv-except** is designed and tested to quickly compare even large csv files with millions of rows and many columns.

## Comma-Separated Values (CSV)

[RCF 4180 directives](https://www.rfc-editor.org/rfc/rfc4180.html)

## License

[MIT](https://opensource.org/blog/license/mit)
