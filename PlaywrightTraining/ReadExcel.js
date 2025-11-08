'use strict';
const excelToJson = require('convert-excel-to-json');

const result = excelToJson({
    sourceFile: './DemoBook.xlsx'
});

console.log(result);