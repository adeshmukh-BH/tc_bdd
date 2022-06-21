Feature: RegistrationPromotions

  Scenario Outline: Registration Promotions - Validate the existence of Registration Promotions modal and click on Cancel.
    #Given Launch and Login into application
    And Navigate to required center <CenterNumber>
    And click on Registration promotions link
    When click on add registration promotion link
    And enter data in all required fields<PromotionName>, <IsActive>, <AmountType>,<Amount>,<StartDate>,<EndDate>,<Notes>
    And click on cancel button
    Then validate the modal is closed and <PromotionName> is not added to the Registration promotion list
    
  Examples:
    |CenterNumber|PromotionName|IsActive|AmountType|Amount|StartDate|EndDate|Notes|
    |"0000"      |"SamplePromotion"|"Yes"|"Flat"|"100"|""|""|"Adding registration Promotion"|
    
  Scenario Outline: Registration Promotions - Search/Results
    Given click on Registration promotions link
    When Select the filter <Filter>
    And Enter search key <SearchKey> in Promotion Name field
    Then Click on search button
    And validate the displayed results from the registrations promotions grid<SearchKey>
    
  Examples:
    |CenterNumber|Filter    |SearchKey|
    |"0000"      |"Any Part"|"Bird"|
    |"0000"      |"Start Of"|"Memorial"|
    |"0000"      |"Equals"|"NTT Data"|
    |"0000"      |"All Registration Promotions"|""|
    
  Scenario Outline:Verify promotion registrations Search filter criteria
    Given click on Registration promotions link
    When Select the filter <Filter>
    And Enter search key <SearchKey1> in Promotion Name field
    Then Click on search button
    And Validate error message of promotion
    When Enter search key <SearchKey2> in Promotion Name field
    Then Click on search button
    And validate the displayed results from the grid<SearchKey2>
    
  Examples:
    |CenterNumber|Filter    |SearchKey1|SearchKey2|
    |"0404"      |"Any Part"|"N"|"NTT Data"|
    
  Scenario Outline: Registration Promotions - Add New Promotional Code with Percentage errors
    Given Navigate to required center <CenterNumber>
    And click on Registration promotions link
    When click on add registration promotion link
    And enter data in all required fields<PromotionName>, <IsActive>, <AmountType>,<Amount>,<StartDate>,<EndDate>,<Notes>
    Then click on save and close
    Then validate the error message displayed or not
    
  Examples:
    |CenterNumber|PromotionName|IsActive|AmountType|Amount|StartDate|EndDate|Notes|
    |"0000"      |"SamplePromotion"|"Yes"|"Percentage"|"-100.00"|""|""|"Adding registration Promotion"|
    
  Scenario Outline: Registration Promotions - Add New Promotional Code with Flat amount errors
    Given Navigate to required center <CenterNumber>
    And click on Registration promotions link
    When click on add registration promotion link
    And enter data in all required fields<PromotionName>, <IsActive>, <AmountType>,<Amount>,<StartDate>,<EndDate>,<Notes>
    Then click on save and close
    Then validate the modal is not closed
    
  Examples:
    |CenterNumber|PromotionName|IsActive|AmountType|Amount|StartDate|EndDate|Notes|
    |"0000"      |"SamplePromotion"|"Yes"|"Flat"|"10000000"|""|""|"Adding registration Promotion"|
    
  Scenario Outline: Registration Promotions - Add Existing Promotional Code
    #Given Launch and Login into application
    Given Navigate to required center <CenterNumber>
    And click on Registration promotions link
    When click on add registration promotion link
    And enter data in all required fields<PromotionName>, <IsActive>, <AmountType>,<Amount>,<StartDate>,<EndDate>,<Notes>
    Then click on save and close
    Then Validate the promotinal name error message displayed or not
    
  Examples:
    |CenterNumber|PromotionName|IsActive|AmountType|Amount|StartDate|EndDate|Notes|
    |"0000"      |"NTT Data"|"Yes"|"Flat"|"100"|""|""|"Adding registration Promotion"|
  
  Scenario Outline: Registration Promotions - Add New Promotional Code
    Given Navigate to required center <CenterNumber>
    And click on Registration promotions link
    When click on add registration promotion link
    And enter data in all required fields<PromotionName>, <IsActive>, <AmountType>,<Amount>,<StartDate>,<EndDate>,<Notes>
    Then click on save and close
    Then validate the modal is closed and <PromotionName> is added to the Registration promotion list
    
  Examples:
    |CenterNumber|PromotionName|IsActive|AmountType|Amount|StartDate|EndDate|Notes|
    |"0000"      |"SamplePromotion"|"Yes"|"Flat"|"100"|""|""|"Adding registration Promotion"|
    
  Scenario Outline: Verify promotion registrations Search filter criteria
    Given click on Registration promotions link
    When Select the filter <Filter>
    And Enter search key <SearchKey> in Promotion Name field
    Then Click on search button
    And validate the displayed results from the grid<SearchKey>
    When click on edit button of <SearchKey>
    And click on center associations link
    
  Examples:
    |CenterNumber|Filter    |SearchKey|
    |"0404"      |"Any Part"|"Sample"|
    
  Scenario Outline:Registration Promotions - Add Center Association
    Given click on add center button
    And user select <SearchWhere> and <SearchOn> radio buttons, enter <SearchFor>
    When Click on Search button
    Then validate the results<SearchFor> displayed in the grid with center<CenterName>
    
  Examples: 
    |SearchWhere|SearchOn     |SearchFor|CenterName                 |
    |"Any Part" |"Center Name"|"Box"    |"Bright Horizons at Boxborough"|
    |"Start Of" |"Center Name"|"United" |"United Nations Child Care Center"|
    |"Equals"   |"Center Name"|"Bright Horizons at Crosby"|"Bright Horizons at Crosby"|
    |"Any Part" |"Center Number"|"120"    |"Cisco Early Years Nursery and Preschool"|
    |"Start Of" |"Center Number"|"011" |"Bright Horizons at Crosby"|
    |"Equals"   |"Center Number"|"0116" |"Staples Child Care Center"|
    
    