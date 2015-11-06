## oracledb not closing connections?
reference: https://github.com/oracle/node-oracledb/issues/271

**Steps**

1. `$ npm install`
2. `$ npm start`
3. visit `http://localhost:3000`, see "Hello World"
4. Terminate process using CTRL+C

**Expected**

Process terminates

**Actual**

Usage of `lsof -i :3000` indicates that the process did not terminate and node is still running in the background


