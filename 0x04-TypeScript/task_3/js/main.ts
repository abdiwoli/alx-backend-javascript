#!/usr/bin/node
/// <reference path="./crud.d.ts" />
import {RowID, RowElement} from './interface'
import * as CRUD from './crud.js';


const row:RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
}


const newRowID:RowID = CRUD.insertRow(row);


CRUD.updateRow(newRowID, row);
CRUD.deleteRow(newRowID);
