Feature: Home Page: Find People Advanced Button

  @RegressionTesting
  Scenario Outline: Home Page: Find people Advanced My Centers
    Given Launch and Login into application
    When Click on Advanced Button
    Then User able to see and click find in people radio buttons
    And User able to enter <PersonName> in alpha numerical format
    And User able to enter <Email> in the textbox
    And User can check Non US checkbox and able to enter <PhoneNumber>
    And User can select any of the radio buttons <RecordId>
    And User is able to click on search, clear criteria and cancel buttons.
    
    Examples:
    
      |PersonName         |Email            |PhoneNumber        |RecordId|
      |"TommyBrown12"     |"Tommy@gmail.com"|"07842242254"      |"123456"|
  
  @RegressionTesting    
  Scenario Outline: Home Page: Find people Advanced My Centers with Record id     
    Given Navigate back to Home page
    And Navigate to required center <CenterNumber> 
    When Click on Advanced Button
    Then User able to see and click find in people radio buttons
    And User able to enter <PersonName> in alpha numerical format
    And User able to enter <Email> in the textbox
    And User can check Non US checkbox and able to enter <PhoneNumber>
    And User can select any of the radio buttons <RecordId>
    And User should click on search button.
    And Verify Child is available in search result <PersonName>
    And Verify Contact is available in search result <PersonName>
    And Verfiy ButtonAddToCenter is disabled or not

    Examples:
    
      |PersonName         |Email            |PhoneNumber        |RecordId|  CenterNumber|
      |"Chiaro Fiona"       |""               |"7866123123"     |"4226111"|"0404"|
  
  @RegressionTesting    
  Scenario Outline: Home Page: Find people Advanced My Centers with Online payer Id
    Given Navigate back to Home page
    When Click on Advanced Button
    Then User able to see and click find in people radio buttons
    And User able to enter <PersonName> in alpha numerical format
    And User able to enter <Email> in the textbox
    And User can check Non US checkbox and able to enter <PhoneNumber>
    And User should select Online payer Id radio buttons <RecordId>
    And User should click on search button.
    And Verify Child is available in search result <PersonName>
    And Verify Contact is available in search result <PersonName>
    
    Examples:
    
      |PersonName     |Email              |PhoneNumber        |RecordId|
      |"Chiaro Joseph"       |"jac9258@nyp.org"  |"7866123123"       |"562692"|
  
  @RegressionTesting    
  Scenario Outline: Home Page: Find people Advanced My Centers with US phone number
    Given Navigate back to Home page
    When Click on Advanced Button
    Then User able to see and click find in people radio buttons
    And User able to enter <PersonName> in alpha numerical format
    And User able to enter <Email> in the textbox
    And User should able to enter US phonenumber <PhoneNumber>
    And User can select any of the radio buttons <RecordId>
    And User should click on search button.
    And Verify Child is available in search result <PersonName>
    And Verfiy ButtonAddToCenter is disabled or not
    
    Examples:
    
      |PersonName         |Email            |PhoneNumber        |RecordId|
      |"Chiaro Fiona"       |""               |"215-807-9881"     |"4226111"|
 
 @RegressionTesting    
 Scenario Outline: Home Page: Find people Advanced My Centers with US phone number & Online Payer Id
    Given Navigate back to Home page
    When Click on Advanced Button
    Then User able to see and click find in people radio buttons
    And User able to enter <PersonName> in alpha numerical format
    And User able to enter <Email> in the textbox
    And User should able to enter US phonenumber <PhoneNumber>
    And User should select Online payer Id radio buttons <RecordId>
    And User should click on search button.
    And Verify Child is available in search result <PersonName>
    And Verify Contact is available in search result <PersonName>
    
    Examples:
    
      |PersonName         |Email            |PhoneNumber        |RecordId|
      |"Chiaro Joseph"        |""              |"215-807-9881"      |"562692"|
 
 @RegressionTesting
 Scenario Outline: Home Page: Find people Advanced All Centers
    #Given Launch and Login into application
    Given Navigate back to Home page
    When Click on Advanced Button
    Then User able to see Find People In radio buttons and Select Allradio button option 
    And User able to enter <PersonName> in alpha numerical format
    And User able to enter <Email> in the textbox
    And User can check Non US checkbox and able to enter <PhoneNumber>
    And User can select any of the radio buttons <RecordId>
    And User should click on search button.
    And Verify Child is available in search result for All Centers <PersonName>
    And Verify Contact is available in search result for All Centers<PersonName>
    And Verfiy ButtonAddToCenter is enabled or not

    Examples:
    
      |PersonName         |Email            |PhoneNumber        |RecordId|
      |"Calum Gudelski"       |""               |"7861231233"       |"3701721"|
 
 @RegressionTesting     
 Scenario Outline: Home Page: Find people Advanced All Centers- with Non Us phone nubmer & Online Payer ID
    Given Navigate back to Home page
    When Click on Advanced Button
    Then User able to see Find People In radio buttons and Select Allradio button option 
    And User able to enter <PersonName> in alpha numerical format
    And User able to enter <Email> in the textbox
    And User can check Non US checkbox and able to enter <PhoneNumber>
    And User should select Online payer Id radio buttons <RecordId>
    And User should click on search button.
    And Verify Child is available in search result for All Centers <PersonName>
    And Verify Contact is available in search result for All Centers<PersonName>
    
    Examples:
    
      |PersonName         |Email            |PhoneNumber        |RecordId|
      |"Gallagan Gudelski" |""               |"7861231233"       |"326679"|
 
 @RegressionTesting     
 Scenario Outline: Home Page: Find people Advanced All Centers with US phone number
    Given Navigate back to Home page
    When Click on Advanced Button
    Then User able to see Find People In radio buttons and Select Allradio button option 
    And User able to enter <PersonName> in alpha numerical format
    And User able to enter <Email> in the textbox
    And User should able to enter US phonenumber <PhoneNumber>
    And User can select any of the radio buttons <RecordId>
    And User should click on search button.
    And Verify Child is available in search result for All Centers <PersonName>
    And Verify Contact is available in search result for All Centers<PersonName>
    And Verfiy ButtonAddToCenter is enabled or not
    
    Examples:
    
       |PersonName         |Email            |PhoneNumber        |RecordId|
      |"Calum Gudelski"       |""            |"978-273-9947"       |"3701721"|
 
 @RegressionTesting     
 Scenario Outline: Home Page: Find people Advanced All Centers with US phone number & Online payer ID
    Given Navigate back to Home page
    When Click on Advanced Button
    Then User able to see Find People In radio buttons and Select Allradio button option 
    And User able to enter <PersonName> in alpha numerical format
    And User able to enter <Email> in the textbox
    And User should able to enter US phonenumber <PhoneNumber>
    And User should select Online payer Id radio buttons <RecordId>
    And User should click on search button.
    And Verify Child is available in search result for All Centers <PersonName>
    And Verify Contact is available in search result for All Centers<PersonName>
    
    Examples:
    
      |PersonName         |Email            |PhoneNumber        |RecordId|
      |"Gallagan Gudelski" |""         |"978-273-9947"       |"326679"|
    