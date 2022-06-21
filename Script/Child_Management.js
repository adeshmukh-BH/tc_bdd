//USEUNIT ImportUnits

Given("Navigate back to HomeScreen", function (){
  ResetApp_Home()
});

When("Click on Child managememt tab", function (){
  Dynamic_Wait(Link_ChildManagement)
  Object_Click(Link_ChildManagement)
});

Then("User should navigate to child management", function (){
  if(Button_AddChild.Exists)
  {
    Log.Checkpoint("Navigated to Child management screen")
  }
  else
  {
    Log.Error("Child management screen is not visible")
  }
});

When("click on add child button", function (){
  Object_Click(Button_AddChild)
});

Then("user should navigate to Add child page", function (){
  if(Textbox_Firstname.Exists)
  {
    Log.Checkpoint("User Navigated to Addchild screen")
  }
});

When("User fill all the required fields {arg}, {arg} ,{arg}, {arg}and click on search button", function (param1, param2, param3, param4){
  Object_Keys(Textbox_Firstname,param1)
  Object_Keys(Textbox_Lastname,param2)
  Object_Keys(Textbox_Birthdate,param3)
  Object_Click(Select_Gender)
  Object_ClickItem(Select_Gender,param4)
  Object_Click(Button_Search_AddChild)
  Delay(2000)
});

Then("User should see match records in Possible matches table with {arg} or it might be blank", function (param1){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Panel(0)","Panel")
  var Links = Panel_Child_Results.FindAll(RowProp, RowVal, 1000)
  
  for(var i=0;i<Links.length;i++)
  {
      if(Links[i].contentText!="" && Links[i].contentText.indexOf(param1)>=0)
      {
        Log.Checkpoint("Found a match in 'Possible child matches in BrightStar Table'")
        break;
      }
      else if(i==Links.length-1)
      {
        Log.Message("No match records found in the table")
      }
  }
});


When("user click on Continue with Add button", function (){
  Object_Click(Button_ContinueWithAdd)
});

Then("user should see home address page", function (){
  if(TB_Address_Line_1.Exists)
  {
    Log.Checkpoint("User Navigated to expected page")
  }
  else
  {
    Log.Error("Expected page is not found")
  }
});

When("User enter address {arg},{arg},{arg},{arg} and click on continue button", function (param1, param2, param3, param4){
  Object_Keys(TB_Address_Line_1,param1)
  Object_Keys(TB_Homeaddresscity,param2)
  Object_Click(SelectHomeaddress_State)
  Object_ClickItem(SelectHomeaddress_State,param3)
  Object_Keys(TB_Homeaddress_Zipcode,param4)
  Object_Click(Submit_Button_Continue)
});

Then("User Should see child is added", function (){
  if(Panel_RecordId.Exists)
  {
    Log.Checkpoint("Child Added and "+Panel_RecordId.contentText)
  }
  else
  {
    Log.Message("Child is not added")
  }
});

/**********************************************Add Contact (Non Employed)**************************************************************/

Given("After Successfull addition of child click on Add contact", function (){
  Dynamic_Wait(Button_AddContact)
  Object_Click(Button_AddContact)
});

When("User fill all the required fields {arg}, {arg} {arg} {arg}click on search button", function (FN, LN, Contact, Email){
  Dynamic_Wait(TB_Firstname_Contact)
  Object_Keys(TB_Firstname_Contact,FN)
  Object_Keys(TB_Lastname_Contact,LN)
  Object_Keys(TB_Phonenumber_Contact,Contact)
  Object_Keys(TB_Emailaddress_Contact,Email)
  Object_Click(Button_Search_Contact)
  //Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  //Delay(2000)
  Page_Load1()
});

Then("User should see match records in Possible contact matches table with {arg} or it might be blank", function (param1){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Panel(0)","Panel")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)

  for(var i=0;i<Links.length;i++)
  {
      if(Links[i].contentText!="" && Links[i].contentText.indexOf(param1)>=0)
      {
        Log.Checkpoint("Found a match in 'Possible child matches in BrightStar Table'")
        break;
      }
      else if(i==Links.length-1)
      {
        Log.Message("No match records found in the table")
      }
  }
});

When("user click on Continue with Add button in contact page", function (){
  Delay(3000)
  Object_Click(Button_ContinueWithAdd_Contact)
  Dynamic_Wait(SB_Continue_Contact)
});

When("user enters required information and clicks on Continue", function (){
  Object_Click(SB_Continue_Contact)
});

When("user enters employment details as not employed and click on continue", function (){
  Dynamic_Wait(Label_NotEmployed)
  Object_Click(Label_NotEmployed)
  Object_Click(CB_DoNotMailWork)
  Object_Click(SB_Continue_Employement)
  Dynamic_Wait(Table_ChildRelationship)
});

When("User enter the {arg}, {arg}  {arg}, {arg},{arg} and click continue.", function (FN, LN, Relation, Gaurdian, Pickup){
  for(var i=2; i<Table_ChildRelationship.RowCount;i++)
  {
    if(Table_ChildRelationship.Cell(i,1).contentText==FN+" "+LN)
    {
      var RowProp = new Array("Name","ObjectType")
      var RowVal = new Array("Select(\"relationshipId*\")","Select")
      var Links = Table_ChildRelationship.Cell(i,3).FindAll(RowProp, RowVal, 1000)
      Object_Click(Links[0])
      Object_ClickItem(Links[0],Relation)
      
      if(Gaurdian=="Yes")
      {
        var RowProp = new Array("ObjectIdentifier","ObjectType")
        var RowVal = new Array("isGuardian","Checkbox")
        var Links = Table_ChildRelationship.Cell(i,4).FindAll(RowProp, RowVal, 1000)
        Object_Click(Links[0])
      }
      if(Pickup=="Yes")
      {
        var RowProp = new Array("ObjectIdentifier","ObjectType")
        var RowVal = new Array("isAuthorizedPickup","Checkbox")
        var Links = Table_ChildRelationship.Cell(i,5).FindAll(RowProp, RowVal, 1000)
        Object_Click(Links[0])
      }
      Object_Click(SB_Continue_AddContact);
    }
  }
});

Then("Validate Contact added successfully", function (){
  if(Button_AddAnotherContact.Exists)
  {
    Log.Checkpoint("Contact added successfully")
  }
  else
  {
    Log.Message("Contact not added")
  }
});
/***************************************Add or Search Child without filling required fields*****************************************/
When("click on search button", function (){
  Object_Click(Button_Search_AddChild)
});

Then("Validate that required field is empty", function (){
  if(Textbox_Lastname.required && Textbox_Lastname.wText=="")
  {
    Log.Checkpoint("Required/Mandatory field is empty")
  }
  else
  {
    Log.Message("Required field is not empty")
  }
});
/****************************************Register the child*********************************************************/
Given("Navigate to the Center{arg} and Child record{arg}.", function (Center, ChildName){
  ResetApp_Home()
  Dynamic_Wait(Textbox_Personname)
  Object_Keys(Textbox_Personname,ChildName)
  Aliases.browser.pageBrightstar_Login.formVmForm.Keys("[Enter]")
  Dynamic_Wait(Panel_Child_Results)
  Delay(3000)
  if(Panel_Child_Results.Exists)
  {
    var RowProp = new Array("Name","ObjectType")
    var RowVal = new Array("Link(0)","Link")
    var Links = Panel_Child_Results.FindAll(RowProp, RowVal, 1000)
    if(Links.length > 0)
    {
      for(var i=0;i<Links.length;i++)
      {
          var searchString = Links[i].contentText;
          InputString = searchString.replace(/,/g,'')
          SubString = ChildName.replace(/,/g,'')
          if(InputString.indexOf(SubString) >= 0)
          {
            Log.Checkpoint("Expected Child Found in Child Grid")
            Object_Click(Links[i])
            break;
          }

      }
    }
    else
      Log.Message("No Records Found in Child Grid")
  }
  else
  {
    Log.Message("Search results are empty/ not found")
  }
});

When("Click on Link Center Status", function (){
  Dynamic_Wait(Link_CenterStatus)
  Object_Click(Link_CenterStatus)
  Dynamic_Wait(Button_AddCenterPreference)
});

When("Click on edit button of the current center in Current center preference table", function (){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Button(0)","Button")
  var Edit_Button = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var TextNodes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
  
  var CenterName = Textnode_Center_Name.contentText;
  
  if(Edit_Button.length>=1)
  {
    for(var i=0;i<TextNodes.length;i++)
    {
        if(CenterName.indexOf(TextNodes[i].contentText) >= 0)
        {
          Object_Click(Edit_Button[0])
          break;
        }
    }
  }
  else
  {
    Log.Error("No centers found in the table")
  }
});

When("fill the details of Register{arg}, Startdate{arg}, Days{arg}, Class{arg}", function (Register, StartDate, Days, Class){
  Dynamic_Wait(RB_IsRegisterd_Yes)
  if(Register=="Yes")
  {
    Object_Click(RB_IsRegisterd_Yes)
  }
  else
    Object_Click(RB_IsRegisterd_No)
  
  if(Register=="Yes")
  {
    Object_Keys(Textbox_Requestedstartdate,StartDate)
    switch(Days)
    {
      case "All": Object_Click(Checkbox_Monday)
                  Object_Click(Checkbox_Tuesday)
                  Object_Click(Checkbox_Wednesday)
                  Object_Click(Checkbox_Thursday)
                  Object_Click(Checkbox_Friday)
                  break;
      case "Three": Object_Click(Checkbox_Monday)
                    Object_Click(Checkbox_Wednesday)
                    Object_Click(Checkbox_Friday)
                    break;
      case "Two": Object_Click(Checkbox_Tuesday)
                  Object_Click(Checkbox_Thursday)
                  break;
      default: Log.Message("Days not selected")
    }
    if(select_RequestEnrollClassid.Enabled)
    {
      Object_Click(select_RequestEnrollClassid)
      Object_ClickItem(select_RequestEnrollClassid,Class)
    }
  }
  else if(Register=="No")
  {
    Object_Keys(Textbox_Requestedstartdate,StartDate)
    switch(Days)
    {
      case "All": Object_Click(Checkbox_Monday)
                  Object_Click(Checkbox_Tuesday)
                  Object_Click(Checkbox_Wednesday)
                  Object_Click(Checkbox_Thursday)
                  Object_Click(Checkbox_Friday)
                  break;
      case "Three": Object_Click(Checkbox_Monday)
                    Object_Click(Checkbox_Wednesday)
                    Object_Click(Checkbox_Friday)
                    break;
      case "Two": Object_Click(Checkbox_Tuesday)
                  Object_Click(Checkbox_Thursday)
                  break;
      default: Log.Message("Days not selected")
    }
    if(select_RequestEnrollClassid.Enabled)
    {
      Object_Click(select_RequestEnrollClassid)
      Object_ClickItem(select_RequestEnrollClassid,Class)
    }
  }
});

Then("Click on Save & close button and validate{arg}", function (Status){
  Object_Click(button_SaveClose)
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  Delay(2000)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var TextNodes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
  for(var i=0;i<TextNodes.length;i++)
  {
      if(TextNodes[i].contentText==Status)
      {
        Log.Checkpoint("Status changed in Center preference status history grid.")
        break;
      }
  }

  Delay(2000)
});

/****************************************Enrollment & Schedule******************************************************/
Given("click on Enrollment and Schedule tab", function (){
  Dynamic_Wait(Link_EnrollmentSchedule)
  Object_Click(Link_EnrollmentSchedule)
});

Given("click on Actions Button and click New Enrollments & Schedule", function (){
  Dynamic_Wait(button_Actions)
  Object_Click(button_Actions)
  Dynamic_Wait(link_NewEnrollmentSchedule)
  Object_Click(link_NewEnrollmentSchedule)
});

When("enter all the mandatory details {arg}, {arg}, {arg},{arg}, {arg}, {arg}, {arg}, {arg}", function (StartDate, Program, Class, rateplan, Days, StartTime, EndTime, Classoverride){
  Dynamic_Wait(TB_StartdateEnroll)
  Object_Keys(TB_StartdateEnroll,StartDate)
  Object_Click(Select_ProductidEnroll)
  Object_ClickItem(Select_ProductidEnroll,Program)
  Delay(3000)
  if(Select_ClassidEnroll.Enabled)
  {
    Object_Click(Select_ClassidEnroll)
    Object_ClickItem(Select_ClassidEnroll,Class)
    Object_Click(Select_RateplanidEnroll)
    Object_ClickItem(Select_RateplanidEnroll,rateplan)
  }
  else
  {
    Log.Message("Class dropdown is disabled")
  }
  switch(Days)
  {
    case "All": Object_Click(CB_MondayEnroll)
                Object_Click(CB_TuesdayEnroll)
                Object_Click(CB_WednesdayEnroll)
                Object_Click(CB_ThursdayEnroll)
                Object_Click(CB_FridayEnroll)
                break;
    case "Three": Object_Click(CB_MondayEnroll)
                  Object_Click(CB_WednesdayEnroll)
                  Object_Click(CB_FridayEnroll)
                  break;
    case "Two": Object_Click(CB_TuesdayEnroll)
                Object_Click(CB_ThursdayEnroll)
                break;
    default: Log.Message("Checkboxes of days are disabled or not exists")
  }
  Object_Click(Select_StarttimeEnroll)
  Object_ClickItem(Select_StarttimeEnroll,StartTime)
  Object_Click(Select_EndtimeEnroll)
  Object_ClickItem(Select_EndtimeEnroll,EndTime)
  Object_Click(Select_OverrideclassidEnroll)
  Object_ClickItem(Select_OverrideclassidEnroll,Classoverride)
  
});

When("Click on Save and close button and validate Status{arg}", function (Status){
  Object_Click(button_SaveClose)
  Dynamic_Wait(Link_CenterStatus)
  Object_Click(Link_CenterStatus)
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  Delay(2000)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var TextNodes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
  for(var i=0;i<TextNodes.length;i++)
  {
      if(TextNodes[i].contentText==Status)
      {
        Log.Checkpoint("Status changed in Center preference status history grid.")
        break;
      }
  }
});

/****************************************Add Sibling****************************************************************/

When("Click on Add sibling button", function (){
  Object_Click(Button_AddSibling)
  Dynamic_Wait(TB_Firstname_Contact)
});

When("Enter all the required fields {arg}, {arg} ,{arg}, {arg}and click on search button", function (SFN, SLN, SDOB, SGender){
  Object_Keys(TB_Firstname_Contact,SFN)
  Object_Keys(TB_Lastname_Contact,SLN)
  Object_Keys(TB_DOB,SDOB)
  Object_Click(SelectGender_Contact)
  Object_ClickItem(SelectGender_Contact,SGender)
  Object_Click(Button_Search_Contact)
  Delay(3000)
});

Then("User should see match records in Possible matches for sibling in table with {arg} or it might be blank", function (param1){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Panel(0)","Panel")
  var Links = Panel_Child_Results.FindAll(RowProp, RowVal, 1000)

  for(var i=0;i<Links.length;i++)
  {
      if(Links[i].contentText!="" && Links[i].contentText.indexOf(param1)>=0)
      {
        Log.Checkpoint("Found a match in 'Possible child matches in BrightStar Table'")
        break;
      }
      else if(i==Links.length-1)
      {
        Log.Message("No match records found in the table")
      }
  }
});

When("user click on Continue with Add button to add sibling", function (){
  Object_Click(Button_ContinueWithAdd_Contact)
  Dynamic_Wait(SB_Continue_Contact)
});

When("Click on Continue Button", function (){
  Object_Click(SB_Continue_Contact)
  Dynamic_Wait(SB_Continue_Employement)
  Object_Click(SB_Continue_Employement)
  Delay(3000)
});

/**************************************Add Center Preference******************************************************************/

When("Click on Add Center Preference Button", function (){
  Object_Click(Button_AddCenterPreference)
  Dynamic_Wait(Select_Childstatusid)
});

When("Click on Magnifier Button", function (){
  Object_Click(Button_Magnifier)
  Dynamic_Wait(Lable_AnyPart)
});

Then("Click on Save and close button", function (){
  Object_Click(button_SaveClose)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var TextNodes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)

  for(var i=0;i<TextNodes.length;i++)
  {
      if(TextNodes[i].contentText=="0116 - Staples Child Care Center")
      {
        Log.Checkpoint("Added Preferred Center successfully")
        break;
      }
      else if(i==TextNodes.length-1)
      {
        Log.Message(" Preferred Center Not added")
      }
  }
});

/******************************************Emergency Contact*****************************************************************/
When("Click on Add or Edit Priorities button", function (){
  Dynamic_Wait(Button_AddEditPriorities)
  Object_Click(Button_AddEditPriorities)
  Dynamic_Wait(Button_AddPriority)
});

When("Click on Add Priority Button", function (){
  Object_Click(Button_AddPriority)
  Dynamic_Wait(Table_Emergency_Contacts)
});

Then("Enter the details {arg}, {arg}, {arg} and click on Save and close button", function (Name, Number, Note){
  for(var i=2;i<Table_Emergency_Contacts.RowCount;i++)
  {
    if(Table_Emergency_Contacts.Exists)
    {
      var RowProp = new Array("Name","ObjectType")
      var RowVal = new Array("Select(\"contactId*\")","Select")
      var Links = Table_Emergency_Contacts.Cell(i,1).FindAll(RowProp, RowVal, 1000)
      Object_Click(Links[0])
      Object_ClickItem(Links[0],Name)
      
      var RowProp = new Array("Name","ObjectType")
      var RowVal = new Array("Select(\"phoneId*\")","Select")
      var Links = Table_Emergency_Contacts.Cell(i,2).FindAll(RowProp, RowVal, 1000)
      Object_Click(Links[0])
      Object_ClickItem(Links[0],Number)
      
      var RowProp = new Array("Name","ObjectType")
      var RowVal = new Array("Textbox(\"notes*\")","Textbox")
      var Links = Table_Emergency_Contacts.Cell(i,3).FindAll(RowProp, RowVal, 1000)
      Object_Keys(Links[0],Note)
      Object_Click(button_SaveClose)
    }
  }
});

Then("Check for the record in Emergency contacts grid{arg}", function (param1){
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.EmergencyContactGrid)
  Delay(2000)
  if(Aliases.browser.pageBrightstar_Login.EmergencyContactGrid.Exists)
  {
    var RowProp = new Array("Name","ObjectType")
    var RowVal = new Array("TextNode(0)","TextNode")
    var Links = Aliases.browser.pageBrightstar_Login.EmergencyContactGrid.FindAll(RowProp, RowVal, 1000)
    if(Links.length > 0)
    {
      for(var i=0;i<Links.length;i++)
      {
          var searchString = Links[i].contentText;
          InputString = searchString.replace(/,/g,'')
          SubString = param1.replace(/,/g,'')
          if(InputString.indexOf(SubString) >= 0)
          {
            Log.Checkpoint("Emergency contact added successfully")
            break;
          }

      }
    }
    else
      Log.Message("No Records Found in Grid")
  }
  else
  {
    Log.Message("Search results are empty/ not found")
  }
});

/*******************************Add Contact Employed***********************************/
Given("Navigate to the Center{arg}, Child record{arg} and Click on add Contact button in profile", function (Center, ChildName){
  ResetApp_Home()
  Dynamic_Wait(Textbox_Personname)
  Object_Keys(Textbox_Personname,ChildName)
  Aliases.browser.pageBrightstar_Login.formVmForm.Keys("[Enter]")
  Dynamic_Wait(Panel_Child_Results)
  Delay(3000)
  if(Panel_Child_Results.Exists)
  {
    var RowProp = new Array("Name","ObjectType")
    var RowVal = new Array("Link(0)","Link")
    var Links = Panel_Child_Results.FindAll(RowProp, RowVal, 1000)
    if(Links.length > 0)
    {
      for(var i=0;i<Links.length;i++)
      {
          var searchString = Links[i].contentText;
          InputString = searchString.replace(/,/g,'')
          SubString = ChildName.replace(/,/g,'')
          if(InputString.indexOf(SubString) >= 0)
          {
            Log.Checkpoint("Expected Child Found in Child Grid")
            Object_Click(Links[i])
            Dynamic_Wait(Button_AddContact_InProfile)
            Object_Click(Button_AddContact_InProfile)
            break;
          }

      }
    }
    else
      Log.Message("No Records Found in Child Grid")
  }
  else
  {
    Log.Message("Search results are empty/ not found")
  }
});

When("user enters employment details as employed, fill the required details{arg} {arg} {arg} {arg} {arg} {arg} {arg}and click on continue", 
function (OrgName, EmpId, PayGroup, Address, City, State, Zip){
  Dynamic_Wait(Label_Employed)
  Object_Click(Label_Employed)
  Object_Click(Button_Employee_Search)
  Dynamic_Wait(Lable_AnyPart)
  Object_Click(Lable_AnyPart)
  Object_Keys(TB_Searchvalue,OrgName)
  Object_Click(Button_Search)
  Delay(3000)
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  
  if(radiobutton_Clientid.Exists)
  {
    Object_Click(radiobutton_Clientid)
  }
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var TextNodes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)

  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("RadioButton(\"clientId\")","RadioButton")
  var RadioButtons = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  
  if(TextNodes.length!=0)
  {
    for(var i=0;i<TextNodes.length;i++)
    {
        if(TextNodes[i].contentText==OrgName)
        {
          RadioButtons[i].Click()
          break;
        }
    }
  }
  else
  {
    Log.Message("No search results found")
  }
  if(Button_SelectClient.Enabled)
  {
    Object_Click(Button_SelectClient)
    Delay(3000)
  }
  else
  {
    Log.Message("Select Client button is disabled/ no search results found ")
  }
  Dynamic_Wait(TB_Employeeid)
  Object_Keys(TB_Employeeid,EmpId)
  Object_Click(Select_Paygroupid)
  Object_ClickItem(Select_Paygroupid,PayGroup)
  Object_Keys(TB_Workaddressaddressline1,Address)
  Object_Keys(TB_Workaddresscity,City)
  Object_Click(Select_Workaddressstate)
  Object_ClickItem(Select_Workaddressstate,State)
  Object_Keys(TB_Workaddresszipcode,Zip)
  Object_Click(SB_Continue_Employement)
  Dynamic_Wait(Table_ChildRelationship)
});

/************************************Add Contact Unknown*************************************/
When("user enters employment details as Unknown and click on continue", function (){
  Dynamic_Wait(Label_Unknown)
  Object_Click(Label_Unknown)
  Object_Click(CB_DoNotMailWork)
  Object_Click(SB_Continue_Employement)
  Dynamic_Wait(Table_ChildRelationship)
});
/*********************************Edit button functionality in Child Profile***********************/
Given("Navigate to required center {arg} and Child record{arg}", function (centerNumber, ChildName){
  ChangeCenter(centerNumber)
  ResetApp_Home()
  Dynamic_Wait(Textbox_Personname)
  Object_Keys(Textbox_Personname,ChildName)
  Aliases.browser.pageBrightstar_Login.formVmForm.Keys("[Enter]")
  Dynamic_Wait(Panel_Child_Results)
  Delay(3000)
  if(Panel_Child_Results.Exists)
  {
    var RowProp = new Array("Name","ObjectType")
    var RowVal = new Array("Link(0)","Link")
    var Links = Panel_Child_Results.FindAll(RowProp, RowVal, 1000)
    if(Links.length > 0)
    {
      for(var i=0;i<Links.length;i++)
      {
          var searchString = Links[i].contentText;
          InputString = searchString.replace(/,/g,'')
          SubString = ChildName.replace(/,/g,'')
          if(InputString.indexOf(SubString) >= 0)
          {
            Log.Checkpoint("Expected Child Found in Child Grid")
            Object_Click(Links[i])
            break;
          }

      }
    }
    else
      Log.Message("No Records Found in Child Grid")
  }
  else
  {
    Log.Message("Search results are empty/ not found")
  }
});

When("click on edit button", function (){
  Dynamic_Wait(Button_Edit)
  Object_Click(Button_Edit)
});

Then("Verify the FirstName LastName fields exists", function (){
  Dynamic_Wait(Textbox_GIFirstname)
  if(Textbox_GIFirstname.Exists && Textbox_GILastname.Exists)
  {
    Log.Checkpoint("FirstName and Lastname fields are displayed")
  }
  else
  {
    Log.Error("FirstName and Last fields are not displayed")
  }
});

Then("Validate the child record with name {arg} and close modal", function (param1){
  if(param1.indexOf(Textbox_GIFirstname.contentText)>=0 && param1.indexOf(Textbox_GILastname.contentText)>=0)
  {
    Log.Checkpoint("Firstname and lastname fields contains expected values")
    Object_Click(Button_Cancel_CenterSearch)
  }
  else
  {
    Object_Click(Button_Cancel_CenterSearch)
    Log.Error("Firstname and lastname fields contains unexpected values/empty")
  }
});
/****************************Verify the Discounts modal and its fields*********************************************/

When("click on Finance tab", function (){
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.linkFinance)
  Object_Click(Aliases.browser.pageBrightstar_Login.linkFinance)
  Dynamic_Wait(Button_AddDiscount)
});

When("click on add discount button", function (){
  Object_Click(Button_AddDiscount)
});

Then("user should see Discounts modal and its fields and close modal.", function (){
  Dynamic_Wait(Select_Org_discountid)
  if(Select_Org_discountid.Exists && Number_input_Discountpercent.Exists && TB_StartdateEnroll.Exists && TB_EnddateEnroll.Exists)
  {
    Log.Checkpoint("Discounds modal is opened and expected fields are displayed.")
    Object_Click(Button_Cancel)
  }
  else
  {
    Object_Click(Button_Cancel)
    Log.Error("Discounds modal is not opened and expected fields are not displayed")
  }
  
});
/******************************************* Add Sibling Discount to the child*************************/
Then("Select discount type{arg} and click on save and close button", function (param1){
  Dynamic_Wait(Select_Org_discountid)
  Object_Click(Select_Org_discountid)
  Object_ClickItem(Select_Org_discountid,param1)
  Object_Click(ButtonSaveClose)
  Delay(2000)
  var Panel_Grid_Body = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body
  if(Panel_Grid_Body.Exists)
    {
      var RowProp = new Array("Name","ObjectType")
      var RowVal = new Array("Button(0)","Button")
      var Links = Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
      for(var i=0;i<Links.length;i++)
      {
        if(Links[i].outerHTML.indexOf("delete")>=0)
        {
          Log.Checkpoint("Sibling discount successly added")
          break;
        }
      }
    }
});
/***********************************Delete sibling Discount*********************************/
Given("check for added discount{arg} in the table", function (param1){
  var Panel_Grid_Body = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body
  if(Panel_Grid_Body.Exists)
    {
      var RowProp = new Array("Name","ObjectType")
      var RowVal = new Array("Panel(0)","Panel")
      var Links = Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
      for(var i=0;i<Links.length;i++)
      {
        if(Links[i].contentText==param1)
        {
          Log.Checkpoint("Sibling discount exists in the table")
        }
        else if(i==Links.length-1)
        {
          Log.Message("Sibling discount exists in the table")
          break;
        }
      }
    }
});

When("click on delete\\/remove button", function (){
  var Panel_Grid_Body = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body
  if(Panel_Grid_Body.Exists)
    {
      var RowProp = new Array("Name","ObjectType")
      var RowVal = new Array("Button(0)","Button")
      var Links = Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
      for(var i=0;i<Links.length;i++)
      {
        if(Links[i].outerHTML.indexOf("delete")>=0)
        {
          Object_Click(Links[i])
          Delay(2000)
          break;
        }
      }
    }
});

When("click on ok button", function (){
  if(Aliases.browser.pageBrightstar_Login.panelDelete.Button_Ok.Exists)
  {
    Aliases.browser.pageBrightstar_Login.panelDelete.Button_Ok.Click()
    Delay(2000)
  }
  else 
  {
    var RowProp = new Array("Name","ObjectType","contentText","className")
    var RowVal = new Array("Button(0)","Button","Ok","btn confirm-button width-80 ng-binding btn-primary")
    var Button_Ok = Aliases.browser.pageBrightstar_Login.FindAll(RowProp, RowVal, 1000)
    if(Button_Ok.length!=0)
    {
      Button_Ok[0].Click()
    }
    Delay(2000)
  }
});

Then("validate the discount{arg} is deleted or not", function (param1){
  var Panel_Grid_Body = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body
  if(Panel_Grid_Body.Exists)
    {
      var RowProp = new Array("Name","ObjectType")
      var RowVal = new Array("Panel(0)","Panel")
      var Links = Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
      for(var i=0;i<Links.length;i++)
      {
        if(Links[i].contentText==param1)
        {
          Log.Error("Sibling discount exists in the table")
        }
        else if(i==Links.length-1)
        {
          Log.Checkpoint("Sibling discount does not exists in the table")
          break;
        }
      }
    }
});

When("Navigate to Parent profile of child{arg}", function (Contact){
  Delay(3000)
  Dynamic_Wait(relationshipGridcontacts)
  var RowProp = new Array("Name", "ObjectType")
    var RowVal = new Array("Link(0)", "Link")
    var Links = relationshipGridcontacts.FindAll(RowProp, RowVal, 1000)
    if (Links.length > 0) {
        for (var i = 0; i < Links.length; i++) {
            var searchString = Links[i].contentText;
            InputString = searchString.replace(/,/g, '')
            SubString = Contact.replace(/,/g, '')

            if (InputString.indexOf(SubString) >= 0) {
                Log.Checkpoint("Expected Contact Found in Contact Grid")
                Links[i].focus()
                Object_Click(Links[i])
                break;
            } else
                Log.Message("No Contact Found")

        }
    }
});

When("click on edit button in contact page", function (){
  Dynamic_Wait(Button_Edit)
  Object_Click(Button_Edit)
});

Then("Verify the name details of contact fields exists", function (){
   Dynamic_Wait(Textbox_GIFirstname)
  if(Textbox_GIFirstname.Exists && Textbox_Lastname_ContactGI.Exists)
  {
    Log.Checkpoint("FirstName and Lastname fields are displayed")
  }
  else
  {
    Log.Error("FirstName and Last fields are not displayed")
  }
});

Then("Validate the Contact record with name {arg} and close modal", function (param1){
  if(param1.indexOf(Textbox_GIFirstname.contentText)>=0 && param1.indexOf(Textbox_Lastname_ContactGI.contentText)>=0)
  {
    Log.Checkpoint("Firstname and lastname fields contains expected values")
    Object_Click(Button_Cancel_CenterSearch)
  }
  else
  {
    Object_Click(Button_Cancel_CenterSearch)
    Log.Error("Firstname and lastname fields contains unexpected values/empty")
  }
});

When("click on Inquiries and Activities tab", function (){
  Dynamic_Wait(Link_InquiriesActivities)
  Object_Click(Link_InquiriesActivities)
});

When("click on add activity button", function (){
  Dynamic_Wait(Button_AddActivity)
  Object_Click(Button_AddActivity)
});

Then("Validate the modal displayed with expected fields", function (){
  Dynamic_Wait(Textbox_Activitydate)
  if(Textbox_Activitydate.Exists && Textbox_Organizationfullname.Exists && Select_Activitytypeid.Exists && Textbox_Duedate.Exists)
  {
    Log.Checkpoint("Activity modal is displayed")
    Object_Click(Button_Cancel_CenterSearch)
    Delay(2000)
  }
  else
  {
    Log.Error("Activity modal not displayed")
  }
});

When("click on add Inquiry button", function (){
  Dynamic_Wait(Button_AddInquiry)
  Object_Click(Button_AddInquiry)
});

Then("Validate the Inquiry modal displayed with expected fields", function (){
  Dynamic_Wait(Textbox_Inquirydate)
  if(Textbox_Inquirydate.Exists && Select_Requesttypeid.Exists && Select_Takenbyid.Exists && Select_Sourceid.Exists)
  {
    Log.Checkpoint("Inquiry modal exists with expected fields")
    Object_Click(Button_Cancel)
    Delay(1000)
  }
});

Then("enter all the required details{arg}, {arg}, {arg}, {arg}, {arg}", function (ADate, AType, DDate, Assigne, Notes){
  Dynamic_Wait(Textbox_Activitydate)
  Object_Keys(Textbox_Activitydate,ADate)
  Object_Click(Select_Activitytypeid)
  Object_ClickItem(Select_Activitytypeid,AType)
  Object_Keys(Textbox_Duedate,DDate)
  Object_Click(Select_Assignedtoid)
  Object_ClickItem(Select_Assignedtoid,Assigne)
  Object_Keys(Textarea_ActivityNotes,Notes)
});

Then("validate the warning message displayed or not", function (){
  if(messageDialog_InquiryRequired.Exists)
  {
    Log.Checkpoint(messageDialog_InquiryRequired.contentText)
    Object_Click(messageDialog_InquiryRequired)
    Aliases.browser.pageBrightstar_Login.Keys("[Tab][Tab][Enter]")
  }
  else
  {
    Log.Message("Warning message is not displayed")
  }
});

Then("close both Inquiry and activity modals", function (){
  Dynamic_Wait(Textbox_Inquirydate)
  Object_Click(Button_Cancel_CenterSearch)
  Dynamic_Wait(Button_Cancel_CenterSearch)
  Object_Click(Button_Cancel_CenterSearch)
});

Given("click on add Inquiry button", function (){
  Dynamic_Wait(Button_AddInquiry)
  Object_Click(Button_AddInquiry)
});

When("enter required data in the Inquiry modal{arg}, {arg},{arg}, {arg}, {arg}, {arg}", function (IDate, FollowReq, RqType, InqTaken, Source, Notes){
 Dynamic_Wait(Textbox_Inquirydate)
 Object_Keys(Textbox_Inquirydate,IDate)
 if(FollowReq=="Yes")
 {
   Object_Click(CB_NoFollowUpRequired)
 }
 else
 {
   Log.Message("Followup required")
 }
 Object_Click(Select_Requesttypeid)
 Object_ClickItem(Select_Requesttypeid,RqType)
 Object_Click(Select_Takenbyid)
 Object_ClickItem(Select_Takenbyid,InqTaken)
 Object_Click(Select_Sourceid)
 Object_ClickItem(Select_Sourceid,Source)
 Object_Keys(Textarea_InquiryNotes,Notes)
});


Then("Verify the added or edited Inquiry in the Inquiry Grid{arg}", function (param1){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links1 = Grid_inquiries.FindAll(RowProp, RowVal, 1000)
  if(Links1.length!=0)
  {
    for(var j=0;j<Links1.length;j++)
    {
      if(Links1[j].contentText==param1)
      {
        Log.Checkpoint("Added or edited Inquiry notes is displayed in the grid")
      break;
      }
    }
  }
});

Given("click on edit Inquiry button", function (){
  Dynamic_Wait(Grid_inquiries)
  Delay(2000)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Button(0)","Button")
  var Links1 = Grid_inquiries.FindAll(RowProp, RowVal, 1000)
  if(Links1.length!=0)
  {
    for(var j=0;j<Links1.length;j++)
    {
      if(Links1[j].outerHTML.indexOf("edit")>=0)
      {
        Object_Click(Links1[j])
        break;
      }
    }
  }
});

When("edit the Inquiry {arg}", function (param1){
  Dynamic_Wait(Textbox_Inquirydate)
  Object_Keys(Textarea_InquiryNotes,param1)
});
