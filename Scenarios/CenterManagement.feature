@cm
Feature: CenterManagement
  
  
 #---------------------------------------------Clients----------------------------------------------------------------------   
  Scenario Outline: Center Management: Searching for clients by using client filters
    Given Navigate back to Home page
    When click on Center Management tab and click on clients link
    And Select the filter <Filter>
    And Enter search key <SearchKey> in search box
    Then Click on search button
    And validate the displayed results from the grid<SearchKey>
    
  Examples:
    |CenterNumber|Filter    |SearchKey|
    |"0404"      |"Any Part"|"Amazon"|
    |"0404"      |"Start Of"|"Facebook"|
    |"0404"      |"Equals"|"Microsoft"|
    |"0404"      |"All Clients"|""|
    
  Scenario Outline:Verify Clients Search Filter Criteria
    Given Navigate back to Home page
    When click on Center Management tab and click on clients link
    And Select the filter <Filter>
    And Enter search key <SearchKey1> in search box
    Then Click on search button
    And Validate error message
    When Enter search key <SearchKey2> in search box
    Then Click on search button
    And validate the displayed results from the grid<SearchKey2>
    
  Examples:
    |CenterNumber|Filter    |SearchKey1|SearchKey2|
    |"0404"      |"Any Part"|"a"|"Amazon"|
    
  Scenario Outline: Validate the profile data after clicking on info button
    Given Navigate back to Home page
    When click on Center Management tab and click on clients link
    And Select the filter <Filter>
    And Enter search key <SearchKey> in search box
    Then Click on search button
    And click on info button of the client <SearchKey>
    And validate client data is displayed <SearchKey>
    
  Examples:
    |CenterNumber|Filter    |SearchKey|
    |"0404"      |"Any Part"|"Microsoft"|
 #------------------------------------------------Staff Management---------------------------------------------------   
  Scenario Outline: Center Management: Search for staff using staff filters in Staff Management 
    Given Navigate back to Home page
    When click on Center Management tab and click on Staff management link
    And Select the class category <Category> and staff status <Status>
    And click on Refresh List button
    Then Validate the data which is displayed on the grid<Category> and <Status>
    
  Examples:
    |"0404"      |"All"|"Active"|
    |"0404"      |"Infant"|"Active"|
    |"0404"      |"Infant"|"Inactive"|
    |"0404"      |"Toddler"|"Active"|
    |"0404"      |"Toddler"|"Inactive"|
    |"0404"      |"Preschool"|"Active"|
    |"0404"      |"Preschool"|"Inactive"|
    

      