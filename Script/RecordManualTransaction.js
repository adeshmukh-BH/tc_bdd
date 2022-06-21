//USEUNIT ImportUnits
Given("Navigate to required center {arg}", function(centerNumber) {
    ChangeCenter(centerNumber)
});


Given("Search for required Child {arg}", function(childName) {
    FindChildren(childName)
});


/******************Navigating to Child Profile***************************/
Given("Navigate to Child Profile {arg}", function(name) {
    if (Panel_Child_Results.Exists) {
        var RowProp = new Array("Name", "ObjectType")
        var RowVal = new Array("Link(0)", "Link")
        var Links = Panel_Child_Results.FindAll(RowProp, RowVal, 1000)

        Delay(3000)
        if (Links.length > 0) {
            for (var i = 0; i < Links.length; i++) {
                var searchString = Links[i].contentText;
                InputString = searchString.replace(/,/g, '')
                SubString = name.replace(/,/g, '')
                if (InputString.indexOf(SubString) >= 0) {
                    Log.Checkpoint("Expected Child Found in Child Grid");
                    Object_Click(Links[i]);
                    break;
                }

            }
        } else
            Log.Message("No Records Found in Child Grid")
    } else {
        Log.Message("Search results are empty/ not found");
    }
});

When("Click on Finance Tab", function() {
    if (FinanceLink.Exists) {
        Object_Click(FinanceLink)
    } else
        Log.Error("Finance Tab is not found")
});

When("Click on Record Manual Trasction button", function() {
    if (ButtonRecordManualTransaction.Exists) {
        Object_Click(ButtonRecordManualTransaction)
    } else
        Log.Error("Record Manual Trasaction button is not found")
});
/******************Verify Manual Transaction pop up opened or not in Child Profile***************************/
Then("Verify Manual Transaction popup opened or not", function() {
    Dynamic_Wait(ManualTransactionModalPanel)
    if (ManualTransactionModalPanel.Exist) {
        Log.Checkpoint("Manual Transaction Modal Found")

    } else
        Log.Error("Manual Transaction Modal Not Found")
});
/******************Verify required fields are exist in Manual Transaction pop up ***************************/
Then("Verify Internal Fields exists or not", function() {
    fieldExist(ManualChildLabel)
    fieldExist(ManualPayerlabel)
    fieldExist(ManualBalanceDuelabel)
    fieldExist(ManualPayerBalancelabel)
    fieldExist(ManualPrepaidDepositslabel)
    fieldExist(ManualTransactionDetailstextnode)
    fieldExist(ManualTransactionTypelabel)
    fieldExist(ManualPaidBylabel)
    Object_Click(ManualSelectPayerID)
    Object_ClickItem(ManualSelectPayerID, 'Vidi, Smitha');
    if (ManualselectTransactiontypeid.Exists && ManualselectPaymentmethodid.Exists && ManualtextboxChecknumber.Exists && ManualnumberinputPaymentamount.Exists && ManualtextareaPaymentdescription.Exists) {
        Log.Checkpoint("All Expected Fields are Found")
    } else
        Log.Error("Expected Fields are not Found")
});

/******************Verify Cancel functionality at Manual Transaction pop up in Child Profile***************************/
Then("Verify Cancel Functionality{arg}", function(transactiontype) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, transactiontype);
    Delay(3000)
    if(transactiontype == 'Payment Reversal')
    {      
      Object_Click(buttonRefresh)
      selectApplyDepositEntry.Keys("[Down]");      
    }
    else if(transactiontype == 'Charge Transfer')
    {
      Object_Click(selectFromchargecodeid)
      Object_ClickItem(selectFromchargecodeid, 0);
      Delay(1000)
      Object_Keys(NumberinputChargeamount, 5)

      Object_Click(selecSecondarypayerid)
      Object_ClickItem(selecSecondarypayerid, "Vidi, Venki");
      Delay(1000)
    }
    else
    {
      Object_Click(ManualselectChargecodeid)
      Object_ClickItem(ManualselectChargecodeid, 0);
      Object_Keys(NumberinputChargeamount, 5)
    }

    var prepaidDepositAmoun = PrepaidDepositsManual.contentText
    var result = prepaidDepositAmoun.split("$")
    prepaidDepositsModal = aqConvert.StrToInt(result[1])

    var balanceDueAmount = ManualTransActlBalanceDue.contentText
    var results = balanceDueAmount.split("$")
    var res = results[1].charAt(results[1].length-1);
    if(res == ')')
    {
     results[1] = aqString.Remove(results[1], results[1].length-1, 1)
    }
    balanceDueModal = aqConvert.StrToInt(results[1])
    Delay(1000)

    Object_Click(Button_Cancel)
    if (ManualTransactionModalPanel.Exists) {
        Log.Error("Cancel Functionality Not working")

    } else
        Log.Checkpoint("Cancel Functionality Working")
});

/******************Verify Close Modal functionality at Manual Transaction pop up in Child Profile***************************/

Then("Verify Close modal Functionality{arg}", function(transactiontype) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, transactiontype);
    Delay(3000)
    if(transactiontype == 'Payment Reversal')
    {
       Object_Click(buttonRefresh)
       selectApplyDepositEntry.Keys("[Down]");      
    }
    else if(transactiontype == 'Charge Transfer')
    {
      Object_Click(selectFromchargecodeid)
      Object_ClickItem(selectFromchargecodeid, 0);
      Delay(1000)
      Object_Keys(NumberinputChargeamount, 5)

      Object_Click(selecSecondarypayerid)
      Object_ClickItem(selecSecondarypayerid, "Vidi, Venki");
      Delay(1000)
    }
    else
    {
      Object_Click(ManualselectChargecodeid)
      Object_ClickItem(ManualselectChargecodeid, 0);
      Object_Keys(NumberinputChargeamount, 5)
    }

    var prepaidDepositAmoun = PrepaidDepositsManual.contentText
    var result = prepaidDepositAmoun.split("$")
    prepaidDepositsModal = aqConvert.StrToInt(result[1])

    var balanceDueAmount = ManualTransActlBalanceDue.contentText
    var results = balanceDueAmount.split("$")
    var res = results[1].charAt(results[1].length-1);
    if(res == ')')
    {
     results[1] = aqString.Remove(results[1], results[1].length-1, 1)
    }
    balanceDueModal = aqConvert.StrToInt(results[1])
    Delay(1000)

    Object_Click(ButtonCloseModal)
    if (ManualTransactionModalPanel.Exists) {
        Log.Error("Close Modal Functionality Not working")

    } else
        Log.Checkpoint("Close Modal Functionality Working")

});

Then("Verify transaction is recorded due to a zero dollar amount{arg}", function(transactiontype) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, transactiontype);
    Delay(3000)
    Object_Click(ManualselectChargecodeid)
    Object_ClickItem(ManualselectChargecodeid, 'Balance Forward Credit');
    Object_Keys(NumberinputChargeamount, 0)
    Object_Click(ButtonSaveClose)
    if (AmountMustBeZero.Exists) {
        Log.Checkpoint("Dollar must be greaterthan Zero MSG Found")
    } else
        Log.Error("Dollar must be greaterthan Zero Error MSG Not Found")
});



Then("Fill Transaction Data and Click SaveandClose{arg}{arg}", function(TransactionType, ChargeCode) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, TransactionType);
    Delay(3000)
    Object_Click(ManualselectChargecodeid)
    Object_ClickItem(ManualselectChargecodeid, ChargeCode);
    Object_Keys(NumberinputChargeamount, 5)
    Object_Click(ButtonSaveClose)
});

Then("Navigate to Parent profile of child{arg}", function(Contact) {
    Object_Click(ChildProfileLink)

    var RowProp = new Array("Name", "ObjectType")
    var RowVal = new Array("Link(0)", "Link")
    var Links = relationshipGridcontacts.FindAll(RowProp, RowVal, 1000)

    Delay(3000)
    if (Links.length > 0) {
        for (var i = 0; i < Links.length; i++) {
            var searchString = Links[i].contentText;
            InputString = searchString.replace(/,/g, '')
            SubString = Contact.replace(/,/g, '')

            if (InputString.indexOf(SubString) >= 0) {
                Log.Checkpoint("Expected Contact Found in Contact Grid")
                Links[i].focus()
                Object_Click(Links[i])
                Object_Click(FinanceLink)
                break;
            } else
                Log.Message("No Contact Found")

        }
    }
});

/******************Verify Transaction is recorded in Payerstatement or not***************************/
Then("Verify transaction is recorded with amount{arg}", function(ChargeCode) {
    PayerStatementDueOn.DblClick();
    var RowProp = new Array("Name", "ObjectType")
    var RowVal = new Array("TextNode(0)", "TextNode")
    var TextNodes = PanelGridBody.FindAll(RowProp, RowVal, 1000)

    Delay(3000)
    if (TextNodes.length > 0) {
        for (var i = 0; i < TextNodes.length; i++) {
            var searchString = TextNodes[i].contentText;
            InputString = searchString.replace(/,/g, '')
            SubString = ChargeCode.replace(/,/g, '')

            if (InputString.indexOf(SubString) >= 0) {
                Log.Checkpoint("Expected Transaction Found in Payer Grid")
                break;
            } else
                Log.Message("Transaction Not Found")

        }
    }
});

Then("Verify transaction is recorded due to a zero dollar amount and Bad Debt transaction type{arg}", function(transactiontype) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, transactiontype);
    Delay(3000)

    Object_Keys(numberinputTransactionamount, 0)
    Object_Click(ButtonSaveClose)
    if (AmountMustBeZero.Exists) {
        Log.Checkpoint("Dollar must be greaterthan Zero MSG Found")
    } else
        Log.Error("Dollar must be greaterthan Zero Error MSG Not Found")
});

Then("Fill Transaction Data with Bad Debt and Click SaveandClose{arg}{arg}", function(TransactionType, ChargeCode) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, TransactionType);
    Delay(3000)
    Object_Click(ManualselectChargecodeid)
    Object_ClickItem(ManualselectChargecodeid, ChargeCode);
    Object_Keys(numberinputTransactionamount, 5)
    Object_Click(ButtonSaveClose)
});

/******************Verify child profile Manual Transaction is recorded with Zero dollar amount for diffente transaction types***************************/
Then("Verify transaction is recorded due to a zero dollar amount and Payment transaction type{arg}{arg}{arg}", function(transactiontype, paidby, checkno) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, transactiontype);
    Delay(3000)

    Object_Click(ManualselectPaymentmethodid)
    Object_ClickItem(ManualselectPaymentmethodid, paidby);

    Object_Keys(ManualtextboxChecknumber, checkno);

    Object_Keys(ManualnumberinputPaymentamount, 0)
    Object_Click(ButtonSaveClose)
    if (AmountMustBeZero.Exists) {
        Log.Checkpoint("Dollar must be greaterthan Zero MSG Found")
    } else
        Log.Error("Dollar must be greaterthan Zero Error MSG Not Found")

});

Then("Fill Transaction Data with payment type and Click SaveandClose{arg}{arg}{arg}", function(TransactionType, paidby, checkno) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, TransactionType);
    Delay(2000)
    Object_Click(ManualselectPaymentmethodid)
    Object_ClickItem(ManualselectPaymentmethodid, paidby);
    Object_Keys(ManualtextboxChecknumber, checkno);
    Object_Keys(ManualnumberinputPaymentamount, 5)
    Object_Click(ButtonSaveClose)
});


Then("Capture prepaid deposit from manual transaction & click on Cancel", function() {
    var prepaidDepositAmoun = PrepaidDepositsManual.contentText
    var result = prepaidDepositAmoun.split("$")
    prepaidDepositsModal = aqConvert.StrToInt(result[1])

    var balanceDueAmount = ManualTransActlBalanceDue.contentText
    var results = balanceDueAmount.split("$")
    balanceDueModal = aqConvert.StrToInt(results[1])
    Delay(1000)
    //Object_Click(ButtonCloseModal)
    Object_Click(Button_Cancel)
    if (ManualTransactionModalPanel.Exists) {
        Log.Error("Cancel Functionality Not working")

    } else
        Log.Checkpoint("Cancel Functionality Working")
});
Then("Capture prepaid deposit from manual transaction", function() {
    var prepaidDepositAmoun = PrepaidDepositsManual.contentText
    var result = prepaidDepositAmoun.split("$")
    prepaidDepositsModal = aqConvert.StrToInt(result[1])

    var balanceDueAmount = ManualTransActlBalanceDue.contentText
    var results = balanceDueAmount.split("$")
    var res = results[1].charAt(results[1].length-1);
    if(res == ')')
    {
     results[1] = aqString.Remove(results[1], results[1].length-1, 1)
    }
    balanceDueModal = aqConvert.StrToInt(results[1])
    Delay(1000)
    Object_Click(ButtonCloseModal)
});

/******************Verify child profile Manual Transaction balance & Payer Statement parent profile Balances for Deposit Payment type***************************/
Then("Verify transaction is recorded with Deposit Payment and paid by check", function() {
    PayerStatementDueOn.DblClick();
    var deposit = PrepaidDeposits.contentText
    var result = deposit.split("$")
    var prepaidAmount = aqConvert.StrToInt(result[1])
    Log.Message(prepaidDepositsModal);
    if (prepaidAmount == prepaidDepositsModal) {
        Log.Checkpoint("Prepaid Deposit Amount matched Found")
    } else
        Log.Error("Prepaid Deposit Amount not matched")
});

Given("Fill Transaction Data with payment type and Click SaveandClose{arg}", function(TransactionType) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, TransactionType);
    Delay(3000)

    Object_Keys(numberinputTransactionamount2, 5)
    Object_Click(ButtonSaveClose)
});

Then("Fill Transaction Data with Apply Deposit and Click SaveandClose{arg}", function(TransactionType) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, TransactionType);
    Delay(3000)

    Object_Keys(numberinputTransactionamount2, 5)
    Object_Click(ButtonSaveClose)
});



Then("Select Apply Deposit Reverals in Transaction type{arg}", function(TransactionType) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, TransactionType);

});



Then("Verify Apply Deposit Reverals selected in Transaction type{arg}", function(TransactionType) {
    if (ManualselectTransactiontypeid.wText == TransactionType) {
        Log.Checkpoint(TransactionType + " Selected in Transaction type")
    } else
        Log.Message(TransactionType + " Not Selected in Transaction type")
});

Given("Fill Transaction Data with Apply Deposit Reversal and Click SaveandClose{arg}", function(TransactionType) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, TransactionType);
    Delay(3000)
    selectApplyDepositEntry.Keys("[Down]");
    Object_Click(ButtonSaveClose)
});

/******************Verify child profile Manual Transaction balance & Payer Statement parent profile Balances***************************/
Then("Verify transaction is recorded and Balance is matching", function() {
    PayerStatementDueOn.DblClick();
    var deposit = PrepaidDeposits.contentText
    var result = deposit.split("$")
    var res = result[1].charAt(result[1].length-1);
    if(res == ')')
    {
     result[1] = aqString.Remove(result[1], result[1].length-1, 1)
    }
    var prepaidAmount = aqConvert.StrToInt(result[1])
    Log.Message(prepaidDepositsModal);

    var balanceDue = PayerStatementBalanceDue.contentText
    var results = balanceDue.split("$")
    var res = results[1].charAt(results[1].length-1);
    if(res == ')')
    {
     results[1] = aqString.Remove(results[1], results[1].length-1, 1)
    }
    var PayerStateBalanceDue = aqConvert.StrToInt(results[1])
    Log.Message(balanceDueModal)

    if (prepaidAmount == prepaidDepositsModal && PayerStateBalanceDue == balanceDueModal) {
        Log.Checkpoint("Transaction Amount is matched with Account Summary")
    } else
        Log.Error("Transaction Amount is not matched with Account Summary")
});

Then("Fill Transaction Data with {arg} and Click SaveandClose", function(TransactionType) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, TransactionType);
    Delay(3000)
    selectApplyDepositEntry.Keys("[Down]");
    Object_Click(ButtonSaveClose)
});

Then("Fill Transaction Data with {arg} and Origninal Payment type Click SaveandClose", function(TransactionType) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, TransactionType);
    Delay(3000)
    Object_Click(buttonRefresh)
    Delay(3000)
    selectApplyDepositEntry.Keys("[Down]");
    Object_Click(ButtonSaveClose)
});

Then("Fill Transaction Data with {arg} and SecondaryPayer {arg}{arg} Click SaveandClose", function(TransactionType, SecondaryContact, chargeCode) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, TransactionType);
    Delay(1000)

    Object_Click(selectFromchargecodeid)
    Object_ClickItem(selectFromchargecodeid, chargeCode);
    Delay(1000)
    Object_Keys(NumberinputChargeamount, 5)

    Object_Click(selecSecondarypayerid)
    Object_ClickItem(selecSecondarypayerid, SecondaryContact);
    Delay(1000)

    Object_Click(ButtonSaveClose)
});

When("Select the seconday payer{arg}", function(SecondaryContact) {
    Object_Click(ManualSelectPayerID)
    Object_ClickItem(ManualSelectPayerID, SecondaryContact);
});

Then("Verify Balances are matching for Seconndary Payer", function() {
    PayerStatementDueOn.DblClick();
    var deposit = PrepaidDeposits.contentText
    var result = deposit.split("$")
    var prepaidAmount = aqConvert.StrToInt(result[1])
    Log.Message(prepaidDepositsModal);

    var balanceDue = PayerStatementBalanceDue.contentText
    var results = balanceDue.split("$")
    var PayerStateBalanceDue = aqConvert.StrToInt(results[1])
    Log.Message(balanceDueModal)

    if (prepaidAmount == prepaidDepositsModal && PayerStateBalanceDue == balanceDueModal) {
        Log.Checkpoint("Transaction Amount is matched with Account Summary")
    } else
        Log.Error("Transaction Amount is not matched with Account Summary")



});

/**********************************Transaction type Charge transfer******************************/
Then("Verify Internal Fields exists or not and selected Transaction type {arg} {arg}", function(TransactionType, Contact) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, TransactionType)
    for (i = 0; i <= 10; i++) {
        if (Image_Loading.Exists) {
            Delay(1000)
        } else {
            break;
        }
    }
    Dynamic_Wait(selectFromchargecodeid)
    if (selectFromchargecodeid.Exists && selectTochargecodeid.Exists && selectTopayerid.Exists) {
        Log.Checkpoint("Respective fields are displayed based on transaction type")
        Log.Checkpoint("Transfer to payer is :" + selectTopayerid.wText)
    }
});

Then("click cancel button", function() {
    Object_Click(Button_Cancel)
    if (!ManualTransactionModalPanel.Exists) {
        Log.Checkpoint("Modal is closed")
    } else {
        Log.Error("Modal is not closed")
    }
});



Then("Select Transaction type {arg}, {arg}, enter amount{arg} and verify transfer to Payor{arg}", function(TransactionType, TransferFrom, Amount, Payor) {
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, TransactionType)
    for (i = 0; i <= 10; i++) {
        if (Image_Loading.Exists) {
            Delay(1000)
        } else {
            break;
        }
    }
    Dynamic_Wait(selectFromchargecodeid)
    Object_Click(selectFromchargecodeid)
    Object_ClickItem(selectFromchargecodeid, TransferFrom)
    Object_Keys(NumberinputChargeamount, Amount)
    if (selectTopayerid.wText == Payor) {
        Log.Checkpoint("Expected payor name is displayed")
    } else {
        Log.Error("Payor name is wrong")
    }
});



Then("click close button to close modal", function() {
    Object_Click(ButtonCloseModal)
    if (!ManualTransactionModalPanel.Exists) {
        Log.Checkpoint("Modal is closed")
    } else {
        Log.Error("Modal is not closed")
    }
});



When("Fill Transaction Data with {arg} {arg}and Click SaveandClose", function(param1, param2) {
    Dynamic_Wait(ManualselectTransactiontypeid)
    Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, param1)
    for (i = 0; i <= 10; i++) {
        if (Image_Loading.Exists) {
            Delay(1000)
        } else {
            break;
        }
    }
    Object_Click(selectChargedetailid)
    Object_ClickItem(selectChargedetailid, 0)
    Object_Click(ButtonSaveClose)
});



Then("Capture balance due from manual transaction", function() {
    var BalalceDue = ManualTransActlBalanceDue.contentText
    var result = BalalceDue.split("$")
    
    var res = result[1].charAt(result[1].length-1);
    if(res == ')')
    {
     result[1] = aqString.Remove(result[1], result[1].length-1, 1)
    }
    
    
    prepaidDepositsModal = aqConvert.StrToInt(result[1])
    Delay(2000)
    Object_Click(ButtonCloseModal)
});




Then("Check transaction is recorded and Balance is matching", function() {
    PayerStatementDueOn.DblClick();
    var deposit = PayerStatementBalanceDue.contentText
    var result = deposit.split("$")
    
    var res = result[1].charAt(result[1].length-1);
    if(res == ')')
    {
     result[1] = aqString.Remove(result[1], result[1].length-1, 1)
    }
    
    var prepaidAmount = aqConvert.StrToInt(result[1])
    Log.Message(prepaidDepositsModal);
    if (prepaidAmount == prepaidDepositsModal) {
        Log.Checkpoint("Balance due Amount is matched with Account Summary")
    } else
        Log.Error("Balance due is not matched with Account Summary")
    
});

/***************Record Manual transaction in Billing & Payments *************************/

When("Click Billing & payment Tab and navigate to sub tab{arg}", function (subtab){
   if (linkBillingPayments.Exists) 
   {
        Object_Click(linkBillingPayments)
        
        //Payers tab checking
        if(subtab == "Payers")
        {
          if (linkPayersBilling.Exists) {
              Object_Click(linkPayersBilling)
          } else
            Log.Error("Payers Tab is not found")
        }
        else  if(subtab == "AR Management")
        {
          if (linkARManagementSummary.Exists) {
              Object_Click(linkARManagementSummary)
          } else
            Log.Error("Payers Tab is not found")
        }
            
    } else
        Log.Error("Billing & Payments Tab is not found")
});

Then("Verify navigated to subtab or not{arg}", function (subtab){
  if(subtab == 'Payers')
  {
     if (payersPanel.Exists) 
     {
       Log.Checkpoint("Navigated to Payers Tab")
     }
     else
      Log.Error("Unable to navigate Payers Tab")
    
  }
  else if(subtab == 'AR Management')
  {
     if (panelARManagementSummary.Exists) 
     {
       Log.Checkpoint("Navigated to AR Management Summary Tab")
     }
     else
      Log.Error("Unable to navigate AR Management Tab")
    
  }
   
});

Then("Verify payers list is loading or not", function (){ 
  
  if(PayersPanelGrid.Exists)
  {
    Log.Checkpoint("Payers Grid Loaded")
  }
  else
  {
    Log.Message("Search results are empty/ not found")
  }
});

When("Select Charge&credit from group actions", function (){
   Object_Click(buttonGroupActionsBP);
    if (Link_ChargeCredit.Exists) {
        Object_Click(Link_ChargeCredit)
        Log.Checkpoint("Charge credit Tab found")        
    } else
      Log.Error("Charge credit Tab  not found")
   
});

Then("Select multiple records and verify Group action button enabled or not{arg}{arg}", function (payer1, payer2){
  if(PayersPanelGrid.Exists)
  {
    var RowProp = new Array("Name","ObjectType","className")
    var RowVal = new Array("Link(0)","Link", "ng-binding")    
    var Links = PayersPanelGrid.FindAll(RowProp, RowVal, 1000)
    
    var CheckboxRowProp = new Array("Name","ObjectType")
    var CheckboxRowVal = new Array("Checkbox(0)","Checkbox")
    var Checkboxes = PayersPanelGrid.FindAll(CheckboxRowProp, CheckboxRowVal, 1000)
    Delay(1000)
    
    var RowProp1 = new Array("Name","ObjectType","className")
    var RowVal1 = new Array("Link(0)","Link","ng-binding ng-scope")
    var Links1 = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)
    
    var Results = new Array()
    for(i=0; i<Links1.length; i++)
    {   
      if(i==0 || i%2 ==0 )
      {
        Results.push(Links1[i])
      }
    }
    
    if(Links.length > 0)
    {      
      for(var i=0;i<Links.length;i++)
      {
          var searchString = Links[i].contentText;
          if(searchString == payer1 )
          {
            Object_Click(Checkboxes[i]) 
            payer1BalanceDue = Results[i].contentText;         
          }
          if(searchString == payer2)
          {
            Object_Click(Checkboxes[i]) 
            payer2BalanceDue = Results[i].contentText;           
          }
      }      
      if(buttonGroupActionsBP.Enabled)
      {
       
        Log.Checkpoint("Group Actions button is Enabled  and clicked on it")
      }
      else
      {
        Log.Message("Expected child was not found or group actions button is diabled")
      }
    }
    else
      Log.Message("No Records Found in Payers Grid")
  }
  else
  {
    Log.Message("Search results are empty/ not found")
  }
});

When("click on Refresh List button for loading the data", function (){
  Dynamic_Wait(Button_RefreshList)
  Object_Click(Button_RefreshList)
  //Delay(5000);
  while(Image_Loading.Exists)
  {
      Delay(1000)    
  }

});

Then("Verify payer balance updated or not after transction{arg}{arg}{arg}", function (payer1, payer2,tyransactiontype){
   var RowProp = new Array("Name","ObjectType","className")
    var RowVal = new Array("Link(0)","Link","ng-binding ng-scope")
    var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
    
    var Results = new Array()
    for(i=0; i<Links.length; i++)
    {   
      if(i==0 || i%2 ==0 )
      {
        Results.push(Links[i])
      }
    }
    Delay(1000)
    var RowProp = new Array("Name","ObjectType","className")
    var RowVal = new Array("Link(0)","Link", "ng-binding")    
    var Links = PayersPanelGrid.FindAll(RowProp, RowVal, 1000)
    
    if(Links.length > 0)
    {      
      for(var i=0;i<Links.length;i++)
      {
          var searchString = Links[i].contentText;
          if(searchString == payer1 )
          {
            var Payerbalance = aqConvert.StrToInt(Results[i].contentText)  
            payer1BalanceDue = aqConvert.StrToInt(payer1BalanceDue)
            if(tyransactiontype == 'Charge')
               payer1BalanceDue = payer1BalanceDue +5
            if(tyransactiontype == 'Credit')
               payer1BalanceDue = payer1BalanceDue -5
            if(Payerbalance == payer1BalanceDue) 
            {
              Log.Checkpoint(payer1 +" Balances amount matched")
            }
            else
              Log.Message(payer1 +" Balances amount not matched")
          }
          if(searchString == payer2)
          {
            var Payerbalance = aqConvert.StrToInt(Results[i].contentText)  
            payer2BalanceDue = aqConvert.StrToInt(payer2BalanceDue)
            if(tyransactiontype == 'Charge')
                payer2BalanceDue = payer2BalanceDue +5
            if(tyransactiontype == 'Credit')
                payer2BalanceDue = payer2BalanceDue -5
            if(Payerbalance == payer2BalanceDue) 
            {
              Log.Checkpoint(payer2 +" Balances amount matched")
            }
            else
              Log.Message(payer2 +" Balances amount not matched")       
             
          }
      }      
     
    }
    else
      Log.Message("No Records Found in Payers Grid")

});


When("Select Payer Balance link for payer{arg}", function (payer){
  if(PayersPanelGrid.Exists)
  {
    var RowProp = new Array("Name","ObjectType","className")
    var RowVal = new Array("Link(0)","Link", "ng-binding")    
    var Links = PayersPanelGrid.FindAll(RowProp, RowVal, 1000)
    
    var RowProp1 = new Array("Name","ObjectType","className")
    var RowVal1 = new Array("Link(0)","Link","ng-binding ng-scope")
    var Links1 = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)
    
    var Results = new Array()
    for(i=0; i<Links1.length; i++)
    {   
      if(i==0 || i%2 ==0 )
      {
        Results.push(Links1[i])
      }
    }
    
    if(Links.length > 0)
    {      
      for(var i=0;i<Links.length;i++)
      {
          var searchString = Links[i].contentText;
          if(searchString == payer )
          {
            payer1BalanceDue = Results[i].contentText;
            Object_Click(Results[i])                      
          }
          
      }  
     
    }
    else
      Log.Message("No Records Found in Payers Grid")
  }
  else
  {
    Log.Message("Search results are empty/ not found")
  }
});

Then("Verify payer balance updated or not after transction{arg}{arg}", function (payer, transactionType){
    var RowProp = new Array("Name","ObjectType","className")
    var RowVal = new Array("Link(0)","Link","ng-binding ng-scope")
    var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
    
    var Results = new Array()
    for(i=0; i<Links.length; i++)
    {   
      if(i==0 || i%2 ==0 )
      {
        Results.push(Links[i])
      }
    }
    Delay(1000)
    var RowProp = new Array("Name","ObjectType","className")
    var RowVal = new Array("Link(0)","Link", "ng-binding")    
    var Links = PayersPanelGrid.FindAll(RowProp, RowVal, 1000)
    
    if(Links.length > 0)
    {      
      for(var i=0;i<Links.length;i++)
      {
          var searchString = Links[i].contentText;
          if(searchString == payer )
          {
            var Payerbalance = aqConvert.StrToInt(Results[i].contentText)  
            payer1BalanceDue = aqConvert.StrToInt(payer1BalanceDue)
            if(transactionType == 'Charge')
               payer1BalanceDue = payer1BalanceDue +5
            if(transactionType == 'Credit')
               payer1BalanceDue = payer1BalanceDue -5
           Log.Message("Payer Balance Comparison - "+ Payerbalance +'=='+ payer1BalanceDue)
            if(Payerbalance == payer1BalanceDue) 
            {
              Log.Checkpoint(payer +" Balances amount matched")
            }
            else
              Log.Message(payer +" Balances amount not matched")
          }
         
      }      
     
    }
    else
      Log.Message("No Records Found in Payers Grid")
});



When("Select Payer Balance Due link for payer{arg}", function (payer){
  if(PayersPanelGrid.Exists)
  {
    var RowProp = new Array("Name","ObjectType","className")
    var RowVal = new Array("Link(0)","Link", "ng-binding")    
    var Links = PayersPanelGrid.FindAll(RowProp, RowVal, 1000)
    
    var RowProp1 = new Array("Name","ObjectType","className")
    var RowVal1 = new Array("Link(0)","Link","ng-binding ng-scope")
    var Links1 = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)
    
    var Results = new Array()
    for(i=0; i<Links1.length; i++)
    {   
      if(i==1 || i%2 ==1 )
      {
        Results.push(Links1[i])
      }
    }
    
    if(Links.length > 0)
    {      
      for(var i=0;i<Links.length;i++)
      {
          var searchString = Links[i].contentText;
          if(searchString == payer )
          {
            payer1BalanceDue = Results[i].contentText;
            Object_Click(Results[i])                      
          }
          
      }  
     
    }
    else
      Log.Message("No Records Found in Payers Grid")
  }
  else
  {
    Log.Message("Search results are empty/ not found")
  }
});

Then("Verify payer balance Due updated or not after transction{arg}{arg}", function (payer, transactionType){
    var RowProp = new Array("Name","ObjectType","className")
    var RowVal = new Array("Link(0)","Link","ng-binding ng-scope")
    var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
    
    var Results = new Array()
    for(i=0; i<Links.length; i++)
    {   
      if(i==1 || i%2 ==1 )
      {
        Results.push(Links[i])
      }
    }
    Delay(1000)
    var RowProp = new Array("Name","ObjectType","className")
    var RowVal = new Array("Link(0)","Link", "ng-binding")    
    var Links = PayersPanelGrid.FindAll(RowProp, RowVal, 1000)
    
    if(Links.length > 0)
    {      
      for(var i=0;i<Links.length;i++)
      {
          var searchString = Links[i].contentText;
          if(searchString == payer )
          {
            var Payerbalance = aqConvert.StrToInt(Results[i].contentText)  
            payer1BalanceDue = aqConvert.StrToInt(payer1BalanceDue)
            if(transactionType == 'Charge')
               payer1BalanceDue = payer1BalanceDue +5
            if(transactionType == 'Credit')
               payer1BalanceDue = payer1BalanceDue -5
           Log.Message("Payer Balance Comparison - "+ Payerbalance +'=='+ payer1BalanceDue)
            if(Payerbalance == payer1BalanceDue) 
            {
              Log.Checkpoint(payer +" Balances amount matched")
            }
            else
              Log.Message(payer +" Balances amount not matched")
          }
         
      }      
     
    }
    else
      Log.Message("No Records Found in Payers Grid")
});

Then("Wait until page load", function (){
  Page_Load1()
});

Then("Expand the Payers list", function (){
  if(ExpandAllPayersinARManagement.Exists)
  {
      Object_Click(ExpandAllPayersinARManagement)    
  }
});

Then("Verify payers and aging list is loading or not", function (){
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("Link(0)","Link","ng-binding ng-scope")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
  if(Links.length > 0)
  {
    Log.Checkpoint("Payer and agind list loaded")
  }
  else{
    Log.Message("Payers & agins list not available")
  }

});

When("Fill Transaction Data with payment type and Click SaveandClose{arg}<Paidby><CheckNo>", function (param1){
  throw new NotImplementedError();
});



When("Select Payer Balance Due link for payers and aging{arg}", function (payer){
   
    
    var RowProp1 = new Array("Name","ObjectType","className")
    var RowVal1 = new Array("Link(0)","Link","ng-binding ng-scope")
    var Links1 = Aliases.browser.pageBrightstar_Login.panelName.FindAll(RowProp1, RowVal1, 1000)
                
    
    var ResultsName = new Array()
    var ResultsPayer = new Array()
    var ResultsBalance = new Array()
    for(i=0; i<Links1.length; i++)
    {
      if(i==0 || i%3 ==0 )
      {
        
        ResultsBalance.push(Links1[i])
      }
      if(i==1 || i%3 ==1 )
      {
        ResultsPayer.push(Links1[i])
      }
      if(i==2 || i%3 ==2 )
      {
        ResultsName.push(Links1[i]) 
      }
    }
    
    if(ResultsName.length > 0)
    {      
      for(var i=0;i<ResultsName.length;i++)
      {
          var searchString = ResultsName[i].contentText;
          if(searchString == payer )
          {
            payer1BalanceDue = ResultsBalance[i].contentText;
            Object_Click(ResultsBalance[i])  
            break;                    
          }
          
      }  
     
    }
    else
      Log.Message("No Records Found in Payers Grid")  

});

Then("Navigate to Parent profile{arg}", function (payer){
    
    var RowProp1 = new Array("Name","ObjectType","className")
    var RowVal1 = new Array("Link(0)","Link","ng-binding ng-scope")
    var Links1 = Aliases.browser.pageBrightstar_Login.panelName.FindAll(RowProp1, RowVal1, 1000)
                
    
    var ResultsName = new Array()
    var ResultsPayer = new Array()
    var ResultsBalance = new Array()
    for(i=0; i<Links1.length; i++)
    {
      if(i==0 || i%3 ==0 )
      {
        
        ResultsBalance.push(Links1[i])
      }
      if(i==1 || i%3 ==1 )
      {
        ResultsPayer.push(Links1[i])
      }
      if(i==2 || i%3 ==2 )
      {
        ResultsName.push(Links1[i]) 
      }
    }
    
    if(ResultsName.length > 0)
    {      
      for(var i=0;i<ResultsName.length;i++)
      {
          var searchString = ResultsName[i].contentText;
          if(searchString == payer )
          {
            payer1BalanceDue = ResultsBalance[i].contentText;
            Object_Click(ResultsName[i])  
            break;                    
          }
          
      }  
     
    }
    else
      Log.Message("No Records Found in Payers Grid")  

});

When("Click on Finance Tab in contact profile", function (){
  Dynamic_Wait(linkFinanceBP)
   if (linkFinanceBP.Exists) {
        Object_Click(linkFinanceBP)
    } else
        Log.Error("Finance Tab is not found")
});


Then("Verify transaction is recorded and Balance due is matching{arg}{arg}{arg}", function (payer, tyransactiontype, chargeCode){
  var Payerbalance = balanceDueModal 
  var DepositAmount = prepaidDepositsModal
   
    payer1BalanceDue = aqConvert.StrToInt(payer1BalanceDue)
    if(tyransactiontype == 'Charge')
       payer1BalanceDue = payer1BalanceDue +5
    if(tyransactiontype == 'Credit')
       payer1BalanceDue = payer1BalanceDue -5
    if(tyransactiontype == 'Bad Debt')
       payer1BalanceDue = payer1BalanceDue -5
    if(tyransactiontype == 'Bad Debt Reversal')
       payer1BalanceDue = payer1BalanceDue +5
    if(tyransactiontype == 'Payment')
       payer1BalanceDue = payer1BalanceDue -5
    if(tyransactiontype == 'Deposit Payment')
      prepaidDepositsAmnt = prepaidDepositsAmnt+5
    if(tyransactiontype == 'Payment Reversal')
       payer1BalanceDue = payer1BalanceDue +5    
    if(tyransactiontype == 'Charge Transfer')
       payer1BalanceDue = payer1BalanceDue -5
            
    if(tyransactiontype == 'Deposit Payment Reversal')
      prepaidDepositsAmnt = prepaidDepositsAmnt-5
    if(tyransactiontype == 'Apply Deposit')
    {
         prepaidDepositsAmnt = prepaidDepositsAmnt-5
         payer1BalanceDue = payer1BalanceDue -5
      
    }
    if(tyransactiontype == 'Apply Deposit Reversal')
    {
         prepaidDepositsAmnt = prepaidDepositsAmnt+5
         payer1BalanceDue = payer1BalanceDue +5
      
    }
    
    payer1BalanceDue = Math.abs(payer1BalanceDue); //aqConvert.StrToInt(payer1BalanceDue)
     
    Log.Message("Due compparison :"+Payerbalance +'=='+ payer1BalanceDue)
    Log.Message("Deposit Comparison :"+prepaidDepositsAmnt +'=='+ DepositAmount)
    if(Payerbalance == payer1BalanceDue && prepaidDepositsAmnt == DepositAmount) 
    {
      Log.Checkpoint(payer +" Balances amount matched")
    }
    else
      Log.Message(payer +" Balances amount not matched")
});

Then("Verify transaction is recorded and Payer Balance is matching{arg}{arg}{arg}", function (payer, tyransactiontype, chargeCode){
  var Payerbalance = balanceDueModal 
  var DepositAmount = prepaidDepositsModal
   
    payer1BalanceDue = aqConvert.StrToInt(payer1BalanceDue)
    if(tyransactiontype == 'Charge')
       payer1BalanceDue = payer1BalanceDue -5
    if(tyransactiontype == 'Credit')
       payer1BalanceDue = payer1BalanceDue +5
    if(tyransactiontype == 'Bad Debt')
       payer1BalanceDue = payer1BalanceDue +5   
    if(tyransactiontype == 'Payment')
       payer1BalanceDue = payer1BalanceDue +5
    if(tyransactiontype == 'Deposit Payment')
      prepaidDepositsAmnt = prepaidDepositsAmnt+5
    if(tyransactiontype == 'Payment Reversal')
       payer1BalanceDue = payer1BalanceDue -5    
    if(tyransactiontype == 'Bad Debt Reversal')
       payer1BalanceDue = payer1BalanceDue -5    
    
    if(tyransactiontype == 'Deposit Payment Reversal')
      prepaidDepositsAmnt = prepaidDepositsAmnt-5
    if(tyransactiontype == 'Apply Deposit')
    {
         prepaidDepositsAmnt = prepaidDepositsAmnt-5
         payer1BalanceDue = payer1BalanceDue +5
      
    }
    if(tyransactiontype == 'Apply Deposit Reversal')
    {
         prepaidDepositsAmnt = prepaidDepositsAmnt+5
         payer1BalanceDue = payer1BalanceDue -5
      
    }
    
    payer1BalanceDue = Math.abs(payer1BalanceDue); //aqConvert.StrToInt(payer1BalanceDue)
     
    Log.Message("Due compparison :"+Payerbalance +'=='+ payer1BalanceDue)
    Log.Message("Deposit Comparison :"+prepaidDepositsAmnt +'=='+ DepositAmount)
    if(Payerbalance == payer1BalanceDue && prepaidDepositsAmnt == DepositAmount) 
    {
      Log.Checkpoint(payer +" Balances amount matched")
    }
    else
      Log.Message(payer +" Balances amount not matched")
});


When("Select Payer Balance link for payers and aging{arg}", function (payer){
  
    var RowProp1 = new Array("Name","ObjectType","className")
    var RowVal1 = new Array("Link(0)","Link","ng-binding ng-scope")
    var Links1 = Aliases.browser.pageBrightstar_Login.panelName.FindAll(RowProp1, RowVal1, 1000)
                
    
    var ResultsName = new Array()
    var ResultsPayer = new Array()
    var ResultsBalance = new Array()
    for(i=0; i<Links1.length; i++)
    {
      if(i==0 || i%3 ==0 )
      {
        
        ResultsBalance.push(Links1[i])
      }
      if(i==1 || i%3 ==1 )
      {
        ResultsPayer.push(Links1[i])
      }
      if(i==2 || i%3 ==2 )
      {
        ResultsName.push(Links1[i]) 
      }
    }
    
    if(ResultsName.length > 0)
    {      
      for(var i=0;i<ResultsName.length;i++)
      {
          var searchString = ResultsName[i].contentText;
          if(searchString == payer )
          {
            payer1BalanceDue = ResultsPayer[i].contentText;
            
            // var start = results[1].charAt(results[1].length-1);
              if(payer1BalanceDue.charAt(0) == '(')
              {
               payer1BalanceDue = aqString.Remove(payer1BalanceDue, 0, 1)
              }
              var end = payer1BalanceDue.charAt(payer1BalanceDue.length-1);
              if(end == ')')
              {
               payer1BalanceDue = aqString.Remove(payer1BalanceDue, payer1BalanceDue.length-1, 1)
              }
            Object_Click(ResultsPayer[i])  
            break;                    
          }
          
      }  
     
    }
    else
      Log.Message("No Records Found in Payers Grid")  

});

Then("Verify data is loading or not in child list grid", function (){
  
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("Link(0)","Link","ng-binding ng-scope")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
  if(Links.length > 0)
  {
    Log.Checkpoint("Child information  list loaded")
  }
  else{
    Log.Message("Child information list not available")
  }
});


Then("Select multiple records and verify Group action button enabled or not in childManagment{arg}", function (payer1){
  
  
    var RowProp = new Array("Name","ObjectType","className")
    var RowVal = new Array("Link(0)","Link", "ng-binding")    
    var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
    
    var CheckboxRowProp = new Array("Name","ObjectType")
    var CheckboxRowVal = new Array("Checkbox(0)","Checkbox")
    var Checkboxes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(CheckboxRowProp, CheckboxRowVal, 1000)
    Delay(1000)
    
    
    if(Links.length > 0)
    {      
      for(var i=0;i<Links.length;i++)
      {
          var searchString = Links[i].contentText;
          if(searchString == payer1 )
          {
            Object_Click(Checkboxes[i]) 
           // payer1BalanceDue = Results[i].contentText;  
            Object_Click(Links[i])
            //Capture the balances before transaction update       
          }
         
      }
      Delay(3000)      
      if(Button_GroupActions.Enabled)
      {
       
        Log.Checkpoint("Group Actions button is Enabled  and clicked on it")
      }
      else
      {
        Log.Message("Expected child was not found or group actions button is diabled")
      }
    }
    else
      Log.Message("No Records Found in Payers Grid")

});

When("Select Charge&credit from group actions in childManagement", function (){
   Object_Click(Button_GroupActions);
    if (Link_ChargeCredit.Exists) {
        Object_Click(Link_ChargeCredit)
        Log.Checkpoint("Charge credit Tab found")        
    } else
      Log.Error("Charge credit Tab  not found")
});



Then("Verify Balances are updated or not{arg}", function (payer){
    
});

When("Click on Finance Tab in childprofile", function (){
   if (linkFinanceChildProfile.Exists) {
        Object_Click(linkFinanceChildProfile)
    } else
        Log.Error("Finance Tab is not found")
});

When("Click on Record Manual Trasction button in childprofile", function (){
   if (buttonRecordManualTransactionChildProfile.Exists) {
        Object_Click(buttonRecordManualTransactionChildProfile)
    } else
        Log.Error("Record Manual Trasaction button is not found")
});

Then("Navigate back to childmanagement", function (){
   if (buttonBackToChildManagement.Exists) {
        Object_Click(buttonBackToChildManagement)
    } else
        Log.Error("Unable to navigate back to ChildManagement")
});

Then("Verify Balances are updated or not{arg}{arg}{arg}", function (payer, transType, chargeCode){
    var prepaidDepositAmoun = PrepaidDepositsManual.contentText
    var result = prepaidDepositAmoun.split("$")
    var updatedDeposit = aqConvert.StrToInt(result[1])

    var balanceDueAmount = ManualTransActlBalanceDue.contentText
    var results = balanceDueAmount.split("$")
    var updatedBalanceDue = aqConvert.StrToInt(results[1])
    Delay(1000)
    Object_Click(ButtonCloseModal)
    if(transType == 'Charge' && chargeCode == 'Activity Fee')
    {
      balanceDueModal = balanceDueModal+5
    }
    if(transType == 'Credit' && chargeCode == 'Activity Fee Reversal')
    {
      balanceDueModal = balanceDueModal-5
    }
    if(transType == 'Bad Debt' && chargeCode == 'Bad Debt')
    {
      balanceDueModal = balanceDueModal-5
    }
    
    if( updatedBalanceDue == balanceDueModal) 
    {
      Log.Checkpoint(payer +" Balances are updated and amount matched")
    }
    else
      Log.Message(payer +" Balances are not updated and amount not matched")
});

Then("Capture Deposit payment", function (){
   var prepaidDepositAmoun = PrepaidDepositsManual.contentText
   var result = prepaidDepositAmoun.split("$")
   prepaidDepositsAmnt = aqConvert.StrToInt(result[1])
});

Then("Fill Transaction Data for Charge Transfer with {arg} and SecondaryPayer {arg}{arg}{arg} Click SaveandClose", function (TransactionType, SecondaryContact, chargeCode, Child){
  Object_Click(ManualselectTransactiontypeid)
    Object_ClickItem(ManualselectTransactiontypeid, TransactionType);
    Delay(1000)

    Object_Click(selectFromchargecodeid)
    Object_ClickItem(selectFromchargecodeid, chargeCode);
    Delay(1000)
    
    Object_Click(selectChildid)
    Object_ClickItem(selectChildid, Child);
    Delay(1000)
    
    Object_Keys(NumberinputChargeamount, 5)

    Object_Click(selectSecondaryPayer)
    Object_ClickItem(selectSecondaryPayer, SecondaryContact);
    Delay(1000)

    Object_Click(ButtonSaveClose)
});



When("Select Contact from payers list{arg}", function (Contact){
   if(PayersPanelGrid.Exists)
  {
    var RowProp = new Array("Name","ObjectType","className")
    var RowVal = new Array("Link(0)","Link", "ng-binding")    
    var Links = PayersPanelGrid.FindAll(RowProp, RowVal, 1000)
    
   
    
    if(Links.length > 0)
    {      
      for(var i=0;i<Links.length;i++)
      {
          var searchString = Links[i].contentText;
          if(searchString == Contact )
          {            
            Object_Click(Links[i])                      
          }
      }
    }
    else
      Log.Message("No Records Found in Payers Grid")
  }
  else
  {
    Log.Message("Search results are empty/ not found")
  }
});

When("Select Record Manual Transaction from Actions Dropdown", function (){
    Dynamic_Wait(buttonActions)
    Object_Click(buttonActions);
    if (linkRecordManualTransaction.Exists) {
        Object_Click(linkRecordManualTransaction)
        Log.Checkpoint("Record Manual Transaction Link found")        
    } else
      Log.Error("Record Manual Transaction Link  not found")
});

Then("Capture Balance & Deposit before transaction", function (){
  
    var prepaidDepositAmoun = PrepaidDepositsManual.contentText
    var result = prepaidDepositAmoun.split("$")
    prepaidDepositsAmnt = aqConvert.StrToInt(result[1])

    var balanceDueAmount = ManualTransActlBalanceDue.contentText
    var results = balanceDueAmount.split("$")
    var res = results[1].charAt(results[1].length-1);
    if(res == ')')
    {
     results[1] = aqString.Remove(results[1], results[1].length-1, 1)
    }
    payer1BalanceDue = aqConvert.StrToInt(results[1])
    Delay(1000)
    
  
   
});
