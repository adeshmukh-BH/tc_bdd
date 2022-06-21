Feature: ManageLocations

  Scenario: Center Management: verify location modal existence when we click on Add location button
    Given Launch and Login into application
    When click on Center Management tab and click on Manage locations link
    Then click on Add location button
    And verify the location modal is displayed with expected fields
    
  Scenario: Location Modal: Verify Location modal will display blank for new setups
    Given Navigate back to Home page
    When click on Center Management tab and click on Manage locations link
    Then click on Add location button
    And verify the location modal is display blank for new setups
    
  Scenario Outline: Verify user can NOT save location modal when location name field is left blank
    Given Navigate back to Home page
    And Navigate to required center <CenterNumber>
    When click on Center Management tab and click on Manage locations link
    Given click on Add location button
    When enter location<LocName>, category<LocCategory>, status<Active> and Description<LocDescription>
    And click on save and close button
    Then verify the location name field is required field or not
    
  Examples:
    |CenterNumber|LocName    |LocCategory|LocDescription|Active|
    |"0404"      |""|"Art Studio"|"Sample Art studio"|"Yes"|
    
  Scenario Outline: Verify user can NOT save location modal when location category field is left blank
    Given click on Add location button
    When enter location<LocName>, category<LocCategory>, status<Active> and Description<LocDescription>
    And click on save and close button
    Then verify the location category field is required field or not
    
  Examples:
    |CenterNumber|LocName    |LocCategory|LocDescription|Active|
    |"0404"      |"Sample studio"|""|"Sample Art studio"|"Yes"|
    
  Scenario Outline: Center Management: Add a location with active status
    Given click on Add location button
    When enter location name<LocName>, category<LocCategory>, status<Active> and Description<LocDescription>
    And click on save and close button
    Then verify the added location<LocName> in the grid
    
  Examples:
    |CenterNumber|LocName    |LocCategory|LocDescription|Active|
    |"0404"      |"Sample studio"|"Art Studio"|"Sample Art studio"|"Yes"|
    
  Scenario Outline: Center Management: Add a duplicate location and validate error message
    Given click on Add location button
    When enter location name<LocName>, category<LocCategory>, status<Active> and Description<LocDescription> duplicate
    And click on save and close button
    Then verify the whether error message is displayed or not
    
  Examples:
    |CenterNumber|LocName    |LocCategory|LocDescription|Active|
    |"0404"      |"Sample studio"|"Art Studio"|"Sample Art studio"|"Yes"|
    |"0404"      |"Sample studio"|"Art Studio"|"Sample Art studio"|"No"|
    |"0404"      |"Sample"|"Art Studio"|"Test1"|"Yes"|
    |"0404"      |"Sample"|"Art Studio"|"Test1"|"No"|
    
    
  Scenario Outline: Center Management: Manage location status filter
    Given Select the Status<Status>
    Then Verify the results displayed in the Grid with Status <Status>
  Examples: 
  |Status|
  |"All"|
  |"Active"|
  |"Inactive"|
    
  Scenario Outline: Center Management: Change the location status Active to Inactive
    Given Navigate to required center <CenterNumber>
    When click on Center Management tab and click on Manage locations link
    And select status as active <Status>
    Then click on edit button and change it to inactive <Active>
    And click on save and close button
    And select status as active <ChangedStatus>
    And verify the location name<LocName> and <ChangedStatus>is displayed in the Grid
  Examples:
    |CenterNumber|LocName   |Status  |Active|ChangedStatus|
    |"0115"      |"INFANT 1"|"Active"|"No"  |"Inactive"|
    |"0115"      |"INFANT 1"|"Inactive"|"Yes"  |"Active"|
    
  Scenario Outline: Center Management: Edit the location name
    Given Navigate to required center <CenterNumber>
    When click on Center Management tab and click on Manage locations link
    Then click on edit button and edit Location name <LocName> 
    And click on save and close button
    And verify the edited location<LocName> in the grid
    Then click on edit button and edit Location name <ActualName> 
    And click on save and close button
    
  Examples:
    |CenterNumber|LocName    |ActualName|
    |"0115"      |"INFANT EDIT"|"INFANT 1"|
    
  Scenario Outline:Verify a duplicate error message DOES NOT display when adding unique location name to that center, but the same location name is used in ANOTHER center
    Given Navigate to required center <CenterNumber>
    When click on Center Management tab and click on Manage locations link
    Given click on Add location button
    When enter location<LocName>, category<LocCategory>, status<Active> and Description<LocDescription>
    And click on save and close button
    Then verify the added location<LocName> in the grid
    
  Examples:
    |CenterNumber|LocName    |LocCategory|LocDescription|Active|
    |"0102"      |"Sample studio"|"Art Studio"|"Sample Art studio"|"Yes"|
    |"0105"      |""|"Art Studio"|"Sample Art studio"|"Yes"|
    
  Scenario Outline: Duplicate Check: Verify user is not able to add same location name with different location categories
    Given click on Add location button
    When enter location<LocName>, category<LocCategory>, status<Active> and Description<LocDescription>
    And click on save and close button
    Then verify the added location<LocName> in the grid or capture the error message
    
  Examples:
    |CenterNumber|LocName    |LocCategory|LocDescription|Active|
    |"0105"      |"Lobby"|"Lobby"|"Lobby"|"Yes"|
    |"0105"      |""|"Office"|"Office"|"Yes"|
    
  Scenario Outline:Verify location name added to one center is not displayed in other centers (location names should be center specific)
    Given Navigate to required center <CenterNumber>
    When click on Center Management tab and click on Manage locations link
    Then check for location<LocName> displayed in the grid or not
    
  Examples:
    |CenterNumber|LocName    |
    |"0404"      |"Sample studio"|
    |"0105"      |"Sample studio"|
    
  Scenario Outline:Location Modal: Validate user can save location name when keeping Description field blank or filled with data
    Given Navigate to required center <CenterNumber>
    When click on Center Management tab and click on Manage locations link
    Given click on Add location button
    When enter location<LocName>, category<LocCategory>, status<Active> and Description<LocDescription>
    And click on save and close button
    Then verify the added location<LocName> in the grid
  Examples:
    |CenterNumber|LocName    |LocCategory|LocDescription|Active|
    |"1242"      |"Sample studio"|"Art Studio"|"Sample Art studio"|"Yes"|
    |"1242"      |"Bathroom"|"Bathroom"|"Bathroom"|"Yes"|
    
  Scenario Outline: Validate fields in location modal of type, required fields, Alphanumeric allowed or not
    Given Navigate to required center <CenterNumber>
    When click on Center Management tab and click on Manage locations link
    Given click on Add location button
    When enter location<LocName>, category<LocCategory>, status<Active> and Description<LocDescription> with alphanumerical values
    And click on save and close button
    Then verify the added location<LocName> in the grid
  Examples:
    |CenterNumber|LocName    |LocCategory|LocDescription|Active|
    |"0122"      |"Abcxyz123"|"Field Trip"|"Trip1234"|"Yes"|