//USEUNIT ImportUnits
var Provider;
var aCenter;

When("click on Center Management tab and click on Center Messages link", function (){
  Dynamic_Wait(Link_CenterManagement)
  Object_Click(Link_CenterManagement)
  Dynamic_Wait(Link_CenterMessages_CM)
  Object_Click(Link_CenterMessages_CM)
});

Then("click on Add Message button", function (){
  Dynamic_Wait(Button_AddMessage_CM)
  Object_Click(Button_AddMessage_CM)
});

Then("verify the modal is displayed with expected fields", function (){
  if(TB_StartdateEnroll.Exists && Textarea_Message.Exists && Label_Yes_FamilyIM_CM.Exists && Panel_Class.Exists)
  {
    Log.Checkpoint("Center Message modal is displayed with expected fields")
    Object_Click(Button_Cancel)
  }
  else
  {
    Object_Click(Button_Cancel)
    Log.Error("Center Message modal is not displayed with expected fields")
  }
});
/**************************************************************************************************/

Then("Enter startdate{arg}, Message {arg} and click on display on FIC{arg}", function (SDate, Message, FIC){
  Dynamic_Wait(TB_StartdateEnroll)
  Object_Keys(TB_StartdateEnroll,SDate)
  Object_Keys(Textarea_Message,Message)
  if(FIC=="Yes")
  {
    Object_Click(Label_Yes_FamilyIM_CM)
  }
  else
  {
    Object_Click(Label_No_FamilyIC_CM)
  }
});

Then("click on save and close button, validate the message{arg} displayed in the grid.", function (Message){
  Object_Click(ButtonSaveClose)
  Delay(3000)
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText == Message)
    {
      Log.Checkpoint("Added/edited message displayed in the grid")
      break
    }
    else if(j==Links.length-1)
    {
      Log.Error("Message not displayed in the grid")
    }
  }
});

When("verify the message{arg} exists in the grid", function (Message){
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText ==Message)
    {
      Log.Checkpoint("Added message displayed in the grid")
      break
    }
    else if(j==Links.length-1)
    {
      Log.Error("Message not displayed in the grid")
    }
  }
});

When("click on edit button and edit the message{arg}", function (param1){
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
  
  Dynamic_Wait(Textarea_Message)
  Object_Keys(Textarea_Message,param1)
});

Then("verify whether message{arg} is deleted or not", function (Message){
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText ==Message)
    {
      Log.Error("Added message displayed in the grid")
      break
    }
    else if(j==Links.length-1)
    {
      Log.Checkpoint("Message not displayed in the grid")
    }
  }
});

When("click on button Ok", function (){
  
//  var RowProp = new Array("Name","ObjectType","contentText")
//  var RowVal = new Array("Button(0)","Button","Ok")
//  var Button_Ok = Aliases.browser.pageBrightstar_Login.FindAll(RowProp, RowVal, 1000)
//  if(Button_Ok.length!=0)
//  {
//    Button_Ok[0].Click()
//  }
//  Delay(2000)
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

Then("validate family information center image displayed in the grid.", function (){
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Image(\"icon_family_info_png\")","Image")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].ObjectIdentifier =="icon_family_info_png")
    {
      Log.Checkpoint("Family information center icon/image displayed in the grid")
      break
    }
    else if(j==Links.length-1)
    {
      Log.Error("Message not displayed in the grid")
    }
  }
  
//  var Panel_Grid_Body = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body
//  if(Panel_Grid_Body.Exists)
//    {
//      var RowProp = new Array("Name","ObjectType")
//      var RowVal = new Array("Button(0)","Button")
//      var Links = Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
//      for(var i=0;i<Links.length;i++)
//      {
//        if(Links[i].outerHTML.indexOf("delete")>=0)
//        {
//          Object_Click(Links[i])
//          Delay(2000)
//          break;
//        }
//      }
//    }
//  var RowProp2 = new Array("Name","ObjectType","contentText")
//  var RowVal2 = new Array("Button(0)","Button","Ok")
//  var Button_Ok = Aliases.browser.pageBrightstar_Login.FindAll(RowProp2, RowVal2, 1000)
//  if(Button_Ok.length!=0)
//  {
//    Button_Ok[0].Click()
//  }
  Delay(2000)
});

Then("click on class message {arg}Select Class as {arg}", function (ClsMsg, Class){
  if(ClsMsg=="Yes")
  {
    Object_Click(Label_ClassMessage_CM)
  }
  Delay(1000)
  var RowProp = new Array("Name","ObjectType")
      var RowVal = new Array("Label(0)","Label")
      var Links = Aliases.browser.pageBrightstar_Login.Panel_Class.FindAll(RowProp, RowVal, 1000)
      for(var i=0;i<Links.length;i++)
      {
        if(Links[i].contentText==Class)
        {
          Object_Click(Links[i])
          break;
        }
        else if(i==Links.length-1)
        {
          Log.Error("Class not found")
        }
      }
});

Given("click on Expired messages link", function (){
  Object_Click(Textnode_ExpiredMessages_CM)
  Delay(2000)
});

Then("check for existence of Expired center messages grid", function (){
  if(Grid_expiredCenterMessages_CM.Exists)
  {
    Log.Checkpoint("Expired messages grid is displayed")
  }
});

When("click on Add Statement message", function (){
  Dynamic_Wait(Button_AddStatementMessage_CM)
  Object_Click(Button_AddStatementMessage_CM)
});

When("Enter message {arg} and click on save and close button", function (Message){
  Dynamic_Wait(Textarea_StmtMessage_CM)
  Object_Keys(Textarea_StmtMessage_CM,Message)
  Object_Click(ButtonSaveClose)
  Delay(3000)
});

Then("validate the message{arg} you entered in statement messages section", function (Message){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Panel(0)","Panel")
  var Links = Aliases.browser.pageBrightstar_Login.Grid_centerMessages_CM.FindAll(RowProp, RowVal, 1000)
  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText ==Message)
    {
      Log.Checkpoint(Message+" displayed in the statement messages")
      break
    }
    else if(j==Links.length-1)
    {
      Log.Message(Message+" not displayed in the Statement messages section")
    }
  }
});

Given("click on Edit statement message button", function (){
  Dynamic_Wait(Button_EditStatementMessage_CM)
  Object_Click(Button_EditStatementMessage_CM)
  Dynamic_Wait(Textarea_StmtMessage_CM)
});

Given("click on Delete statement message button", function (){
  Dynamic_Wait(Button_DeleteStatementMessage_CM)
  Object_Click(Button_DeleteStatementMessage_CM)
  //Dynamic_Wait(buttonOk)
});

When("click on Ok button", function (){
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

Then("validate the message{arg} you entered is not displayed in statement messages section", function (Message){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Panel(0)","Panel")
  var Links = Aliases.browser.pageBrightstar_Login.Grid_centerMessages_CM.FindAll(RowProp, RowVal, 1000)
  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText ==Message)
    {
      Log.Message("Statement message displayed in the section")
      break
    }
    else if(j==Links.length-1)
    {
      Log.Checkpoint(Message+" not displayed in the Statement messages section")
    }
  }
});

Then("Verify existence of statement message modal", function (){
  Dynamic_Wait(Textarea_StmtMessage_CM)
  if(Textarea_StmtMessage_CM.Exists && ButtonSaveClose.Exists)
  {
    Log.Checkpoint("Statement message modal is displayed")
    Object_Click(Button_Cancel)
  }
  else
  {
    Log.Error("Statement message modal is not displayed")
  }
});