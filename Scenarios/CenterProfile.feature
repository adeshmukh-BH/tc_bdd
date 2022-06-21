Feature: CenterProfile

  Scenario Outline: Center Management: Open and verify Center Profile
    Given Launch and Login into application
    And Navigate to required center <CenterNumber>
    When Click Center Profile Tab and navigate to sub tab<subtab>    
    Then Verify Center number in Center profile page<CenterNumber>
    And Verify Center Closed Dates grid is available or not    
        
    Examples:
    |CenterNumber|  subtab           |
    |"0404"      |  "Center Profile" |
    
    
   Scenario Outline: Center Management: Open Center Closed Date Modal and verify fields exist
   # Given Launch and Login into application
   # And Navigate to required center <CenterNumber>
   # When Click Center Profile Tab and navigate to sub tab<subtab>    
    When Click on Add Center Closed Date button
    Then Verify Center Closed Date Modal opened or not 
    And Verify All internal fields exist  
    When Click on Cancel button 
        
    Examples:
    |CenterNumber|  subtab           |
    |"0404"      |  "Center Profile" |
    
    
    Scenario Outline: Center Management: Verify transaction while click on Cancel button
   # Given Launch and Login into application
   # And Navigate to required center <CenterNumber>
   # When Click Center Profile Tab and navigate to sub tab<subtab>    
    When Click on Add Center Closed Date button
    Then Verify Center Closed Date Modal opened or not 
    And Verify All internal fields exist 
    When Fill the data into Modal<HolidayName>
    And Click on Cancel button
    Then Verify Transaction is Recorded for cancel functionality<HolidayName>
        
    Examples:
    |CenterNumber|  subtab           |HolidayName           |
    |"0404"      |  "Center Profile" |"Independence Day"    |
    
    Scenario Outline: Center Management: Verify transaction while click on Close button
   # Given Launch and Login into application
  #  And Navigate to required center <CenterNumber>
   # When Click Center Profile Tab and navigate to sub tab<subtab>    
    When Click on Add Center Closed Date button
    Then Verify Center Closed Date Modal opened or not 
    And Verify All internal fields exist 
    When Fill the data into Modal<HolidayName>
    And Click on Close button
    Then Verify Transaction is Recorded for Close functionality<HolidayName>  
        
    Examples:
    |CenterNumber|  subtab           |HolidayName           |
    |"0404"      |  "Center Profile" |"Independence Day"    |
    
    Scenario Outline: Center Management: Verify transaction while select Full Day and click on Save & Close button
   # Given Launch and Login into application
  #  And Navigate to required center <CenterNumber>
  #  When Click Center Profile Tab and navigate to sub tab<subtab>    
    When Click on Add Center Closed Date button
    Then Verify Center Closed Date Modal opened or not 
    And Verify All internal fields exist 
    When Fill the data into Modal<HolidayName>
    And Click on Save & Close button
    Then Verify Transaction is Recorded for Save & Close functionality<HolidayName>  
        
    Examples:
    |CenterNumber|  subtab           |HolidayName           |
    |"0404"      |  "Center Profile" |"Independence Day"    |
    
    Scenario Outline: Center Management: Verify transaction while select specific Time and click on Save & Close button
   # Given Launch and Login into application
   # And Navigate to required center <CenterNumber>
    #When Click Center Profile Tab and navigate to sub tab<subtab>    
    When Click on Add Center Closed Date button
    Then Verify Center Closed Date Modal opened or not 
    And Verify All internal fields exist 
    When Fill the data into Modal with specific time<HolidayName>
    And Click on Save & Close button
    Then Verify Transaction is Recorded for Save & Close functionality<HolidayName>  
        
    Examples:
    |CenterNumber|  subtab           |HolidayName     |
    |"0404"      |  "Center Profile" |"Testing123"    |
    
    Scenario Outline: Center Management: Verify transaction while select duplicate date and click on Save & Close button
   # Given Launch and Login into application
   # And Navigate to required center <CenterNumber>
   # When Click Center Profile Tab and navigate to sub tab<subtab>    
    When Click on Add Center Closed Date button
    Then Verify Center Closed Date Modal opened or not 
    And Verify All internal fields exist 
    When Fill the data into Modal<HolidayName>    
    Then Verify Duplicate date validation working or not 
    When Click on Cancel button 
        
    Examples:
    |CenterNumber|  subtab           |HolidayName           |
    |"0404"      |  "Center Profile" |"Independence Day"    |
    
    Scenario Outline: Center Management: Verify Edit funcationality in Center Closed Dates Grid      
    When Edit the recent HolidayName<HolidayName> 
    And Click on Save & Close button
    Then Verify Transaction is Recorded for Save & Close functionality<HolidayName>  
   # Then Verify Transaction record is updated in Center closed Date Grid<HolidayName>    
        
    Examples:
    |CenterNumber|  subtab           |HolidayName     |
    |"0404"      |  "Center Profile" |"Testing123Edit"    |
    
    Scenario Outline: Center Management: Verify Record has been removed after click on delete button in Center closed Date Grid
   # Given Launch and Login into application
    #And Navigate to required center <CenterNumber>
   # When Click Center Profile Tab and navigate to sub tab<subtab>     
    When Delete the recent HolidayName<HolidayName> 
    Then Verify Transaction record is removed in Center closed Date Grid<HolidayName>  
        
    Examples:
    |CenterNumber|  subtab           |HolidayName     |
    |"0404"      |  "Center Profile" |"Testing123"    |
    
    
    Scenario Outline: Center Management: Verify Center closed dates are with in limited dates or not
   # Given Launch and Login into application
  # And Navigate to required center <CenterNumber>
    Given Navigate back to Home page
    When Click Center Profile Tab and navigate to sub tab<subtab>    
    When Select date filters and click on refresh button<StartDate><EndDate>
    Then Verify grid dates are displaying with in limit or not<StartDate><EndDate>
    
        
    Examples:
    |CenterNumber|  subtab           |StartDate       |EndDate      |
    |"0404"      |  "Center Profile" |"05-01-2022"    |"05-01-2023" |