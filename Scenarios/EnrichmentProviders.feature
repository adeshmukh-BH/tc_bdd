Feature: EnrichmentProviders

  Scenario Outline: Verify the fileds existence of Enrichment provider
    Given Launch and Login into application
    Given Navigate to required center <CenterNumber>
    And click on enrichment providers link
    When search for provider<Provider> and click on search button
    And click on Add provider button
    Then verify the fields existence
     
  Examples:
    |CenterNumber|Provider    |
    |"0000"      |"DProvider"|
    
  Scenario Outline:Verify the Enrichment provider modal closed when the users clicks upon X
    When click on Add provider button
    And Enter the required details<ProviderName>,<AffliateCenter>,<CenterName>,<PContactName>,<PMail>,<PContactNumber>,<Insured>,<Notes>
    Then click on X mark to close the modal
    And validate the modal existence
    
  Examples:
    |CenterNumber|Provider    |ProviderName|AffliateCenter|CenterName|PContactName|PMail|PContactNumber|Insured|Notes|
    |"0000"      |"DProvider"|"DProvider"|"0106"|"Bright Horizons at Brickstone"|"Samule"|"DProvider@test.com"|"222-345-5432"|"Yes"|"Sample Notes"|

  Scenario Outline: Verify Search On criteria - Center Name
    Given click on enrichment providers link
    When click on center name for search on
    And enter data in <SearchKey>
    Then click on search button
    And validate the results displayed in the grid<SearchKey>
    
  Examples:
    |SearchKey                   |
    |"Bright Horizons at Harbor Point"|
    
  Scenario Outline: Verify Search On criteria - Center Number
    Given click on enrichment providers link
    When click on center number for search on
    And enter data in <SearchKey>
    Then click on search button
    And validate the results displayed in the grid<SearchKey>
    
  Examples:
    |SearchKey|
    |"1758"|
    
  Scenario Outline: Verify Search On criteria - Provider name
    Given click on enrichment providers link
    When click on provider name for search on
    And enter data in <SearchKey>
    Then click on search button
    And validate the results displayed in the grid<SearchKey> based on Provider name
    
  Examples:
    |SearchKey|
    |"Valerie Smalkin"|
    
  Scenario Outline: Verify Search On criteria - Provider Id
    Given click on enrichment providers link
    When click on provider Id for search on
    When search for provider<SearchKey> and click on search button
    Given click on Provider<Name> from the list of enrichment providers
    Then validate the provider Id<SearchKey> which is displayed in the Enrichment provider profile
    
  Examples:
    |SearchKey|Name|
    |"1058"|"Rockstarts Atlantic"|
    
  Scenario Outline: Add Enrichment provider and affliate to the center
    Given click on enrichment providers link
    When search for provider<Provider> and click on search button
    And click on Add provider button
    And Enter the required details<ProviderName>,<AffliateCenter>,<CenterName>,<PContactName>,<PMail>,<PContactNumber>,<Insured>,<Notes>
    Then click on save and close
    And select inactive from status and search for<ProviderName>
    And validate the added provider<ProviderName> is displayed in the list
     
  Examples:
    |CenterNumber|Provider    |ProviderName|AffliateCenter|CenterName|PContactName|PMail|PContactNumber|Insured|Notes|
    |"0000"      |"DProvider"|"DProvider"|"0115"|"Bright Horizons at Crosby"|"Samule"|"DProvider@test.com"|"222-345-5432"|"Yes"|"Sample Notes"|
    
  Scenario Outline: verify the functionality of Edit provider button
     Given click on Provider<Provider> from the list of enrichment providers
     When click on edit providers button
     Then validate the modal is displayed
     And verify the name in provider<Provider> name field
     
  Examples:
    |CenterNumber|Provider   |
    |"0000"      |"DProvider"|
    
  Scenario Outline: Verify the user cannot Save & Close if required fields is left blank
    #Given click on Provider<Provider> from the list of enrichment providers
    When click on edit providers button
    And Enter the required details<ProviderName>,<PContactName>,<PMail>,<PContactNumber>,<Insured>,<Notes>
    Then click on save and close
    Then validate the modal is not closed when required field is blank
    
  Examples:
    |Provider    |ProviderName|PContactName|PMail|PContactNumber|Insured|Notes|
    |"DProvider"|" "|"Samule"|"DProvider@test.com"|"222-345-5432"|"No"|"Sample Notes"|
    |"DProvider"|"DProvider"|" "|"DProvider@test.com"|"222-345-5432"|"No"|"Sample Notes"|
    |"DProvider"|"DProvider"|"Samule"|" "|"222-345-5432"|"No"|"Sample Notes"|
    |"DProvider"|"DProvider"|"Samule"|"DProvider@test.com"|" "|"No"|"Sample Notes"|
  
  Scenario Outline: Go to affiliated center and check in enrichment providers list by clicking on My providers button
    Given Navigate to required center <CenterNumber>
    When click on center managemnet and enrichment providers links
    And click on my providers button
    Then validate the  Provider<Provider> displayed in the list of enrichment providers
    
  Examples:
    |CenterNumber|Provider   |
    |"0115"      |"DProvider"|
    
  Scenario Outline: Click on enrichment provider and add insurance certificate
    Given click on Provider<Provider> from the list of enrichment providers
    When click on actions button
    And click on Add insurance certificate link
    And Browse the file name<FileName>, enter expiry date<Edate>
    And click on save and close button
    Then validate the file is uploaded/edited or not
    
  Examples:
    |CenterNumber|Provider   |FileName|Edate|
    |"0106"      |"DProvider"|"childattendanceweekly.pdf"|"12-29-2023"|
    
    
  Scenario Outline: Add provider agreement of the provider
    Given click on options button of affiliation center<CenterName>
    When click on Add provider agreement link from options
    And Browse the file name<FileName>, enter expiry date<Edate>
    And click on save and close button
    Then validate the file name<FileName> displayed in the center affiliation grid
    
  Examples:
    |CenterName                             |FileName      |Edate       |
    |"0115 - Bright Horizons at Crosby" |"variable.pdf"|"12-29-2023"|
     
  Scenario: Verify when the user clicks Add Instructor button, Instructor modal opens.
    Given click on add instructor button
    When Instructor modal is displayed with all the existing fields
    And click on cancel button
    Then validate the instructor modal is closed
    
  Scenario Outline: Add instructor in enrichment provider and click on cancel button
    Given click on add instructor button
    When enter all the required fields data <Name>,<Mail>,<PrimaryCenter>,<BGC>,<Active>,<Notes>
    And click on cancel button
    Then validate the instructor modal is closed
      
  Examples:
    |Name         |Mail                  |PrimaryCenter                     |BGC |Active|Notes          |
    |"AInstructor"|"AInstructor@test.com"|"0115 - Bright Horizons at Crosby"|"No"|"Yes"  |"Adding Instructor"|
      
  Scenario Outline: Add instructor Verify if user completes criteria except Instructor Name and attempts to Save & Close
    Given click on add instructor button
    When enter all the required fields data <Name>,<Mail>,<PrimaryCenter>,<BGC>,<Active>,<Notes>
    And click on save and close button
    Then validate the name field is required field
    When click on cancel button
      
  Examples:
    |Name         |Mail                  |PrimaryCenter                   |BGC |Active|Notes          |
    |" "|"AInstructor@test.com"|"0115 - Bright Horizons at Crosby"|"No"|"Yes" |"Adding Instructor"|
      
  Scenario Outline: Add instructor Verify if user completes criteria except Instructor primary center and attempts to Save & Close
    Given click on add instructor button
    When enter all the required fields data <Name>,<Mail>,<BGC>,<Active>,<Notes>
    And click on save and close button
    Then validate the primary center field is required field
    When click on cancel button
      
  Examples:
    |Name         |Mail                  |PrimaryCenter                   |BGC |Active|Notes          |
    |"AInstructor"|"AInstructor@test.com"|""|"No"|"Yes" |"Adding Instructor"|
  
  Scenario Outline: Add Active instructor in enrichment provider
    Given click on add instructor button
    When enter all the required fields data <Name>,<Mail>,<PrimaryCenter>,<BGC>,<Active>,<Notes>
    And click on save and close button
    Then validate the instructor<Name> details displayed in the grid.
      
  Examples:
    |Name         |Mail                  |PrimaryCenter                             |BGC |Active|Notes          |
    |"AInstructor"|"AInstructor@test.com"|"0115 - Bright Horizons at Crosby"|"No"|"Yes"  |"Adding Instructor"|
      
  Scenario Outline: Validate the enrichment provider status change to Active
    Given Navigate to required center <CenterNumber>
    When click on center managemnet and enrichment providers links
    And click on my providers button
    Given click on Provider<Provider> from the list of enrichment providers
    Then Validate the enrichment provider status changed to Active
      
  Examples:
    |CenterNumber|Provider   |
    |"0106"      |"DProvider"|
      
  Scenario Outline: Add background check to the instructor
    Given click on Add background check button of instructor<Name>
    When Browse the file name<FileName>, enter expiry date<Edate>
    And click on save and close button
    Then validate the details BGC of instructor<FileName> details displayed in the grid.
      
  Examples:
    |Name         |Notes                    |FileName                   |Edate       |
    |"AInstructor"|"Edit instructor details"|"childhealthcareevents.pdf"|"12-29-2023"|
      
  Scenario Outline: Add covid19 vaccination to the instructor
    Given click on Add covid19 vaccination button of instructor<Name>
    When Browse the file name<FileName>
    And click on save and close button
    Then validate the covid19 vaccination details of instructor<FileName> displayed in the grid.
      
  Examples:
    |Name         |Notes                    |FileName                   |
    |"AInstructor"|"Edit instructor details"|"childhealthcareevents.pdf"|
      
  Scenario Outline: Edit insurance certificate of provider with supported format files
    When click on actions button
    And click on Edit insurance certificate link
    And Browse the file name<FileName>, enter expiry date<Edate>
    And click on save and close button
    Then validate the file is uploaded/edited or not
    
  Examples:
    |CenterNumber|Provider   |FileName|Edate|
    |"0121"      |"DProvider"|"filesample_doc.doc"|"12-29-2023"|
    |"0121"      |"DProvider"|"filesample_docx.docx"|"12-29-2023"|
    
  Scenario: Delete insurance certificate of provider
    When click on actions button
    And click on Delete insurance certificate link
    And click on Ok button
    Then Validate insurance certificate is deleted

  Scenario Outline: Edit provider agreement of the provider
    Given click on options button of affiliation center<CenterName>
    When click on Edit provider agreement link
    And Browse the file name<FileName>, enter expiry date<Edate>
    And click on save and close button
    Then validate the file name<FileName> displayed in the center affiliation grid
    
  Examples:
    |CenterName                                |FileName      |Edate       |
    |"0115 - Bright Horizons at Crosby" |"childhealthcareevents.pdf"|"12-29-2023"|
    
  Scenario Outline: Delete provider agreement of the provider
    Given click on options button of affiliation center<CenterName>
    When click on delete provider agreement link
    And click on Ok button
    Then validate the file name<FileName> displayedor not in the center affiliation grid
  Examples:
    |CenterName                                |FileName      |Edate       |
    |"0115 - Bright Horizons at Crosby" |"childhealthcareevents.pdf"|"12-29-2023"|

  Scenario Outline: Edit Instructor in enrichment provider
    Given click on edit instructor button of instructor<Name>
    When enter all the required fields data <Name>,<Notes>
    And click on save and close button
    Then validate the details of instructor<Notes> details displayed in the grid.
      
  Examples:
    |Name         |Notes                    |
    |"AInstructor"|"Edit instructor details"|
    
  Scenario Outline: Edit Instructor status from Active to Inactive and vice versa
    Given click on edit instructor button of instructor<Name>
    When enter all the required fields data <Name>,<Notes>
    And change Status<Active> of instructor
    And click on save and close button
    Then validate the status of instructor displayed in the grid.
      
  Examples:
    |Name         |Notes                    |Active|
    |"AInstructor"|"Edit instructor details"|"No"|
    

  Scenario Outline: Edit background check to the instructor
    Given click on edit background check button of instructor<Name>
    When Browse the file name<FileName>, enter expiry date<Edate>
    And click on save and close button
    Then validate the details BGC of instructor<FileName> details displayed in the grid.
      
  Examples:
    |Name         |Notes                    |FileName              |Edate       |
    |"AInstructor"|"Edit instructor BGC details"|"filesample_docx.docx"|"12-29-2023"|
  
  Scenario Outline: Edit covid19 vaccination certificate of the instructor
    Given click on Edit covid19 vaccination button of instructor<Name>
    When Browse the file name<FileName>
    And click on save and close button
    Then validate the covid19 vaccination details of instructor<FileName> displayed in the grid.
      
  Examples:
    |Name         |Notes                    |FileName            |
    |"AInstructor"|"Edit instructor Vaccine details"|"filesample_doc.doc"|
      
  Scenario Outline: Instructors - Edit COVID19 Vaccination: Verify user can NOT upload documents in other formats like JPEG, PNG, .xls etc.
    Given click on Edit covid19 vaccination button of instructor<Name>
    When Browse the file name<FileName>
    Then Validate the error message and click cancel
      
  Examples:
    |Name         |Notes                    |FileName           |
    |"AInstructor"|"Edit instructor Vaccine details"|"Image.png"|
      
  Scenario Outline: Delete background check to the instructor
    Given click on Delete background check button of instructor<Name>
    When click on Ok button
    Then validate the details BGC of instructor<FileName> not displayed in the grid.
      
  Examples:
    |Name         |Notes                    |FileName                   |Edate       |
    |"AInstructor"|"Edit instructor details"|"filesample_docx.docx"|"12-29-2023"|
      
  Scenario Outline: Delete covid19 form to the instructor
    Given click on Delete covid19 certificate button of instructor<Name>
    When click on Ok button
    Then validate the details BGC of instructor<FileName> not displayed in the grid.
      
  Examples:
    |Name         |Notes                    |FileName            |Edate       |
    |"AInstructor"|"Edit instructor details"|"filesample_doc.doc"|"12-29-2023"|
      
  Scenario Outline: Add duplicate center affiliation and validate error message
    Given click on add center affiliation button
    When Enter the required details<AffliateCenter>,<CenterName>,<FeeType>,<Fees>,<Notes>
    And click on save and close button
    Then validate error message 
    
  Examples:
    |AffliateCenter|CenterName                     |FeeType     |Fees    |Notes             |
    |"0115"        |"Bright Horizons at Crosby"|"Percentage"|"100.00"|"Adding duplicate"|
    
  Scenario Outline: Verify if user completes all the information including a Center Affiliation and attempts to Cancel
    Given click on add center affiliation button
    When Enter the required details<AffliateCenter>,<CenterName>,<FeeType>,<Fees>,<Notes>
    And click on cancel button
    Then validate the center affiliation modal is closed or not
    
  Examples:
    |AffliateCenter|CenterName                     |FeeType   |Fees    |Notes           |
    |"0106"        |"Bright Horizons at Brickstone"|"Flat Amount"|"100.00"|"Another Center"|
    
  Scenario Outline: Verify if user completes all the information including a Center Affiliation and attempts to close X
    Given click on add center affiliation button
    When Enter the required details<AffliateCenter>,<CenterName>,<FeeType>,<Fees>,<Notes>
    Then click on X mark to close the modal
    And validate the center affiliation modal is closed or not
    
  Examples:
    |AffliateCenter|CenterName                     |FeeType   |Fees    |Notes           |
    |"0106"        |"Bright Horizons at Brickstone"|"Flat Amount"|"100.00"|"Another Center"|
    
  Scenario Outline: Verify if user completes all the information - Provider Fee Type = Percentage w/Errors
    Given click on add center affiliation button
    When Enter the required details<AffliateCenter>,<CenterName>,<FeeType>,<Fees>,<Notes>
    And click on save and close button
    Then validate the error message displayed onthe screen for percentage
    Then click on X mark to close the modal
    
  Examples:
    |AffliateCenter|CenterName                     |FeeType   |Fees    |Notes           |
    |"0106"        |"Bright Horizons at Brickstone"|"Percentage"|"-100.00"|"Another Center"|
    
  Scenario Outline: Verify if user completes all the information - Provider Fee Type = Flat w/Errors
    Given click on add center affiliation button
    When Enter the required details<AffliateCenter>,<CenterName>,<FeeType>,<Fees>,<Notes>
    And click on save and close button
    Then validate the error message displayed onthe screen for Flat
    Then click on X mark to close the modal
    
  Examples:
    |AffliateCenter|CenterName                     |FeeType   |Fees    |Notes           |
    |"0106"        |"Bright Horizons at Brickstone"|"Flat Amount"|"1000000"|"Another Center"|
    
  Scenario Outline: Add another center affiliation with any fee type
    Given click on add center affiliation button
    When Enter the required details<AffliateCenter>,<CenterName>,<FeeType>,<Fees>,<Notes>
    And click on save and close button
    Then validate the added center displayed in the grid<AffliateCenter>,<CenterName>
    
  Examples:
    |AffliateCenter|CenterName                     |FeeType   |Fees    |Notes           |
    |"0107"        |"Bright Horizons at NEBC"|"Flat Amount"|"100.00"|"Another Center"|
    
  Scenario Outline: Edit center affiliation with any fee type
    Given click on options button of center<CenterName> and select edit center affiliation
    When Enter the required details<AffliateCenter>,<CenterNameNew>,<FeeType>,<Fees>,<Notes>
    And click on save and close button
    Then validate the added center displayed in the grid<FeeType>,<Fees>
    
  Examples:
    |CenterName                      |AffliateCenter|CenterNameNew            |FeeType   |Fees    |Notes                 |
    |"0107 - Bright Horizons at NEBC"|"0107"        |"Bright Horizons at NEBC"|"Flat Amount"|"100.00"|"Edit center for fee type"|
    
  Scenario Outline: Verify if user completes all the information including a Edit Center Affiliation and attempts to Cancel
    Given click on options button of center<CenterName> and select edit center affiliation
    When Enter the required details<AffliateCenter>,<CenterNameNew>,<FeeType>,<Fees>,<Notes>
    And click on cancel button
    Then validate the center affiliation modal is closed or not
    
  Examples:
    |CenterName                                |AffliateCenter|CenterNameNew                      |FeeType   |Fees    |Notes                 |
    |"0107 - Bright Horizons at NEBC"|"0107"        |"Bright Horizons at NEBC"|"Flat Amount"|"100.00"|"Edit center for fee type"|
    
  Scenario Outline: Verify if user completes all the information including a Edit Center Affiliation and attempts to close X
    Given click on add center affiliation button
    When Enter the required details<AffliateCenter>,<CenterNameNew>,<FeeType>,<Fees>,<Notes>
    Then click on X mark to close the modal
    And validate the center affiliation modal is closed or not
    
  Examples:
    |CenterName                      |AffliateCenter|CenterNameNew            |FeeType   |Fees    |Notes                 |
    |"0107 - Bright Horizons at NEBC"|"0107"        |"Bright Horizons at NEBC"|"Flat Amount"|"100.00"|"Edit center for fee type"|
    
  Scenario Outline: Verify if user completes all the information in edit Center Affiliation - Provider Fee Type = Percentage w/Errors
    Given click on add center affiliation button
    When Enter the required details<AffliateCenter>,<CenterNameNew>,<FeeType>,<Fees>,<Notes>
    And click on save and close button
    Then validate the error message displayed onthe screen for percentage
    Then click on X mark to close the modal
    
  Examples:
    |CenterName                                |AffliateCenter|CenterNameNew                      |FeeType   |Fees    |Notes                 |
    |"0107 - Bright Horizons at NEBC"|"0108"        |"Bright Horizons at Nashua"|"Percentage"|"-100.00"|"Edit center for fee type"|
    
  Scenario Outline: Verify if user completes all the information in edit Center Affiliation - Provider Fee Type = Flat w/Errors
    Given click on add center affiliation button
    When Enter the required details<AffliateCenter>,<CenterNameNew>,<FeeType>,<Fees>,<Notes>
    And click on save and close button
    Then validate the error message displayed onthe screen for Flat
    Then click on X mark to close the modal
    
  Examples:
    |CenterName                                |AffliateCenter|CenterNameNew                      |FeeType   |Fees    |Notes                 |
    |"0107 - Bright Horizons at NEBC"|"0108"        |"Bright Horizons at Nashua"|"Flat Amount"|"1000000"|"Edit center for fee type"|
    
  Scenario Outline: Edit insurance certificate of provider with unsupported file format
    When click on actions button
    And click on Edit insurance certificate link
    And Browse the file name<FileName>
    Then Validate the error message and click cancel
    
  Examples:
    |CenterNumber|Provider   |FileName|Edate|
    |"0121"      |"CProvider"|"CM.txt"|"12-29-2023"|