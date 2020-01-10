import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

import Customer from './Compnents/Customer';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
  'id': 1,
  'img': 'https://placeimg.com/64/64/1',
  'name': '홍귈동',
  'birth': '950503',
  'gender': '남자',
  'job': '대학생'},
  {
  'id': 2,
  'img': 'https://placeimg.com/64/64/2',
  'name': '고길동',
  'birth': '610205',
  'gender': '남자',
  'job': '백수'},
  {
    'id': 3,
    'img': 'https://placeimg.com/64/64/3',
    'name': '이정민',
    'birth': '960122',
    'gender': '남자',
    'job': '휴학생'}
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return(
      <Paper className={classes.root}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello Again, React! hoho
          </p>
        </header>
        <div>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {
                customers.map(c => {
                  return (
                    <Customer
                      key={c.id}
                      id={c.id}
                      img={c.img}
                      name={c.name}
                      birth={c.birth}
                      gender={c.gender}
                      job={c.job}
                    />
                  )
                })
              }
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
