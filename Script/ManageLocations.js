//USEUNIT ImportUnits
var Provider;
var aCenter;

When("click on Center Management tab and click on Manage locations link", function (){
  Dynamic_Wait(Link_CenterManagement)
  Object_Click(Link_CenterManagement)
  Dynamic_Wait(Link_ManageLocations_CM)
  Object_Click(Link_ManageLocations_CM)
});

Then("click on Add location button", function (){
  Dynamic_Wait(Button_AddLocation_CM)
  Object_Click(Button_AddLocation_CM)
});

Then("verify the location modal is displayed with expected fields", function (){
  Dynamic_Wait(Textbox_Location_name_CM)
  if(Textbox_Location_name_CM.Exists && Select_Locationcategoryid_CM.Exists && Textarea_Locationdescription_CM.Exists)
  {
    Log.Checkpoint("Location modal is displayed with expected fields")
    Object_Click(Button_Cancel_CenterSearch)
    Delay(1000)
  }
  else
  {
    Log.Error("Location modal is not displayed")
  }
});
/**************************************************************************************************/

Given("click on Add location button", function (){
  Dynamic_Wait(Button_AddLocation_CM)
  Object_Click(Button_AddLocation_CM)
});

When("enter location name{arg}, category{arg}, status{arg} and Description{arg}", function (Name, Category, Status, Desc){
  Location = Name+makeid()
  Name = Location
  Dynamic_Wait(Textbox_Location_name_CM)
  Object_Keys(Textbox_Location_name_CM,Name)
  Object_Click(Select_Locationcategoryid_CM)
  Object_ClickItem(Select_Locationcategoryid_CM,Category)
  if(Status=="Yes")
  {
    if(CB_Active_Locations_CM.checked)
    {
      Log.Message("Already selected/checked")
    }
    else
    {
      Object_Click(CB_Active_Locations_CM)
    }
  }
  else
  {
    if(CB_Active_Locations_CM.checked)
    {
      Object_Click(CB_Active_Locations_CM)
    }
    else
    {
      Log.Message("Already unchecked")
    }
  }
  Object_Keys(Textarea_Locationdescription_CM,Desc)

});

When("enter location name{arg}, category{arg}, status{arg} and Description{arg} duplicate", function (Name, Category, Status, Desc){
  Dynamic_Wait(Textbox_Location_name_CM)
  Object_Keys(Textbox_Location_name_CM,Name)
  Object_Click(Select_Locationcategoryid_CM)
  Object_ClickItem(Select_Locationcategoryid_CM,Category)
  if(Status=="Yes")
  {
    if(CB_Active_Locations_CM.checked)
    {
      Log.Message("Already selected/checked")
    }
    else
    {
      Object_Click(CB_Active_Locations_CM)
    }
  }
  else
  {
    if(CB_Active_Locations_CM.checked)
    {
      Object_Click(CB_Active_Locations_CM)
    }
    else
    {
      Log.Message("Already unchecked")
    }
  }
  Object_Keys(Textarea_Locationdescription_CM,Desc)

});

When("click on save and close button", function (){
  Object_Click(ButtonSaveClose)
  Delay(2000)
});

Then("verify the added location{arg} in the grid", function (Name){
  Name= Location
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText ==Name)
    {
      Log.Checkpoint("Location "+Name+" is successfully added without errors")
      break
    }
    else if(j==Links.length-1)
    {
      Log.Message("Location "+Name+" is not displayed in the grid")
    }
  }
});

Then("verify the whether error message is displayed or not", function (){
  if(Aliases.browser.pageBrightstar_Login.panel3.Exists && Aliases.browser.pageBrightstar_Login.panel3.contentText!="")
  {
    Log.Checkpoint(Aliases.browser.pageBrightstar_Login.panel3.contentText)
    Object_Click(Button_Cancel_CenterSearch)
    Delay(1000)
  }
  else
  {
    Log.Message("Error message not diaplayed")
  }
});
/************************************************************************************************************/

When("select status as active {arg}", function (Status){
  Dynamic_Wait(Select_Isactive_CM)
  Object_Click(Select_Isactive_CM)
  Object_ClickItem(Select_Isactive_CM,Status)
  Delay(1000)
});

Then("click on edit button and change it to inactive {arg}", function (Status){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Button(0)","Button")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].outerHTML.indexOf("pencil")>=0 &&Links[j].outerHTML.indexOf("edit")>=0 )
    {
      Object_Click(Links[j])
      break
    }
    else if(j==Links.length-1)
    {
      Log.Error("Message not displayed in the grid")
    }
  }
  Dynamic_Wait(CB_Active_Locations_CM)
  if(Status=="Yes")
  {
    if(CB_Active_Locations_CM.checked)
    {
      Log.Message("Already selected/checked")
    }
    else
    {
      Object_Click(CB_Active_Locations_CM)
    }
  }
  else
  {
    if(CB_Active_Locations_CM.checked)
    {
      Object_Click(CB_Active_Locations_CM)
    }
    else
    {
      Log.Message("Already unchecked")
    }
  }
});

Then("click on save and close button", function (){
  Object_Click(ButtonSaveClose)
  Delay(2000)
});

Then("select status as active {arg}", function (Status){
  Dynamic_Wait(Select_Isactive_CM)
  Object_Click(Select_Isactive_CM)
  Object_ClickItem(Select_Isactive_CM,Status)
  Delay(2000)
});

Then("verify the location name{arg} and {arg}is displayed in the Grid", function (Name, Status){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText ==Name)
    {
      Log.Checkpoint("Location "+Name+" is displayed in the "+Status+" list")
      break
    }
    else if(j==Links.length-1)
    {
      Log.Message("Location "+Name+" is not displayed in the grid")
    }
  }
});
/**********************************************************************************************************/

Given("Select the Status{arg}", function (Status){
  Dynamic_Wait(Select_Isactive_CM)
  Object_Click(Select_Isactive_CM)
  Object_ClickItem(Select_Isactive_CM,Status)
  Log.Checkpoint("Screen is getting refresh")
  Delay(2000)
});

Then("Verify the results displayed in the Grid with Status {arg}", function (Status){
  if(Status=="All")
  {
    var RowProp = new Array("Name","ObjectType")
    var RowVal = new Array("Panel(0)","Panel")
    var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
    for(var j=0;j<Links.length;j++)
    {
      if(Links[j].contentText =="Active" || Links[j].contentText =="Inactive")
      {
        Log.Checkpoint("Location displayed as "+Links[j].contentText)
      }
    }
  }
  else
  {
    var RowProp = new Array("Name","ObjectType")
    var RowVal = new Array("Panel(0)","Panel")
    var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
    for(var j=0;j<Links.length;j++)
    {
      if(Links[j].contentText ==Status)
      {
        Log.Checkpoint("Locations displayed in the grid are "+Links[j].contentText)
      }
    }
  }
});

Then("click on edit button and edit Location name {arg}", function (LocName){
  Dynamic_Wait(Button_AddLocation_CM)
  Delay(2000)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Button(0)","Button")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].outerHTML.indexOf("pencil")>=0 &&Links[j].outerHTML.indexOf("edit")>=0 )
    {
      Object_Click(Links[j])
      break
    }
    else if(j==Links.length-1)
    {
      Log.Error("Message not displayed in the grid")
    }
  }
  Dynamic_Wait(Textbox_Location_name_CM)
  Object_Keys(Textbox_Location_name_CM,LocName)
});

Then("verify the edited location{arg} in the grid", function (Name){
  Dynamic_Wait(Button_AddLocation_CM)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText ==Name)
    {
      Log.Checkpoint("Location "+Name+" is successfully added")
      break
    }
    else if(j==Links.length-1)
    {
      Log.Message("Location "+Name+" is not displayed in the grid")
    }
  }
});

/**************************************************************************************************************/

When("enter location{arg}, category{arg}, status{arg} and Description{arg}", function (Name, Category, Status, Desc){
  if(Name!="")
  {
    Location = Name+makeid()
  }
  Name = Location
  Dynamic_Wait(Textbox_Location_name_CM)
  Object_Keys(Textbox_Location_name_CM,Name)
  Object_Click(Select_Locationcategoryid_CM)
  Object_ClickItem(Select_Locationcategoryid_CM,Category)
  if(Status=="Yes")
  {
    if(CB_Active_Locations_CM.checked)
    {
      Log.Message("Already selected/checked")
    }
    else
    {
      Object_Click(CB_Active_Locations_CM)
    }
  }
  else
  {
    if(CB_Active_Locations_CM.checked)
    {
      Object_Click(CB_Active_Locations_CM)
    }
    else
    {
      Log.Message("Already unchecked")
    }
  }
  Object_Keys(Textarea_Locationdescription_CM,Desc)
});

When("enter location name{arg}, category{arg}, status{arg} and Description{arg}diff category", function (Name, Category, Status, Desc){
  Dynamic_Wait(Textbox_Location_name_CM)
  Object_Keys(Textbox_Location_name_CM,Name)
  Object_Click(Select_Locationcategoryid_CM)
  Object_ClickItem(Select_Locationcategoryid_CM,Category)
  if(Status=="Yes")
  {
    if(CB_Active_Locations_CM.checked)
    {
      Log.Message("Already selected/checked")
    }
    else
    {
      Object_Click(CB_Active_Locations_CM)
    }
  }
  else
  {
    if(CB_Active_Locations_CM.checked)
    {
      Object_Click(CB_Active_Locations_CM)
    }
    else
    {
      Log.Message("Already unchecked")
    }
  }
  Object_Keys(Textarea_Locationdescription_CM,Desc)
});

Then("verify the added location{arg} in the grid or capture the error message", function (Name){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText ==Name)
    {
      Log.Checkpoint("Location "+Name+" is successfully added without errors")
      break
    }
  }
  var RowProp1 = new Array("Name","ObjectType","contentText")
  var RowVal1 = new Array("Panel(0)","Panel","'Location Name' already exists for this center.")
  var Links1 = Aliases.browser.pageBrightstar_Login.FindAll(RowProp1, RowVal1, 1000)
  for(var i=0;i<Links1.length;i++)
  {
    if(Links1[i].contentText =="'Location Name' already exists for this center.")
    {
      Log.Checkpoint("Error message was displayed")
      Object_Click(Button_Cancel_CenterSearch)
      break
    }
  }
  
});


Then("check for location{arg} displayed in the grid or not", function (Name){
  Dynamic_Wait(Button_AddLocation_CM)
  Delay(2000)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText ==Name)
    {
      Log.Checkpoint("Location "+Name+" is displayed in the grid")
      break
    }
    else if(j==Links.length-1)
    {
      Log.Message("Location "+Name+" is not displayed in the grid")
    }
  }
});

Then("verify the location modal is display blank for new setups", function (){
  Dynamic_Wait(Textbox_Location_name_CM)
  if(Textbox_Location_name_CM.Text=="" && Select_Locationcategoryid_CM.wText=="" && Textarea_Locationdescription_CM.ContentText=="")
  {
    Log.Checkpoint("Location modal is displayed with blank for new setups")
    Object_Click(Button_Cancel_CenterSearch)
    Delay(1000)
  }
  else
  {
    Log.Error("Location modal is not displayed")
  }
});

Then("verify the location name field is required field or not", function (){
 Dynamic_Wait(Textbox_Location_name_CM)
  if(Textbox_Location_name_CM.Exists && Textbox_Location_name_CM.Text=="" && Textbox_Location_name_CM.required==true)
  {
    Log.Checkpoint("Location name field is required field you cannot leave it blank")
    Object_Click(Button_Cancel_CenterSearch)
    Delay(1000)
  }
  else
  {
    Log.Error("Location modal is not displayed")
  }
});

Then("verify the location category field is required field or not", function (){
  Dynamic_Wait(Textbox_Location_name_CM)
  if(Select_Locationcategoryid_CM.Exists && Select_Locationcategoryid_CM.wText==""  && Select_Locationcategoryid_CM.required==true)
  {
    Log.Checkpoint("Location category field is required field you cannot leave it blank")
    Object_Click(Button_Cancel_CenterSearch)
    Delay(1000)
  }
  else
  {
    Log.Error("Location modal is not displayed")
  }
});

When("enter location{arg}, category{arg}, status{arg} and Description{arg} with alphanumerical values", function (Name, Category, Status, Desc){
  if(Name!="")
  {
    Location = Name+makeid()
  }
  Name = Location
  Dynamic_Wait(Textbox_Location_name_CM)
  Object_Keys(Textbox_Location_name_CM,Name)
  Log.Checkpoint("Location Name field type is "+Textbox_Location_name_CM.ObjectType+" and allows alphanumerical values")
  if(Textbox_Location_name_CM.required)
  {
    Log.Checkpoint("Location Name field type is required")
  }
  Object_Click(Select_Locationcategoryid_CM)
  Object_ClickItem(Select_Locationcategoryid_CM,Category)
  Log.Checkpoint("Location category field type is "+Select_Locationcategoryid_CM.ObjectType+" and able to "+Select_Locationcategoryid_CM.type+" at atime")
  if(Select_Locationcategoryid_CM.required)
  {
    Log.Checkpoint("Location category field type is required")
  }
  if(Status=="Yes")
  {
    if(CB_Active_Locations_CM.checked)
    {
      Log.Message("Already selected/checked")
    }
    else
    {
      Object_Click(CB_Active_Locations_CM)
    }
  }
  else
  {
    if(CB_Active_Locations_CM.checked)
    {
      Object_Click(CB_Active_Locations_CM)
    }
    else
    {
      Log.Message("Already unchecked")
    }
  }
  Object_Keys(Textarea_Locationdescription_CM,Desc)
  Log.Checkpoint("Location Description field type is "+Textarea_Locationdescription_CM.ObjectType+" and allows alphanumerical values")
  if(!Textarea_Locationdescription_CM.required)
  {
    Log.Checkpoint("Location description field is optional/not required")
  }
});