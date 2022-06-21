Feature: CenterMessages

  Scenario: Center Management: verify center message modal existence when we click on Add Message button
    Given Launch and Login into application
    When click on Center Management tab and click on Center Messages link
    Then click on Add Message button
    And verify the modal is displayed with expected fields
    
  Scenario Outline: Center Management: Add a message with display family information center as No
    Given Navigate back to Home page
    And Navigate to required center <CenterNumber>
    When click on Center Management tab and click on Center Messages link
    Then click on Add Message button
    And Enter startdate<StartDate>, Message <Message> and click on display on FIC<DisplayFIC>
    And click on save and close button, validate the message<Message> displayed in the grid.
    
  Examples:
    |CenterNumber|StartDate       |Message      |DisplayFIC|
    |"0404"      |"05-24-2022"    |"Test Message"|"No"|
    
  Scenario Outline: Center Management: Edit the message by clicking on edit button
    Given Navigate back to Home page
    When click on Center Management tab and click on Center Messages link
    And verify the message<Message> exists in the grid
    When click on edit button and edit the message<editedmsg>
    Then click on save and close button, validate the message<editedmsg> displayed in the grid.
  Examples:
    |CenterNumber|StartDate       |Message      |editedmsg|
    |"0404"      |"05-24-2022"    |"Test Message"|"Test Message edited"|
    
  Scenario Outline: Center Management: Delete message from the grid
    Given Navigate back to Home page
    When click on Center Management tab and click on Center Messages link
    And verify the message<editedmsg> exists in the grid
    And click on delete/remove button
    And click on button Ok 
    Then verify whether message<editedmsg> is deleted or not
  Examples:
    |CenterNumber|StartDate       |editedmsg|
    |"0404"      |"05-04-2022"    |"Test Message edited"|
    
  Scenario Outline: Center Management: Add and delete a message with display family information center as Yes
    Given Navigate back to Home page
    When click on Center Management tab and click on Center Messages link
    Then click on Add Message button
    And Enter startdate<StartDate>, Message <Message> and click on display on FIC<DisplayFIC>
    And click on save and close button, validate the message<Message> displayed in the grid.
    Then validate family information center image displayed in the grid.
    When click on delete/remove button
    And click on button Ok 
    
  Examples:
    |CenterNumber|StartDate       |Message                     |DisplayFIC|
    |"0404"      |"05-04-2022"    |"Test Message to display FIC"|"Yes"|
    
  Scenario Outline: Center Management: Add and delete a message with classes as Infant
    Given Navigate back to Home page
    When click on Center Management tab and click on Center Messages link
    Then click on Add Message button
    And Enter startdate<StartDate>, Message <Message> and click on display on FIC<DisplayFIC>
    And click on class message <ClassMsg>Select Class as <class>
    And click on save and close button, validate the message<class> displayed in the grid.
    Then validate family information center image displayed in the grid.
    When click on delete/remove button
    And click on button Ok 
    
  Examples:
    |CenterNumber|StartDate       |Message              |DisplayFIC|class   |ClassMsg|
    |"0404"      |"06-08-2022"    |"Holiday for infants"|"Yes"     |"Infant"|"Yes"|
    
  Scenario: Center Management: Check expired center message
    Given click on Expired messages link
    Then check for existence of Expired center messages grid
  
  Scenario: Center Management: Verify the existence of statement message modal
    Given Navigate back to Home page
    When click on Center Management tab and click on Center Messages link
    And click on Add Statement message
    Then Verify existence of statement message modal
  
  Scenario Outline: Center Management: Add a statement message
    Given Navigate back to Home page
    When click on Center Management tab and click on Center Messages link
    And click on Add Statement message
    And Enter message <Message> and click on save and close button
    Then validate the message<Message> you entered in statement messages section
    
  Examples: 
    |Message|
    |"Today is holiday"|
    
  Scenario Outline: Center Management: Edit a statement message
    Given click on Edit statement message button
    When  Enter message <Message> and click on save and close button
    Then validate the message<Message> you entered in statement messages section
  Examples: 
    |Message|
    |"Tomorrow is holiday"|
    
  Scenario Outline: Center Management: Delete a statement message
    Given click on Delete statement message button
    When  click on Ok button
    Then validate the message<Message> you entered is not displayed in statement messages section
  Examples: 
    |Message|
    |"Tomorrow is holiday"|