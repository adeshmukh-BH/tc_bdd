Feature: RecordManualTransaction
       
    #********Verify Record manual transaction in billing & Payment - Payers tab************#
    @RegressionTesting
    Scenario Outline: Payers Tab : Record the transaction for multiple users & verify the transaction is recorded for transaction type - Charge
    Given Navigate back to Home page
    And Navigate to required center <CenterNumber> 
    When Click Billing & payment Tab and navigate to sub tab<subtab>    
    Then Verify navigated to subtab or not<subtab>
    When click on Refresh List button for loading the data
    Then Verify payers list is loading or not
    Then Select multiple records and verify Group action button enabled or not<payer1><payer2> 
    When Select Charge&credit from group actions
    Then Verify Manual Transaction popup opened or not    
    And Fill Transaction Data and Click SaveandClose<TransactionType><ChargeCode>
    When click on Refresh List button for loading the data
    Then Verify payer balance updated or not after transction<payer1><payer2><TransactionType>     
  
    
    Examples:
     |subtab  |payer1         | payer2             |TransactionType |ChargeCode     |CenterNumber|
     |"Payers"|"Arand, Diana" |"Ashley, Autumn"   |"Charge"         |"Activity Fee"|"0404"|
     
    @RegressionTesting   
    Scenario Outline: Payers Tab : Record the transaction for multiple users & verify the transaction is recorded for transaction type - Credit
    Given Navigate back to Home page
    When Click Billing & payment Tab and navigate to sub tab<subtab>    
    Then Verify navigated to subtab or not<subtab>
    When click on Refresh List button for loading the data
    Then Verify payers list is loading or not
    Then Select multiple records and verify Group action button enabled or not<payer1><payer2> 
    When Select Charge&credit from group actions
    Then Verify Manual Transaction popup opened or not    
    And Fill Transaction Data and Click SaveandClose<TransactionType><ChargeCode>
    When click on Refresh List button for loading the data
    Then Verify payer balance updated or not after transction<payer1><payer2><TransactionType>     
  
    
    Examples:
     |subtab  |payer1             | payer2          |TransactionType|ChargeCode|  
     |"Payers"|"Arand, Diana" |"Ashley, Autumn"   |"Credit"       |"Activity Fee Reversal"|
     
 #/**************Payers Balance verification in Payers tab **************************/

      @PayersTab-PayerBalance    
      Scenario Outline: Payers Tab : Record the transaction for Payers Balance in Payers tab
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>    
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data
      Then Verify payers list is loading or not
      When Select Payer Balance link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment
      And Fill Transaction Data and Click SaveandClose<TransactionType><ChargeCode>
      When Select Payer Balance link for payer<payer> 
      # When click on Refresh List button for loading the data
      #Then Verify payer balance updated or not after transction<payer><TransactionType> 
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>
     
      
      Examples:
       |subtab    |payer         | TransactionType |ChargeCode |  
       |"Payers"  |"Arand, Diana" |"Credit"         |"Activity Fee Reversal"|
       |"Payers"  |"Arand, Diana" |"Charge"         |"Activity Fee"|
       |"Payers"  |"Arand, Diana" |"Charge"         |"Balance Forward Charge"|
 
     @PayersTab-PayerBalance        
     Scenario Outline: Payers Tab : Record the transaction for Payers Balance in Payers tab &  for Bad Debt transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>    
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data
      Then Verify payers list is loading or not
      When Select Payer Balance link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment      
      And Fill Transaction Data with Bad Debt and Click SaveandClose<TransactionType><ChargeCode>
      When Select Payer Balance link for payer<payer>       
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>     
      
      Examples:
       |subtab    |payer         | TransactionType |ChargeCode |  
       |"Payers"  |"Arand, Diana" |"Bad Debt"       |"Bad Debt"|
     
     @PayersTab-PayerBalance
     Scenario Outline: Payers Tab : Record the transaction for Payers Balance in Payers tab &  for Bad Debt Reversal transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>    
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data
      Then Verify payers list is loading or not
      When Select Payer Balance link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment   
      When Fill Transaction Data with <TransactionType> <ChargeCode>and Click SaveandClose       
      When Select Payer Balance link for payer<payer>       
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>     
      
      Examples:
       |subtab    |payer         | TransactionType          |ChargeCode |  
       |"Payers"  |"Arand, Diana" |"Bad Debt Reversal"       |"Bad Debt - - $5.00"|  
   
   @PayersTab-PayerBalance   
	 Scenario Outline: Payers Tab : Record the transaction for Payers Balance in Payers tab & for Payment Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>    
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data
      Then Verify payers list is loading or not
      When Select Payer Balance link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment   
      Then Fill Transaction Data with payment type and Click SaveandClose<TransactionType><Paidby><CheckNo>        
      When Select Payer Balance link for payer<payer>       
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>     
      
      Examples:
       |subtab    |payer         |  TransactionType  | ChargeCode |Paidby  |CheckNo   |
       |"Payers"  |"Arand, Diana" |"Payment"         |   ""       |"Check"  |123456789  |
   
   @PayersTab-PayerBalance 
   Scenario Outline: Payers Tab : Record the transaction for Payers Balance in Payers tab & for Deposit Payment Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>    
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data
     # Then Wait until page load 
      Then Verify payers list is loading or not
      When Select Payer Balance link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment   
      Then Fill Transaction Data with payment type and Click SaveandClose<TransactionType><Paidby><CheckNo>        
      When Select Payer Balance link for payer<payer>       
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>     
      
      Examples:
       |subtab    |payer         |  TransactionType | ChargeCode    |Paidby   |CheckNo   |
       |"Payers"  |"Arand, Diana" |"Deposit Payment" |   ""          |"Check"  |123456789 |   
       
   @PayersTab-PayerBalance    
   Scenario Outline: Payers Tab : Record the transaction for Payers Balance in Payers tab & for Apply Deposit Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>    
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data
     # Then Wait until page load 
      Then Verify payers list is loading or not
      When Select Payer Balance link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment   
      And Fill Transaction Data with Apply Deposit and Click SaveandClose<TransactionType>         
      When Select Payer Balance link for payer<payer>       
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>     
      
      Examples:
       |subtab    |payer         |  TransactionType | ChargeCode    |Paidby   |CheckNo   |
       |"Payers"  |"Arand, Diana" |"Apply Deposit"   |   ""          |"Check"  |123456789 |  
   
   @PayersTab-PayerBalance    
   Scenario Outline: Payers Tab : Record the transaction for Payers Balance in Payers tab & for Apply Deposit Reversal Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>    
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data
     # Then Wait until page load 
      Then Verify payers list is loading or not
      When Select Payer Balance link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment   
      And Fill Transaction Data with <TransactionType> and Click SaveandClose          
      When Select Payer Balance link for payer<payer>       
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>     
      
      Examples:
       |subtab    |payer         |  TransactionType          | ChargeCode    |Paidby   |CheckNo   |
       |"Payers"  |"Arand, Diana" |"Apply Deposit Reversal"   |   ""          |"Check"  |123456789 |  
   
    @PayersTab-PayerBalance   
    Scenario Outline: Payers Tab : Record the transaction for Payers Balance in Payers tab & for Deposit Payment Reversal Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>    
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data
     # Then Wait until page load 
      Then Verify payers list is loading or not
      When Select Payer Balance link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment   
      And Fill Transaction Data with <TransactionType> and Click SaveandClose  
      When Select Payer Balance link for payer<payer>       
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>     
      
      Examples:
       |subtab    |payer         |  TransactionType          | ChargeCode    |Paidby   |CheckNo   |
       |"Payers"  |"Arand, Diana" |"Deposit Payment Reversal" |   ""          |"Check"  |123456789 |     
    
    @PayersTab-PayerBalance   
    Scenario Outline: Payers Tab : Record the transaction for Payers Balance in Payers tab & for Payment Reversal Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>    
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data
     # Then Wait until page load 
      Then Verify payers list is loading or not
      When Select Payer Balance link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment   
      And Fill Transaction Data with <TransactionType> and Origninal Payment type Click SaveandClose 
      When Select Payer Balance link for payer<payer>       
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>     
      
      Examples:
       |subtab    |payer         |  TransactionType  | ChargeCode    |Paidby   |CheckNo   |
       |"Payers"  |"Arand, Diana" |"Payment Reversal" |   ""          |"Check"  |123456789 |  
       
    @PayersTab-PayerBalance        
    Scenario Outline: Payers Tab : Record the transaction for Payers Balance in Payers tab & for Charge Transfer
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>    
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data    
      Then Verify payers list is loading or not
      When Select Payer Balance link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment   
      And Fill Transaction Data for Charge Transfer with <TransactionType> and SecondaryPayer <SecondaryContact><ChargeCode><Child> Click SaveandClose      
      When Select Payer Balance link for payer<payer>       
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>     
      
      Examples:
       |subtab    |payer         |  TransactionType  | ChargeCode               |Paidby   |CheckNo   |SecondaryContact |Child |
       |"Payers"  |"Arand, Diana" |"Charge Transfer"  | "Activity Fee Reversal" |"Check"  |123456789 | "Levy, Jon"      |"Jordan Levy"|
       
	#/**************Payers Balance Due **************************/
  @PayersTab-BalanceDue
      Scenario Outline: Payers Tab : Record the transaction for Balance Due in Payers tab
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>       
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data
      #Then Wait until page load  
      Then Verify payers list is loading or not
      When Select Payer Balance Due link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment
      And Fill Transaction Data and Click SaveandClose<TransactionType><ChargeCode>
      When Select Payer Balance Due link for payer<payer>
      Then Capture prepaid deposit from manual transaction 
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>
     # When click on Refresh List button for loading the data
     # Then Verify payer balance Due updated or not after transction<payer><TransactionType> 
      
      Examples:
       |subtab    |payer         | TransactionType |ChargeCode |  
       |"Payers"  |"Arand, Diana" |"Credit"         |"Activity Fee Reversal"|
       |"Payers"  |"Arand, Diana" |"Charge"         |"Activity Fee"|
       |"Payers"  |"Arand, Diana" |"Charge"         |"Balance Forward Charge"|
              
     @PayersTab-BalanceDue
     Scenario Outline: Payers Tab : Record the transaction for Balance Due in Payers tab & transaction type is Bad Debt
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>       
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data     
      Then Verify payers list is loading or not
      When Select Payer Balance Due link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment
     #And Fill Transaction Data and Click SaveandClose<TransactionType><ChargeCode>
      And Fill Transaction Data with Bad Debt and Click SaveandClose<TransactionType><ChargeCode> 
      When Select Payer Balance Due link for payer<payer>
      Then Capture prepaid deposit from manual transaction 
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>
      
      Examples:
       |subtab    |payer          | TransactionType |ChargeCode |       
       |"Payers"  |"Arand, Diana" |"Bad Debt"       |"Bad Debt"| 
         
    @PayersTab-BalanceDue   
    Scenario Outline: Payers Tab : Record the transaction for Balance Due in Payers tab & transaction type is Bad Debt Reversal
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>       
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data     
      Then Verify payers list is loading or not
      When Select Payer Balance Due link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment
      When Fill Transaction Data with <TransactionType> <ChargeCode>and Click SaveandClose 
      When Select Payer Balance Due link for payer<payer>
      Then Capture prepaid deposit from manual transaction 
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>
      
      Examples:
       |subtab    |payer         | TransactionType          |ChargeCode |       
       |"Payers"  |"Arand, Diana" |"Bad Debt Reversal"       |"Bad Debt - - $5.00"|  
       
    @PayersTab-BalanceDue   
    Scenario Outline: Payers Tab : Record the transaction for Balance Due in Payers tab & transaction type is Payment
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>       
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data     
      Then Verify payers list is loading or not
      When Select Payer Balance Due link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment
      Then Fill Transaction Data with payment type and Click SaveandClose<TransactionType><Paidby><CheckNo>   
      When Select Payer Balance Due link for payer<payer>
      Then Capture prepaid deposit from manual transaction 
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>
      
      Examples:
       |subtab    |payer         | TransactionType  |ChargeCode | Paidby  |CheckNo    |      
       |"Payers"  |"Arand, Diana" |"Payment"         |""         | "Check"  |123456789  | 
       
       
     @PayersTab-BalanceDue  
     Scenario Outline: Payers Tab : Record the transaction for Balance Due in Payers tab &  for Deposit Payment Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>       
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data     
      Then Verify payers list is loading or not
      When Select Payer Balance Due link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment
      Then Fill Transaction Data with payment type and Click SaveandClose<TransactionType><Paidby><CheckNo>   
      When Select Payer Balance Due link for payer<payer>
      Then Capture prepaid deposit from manual transaction 
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>
      
      Examples:
       |subtab    |payer         | TransactionType          |ChargeCode | Paidby  |CheckNo    |      
       |"Payers"  |"Arand, Diana" |"Deposit Payment"         |""         | "Check"  |123456789  |  
       
    @PayersTab-BalanceDue   
    Scenario Outline: Payers Tab : Record the transaction for Balance Due in Payers tab &  for Apply Deposit Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>       
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data     
      Then Verify payers list is loading or not
      When Select Payer Balance Due link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment      
      And Fill Transaction Data with Apply Deposit and Click SaveandClose<TransactionType>   
      When Select Payer Balance Due link for payer<payer>
      Then Capture prepaid deposit from manual transaction 
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>
      
      Examples:
       |subtab    |payer         | TransactionType        |ChargeCode | Paidby  |CheckNo    |      
       |"Payers"  |"Arand, Diana" |"Apply Deposit"         |""         | "Check"  |123456789  | 
       
     @PayersTab-BalanceDue  
     Scenario Outline: Payers Tab : Record the transaction for Balance Due in Payers tab &  for Apply Deposit Reversal Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>       
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data     
      Then Verify payers list is loading or not
      When Select Payer Balance Due link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment      
      And Fill Transaction Data with <TransactionType> and Click SaveandClose 
      When Select Payer Balance Due link for payer<payer>
      Then Capture prepaid deposit from manual transaction 
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>
      
      Examples:
       |subtab    |payer         | TransactionType                  |ChargeCode | Paidby  |CheckNo    |      
       |"Payers"  |"Arand, Diana" |"Apply Deposit Reversal"         |""         | "Check"  |123456789  |   
     
     @PayersTab-BalanceDue  
     Scenario Outline: Payers Tab : Record the transaction for Balance Due in Payers tab &  for Payment Reversal Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>       
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data     
      Then Verify payers list is loading or not
      When Select Payer Balance Due link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment             
      And Fill Transaction Data with <TransactionType> and Origninal Payment type Click SaveandClose
      When Select Payer Balance Due link for payer<payer>
      Then Capture prepaid deposit from manual transaction 
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>
      
      Examples:
       |subtab    |payer         | TransactionType           |ChargeCode | Paidby  |CheckNo    |      
       |"Payers"  |"Arand, Diana" |"Payment Reversal"         |""         | "Check"  |123456789  | 
       
  @PayersTab-BalanceDue     
  Scenario Outline: Payers Tab : Record the transaction for Balance Due in Payers tab & for Charge Transfer
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>    
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data    
      Then Verify payers list is loading or not
      When Select Payer Balance Due link for payer<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment   
      And Fill Transaction Data for Charge Transfer with <TransactionType> and SecondaryPayer <SecondaryContact><ChargeCode><Child> Click SaveandClose      
      When Select Payer Balance Due link for payer<payer> 
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>     
      
      Examples:
       |subtab    |payer         |  TransactionType  | ChargeCode               |Paidby   |CheckNo   |SecondaryContact |Child |
       |"Payers"  |"Arand, Diana" |"Charge Transfer"  | "Activity Fee Reversal" |"Check"  |123456789 | "Levy, Jon"  |"Jordan Levy"|   
       
    #/***AR Management Balance Due links transactions*******/
   
  @ARManagement-BalanceDue 
    Scenario Outline: AR Management & Summary : Record the transaction for Balance Due in AR management & summary tab
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance Due link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment 
      And Fill Transaction Data and Click SaveandClose<TransactionType><ChargeCode>       
      When Select Payer Balance Due link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction
      #Then Navigate to Parent profile<payer>
      #When Click on Finance Tab in contact profile
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode> 
      
      Examples:
       |subtab           |payer              | TransactionType |ChargeCode |  
       |"AR Management"  |"Vidi, Smitha"     |"Charge"         |"Activity Fee"|
       |"AR Management"  |"Vidi, Smitha"     |"Credit"         |"Activity Fee Reversal"|
   
   @ARManagement-BalanceDue  
   Scenario Outline: AR Management & Summary : Record the transaction for Balance Due in AR management & summary tab for Bad Debt transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not      
      When Select Payer Balance Due link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not
      And Capture Deposit payment 
      And Fill Transaction Data with Bad Debt and Click SaveandClose<TransactionType><ChargeCode>     
      When Select Payer Balance Due link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction      
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode> 
      
      Examples:
       |subtab           |payer              | TransactionType |ChargeCode |       
       |"AR Management"  |"Vidi, Smitha"     |"Bad Debt"       |"Bad Debt"|          
   
    @ARManagement-BalanceDue   
     Scenario Outline: AR Management & Summary : Record the transaction for Balance Due in AR management & summary tab for Bad Debt Reversal transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance Due link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not   
      And Capture Deposit payment      
      When Fill Transaction Data with <TransactionType> <ChargeCode>and Click SaveandClose     
      And Select Payer Balance Due link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction     
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode> 
      
      Examples:
       |subtab           |payer              | TransactionType          |ChargeCode           |       
       |"AR Management"  |"Vidi, Smitha"     |"Bad Debt Reversal"       |"Bad Debt - - $5.00"| 
       
    @ARManagement-BalanceDue          
    Scenario Outline: AR Management & Summary : Record the transaction for Balance Due in AR management & summary tab for Payment Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance Due link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not     
      And Capture Deposit payment    
      #When Fill Transaction Data with <TransactionType> <ChargeCode>and Click SaveandClose  
      Then Fill Transaction Data with payment type and Click SaveandClose<TransactionType><Paidby><CheckNo>   
      When Select Payer Balance Due link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction     
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode> 
      
      Examples:
       |subtab           |payer              | TransactionType  | ChargeCode |Paidby  |CheckNo    |
       |"AR Management"  |"Vidi, Smitha"     |"Payment"         |   ""       |"Check"  |123456789  |
    
    @ARManagement-BalanceDue
    Scenario Outline: AR Management & Summary : Record the transaction for Balance Due in AR management & summary tab for Deposit Payment Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance Due link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not
      And Capture Deposit payment        
      #When Fill Transaction Data with <TransactionType> <ChargeCode>and Click SaveandClose  
      Then Fill Transaction Data with payment type and Click SaveandClose<TransactionType><Paidby><CheckNo>       
      When Select Payer Balance Due link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction     
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode> 
      
      Examples:
       |subtab           |payer              | TransactionType  | ChargeCode |Paidby  |CheckNo    |
       |"AR Management"  |"Vidi, Smitha"     |"Deposit Payment" |   ""          |"Check"  |123456789  |
       
    @ARManagement-BalanceDue
    Scenario Outline: AR Management & Summary : Record the transaction for Balance Due in AR management & summary tab for Apply Deposit Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance Due link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not
      And Capture Deposit payment        
      And Fill Transaction Data with Apply Deposit and Click SaveandClose<TransactionType>    
      When Select Payer Balance Due link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction     
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode> 
      
      Examples:
       |subtab           |payer              | TransactionType  | ChargeCode    |Paidby   |CheckNo    |
       |"AR Management"  |"Vidi, Smitha"     |"Apply Deposit"   |   ""          |"Check"  |123456789  |
    
     @ARManagement-BalanceDue
     Scenario Outline: AR Management & Summary : Record the transaction for Balance Due in AR management & summary tab for Apply Deposit Reversal Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance Due link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not
      And Capture Deposit payment        
     # And Fill Transaction Data with Apply Deposit and Click SaveandClose<TransactionType> 
      And Fill Transaction Data with <TransactionType> and Click SaveandClose   
      When Select Payer Balance Due link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction     
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode> 
      
      Examples:
       |subtab           |payer              | TransactionType            | ChargeCode    |Paidby   |CheckNo    |
       |"AR Management"  |"Vidi, Smitha"     |"Apply Deposit Reversal"   |   ""          |"Check"  |123456789  |
       
   @ARManagement-BalanceDue    
   Scenario Outline: AR Management & Summary : Record the transaction for Balance Due in AR management & summary tab for Deposit Payment Reversal Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance Due link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not
      And Capture Deposit payment        
     # And Fill Transaction Data with Apply Deposit and Click SaveandClose<TransactionType> 
      And Fill Transaction Data with <TransactionType> and Click SaveandClose   
      When Select Payer Balance Due link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction     
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode> 
      
      Examples:
       |subtab           |payer              | TransactionType            | ChargeCode    |Paidby   |CheckNo    |
       |"AR Management"  |"Vidi, Smitha"     |"Deposit Payment Reversal"  |   ""          |"Check"  |123456789  |    
    
    @ARManagement-BalanceDue  
    Scenario Outline: AR Management & Summary : Record the transaction for Balance Due in AR management & summary tab for Payment Reversal Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance Due link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not
      And Capture Deposit payment        
     # And Fill Transaction Data with Apply Deposit and Click SaveandClose<TransactionType>         
      And Fill Transaction Data with <TransactionType> and Origninal Payment type Click SaveandClose
      When Select Payer Balance Due link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction     
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode> 
      
      Examples:
       |subtab           |payer              | TransactionType    | ChargeCode    |Paidby   |CheckNo    |
       |"AR Management"  |"Vidi, Smitha"     |"Payment Reversal"  |   ""          |"Check"  |123456789  |  
     
     @ARManagement-BalanceDue  
     Scenario Outline:AR Management & Summary : Record the transaction for Balance Due in AR management & summary tab for Charge Transfer
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance Due link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not
      And Capture Deposit payment    
      And Fill Transaction Data for Charge Transfer with <TransactionType> and SecondaryPayer <SecondaryContact><ChargeCode><Child> Click SaveandClose      
      When Select Payer Balance Due link for payers and aging<payer> 
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>     
      
      Examples:
       |subtab            |payer         |  TransactionType  | ChargeCode               |Paidby   |CheckNo   |SecondaryContact |Child |
       |"AR Management"  |"Vidi, Smitha" |"Charge Transfer"  | "Activity Fee Reversal" |"Check"  |123456789 | "Vidi, Venki"  |"Arshitha Vidi"|   
         
    #********************Payer Balance in AR Management & Summary************************#     
    @ARManagement-PayerBalance
    Scenario Outline: AR Management & Summary : Record the transaction for Payer Balance in AR management & summary tab
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not 
      And Capture Deposit payment 
      And Fill Transaction Data and Click SaveandClose<TransactionType><ChargeCode>       
      When Select Payer Balance link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction
      #Then Navigate to Parent profile<payer>
      #When Click on Finance Tab in contact profile
      #Then Verify transaction is recorded and Payer Balance is matching<payer><TransactionType><ChargeCode> 
       Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode> 
      
      Examples:
       |subtab           |payer              | TransactionType |ChargeCode |  
       |"AR Management"  |"Erazo, Elisa"     |"Charge"         |"Activity Fee"|
       |"AR Management"  |"Erazo, Elisa"     |"Credit"         |"Activity Fee Reversal"|  
    
    @ARManagement-PayerBalance
    Scenario Outline: AR Management & Summary : Record the transaction for Payer Balance in AR management & summary tab for Bad Debt transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not      
      When Select Payer Balance link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not    
      And Capture Deposit payment   
      And Fill Transaction Data with Bad Debt and Click SaveandClose<TransactionType><ChargeCode>     
      When Select Payer Balance link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction      
      #Then Verify transaction is recorded and Payer Balance is matching<payer><TransactionType><ChargeCode> 
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode> 
      
      Examples:
       |subtab           |payer              | TransactionType |ChargeCode |       
       |"AR Management"  |"Erazo, Elisa"     |"Bad Debt"       |"Bad Debt"|          
       
     @ARManagement-PayerBalance
     Scenario Outline: AR Management & Summary : Record the transaction for Payer Balance in AR management & summary tab for Bad Debt Reversal transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not   
      And Capture Deposit payment      
      When Fill Transaction Data with <TransactionType> <ChargeCode>and Click SaveandClose     
      And Select Payer Balance link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction
      #Then Navigate to Parent profile<payer>
      #When Click on Finance Tab in contact profile
      #Then Verify transaction is recorded and Payer Balance is matching<payer><TransactionType><ChargeCode> 
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode> 
      
      Examples:
       |subtab           |payer              | TransactionType          |ChargeCode           |       
       |"AR Management"  |"Erazo, Elisa"     |"Bad Debt Reversal"       |"Bad Debt - - $5.00"| 
       
    @ARManagement-PayerBalance          
    Scenario Outline: AR Management & Summary : Record the transaction for Payer Balance in AR management & summary tab for Payment Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not   
      And Capture Deposit payment      
      #When Fill Transaction Data with <TransactionType> <ChargeCode>and Click SaveandClose  
      Then Fill Transaction Data with payment type and Click SaveandClose<TransactionType><Paidby><CheckNo>   
      When Select Payer Balance link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction     
     # Then Verify transaction is recorded and Payer Balance is matching<payer><TransactionType><ChargeCode> 
     Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode> 
      
      Examples:
       |subtab           |payer              | TransactionType  | ChargeCode |Paidby  |CheckNo    |
       |"AR Management"  |"Erazo, Elisa"     |"Payment"         |   ""          |"Check"  |123456789  |
    
    @ARManagement-PayerBalance
    Scenario Outline: AR Management & Summary : Record the transaction for Payer Balance in AR management & summary tab for Deposit Payment Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not
      And Capture Deposit payment        
      #When Fill Transaction Data with <TransactionType> <ChargeCode>and Click SaveandClose  
      Then Fill Transaction Data with payment type and Click SaveandClose<TransactionType><Paidby><CheckNo>       
      When Select Payer Balance link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction     
      #Then Verify transaction is recorded and Payer Balance is matching<payer><TransactionType><ChargeCode>
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>  
      
      Examples:
       |subtab           |payer              | TransactionType  | ChargeCode |Paidby  |CheckNo    |
       |"AR Management"  |"Erazo, Elisa"     |"Deposit Payment" |   ""          |"Check"  |123456789  |
       
    @ARManagement-PayerBalance
    Scenario Outline: AR Management & Summary : Record the transaction for Payer Balance in AR management & summary tab for Apply Deposit Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not
      And Capture Deposit payment        
      And Fill Transaction Data with Apply Deposit and Click SaveandClose<TransactionType>    
      When Select Payer Balance link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction     
      #Then Verify transaction is recorded and Payer Balance is matching<payer><TransactionType><ChargeCode>
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>  
      
      Examples:
       |subtab           |payer              | TransactionType  | ChargeCode    |Paidby   |CheckNo    |
       |"AR Management"  |"Erazo, Elisa"     |"Apply Deposit"   |   ""          |"Check"  |123456789  |
     
     @ARManagement-PayerBalance    
     Scenario Outline: AR Management & Summary : Record the transaction for Payer Balance in AR management & summary tab for Apply Deposit Reversal Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not
      And Capture Deposit payment        
     # And Fill Transaction Data with Apply Deposit and Click SaveandClose<TransactionType> 
      And Fill Transaction Data with <TransactionType> and Click SaveandClose   
      When Select Payer Balance link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction     
      #Then Verify transaction is recorded and Payer Balance is matching<payer><TransactionType><ChargeCode> 
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode> 
      
      Examples:
       |subtab           |payer              | TransactionType            | ChargeCode    |Paidby   |CheckNo    |
       |"AR Management"  |"Erazo, Elisa"     |"Apply Deposit Reversal"   |   ""          |"Check"  |123456789  |
       
   @ARManagement-PayerBalance    
   Scenario Outline: AR Management & Summary : Record the transaction for Payer Balance in AR management & summary tab for Deposit Payment Reversal Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not
      And Capture Deposit payment        
     # And Fill Transaction Data with Apply Deposit and Click SaveandClose<TransactionType> 
      And Fill Transaction Data with <TransactionType> and Click SaveandClose   
      When Select Payer Balance link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction     
      #Then Verify transaction is recorded and Payer Balance is matching<payer><TransactionType><ChargeCode>
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>  
      
      Examples:
       |subtab           |payer              | TransactionType            | ChargeCode    |Paidby   |CheckNo    |
       |"AR Management"  |"Erazo, Elisa"     |"Deposit Payment Reversal"  |   ""          |"Check"  |123456789  |    
    
    
    @ARManagement-PayerBalance   
    Scenario Outline: AR Management & Summary : Record the transaction for Payer Balance in AR management & summary tab for Payment Reversal Transaction type
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not
      And Capture Deposit payment        
     # And Fill Transaction Data with Apply Deposit and Click SaveandClose<TransactionType>         
      And Fill Transaction Data with <TransactionType> and Origninal Payment type Click SaveandClose
      When Select Payer Balance link for payers and aging<payer>
      Then Capture prepaid deposit from manual transaction     
     # Then Verify transaction is recorded and Payer Balance is matching<payer><TransactionType><ChargeCode> 
     Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode> 
      
      Examples:
       |subtab           |payer              | TransactionType    | ChargeCode    |Paidby   |CheckNo    |
       |"AR Management"  |"Erazo, Elisa"     |"Payment Reversal"  |   ""          |"Check"  |123456789  |  
       
    @ARManagement-PayerBalance
    Scenario Outline:AR Management & Summary : Record the transaction for  Payer Balance in AR management & summary tab for Charge Transfer
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab> 
      Then Wait until page load   
      Then Verify navigated to subtab or not<subtab>
      And Expand the Payers list      
      Then Verify payers and aging list is loading or not
      When Select Payer Balance link for payers and aging<payer>   
      Then Verify Manual Transaction popup opened or not
      And Capture Deposit payment    
      And Fill Transaction Data for Charge Transfer with <TransactionType> and SecondaryPayer <SecondaryContact><ChargeCode><Child> Click SaveandClose      
      When Select Payer Balance link for payers and aging<payer>    
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<payer><TransactionType><ChargeCode>     
      
      Examples:
       |subtab            |payer         |  TransactionType  | ChargeCode               |Paidby   |CheckNo   |SecondaryContact |Child |
       |"AR Management"  |"Vidi, Smitha" |"Charge Transfer"  | "Activity Fee Reversal" |"Check"  |123456789 | "Vidi, Venki"  |"Arshitha Vidi"|   
        