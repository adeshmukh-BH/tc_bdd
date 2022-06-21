Feature: Home Page : Find people search in MyCenter & All Centers

  @RegressionTesting
  Scenario Outline: Home Page: Find people Search with My Centers 
    Given Navigate back to Home page  
    And Navigate to required center <CenterNumber> 
    And Select Center type in Find profile dropdown <CenterType> 
    And Search for required Child <PersonName>    
    Then Verify Child is available in search result <PersonName>
    And Verify Contact is available in search result <PersonName>
    And Verfiy ButtonAddToCenter is disabled or not

    Examples:    
      |PersonName         |CenterNumber|CenterType |
      |"Chiaro Fiona"       |"0404"      |"My Center" |
     
  @RegressionTesting    
  Scenario Outline: Home Page: Find people Search with My Centers verify in Contact grid
    Given Navigate back to Home page  
    And Navigate to required center <CenterNumber> 
    And Select Center type in Find profile dropdown <CenterType> 
    And Search for required Child <PersonName>    
    Then Verify Child is available in search result <PersonName>
    And Verify Contact is available in search result <PersonName>  

    Examples:    
      |PersonName         |CenterNumber|CenterType |      
      |"Chiaro Joseph"           |"0404"      |"My Center" |
      
    Scenario Outline: Home Page: Find people Search with All Centers
    Given Navigate back to Home page  
    #And Navigate to required center <CenterNumber> 
    And Select Center type in Find profile dropdown <CenterType> 
    And Search for required Child <PersonName>    
    Then Verify Child is available in search result for All Centers <PersonName>
    And Verify Contact is available in search result for All Centers<PersonName>
    And Verfiy ButtonAddToCenter is disabled or not

    Examples:    
      |PersonName         |CenterNumber|CenterType |
      |"Calum Gudelski"   |"0115"      |"All Centers" |
     
      
    Scenario Outline: Home Page: Find people Search with All Centers verify in Contact grid
    Given Navigate back to Home page  
    #And Navigate to required center <CenterNumber> 
    And Select Center type in Find profile dropdown <CenterType> 
    And Search for required Child <PersonName>    
    Then Verify Child is available in search result for All Centers <PersonName>
    And Verify Contact is available in search result for All Centers<PersonName>

    Examples:    
      |PersonName                         |CenterNumber|CenterType |      
      |"Gallagan Gudelski"           |"0115"      |"All Centers" |