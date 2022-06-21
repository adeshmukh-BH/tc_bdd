//USEUNIT ImportUnits
var Provider;
var aCenter;
/****************************************************Clients****************************************************************/

When("click on Center Management tab and click on clients link", function (){
  Dynamic_Wait(Link_CenterManagement)
  Object_Click(Link_CenterManagement)
  Dynamic_Wait(Link_Clients_CM)
  Object_Click(Link_Clients_CM)
});

When("Select the filter {arg}", function (Filter){
  Dynamic_Wait(Label_AnyPart_CM)
  switch(Filter)
  {
    case "Any Part": Object_Click(Label_AnyPart_CM)
    break;
    case "Start Of": Object_Click(Label_StartOf_CM)
    break;
    case "Equals": Object_Click(Label_Equals_CM)
    break;
    case "All Clients": Object_Click(Label_AllClients_CM)
    break;
    case "All Registration Promotions": Object_Click(Label_AllRegistrationPromotions)
    break;
    default :Log.Message("No filter found")
  }
});

When("Enter search key {arg} in search box", function (Key){
  if(Key!="")
  {
    Object_Keys(Textbox_Clientname_CM,Key)
  }
  else
  {
    Log.Message("Key is null or search box is disabled")
  }
  
});

Then("Click on search button", function (){
  Object_Click(Button_Search)
  Delay(2000)
});

Then("validate the displayed results from the grid{arg}", function (Key){
  if(Key!="")
  {
    Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
    var RowProp = new Array("Name","ObjectType")
    var RowVal = new Array("TextNode(0)","TextNode")
    var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
    for(var j=0;j<Links.length;j++)
    {
      if(Links[j].contentText.indexOf(Key)>=0)
      {
        Log.Checkpoint("Expected result is displayed in the grid by using search key as "+Key)
        break
      }
      else if(j==Links.length-1)
      {
        Log.Error("Expected result not displayed in the grid")
      }
    }
  }
  else
  {
    var RowProp = new Array("Name","ObjectType")
    var RowVal = new Array("TextNode(0)","TextNode")
    var Links = Grid_clients_CM.FindAll(RowProp, RowVal, 1000)
    for(var j=0;j<Links.length;j++)
    {
      if(Links[j].contentText.indexOf("Total Items")>=0)
      {
        Log.Checkpoint(Links[j].contentText)
        break
      }
    }
  }
});
/**************************************************************************************************/

When("click on Center Management tab and click on Staff management link", function (){
  Dynamic_Wait(Link_CenterManagement)
  Object_Click(Link_CenterManagement)
  Dynamic_Wait(Link_StaffManagement_CM)
  Object_Click(Link_StaffManagement_CM)
});

When("Select the class category {arg} and staff status {arg}", function (Category, Status){
  Dynamic_Wait(Select_Classcategoryid)
  Object_Click(Select_Classcategoryid)
  Object_ClickItem(Select_Classcategoryid,Category)
  Object_Click(Select_IsactiveStaff_CM)
  Object_ClickItem(Select_IsactiveStaff_CM,Status)
});

Then("Validate the data which is displayed on the grid{arg} and {arg}", function (Category, Status){
  if(Category!="All")
  {
    var RowProp = new Array("Name","ObjectType")
    var RowVal = new Array("Panel(0)","Panel")
    var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
    for(var j=0;j<Links.length;j++)
    {
      if(Links[j].contentText ==Category)
      {
        Log.Checkpoint("Only "+Category+" related records got displayed")
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
        Log.Checkpoint("Only "+Status+" records got displayed")
      }
    }
  }
});

Then("Validate error message", function (){
  if(Textnode_ClientNameMustBeBetween2.Exists)
  {
    Log.Checkpoint("Error displayed as "+Textnode_ClientNameMustBeBetween2.contentText)
  }
  else
  {
    Log.Message("Error message was not displayed")
  }
});

Then("click on info button of the client {arg}", function (Client){
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("TextNode(0)","TextNode")
  var TextNodes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)
  
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  for(var j=0;j<TextNodes.length;j++)
  {
    if(TextNodes[j].contentText ==Client)
    {
      Buttons[j].Click();
      Delay(2000)
      break
    }
  }
});

Then("validate client data is displayed {arg}", function (Client){
 Dynamic_Wait(Client_View_Modal)
 var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Textbox(0)","Textbox")
  var TextNodes = Client_View_Modal.FindAll(RowProp1, RowVal1, 1000)

  for(var j=0;j<TextNodes.length;j++)
  {
    if(TextNodes[j].outerHTML.indexOf("clientName")>=0)
    {
      if(TextNodes[j].Text==Client && TextNodes[j].readOnly)
      {
        Log.Checkpoint("Client Name field is Readonly and its valus is "+TextNodes[j].Text)
      }
    }
    else if(TextNodes[j].outerHTML.indexOf("accountManager")>=0)
    {
      if(TextNodes[j].readOnly)
      {
        Log.Checkpoint("Account manager field is Readonly and its valus is "+TextNodes[j].Text)
      }
    }
  }
  if(Button_Close.Exists)
  {
    Object_Click(Button_Close)
  }
});