//USEUNIT ImportUnits
Given("Launch and Login into application", function (){
  BrowserLaunch()
  Launch_BS()
  Login()
});

When("Click on Advanced Button", function (){
  Dynamic_Wait(Button_Advanced)
  Object_Click(Button_Advanced)
  Dynamic_Wait(Textbox_Personname)
});

Then("User able to see and click find in people radio buttons", function (){
  if(Lable_AllCenters.Exists && Lable_MyCenter.Exists)
  {
    Object_Click(Lable_MyCenter)
  }
  else
  {
    Log.Error("Find in people radio buttons are not found")
  }
});

Then("User able to enter {arg} in alpha numerical format", function (name){
  if(Textbox_Personname.Exists)
  {
    Object_Keys(Textbox_Personname,name)
  }
  else
    Log.Error("Person Name field is not exists/Disabled")
});

Then("User able to enter {arg} in the textbox", function (mail){
  if(Textbox_Emailaddress.Exists)
  {
    Object_Keys(Textbox_Emailaddress,mail)
  }
});

Then("User can check Non US checkbox and able to enter {arg}", function (phone){
  if(Label_NonUS.Exists && Textbox_Phonenumber.Exists)
  {
    Object_Click(Label_NonUS)
    Object_Keys(Textbox_Phonenumber,phone)
  }
  else
    Log.Error("Phone number field is not exists/Disabled")
});

Then("User can select any of the radio buttons {arg}", function (recordID){
  if(Label_RecordId.Exists && Label_OnlinePayerId.Exists)
  {
    Object_Click(Label_RecordId)
    Object_Keys(Textbox_Personid,recordID)
  }
  else
    Log.Error("RecordID and Online Payer ID Radio buttons are not exists")
});

Then("User is able to click on search, clear criteria and cancel buttons.", function (){
  if(Button_ClearCriteria.Exists)
  {
    Object_Click(Button_Search)
    Delay(2000)
    Object_Click(Button_ClearCriteria)
    Delay(3000)
    if(Textbox_Personname.Text =="" && Textbox_Phonenumber.Text=="" && Textbox_Personid.Text == "" && Textbox_Emailaddress.Text =="")
    {
      Log.Checkpoint("Date is cleared in all the fields")
    }
    else
      Log.Error("Clear Criteria button was not exists/disabled")
  }
  else
    Log.Error("Expected buttons are not exists/disabled")
  
  if(Button_Cancel.Exists)
  {
    Object_Click(Button_Cancel)
    Log.Checkpoint(Button_Advanced.Exists +"Returned to Homepage")
  }
  else
    Log.Error("Cancel button not exists or diabled")
});
//AfterScenario(function ()
//{
//  Save_Log("Advanced Search")
//});

Then("User able to see Find People In radio buttons and Select Allradio button option", function (){
  if(Lable_AllCenters.Exists && Lable_MyCenter.Exists)
  {
    Object_Click(Lable_AllCenters)
  }
  else
  {
    Log.Error("Find in people radio buttons are not found")
  }
});

Then("User should able to enter US phonenumber {arg}", function (USphone){
  if(Textbox_Phonenumber.Exists)
  {    
    Object_Keys(Textbox_Phonenumber,USphone)
  }
  else
    Log.Error("Phone number field is not exists/Disabled")
});

Then("User should click on search button.", function (){
  if(Button_Search.Exists)
  {
    Object_Click(Button_Search) 
    if(Aliases.browser.pageBrightstar_Login.panel.Exists)
    {
      Log.Message(Aliases.browser.pageBrightstar_Login.panel.contentText)
    }  
    else if(Panel_Child_Results.Exists)
    {
      Log.Checkpoint("Search results found Cild grid")
    }
    else
    Log.Error("unexpected error occured")
  }
  else
    Log.Error("Search button is not exists/disabled")
});

Then("User should select Online payer Id radio buttons {arg}", function (recordID){
  if(Label_OnlinePayerId.Exists)
  {
    Object_Click(Label_OnlinePayerId)
    Dynamic_Wait(Textbox_Onlinepayerid)
    Object_Keys(Textbox_Onlinepayerid,recordID)
  }
  else
    Log.Error("RecordID and Online Payer ID Radio buttons are not exists")
});


Then("Very Child is available in search result", function (){
  if(Panel_Child_Results.Exists)
  {
    var RowProp = new Array("Name","ObjectType")
    var RowVal = new Array("Link(0)","Link")
    var Links = Panel_Child_Results.FindAll(RowProp, RowVal, 1000)

    Delay(3000)
  
    for(var i=0;i<Links.length;i++)
    {
        if(Links[i].contentText=="clova, Jack")
        {
          Log.Checkpoint("Expected Child Found")
          break;
        }

    }
  }
  else
  {
    Log.Message("Search results are empty/ not found")
  }
});

Then("Verify Child is available in search result {arg}", function (name){
  if(Panel_Child_Results.Exists)
  {
    var RowProp = new Array("Name","ObjectType")
    var RowVal = new Array("Link(0)","Link")
    var Links = Panel_Child_Results.FindAll(RowProp, RowVal, 1000)

    Delay(3000)
    if(Links.length > 0)
    {
      for(var i=0;i<Links.length;i++)
      {
          var searchString = Links[i].contentText;
          InputString = searchString.replace(/,/g,'')
          SubString = name.replace(/,/g,'')
         // if(searchString.includes(name))
          //if(aqString.Contains(InputString, SubString, 0, true))
          if(InputString.indexOf(SubString) >= 0)
          {
            Log.Checkpoint("Expected Child Found in Child Grid")
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

Then("Verify Contact is available in search result {arg}", function (Contact){
  if(Panel_Contact_Results.Exists)
  {
    var RowProp = new Array("Name","ObjectType")
    var RowVal = new Array("Link(0)","Link")
    var Links = Panel_Contact_Results.FindAll(RowProp, RowVal, 1000)

    Delay(3000)
    if(Links.length > 0)
    {
      for(var i=0;i<Links.length;i++)
      {
          var searchString = Links[i].contentText;
          InputString = searchString.replace(/,/g,'')
          SubString = Contact.replace(/,/g,'')
         // if(searchString.includes(Contact))
         // if(aqString.Contains(InputString, SubString, 0, true))
          if(InputString.indexOf(SubString) >= 0)
          {
            Log.Checkpoint("Expected Contact Found in Contact Grid")
            break;
          }

      }
    }
    else
      Log.Message("No Records Found in Contact Grid")
  }
  else
  {
    Log.Message("Search results are empty/ not found")
  }
});

Then("User able to enter \"setha@test.com in the textbox", function (){
  throw new NotImplementedError();
});

Then("Verfiy ButtonAddToCenter is disabled or not", function (){
  if(ButtonAddToCenter.Enabled )
  {
    Log.Message("ADD to Center Button is Enable state")
  }
  else
    Log.Checkpoint("Add to Center Button is Disabled")
});

Then("Verfiy ButtonAddToCenter is enabled or not", function (){
  if(ButtonAddToCenter.Enabled )
  {
    Log.Checkpoint("ADD to Center Button is Enable state")
  }
  else
    Log.Message("Add to Center Button is Disabled")
});
