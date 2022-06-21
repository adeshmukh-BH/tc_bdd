Feature: Child Management
    
  Scenario Outline: Add or Search for a child in Child management screen Negative.
    Given Launch and Login into application
    And Navigate to required center <CenterNumber>
    When Click on Child managememt tab
    Then User should navigate to child management
    When click on add child button
    Then user should navigate to Add child page
    When click on search button
    Then Validate that required field is empty
    
  Examples:
  |CenterNumber|
  |"0108"|
  
  Scenario Outline: Add or Search for a child in Child management screen.
    Given Navigate back to HomeScreen
    When Click on Child managememt tab
    Then User should navigate to child management
    When click on add child button
    Then user should navigate to Add child page
    When User fill all the required fields <FirstName>, <LastName> ,<DOB>, <Gender>and click on search button
    Then User should see match records in Possible matches table with <FirstName> or it might be blank
    When user click on Continue with Add button
    Then user should see home address page
    When User enter address <AddressLine1>,<City>,<State>,<ZipCode> and click on continue button
    Then User Should see child is added

   Examples: 
    |FirstName |LastName|DOB         |Gender  |AddressLine1 |City           |State       |ZipCode|
    |"Gopal" |"Bura"   |"03-23-2019"|"Male"|"Plot No 310"|"San Francisco"|"California"|"94102"|
    |"Gopi"  |"Sura"   |"04-23-2019"|"Male"|"Plot No 308"|"San Francisco"|"California"|"94102"|
    
  Scenario Outline:  Add Contact(Not Employed) to the above added child
    Given After Successfull addition of child click on Add contact
    When User fill all the required fields <FirstName>, <LastName> <PhoneNumber> <Email>click on search button
    Then User should see match records in Possible contact matches table with <FirstName> or it might be blank
    When user click on Continue with Add button in contact page
    And user enters required information and clicks on Continue
    And user enters employment details as not employed and click on continue
    And User enter the <FirstName>, <LastName>  <Relation>, <Gaurdian>,<Pickup> and click continue.
    Then Validate Contact added successfully
    
  Examples: 
    |FirstName|LastName|PhoneNumber   |Email             |Relation|Gaurdian|Pickup|
    |"Vamshi"|"Sura" |"457-321-6677"|"Surav@gmail.com"|"Parent"|"Yes"   |"Yes" |
    
  Scenario Outline: Register the above child to the center
    Given Navigate to the Center<Center> and Child record<ChildName>.
    When Click on Link Center Status
    And Click on edit button of the current center in Current center preference table
    And fill the details of Register<Register>, Startdate<StartDate>, Days<Days>, Class<Class>
    Then Click on Save & close button and validate<Status>
    
  Examples: 
   |Center|ChildName        |Register|StartDate   |Days    |Class            |Status|
   |"0108"|"Sura Gopi"|"Yes"   |"05-25-2022"|"Three" |"Toddler 2 (Toddler)"|"Registered"|
   
  Scenario Outline: Add Enrollment and Schedule to the above child.
    Given click on Enrollment and Schedule tab 
    And click on Actions Button and click New Enrollments & Schedule 
    When enter all the mandatory details <StartDate>, <Program>, <Class>,<Rateplan>, <Days>, <StartTime>, <EndTime>, <Classoverride>
    And Click on Save and close button and validate Status<Status>
    
  Examples: 
    |StartDate |Program |Class |Rateplan |Days |StartTime |EndTime |Classoverride|Status|
    |"05-25-2022"|"Toddler"|"Toddler 2"|"*Toddler*"|"Three"|"09:00 AM"|"05:00 PM"|"Toddler 2"|"Enrolled - Captured"|
    
  Scenario Outline: Adding Emergency contact to the child.
    Given Navigate to the Center<Center> and Child record<ChildName>.
    When Click on Add or Edit Priorities button
    And Click on Add Priority Button
    Then Enter the details <Name>, <Number>, <ContactNotes> and click on Save and close button
    And Check for the record in Emergency contacts grid<NameV>
    
  Examples:
    |Center|ChildName      |Name          |Number              |ContactNotes        |NameV|
    |"0108"|"Sura Gopi"|"Sura, Vamshi"|"Cell: 457-321-6677"|"Emergency Contact"|"Vamshi Sura"|
    
    
  Scenario Outline: Add Sibling to the above added child
    Given Navigate to the Center<Center> and Child record<ChildName>.
    When Click on Add sibling button
    And Enter all the required fields <SFirstName>, <SLastName> ,<DOB>, <Gender>and click on search button
    Then User should see match records in Possible matches for sibling in table with <SFirstName> or it might be blank
    When user click on Continue with Add button to add sibling
    And Click on Continue Button
   
  Examples: 
    |Center|ChildName    |SFirstName  |SLastName |DOB         |Gender  |
    |"0108"|"Sura Gopi"|"Pyiush"    |"Sura"   |"05-23-2020"|"Male"  |
 
  Scenario Outline: Add Center prefernce to the child
    Given Navigate to the Center<Center> and Child record<ChildName>.
    When Click on Link Center Status
    And Click on Add Center Preference Button
    And Click on Magnifier Button
    Then User is able to navigate Change Center window
    When User selects Search where as Equals, Search on as centername,Search for <CenterName> categories
    And Click on Search button
    And User selects the desired Center <CenterName> based on search criteria and click on Select center button
    And fill the details of Register<Register>, Startdate<StartDate>, Days<Days>, Class<Class>
    Then Click on Save and close button
   
  Examples: 
    |Center|ChildName         |CenterName                 |Register|StartDate   |Days    |Class                        |
    |"0108"|"Sura Gopi" |"Staples Child Care Center"|"No"   |"05-25-2022"|"Three" |"Kindergarten (Kindergarten)"|
    
  Scenario Outline:Add Contact(Employed) to the above added child
    Given Navigate to the Center<Center>, Child record<ChildName> and Click on add Contact button in profile
    When User fill all the required fields <FirstName>, <LastName> <PhoneNumber> <Email>click on search button
    Then User should see match records in Possible contact matches table with <FirstName> or it might be blank
    When user click on Continue with Add button in contact page
    And user enters required information and clicks on Continue
    And user enters employment details as employed, fill the required details<OrgName> <EmpId> <PayGroup> <Address> <City> <State> <Zip>and click on continue
    And User enter the <FirstName>, <LastName>  <Relation>, <Gaurdian>,<Pickup> and click continue.
    Then Validate Contact added successfully
    
  Examples:
    |Center|ChildName      |FirstName|LastName|PhoneNumber   |Email           |Relation|Gaurdian|Pickup|OrgName               |EmpId  |PayGroup      |Address          |City     |State       |Zip    |
    |"0108"|"Bura Gopal" |"Vamsi"|"Bura" |"456-333-6655"|"Burav@gmail.com"|"Parent"|"Yes"   |"Yes" |"Amazon Corporate LLC"|"A0108"|"Semi-Monthly"|"440 Terry Ave N"|"Seattle"|"Washington"|"98109"|
    
  Scenario Outline:  Add Contact(Unknown) to the above added child
    Given Navigate to the Center<Center>, Child record<ChildName> and Click on add Contact button in profile
    When User fill all the required fields <FirstName>, <LastName> <PhoneNumber> <Email>click on search button
    Then User should see match records in Possible contact matches table with <FirstName> or it might be blank
    When user click on Continue with Add button in contact page
    And user enters required information and clicks on Continue
    And user enters employment details as Unknown and click on continue
    And User enter the <FirstName>, <LastName>  <Relation>, <Gaurdian>,<Pickup> and click continue.
    Then Validate Contact added successfully
    
  Examples: 
    |Center|ChildName      |FirstName|LastName|PhoneNumber   |Email             |Relation|Gaurdian|Pickup|
    |"0108"|"Bura Gopal"|"Jyothi"|"Bura" |"454-123-6655"|"Buraj@gmail.com"|"Parent"|"Yes"   |"Yes" |
    
  Scenario Outline: Verify the functionality of Edit button in child profile page
    Given Navigate to required center <Center> and Child record<ChildName>
    When click on edit button
    Then Verify the FirstName LastName fields exists
    And Validate the child record with name <ChildName> and close modal
    
  Examples: 
    |Center|ChildName     |
    |"0112"|"Sura Gopi" |
    
  Scenario Outline: Verify the functionality of Edit button in contact profile page
    Given Navigate to required center <Center> and Child record<ChildName>
    When Navigate to Parent profile of child<Contact>
    And click on edit button in contact page
    Then Verify the name details of contact fields exists
    And Validate the Contact record with name <Contact> and close modal
  
  Examples: 
    |Center|ChildName     |Contact|
    |"0112"|"Sura Gopi" |"Sura, Vamshi"|
    
  Scenario Outline: Verify the existence of Activity modal when we click on Add Activity button
    Given Navigate to required center <Center> and Child record<ChildName>
    When Navigate to Parent profile of child<Contact>
    And click on Inquiries and Activities tab
    And click on add activity button
    Then Validate the modal displayed with expected fields
    
  Examples:
    |Center|ChildName     |Contact|
    |"0112"|"Sura Gopi" |"Sura, Vamshi"|
    
  Scenario Outline: Verify the existence of Inquiry modal when we click on Add Inquiry button
    Given Navigate to required center <Center> and Child record<ChildName>
    When Navigate to Parent profile of child<Contact>
    And click on Inquiries and Activities tab
    And click on add Inquiry button
    Then Validate the Inquiry modal displayed with expected fields
    
  Examples:
    |Center|ChildName     |Contact|
    |"0112"|"Sura Gopi" |"Sura, Vamshi"|
    
  Scenario Outline: Add activity without adding Inquiry and validate warning message
    Given Navigate to required center <Center> and Child record<ChildName>
    When Navigate to Parent profile of child<Contact>
    And click on Inquiries and Activities tab
    And click on add activity button
    Then enter all the required details<ActivityDate>, <ActivityType>, <DueDate>, <AssignedTo>, <Notes>
    And click on save and close button
    And validate the warning message displayed or not
    And close both Inquiry and activity modals
  
  Examples:
    |Center|ChildName     |Contact       |ActivityDate|ActivityType|DueDate|AssignedTo       |Notes            |
    |"0112"|"Sura Gopi" |"Sura, Vamshi"|"06-07-2022"|"Email"|"06-10-2022"|"Abbie Takvorian"|"Sample Activity"|
    
  Scenario Outline: Add Inquiry
    Given click on add Inquiry button
    When enter required data in the Inquiry modal<InquiryDate>, <FollowupReq>,<RequestType>, <InquiryTaken>, <Source>, <Notes>
    And click on save and close button
    Then Verify the added or edited Inquiry in the Inquiry Grid<Notes>
  Examples:
    |InquiryDate |FollowupReq|RequestType|InquiryTaken|Source         |Notes|
    |"06-07-2022"|"Yes"      |"Email"    |"Other"     |"Not Indicated"|"Sample Inquiry"|
    
  Scenario Outline: Edit Inquiry
    Given click on edit Inquiry button
    When edit the Inquiry <Notes>
    And click on save and close button
    Then Verify the added or edited Inquiry in the Inquiry Grid<Notes>
  Examples:
    |InquiryDate |FollowupReq|RequestType|InquiryTaken|Source         |Notes|
    |"06-07-2022"|"Yes"      |"Email"    |"Other"     |"Not Indicated"|"Edit sample Inquiry"|
    
  
  Scenario Outline: Verify the Discounts modal and its fields.
    Given Navigate to required center <Center> and Child record<ChildName>
    When click on Finance tab
    And click on add discount button
    Then user should see Discounts modal and its fields and close modal.    
    
  Examples: 
    |Center|ChildName     |
    |"0404"|"Sura Gopi" |
    
  Scenario Outline: Add Sibling discount to the  child
    Given Navigate to required center <Center> and Child record<ChildName>
    When click on Finance tab
    And click on add discount button
    Then Select discount type<Discount> and click on save and close button   
    
  Examples: 
    |Center|ChildName     |Discount              |
    |"0404"|"Sura Gopi" |"Sibling Discount 10%"|
    
  Scenario Outline: Delete the discount which was added in previous scenario.
    Given check for added discount<Discount> in the table
    When click on delete/remove button
    And click on ok button 
    Then validate the discount<Discount> is deleted or not
  Examples: 
    |Discount              |
    |"Sibling Discount 10%"|