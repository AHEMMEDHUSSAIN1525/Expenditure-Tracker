import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'addincome',
  templateUrl: './addincome.component.html',
  styleUrls: ['./addincome.component.css']
})
export class AddincomeComponent implements OnInit {
 amnt:any;
 desp:any;
 desp2:any;
 exAmnt:any;
 myIncomeDate:any;
 myExpenseDate:any;
 myIncomeUser:any;
 myExpenseUser:any;

 users: string[] = [];
  ngOnInit(): void { 
    this.users=['Ahemmed','Dileep','Suman','Sravani'];

  }
  sendIncome(desc, amount, incomeDate, incomeUser){
    this.desp= desc.value;
    this.amnt = amount.value;  
    this.myIncomeDate = incomeDate.value;
    this.myIncomeUser=incomeUser.value;
  }
   sendExpense(desc2, expense, expenseDate, expenseUser){
    this.desp2= desc2.value;
    this.exAmnt=expense.value;
    this.myExpenseDate = expenseDate.value;
    this.myExpenseUser = expenseUser.value; 
} 
}