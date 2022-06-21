Feature: RecordManualTransaction in Child Profile

  @RegressionTesting
  Scenario Outline: Finance Tab : Open Record Manual Trasction Modal in Child Profile
    #Given Launch and Login into application
    Given Navigate to required center <CenterNumber>
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
        
    Examples:
    |CenterNumber|  ChildrenName|
    |"0404"|        "Arshitha" |
    
  @RegressionTesting  
  Scenario Outline: Finance Tab : Verify transaction type while click on Cancel button
    Given Navigate back to Home page
    #And Navigate to required center <CenterNumber>
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Verify Cancel Functionality<TransactionType>
    #Then Capture prepaid deposit from manual transaction & click on Cancel
    And Navigate to Parent profile of child<Contact>
    And Verify transaction is recorded with Deposit Payment and paid by check
    
    Examples:
     |CenterNumber|  ChildrenName |  TransactionType|Contact |
     |"0404"      |  "Arshitha"   |  "Charge"       |"Vidi, Smitha"|
   
   @RegressionTesting 
   Scenario Outline: Finance Tab : Verify transaction type while click on close icon
    Given Navigate back to Home page 
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Verify Close modal Functionality<TransactionType>
    And Navigate to Parent profile of child<Contact>
    And Verify transaction is recorded with Deposit Payment and paid by check
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType|Contact |
     |"0404"      |  "Arshitha"  |  "Credit"       |"Vidi, Smitha"|
   
   @RegressionTesting  
   Scenario Outline: Finance Tab : Verify transaction is recorded due to a zero dollar amount
    Given Navigate back to Home page    
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Verify transaction is recorded due to a zero dollar amount<TransactionType>
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType|
     |"0404"      |  "Arshitha" |  "Credit"       |
  
   @RegressionTesting
   Scenario Outline: Finance Tab : Verify transaction is recorded with amount
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Fill Transaction Data and Click SaveandClose<TransactionType><ChargeCode>
    And Navigate to Parent profile of child<Contact>
    And Verify transaction is recorded with amount<ChargeCode>
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType| Contact     |ChargeCode               |
     |"0404"      |  "Arshitha" |  "Credit"       |"Vidi, Smitha"| "Balance Forward Credit"|
    
    @RegressionTesting
    Scenario Outline: Finance Tab : Verify transaction is recorded due to a zero dollar amount and Bad Debt transaction type
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Verify transaction is recorded due to a zero dollar amount and Bad Debt transaction type<TransactionType>
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType|
     |"0404"      |  "Arshitha" |  "Bad Debt"       |
    
    @RegressionTesting 
    Scenario Outline: Finance Tab : Verify transaction is recorded with amount and Bad Debt transaction type
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Fill Transaction Data with Bad Debt and Click SaveandClose<TransactionType><ChargeCode>
    And Navigate to Parent profile of child<Contact>
    And Verify transaction is recorded with amount<ChargeCode>
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType| Contact       |ChargeCode |
     |"0404"      |  "Arshitha" |  "Bad Debt"       |"Vidi, Smitha"| "Bad Debt"|
   
   @RegressionTesting  
   Scenario Outline: Finance Tab : Verify transaction is recorded due to a zero dollar amount and Payment transaction type
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Verify transaction is recorded due to a zero dollar amount and Payment transaction type<TransactionType><Paidby><CheckNo>
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType|  Paidby |CheckNo   |
     |"0404"      |  "Arshitha" |  "Payment"      |  "Check"|123456789|
    
    @RegressionTesting 
    Scenario Outline: Finance Tab : Verify transaction is recorded with amount and Payment transaction type
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Fill Transaction Data with payment type and Click SaveandClose<TransactionType><Paidby><CheckNo>
    And Navigate to Parent profile of child<Contact>
    And Verify transaction is recorded with amount<Paidby>
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType| Contact             | Paidby |CheckNo   |
     |"0404"      |  "Arshitha" |  "Payment"      |"Vidi, Smitha"| "Check"|123456789|
   
   @RegressionTesting  
   Scenario Outline: Finance Tab : Verify transaction is recorded due to a zero dollar amount and Deposit Payment transaction type
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Verify transaction is recorded due to a zero dollar amount and Payment transaction type<TransactionType><Paidby><CheckNo>
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType        |  Paidby |CheckNo   |
     |"0404"      |  "Arshitha" |  "Deposit Payment"      |  "Check"|123456789|
   
   @RegressionTesting  
   Scenario Outline: Finance Tab : Verify transaction is recorded with amount and Deposit Payment transaction type
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Fill Transaction Data with payment type and Click SaveandClose<TransactionType><Paidby><CheckNo>
    When Click on Record Manual Trasction button
    Then Capture prepaid deposit from manual transaction
    And Navigate to Parent profile of child<Contact>
    And Verify transaction is recorded with Deposit Payment and paid by check
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType  | Contact             | Paidby |CheckNo   |
     |"0404"      |  "Arshitha" |  "Deposit Payment"|"Vidi, Smitha"         | "Check"|123456789|
    
    @RegressionTesting 
    Scenario Outline: Finance Tab : Verify transaction is recorded with amount and Apply Deposit transaction type
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Fill Transaction Data with Apply Deposit and Click SaveandClose<TransactionType>
    When Click on Record Manual Trasction button
    Then Capture prepaid deposit from manual transaction
    And Navigate to Parent profile of child<Contact>
    And Verify transaction is recorded and Balance is matching
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType  | Contact           | 
     |"0404"      |  "Arshitha" |  "Apply Deposit"  |"Vidi, Smitha"| 
     
    @RegressionTesting 
    Scenario Outline: Finance Tab : Verify Apply Deposit Reversal selected in transaction type  
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    Then Select Apply Deposit Reverals in Transaction type<TransactionType>
    And Verify Apply Deposit Reverals selected in Transaction type<TransactionType>
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType           | Contact           | 
     |"0404"      |  "Arshitha" |  "Apply Deposit Reversal"  |"Vidi, Smitha"|
    
    @RegressionTesting 
    Scenario Outline: Finance Tab : Verify transaction is recorded with Apply Deposit Reversal transaction type
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Fill Transaction Data with <TransactionType> and Click SaveandClose
    When Click on Record Manual Trasction button
    Then Capture prepaid deposit from manual transaction
    And Navigate to Parent profile of child<Contact>
    And Verify transaction is recorded and Balance is matching
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType           | Contact           | 
     |"0404"      |  "Arshitha" |  "Apply Deposit Reversal"  |"Vidi, Smitha"|
    
    @RegressionTesting 
    Scenario Outline: Finance Tab : Verify transaction is recorded with Deposit Payment Reversal transaction type
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Fill Transaction Data with <TransactionType> and Click SaveandClose
    When Click on Record Manual Trasction button
    Then Capture prepaid deposit from manual transaction
    And Navigate to Parent profile of child<Contact>
    And Verify transaction is recorded and Balance is matching
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType           | Contact           | 
     |"0404"      |  "Arshitha" |  "Deposit Payment Reversal"  |"Vidi, Smitha"|   
    
    @RegressionTesting 
    Scenario Outline: Finance Tab : Verify transaction type Payment Reversal while click on Cancel button
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Verify Cancel Functionality<TransactionType>
    And Navigate to Parent profile of child<Contact>
    And Verify transaction is recorded with Deposit Payment and paid by check
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType|Contact|
     |"0404"      |  "Arshitha" |"Payment Reversal"|"Vidi, Smitha"|
     
    
    @RegressionTesting
    Scenario Outline: Finance Tab : Verify transaction type Payment Reversal while click on close icon
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Verify Close modal Functionality<TransactionType>
    And Navigate to Parent profile of child<Contact>
    And Verify transaction is recorded with Deposit Payment and paid by check
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType|Contact|
     |"0404"      |  "Arshitha" |"Payment Reversal"|"Vidi, Smitha"|
   
   @RegressionTesting  
   Scenario Outline: Finance Tab : Verify transaction is recorded with Payment Reversal transaction type
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Fill Transaction Data with <TransactionType> and Origninal Payment type Click SaveandClose
    When Click on Record Manual Trasction button
    Then Capture prepaid deposit from manual transaction
    And Navigate to Parent profile of child<Contact>
    And Verify transaction is recorded and Balance is matching
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType     | Contact           | 
     |"0404"      |  "Arshitha" |  "Payment Reversal"  |"Vidi, Smitha"| 
	 
	@RegressionTesting
  Scenario Outline: Finance Tab : Verify transaction is recorded with Bad Debt Reversal Reversal transaction type
	Given Navigate back to Home page
	And Search for required Child <ChildrenName>
	And Navigate to Child Profile <ChildrenName>
	When Click on Finance Tab
	And Click on Record Manual Trasction button
	And Fill Transaction Data with <TransactionType> <Charge>and Click SaveandClose
	And Click on Record Manual Trasction button
	Then Capture balance due from manual transaction
	And Navigate to Parent profile of child<Contact>
	And Check transaction is recorded and Balance is matching

	Examples:
	|CenterNumber| ChildrenName| TransactionType | Contact | Charge|
	|"0404" | "Arshitha" | "Bad Debt Reversal" |"Vidi, Smitha"| "Bad Debt - - $5.00"|
	
	  
   @RegressionTesting 
    Scenario Outline: Finance Tab : Verify transaction type Charge Transfer while click on Cancel button
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Verify Cancel Functionality<TransactionType>
    And Navigate to Parent profile of child<Contact>
    And Verify transaction is recorded with Deposit Payment and paid by check
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType|Contact|
     |"0404"      |  "Arshitha" |"Charge Transfer"|"Vidi, Smitha"|
     
    
    @RegressionTesting
    Scenario Outline: Finance Tab : Verify transaction type Charge Transfer while click on close icon
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Verify Close modal Functionality<TransactionType>
    And Navigate to Parent profile of child<Contact>
    And Verify transaction is recorded with Deposit Payment and paid by check
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType|Contact|
     |"0404"      |  "Arshitha" |"Charge Transfer"|"Vidi, Smitha"|
   
   
   @RegressionTesting  
   Scenario Outline: Finance Tab : Verify transaction is recorded with Charge Transfer transaction type
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not
    And Verify Internal Fields exists or not
    And Fill Transaction Data with <TransactionType> and SecondaryPayer <SecondaryContact><chargeCode> Click SaveandClose
    When Click on Record Manual Trasction button
    Then Capture prepaid deposit from manual transaction
    And Navigate to Parent profile of child<Contact>
    And Verify transaction is recorded and Balance is matching
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType    | Contact       | SecondaryContact  |chargeCode|
     |"0404"      |  "Arshitha" |  "Charge Transfer"  |"Vidi, Smitha"  | "Vidi, Venki"      |"Activity Fee Reversal"|
     
   @RegressionTesting
   Scenario Outline: Finance Tab : Verify Balance due for secondary payer after Charge Transfer from Primary payer
    Given Navigate back to Home page
    And Search for required Child <ChildrenName>
    And Navigate to Child Profile <ChildrenName>
    When Click on Finance Tab
    And Click on Record Manual Trasction button
    Then Verify Manual Transaction popup opened or not    
    When Select the seconday payer<SecondaryContact>
    Then Capture prepaid deposit from manual transaction
    And Navigate to Parent profile of child<SecondaryContact>
    And Verify Balances are matching for Seconndary Payer
    And Verify transaction is recorded with amount<TransactionType>
    
    Examples:
     |CenterNumber|  ChildrenName|  TransactionType    | Contact     | SecondaryContact  |chargeCode|
     |"0404"      |  "Arshitha" |  "Charge Transfer"  |"Vidi, Smitha"| "Vidi, Venki"|"Activity Fee Reversal"|
     
   #********Verify Record manual transaction in Child Management************# 
    
   @RegressionTesting 
    Scenario Outline: Child Management : Record Manual Transaction Verify transaction is recorded with amount
      Given Navigate back to Home page
      When Click on Child managememt tab
      Then User should navigate to child management
      When click on Refresh List button
      Then Verify data is loading or not in child list grid
      And Select multiple records and verify Group action button enabled or not in childManagment<payer1> 
      When Click on Finance Tab in childprofile
      When Click on Record Manual Trasction button in childprofile      
      Then Capture prepaid deposit from manual transaction
      Then Navigate back to childmanagement
      When Select Charge&credit from group actions in childManagement
      Then Verify Manual Transaction popup opened or not 
      And Fill Transaction Data and Click SaveandClose<TransactionType><ChargeCode>
      When click on Refresh List button for loading the data
      Then Verify data is loading or not in child list grid
      And Select multiple records and verify Group action button enabled or not in childManagment<payer1>
      When Click on Finance Tab in childprofile
      When Click on Record Manual Trasction button in childprofile 
      Then Verify Balances are updated or not<payer1><TransactionType><ChargeCode>
      
      
      Examples:       
     |subtab              |payer1               | TransactionType   |ChargeCode             |  
     |"Child Management"  |"Cornet, Gabriel"    |"Credit"           |"Activity Fee Reversal"|
     |"Child Management"  |"Cubbin, Mackenzie"  |"Charge"           |"Activity Fee"|
     

      #********Verify Record manual transaction in Contact Profile************# 
     @ContactProfile-RecordManualTransaction
     Scenario Outline: Contact Profile : Record the transaction for Payers in Contact Profile
      Given Navigate back to Home page
      When Click Billing & payment Tab and navigate to sub tab<subtab>    
      Then Verify navigated to subtab or not<subtab>
      When click on Refresh List button for loading the data
      Then Verify payers list is loading or not
      When Select Contact from payers list<Contact>  
      And Click on Finance Tab in contact profile
      And Select Record Manual Transaction from Actions Dropdown 
      Then Verify Manual Transaction popup opened or not
      And Capture Balance & Deposit before transaction
      And Fill Transaction Data and Click SaveandClose<TransactionType><ChargeCode>
      When Select Record Manual Transaction from Actions Dropdown      
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<Contact><TransactionType><ChargeCode>  
      
      Examples:
       |subtab    |Contact          | TransactionType |ChargeCode |         
       |"Payers"  |"Ashley, Autumn" |"Charge"         |"Activity Fee"|
       |"Payers"  |"Ashley, Autumn" |"Charge"         |"Balance Forward Charge"|
       |"Payers"  |"Ashley, Autumn" |"Credit"         |"Activity Fee Reversal"|
       
    @ContactProfile-RecordManualTransaction
     Scenario Outline: Contact Profile : Record the transaction for Payers in Contact Profile for Bad Debt transaction type     
      When Select Record Manual Transaction from Actions Dropdown 
      Then Verify Manual Transaction popup opened or not
      And Capture Balance & Deposit before transaction
      And Fill Transaction Data with Bad Debt and Click SaveandClose<TransactionType><ChargeCode>
      When Select Record Manual Transaction from Actions Dropdown      
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<Contact><TransactionType><ChargeCode>
     
     Examples:
       |subtab    |Contact          | TransactionType |ChargeCode |         
       |"Payers"  |"Ashley, Autumn" |"Bad Debt"         |"Bad Debt"|
     
    @ContactProfile-RecordManualTransaction  
    Scenario Outline: Contact Profile : Record the transaction for Payers in Contact Profile for Bad Debt Reversal transaction type     
      When Select Record Manual Transaction from Actions Dropdown 
      Then Verify Manual Transaction popup opened or not
      And Capture Balance & Deposit before transaction
       When Fill Transaction Data with <TransactionType> <ChargeCode>and Click SaveandClose 
      When Select Record Manual Transaction from Actions Dropdown      
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<Contact><TransactionType><ChargeCode>
     
     Examples:
       |subtab    |Contact          | TransactionType            |ChargeCode |         
       |"Payers"  |"Ashley, Autumn" |"Bad Debt Reversal"         |"Bad Debt - - $5.00"|
    
    @ContactProfile-RecordManualTransaction   
    Scenario Outline: Contact Profile : Record the transaction for Payers in Contact Profile for Payment Transaction type     
      When Select Record Manual Transaction from Actions Dropdown 
      Then Verify Manual Transaction popup opened or not
      And Capture Balance & Deposit before transaction
      Then Fill Transaction Data with payment type and Click SaveandClose<TransactionType><Paidby><CheckNo> 
      When Select Record Manual Transaction from Actions Dropdown      
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<Contact><TransactionType><ChargeCode>
     
     Examples:
       |subtab    |Contact          | TransactionType  |ChargeCode |   Paidby  |CheckNo   |      
       |"Payers"  |"Ashley, Autumn" |"Payment"         |""         |"Check"    |123456789  |
       
    @ContactProfile-RecordManualTransaction   
    Scenario Outline: Contact Profile : Record the transaction for Payers in Contact Profile for Deposit Payment Transaction type     
      When Select Record Manual Transaction from Actions Dropdown 
      Then Verify Manual Transaction popup opened or not
      And Capture Balance & Deposit before transaction
      Then Fill Transaction Data with payment type and Click SaveandClose<TransactionType><Paidby><CheckNo>  
      When Select Record Manual Transaction from Actions Dropdown      
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<Contact><TransactionType><ChargeCode>
     
     Examples:
       |subtab    |Contact          | TransactionType  |ChargeCode |   Paidby  |CheckNo   |      
       |"Payers"  |"Ashley, Autumn" |"Deposit Payment" |""         |"Check"    |123456789  |
    
    @ContactProfile-RecordManualTransaction   
    Scenario Outline: Contact Profile : Record the transaction for Payers in Contact Profile for Apply Deposit Transaction type     
      When Select Record Manual Transaction from Actions Dropdown 
      Then Verify Manual Transaction popup opened or not
      And Capture Balance & Deposit before transaction
      Then Fill Transaction Data with Apply Deposit and Click SaveandClose<TransactionType>  
      When Select Record Manual Transaction from Actions Dropdown      
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<Contact><TransactionType><ChargeCode>
     
     Examples:
       |subtab    |Contact          | TransactionType  |ChargeCode |   Paidby  |CheckNo   |      
       |"Payers"  |"Ashley, Autumn" |"Apply Deposit"   |""         |"Check"    |123456789  |
    
    @ContactProfile-RecordManualTransaction   
    Scenario Outline: Contact Profile : Record the transaction for Payers in Contact Profile for Apply Deposit Reversal Transaction type     
      When Select Record Manual Transaction from Actions Dropdown 
      Then Verify Manual Transaction popup opened or not
      And Capture Balance & Deposit before transaction
      Then Fill Transaction Data with <TransactionType> and Click SaveandClose  
      When Select Record Manual Transaction from Actions Dropdown      
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<Contact><TransactionType><ChargeCode>
     
     Examples:
       |subtab    |Contact          | TransactionType           |ChargeCode |   Paidby  |CheckNo   |      
       |"Payers"  |"Ashley, Autumn" |"Apply Deposit Reversal"   |""         |"Check"    |123456789  |
    
    @ContactProfile-RecordManualTransaction      
    Scenario Outline: Contact Profile : Record the transaction for Payers in Contact Profile for Deposit Payment Reversal Transaction type     
      When Select Record Manual Transaction from Actions Dropdown 
      Then Verify Manual Transaction popup opened or not
      And Capture Balance & Deposit before transaction
      Then Fill Transaction Data with <TransactionType> and Click SaveandClose  
      When Select Record Manual Transaction from Actions Dropdown      
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<Contact><TransactionType><ChargeCode>
     
     Examples:
       |subtab    |Contact          | TransactionType           |ChargeCode |   Paidby  |CheckNo   |      
       |"Payers"  |"Ashley, Autumn" |"Deposit Payment Reversal" |""         |"Check"    |123456789  |
    
    @ContactProfile-RecordManualTransaction   
    Scenario Outline: Contact Profile : Record the transaction for Payers in Contact Profile for Payment Reversal Transaction type     
      When Select Record Manual Transaction from Actions Dropdown 
      Then Verify Manual Transaction popup opened or not
      And Capture Balance & Deposit before transaction      
      And Fill Transaction Data with <TransactionType> and Origninal Payment type Click SaveandClose  
      When Select Record Manual Transaction from Actions Dropdown      
      Then Capture prepaid deposit from manual transaction
      Then Verify transaction is recorded and Balance due is matching<Contact><TransactionType><ChargeCode>
     
     Examples:
       |subtab    |Contact          | TransactionType           |ChargeCode |   Paidby  |CheckNo   |      
       |"Payers"  |"Ashley, Autumn" |"Payment Reversal"         |""         |"Check"    |123456789  |