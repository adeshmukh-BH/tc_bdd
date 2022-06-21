Feature: Test the Bright star login functionality with different sets of data

  @Smoke
   Scenario Outline: Check the Login form with invalid password
     Given Launch browser and Navigate to application
     When I enter  Valid <Username>, and invalid <Password>  
     And click on Login button
     Then User unable to land on homepage and will get a error message
     
   Examples: 
      |Username      | Password |
      |"99160101"    |"Nvi01553"|
      
   @Smoke
   Scenario Outline: Check the Login form with invalid Username
     When I enter  invalid <Username> and valid <Password>  
     And click on Login button
     Then User unable to land on homepage and will get a error message
     
   Examples:
      |Username      | Password |
      |"99901556"    |"Sam25You"|
      
    @Smoke
   Scenario Outline: Check the Login form with invalid Username and password
     When I enter  invalid<Username> and invalid <Password>  
     And click on Login button
     Then User unable to land on homepage and will get a error message
     
   Examples: 
      |Username      | Password|
      |"99901553"    |"Nvi01553"|
      
   @Smoke
   Scenario Outline: Check the Login form with Valid Credentials
     When I enter  valid<Username> and valid <Password>  
     And click on Login button
     Then User should land on HomePage
   
     Examples: 
     |Username      | Password|
     |"99160101"    |"Sam26You"|
     
     
     