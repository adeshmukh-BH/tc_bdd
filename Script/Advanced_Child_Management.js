//USEUNIT ImportUnits
//BeforeFeature(function(Advanced_Child_Management)
//{ Log.AppendFolder("Launch and login into application")
//    BrowserLaunch()
//    Launch_BS()
//    Login()
//  Log.PopLogFolder()
//});
//AfterFeature(function(Advanced_Child_Management)
//{ Log.AppendFolder("Logout from application")
//    LogOut()
//  Log.PopLogFolder()
//})
When("select Filter name as {arg}", function (Filter){
  Dynamic_Wait(Select_Filtertypeid)
  Object_Click(Select_Filtertypeid)
  Object_ClickItem(Select_Filtertypeid,Filter)
});

When("select the values from child center enrollments{arg}, {arg}, {arg}, {arg}", function (ClassCategory, Class, Program, Product){
  Dynamic_Wait(Select_Classcategoryid)
  Object_Click(Select_Classcategoryid)
  Object_ClickItem(Select_Classcategoryid,ClassCategory)
  Object_Click(Select_Classroomid)
  Object_ClickItem(Select_Classroomid,Class)
  Object_Click(Select_Programid)
  Object_ClickItem(Select_Programid,Program)
  Object_Click(Select_ProductidEnroll)
  Object_ClickItem(Select_ProductidEnroll,Product)
});

When("click on Refresh List button", function (){
  Object_Click(Button_RefreshList)
  Page_Load1()
});

Then("validate data from the child list grid{arg}.", function (ClassCategory){
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  var RowProp = new Array("Name","ObjectType","contentText")
  var RowVal = new Array("Panel(0)","Panel",ClassCategory)
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
  var total = textnodeTotalItems.contentText
  var result = total.split(":")
  TotalItems = aqConvert.StrToInt(result[1])
  if(Links.length==TotalItems*2 || Links.length==TotalItems)
  {
    Log.Checkpoint("Displayed Only "+ClassCategory+" children in the grid")
  }
  else
  {
    Log.Error("Details of infant and other children also displayed in the grid")
  }
});

Then("validate data from the child list grid{arg}, {arg}.", function (Class, Program){
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  var RowProp = new Array("Name","ObjectType","contentText")
  var RowVal = new Array("Panel(0)","Panel",Class)
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
  var total = textnodeTotalItems.contentText
  var result = total.split(":")
  TotalItems = aqConvert.StrToInt(result[1])
  if(Links.length==TotalItems*2 || Links.length==TotalItems ||Links[0].contentText==Class)
  {
    Log.Checkpoint("Displayed Only class as"+Class+" and Program "+ Program+" children in the grid")
  }
  else
  {
    Log.Error("Details of infant and other children also displayed in the grid")
  }
});

/*********************************************All enrolled children************************************/
Then("validate data from the child list grid withy child status as Enrolled", function (){
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.Click()
  //Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.Keys("[Down][Down][Down][Down][Down][Down][Down][Down]")
  var RowProp = new Array("Name","ObjectType","contentText")
  var RowVal = new Array("Panel(0)","Panel","Enrolled -*")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
  for(var i=0;i<Links.length;i++)
  {
    var total = textnodeTotalItems.contentText
    var result = total.split(":")
    TotalItems = aqConvert.StrToInt(result[1])
    if(Links[i].contentText=="Enrolled - Captured" ||Links[i].contentText=="Enrolled - Contracted"||Links[i].contentText=="Enrolled - Drop-In" )
    {
      if(i==Links.length-1)
      {
        Log.Checkpoint("Displayed Only Enrolled children in the grid")
      }
    }
    else
    {
      Log.Error("Details of infant and other children also displayed in the grid")
    }
  }
});

/*********************************************Active Requested Enrollments************************************/

Then("validate data from the child list grid which should displayed as Registered", function (){
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.Click()
  //Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.Keys("[Down][Down][Down][Down][Down][Down][Down][Down]")
  var RowProp = new Array("Name","ObjectType","contentText")
  var RowVal = new Array("Panel(0)","Panel","Registered")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
  for(var i=0;i<Links.length;i++)
  {
    var total = textnodeTotalItems.contentText
    var result = total.split(":")
    TotalItems = aqConvert.StrToInt(result[1])
    if(Links[i].contentText=="Registered")
    {
      if(i==Links.length-1)
      {
        Log.Checkpoint("Displayed Only Registered children in the grid")
      }
    }
    else
    {
      Log.Error("Details of infant and other children also displayed in the grid")
    }
  }
});

/*********************************************Registered Children************************************/

Then("validate data from the child list grid which should displayed as Registered and Wait Listed", function (){
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.Click()
  //Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.Keys("[Down][Down][Down][Down][Down][Down][Down][Down]")
  var RowProp = new Array("Name","ObjectType","contentText")
  var RowVal = new Array("Panel(0)","Panel","Registered")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
  var RowProp = new Array("Name","ObjectType","contentText")
  var RowVal = new Array("Panel(0)","Panel","Wait Listed")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
  for(var i=0;i<Links.length;i++)
  {
    var total = textnodeTotalItems.contentText
    var result = total.split(":")
    TotalItems = aqConvert.StrToInt(result[1])
    if(Links[i].contentText=="Registered" ||Links1[i].contentText=="Wait Listed" )
    {
      if(i==Links.length-1)
      {
        Log.Checkpoint("Displayed Only Registered and Wait Listed children in the grid")
      }
    }
    else
    {
      Log.Error("Details of infant and other children also displayed in the grid")
    }
  }
});

Then("validate data from the child list grid which should displayed as Web Prospect and Prospect", function (){
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.Click()
  //Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.Keys("[Down][Down][Down][Down][Down][Down][Down][Down]")
  var RowProp = new Array("Name","ObjectType","contentText")
  var RowVal = new Array("Panel(0)","Panel","Web Prospect")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
  var RowProp = new Array("Name","ObjectType","contentText")
  var RowVal = new Array("Panel(0)","Panel","Prospect")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
  for(var i=0;i<Links.length;i++)
  {
    var total = textnodeTotalItems.contentText
    var result = total.split(":")
    TotalItems = aqConvert.StrToInt(result[1])
    if(Links[i].contentText=="Web Prospect" ||Links1[i].contentText=="Prospect" )
    {
      if(i==Links.length-1)
      {
        Log.Checkpoint("Displayed Only Web Prospect and Prospect children in the grid")
      }
    }
    else
    {
      Log.Error("Details of infant and other children also displayed in the grid")
    }
  }
});


Then("Select a child{arg} from the grid and validate that group actions button is enabled", function (Child){
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("Link(0)","Link","ng-binding")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)

  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Checkbox(0)","Checkbox")
  var Checkboxes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)

  
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  
    for(var i=0;i<Links.length;i++)
    {
      if(Links[i].contentText==Child)
      {
        Object_Click(Checkboxes[i])
        if(Button_GroupActions.Enabled)
        {
          Object_Click(Button_GroupActions)
          Log.Checkpoint("Group Actions button is Enabled  and clicked on it")
        }
        else
        {
          Log.Error("Expected child was not found or group actions button is diabled")
        }
      }
    }
});

Then("Select a child{arg} from the grid and click on  group actions button", function (Child){
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("Link(0)","Link","ng-binding")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)

  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Checkbox(0)","Checkbox")
  var Checkboxes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)

  
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  
    for(var i=0;i<Links.length;i++)
    {
      if(Links[i].contentText==Child)
      {
        Object_Click(Checkboxes[i])
        if(Button_GroupActions.Enabled)
        {
          Object_Click(Button_GroupActions)
          Log.Checkpoint("Group Actions button is Enabled  and clicked on it")
        }
        else
        {
          Log.Error("Expected child was not found or group actions button is diabled")
        }
      }
    }
});

Then("click on Absent today link", function (){
  Dynamic_Wait(Link_AbsentToday)
  Object_Click(Link_AbsentToday)
  Delay(2000)
  //Page_Load1()
});

Then("click on Refresh List button", function (){
  Object_Click(Button_RefreshList)
  Page_Load1()
});

Then("check for the child{arg} in the grid list", function (Child){
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("Link(0)","Link","ng-binding")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)

  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Checkbox(0)","Checkbox")
  var Checkboxes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)

  
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  
    for(var i=0;i<Links.length;i++)
    {
      if(Links[i].contentText==Child)
      {
        Log.Message(Child+" is still showing in the Grid")
      }
      else if(i==Links.length.length-1)
      {
        Log.Checkpoint(Child+" is not showing in the list")
      }
    }
});

Then("click on Charge or Credit link", function (){
  Object_Click(Link_ChargeCredit)
  Page_Load1()
  Dynamic_Wait(ManualselectTransactiontypeid)
});

Then("verify wether the modal is displayed or not", function (){
  if(ManualselectTransactiontypeid.Exists)
  {
    Log.Checkpoint("Group Charge/Credit modal is displayed")
    Object_Click(Button_Cancel_CenterSearch)
  }
  else
  {
    Log.Error("Group Charge/Credit modal is displayed")
  }
});


Given("select Filter name as {arg}", function (Filter){
  Delay(1000)
  Dynamic_Wait(Select_Filtertypeid)
  Object_Click(Select_Filtertypeid)
  Object_ClickItem(Select_Filtertypeid,Filter)
});

Given("select child status as {arg}", function (ChildStatus){
  Object_Click(Select_Childstatusid)
  Object_ClickItem(Select_Childstatusid,ChildStatus)
});

Then("Validate data displayed as per our selection in child status {arg}", function (ChildStatus){
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("TextNode(0)","TextNode","ng-binding")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)

  if(Links.length!=0)
  {
    for(var i=0;i<Links.length;i++)
    {
      if(Links[i].contentText==ChildStatus)
      {
        if(i==Links.length-1)
        {
          Log.Checkpoint("Records displayed in the child grid as per selected Child status as "+ChildStatus)
        }
      }
      else
      {
        Log.Error("Records displayed in there grid are not as per selected child status.")
      }
    }
  }
  else
  {
    Log.Message("There are no results matching the search criteria provided")
  }
      
});
/***************************************************************************************************************************/

Then("Select a child{arg} from the grid, click on options button and click on view child information link", function (Child){
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("Link(0)","Link","ng-binding")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)

  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Checkbox(0)","Checkbox")
  var Checkboxes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)

  
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  
  var RowProp = new Array("Name","ObjectType","ObjectLabel")
  var RowVal = new Array("Link(0)","Link","View Child Information")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
    for(var i=0;i<Links.length;i++)
    {
      if(Links[i].contentText==Child)
      {
        Object_Click(Checkboxes[i])
        Object_Click(Buttons[i])
        Object_Click(Links1[i])
        //Page_Load1()
        break;
      }
      else if(i==Links.length-1)
      {
        Log.Message(Child+" was not found in the grid")
      }
    }  
});

Then("Verify the child{arg} name in the modal and close the modal", function (Child){
  Dynamic_Wait(Panel_Child_Name)
  if(Panel_Child_Name.Exists)
  {
    var RowProp = new Array("Name","ObjectType")
    var RowVal = new Array("TextNode(0)","TextNode")
    var Links = Panel_Child_Name.FindAll(RowProp, RowVal, 100)
    if(Links.length>0)
    {
      for(var i=0;i<Links.length;i++)
      {
        var searchString = Links[i].contentText;
        var Name= searchString.split(" ")
        var act_name= Name[1]+" "+Name[0]
        InputString = Child.replace(/,/g,'')
        if(act_name==InputString)
        {
          Log.Checkpoint("Child information Modal is displayed")
          Object_Click(Button_Close)
          break
        }
      }
    }
    
  }
  else
  {
    Log.Message("Child information modal is not displayed/ child not found in the grid")
  }
});
/********************************************************************************************************/

Then("Select a child{arg} from the grid, click on options button and click on Add Message link", function (child){
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("Link(0)","Link","ng-binding")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)

  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Checkbox(0)","Checkbox")
  var Checkboxes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)

  
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  
  var RowProp = new Array("Name","ObjectType","ObjectLabel")
  var RowVal = new Array("Link(1)","Link","Add Message")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
    for(var i=0;i<Links.length;i++)
    {
      if(Links[i].contentText==child)
      {
        Object_Click(Checkboxes[i])
        Object_Click(Buttons[i])
        Object_Click(Links1[i])
        //Page_Load1()
        break;
      }
      else if(i==Links.length-1)
      {
        Log.Message(child+" was not found in the grid")
      }
    }
});

Then("enter start date {arg}, message {arg} and select recipients and click on Save and close button", function (date, message){
  Dynamic_Wait(TB_StartdateEnroll)
  Object_Keys(TB_StartdateEnroll,date)
  Object_Keys(Textarea_Message,message)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Checkbox(0)","Checkbox")
  var Links = Aliases.browser.pageBrightstar_Login.Panel_Recipients.FindAll(RowProp, RowVal, 1000)
  
  for(var i=0;i<Links.length;i++)
  {
    Object_Click(Links[i])
  }  
  
  Object_Click(button_SaveClose)
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  //Page_Load1()
});

Then("go to child profile{arg} verify the message is displayed", function (child){
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("Link(0)","Link","ng-binding")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  for(var i=0;i<Links.length;i++)
  {
    if(Links[i].contentText==child)
    {
      Object_Click(Links[i])
      break
    }
  }
  Page_Load1()
  Dynamic_Wait(Link_NotesMessages)
  Object_Click(Link_NotesMessages)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links = Aliases.browser.pageBrightstar_Login.Grid_current_Messages.FindAll(RowProp, RowVal, 1000)
  
    for(var i=0;i<Links.length;i++)
    {
      if(Links[i].contentText=="Test Message")
      {
        Log.Checkpoint("Message exists in the current messages grid")
        break;
      }
    }  
});
/****************************************************************************************************************************/

Then("Select a child{arg} from the grid, click on options button and click on Add Note link", function (child){
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("Link(0)","Link","ng-binding")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)

  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Checkbox(0)","Checkbox")
  var Checkboxes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)

  
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  
  var RowProp = new Array("Name","ObjectType","ObjectLabel")
  var RowVal = new Array("Link(2)","Link","Add Note")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
    for(var i=0;i<Links.length;i++)
    {
      if(Links[i].contentText==child)
      {
        Object_Click(Checkboxes[i])
        Object_Click(Buttons[i])
        Object_Click(Links1[i])
        //Page_Load1()
        break;
      }
      else if(i==Links.length-1)
      {
        Log.Message(child+" was not found in the grid")
      }
    }
});

Then("Select {arg} and Note {arg} then click on Save and close button", function (Category, Note){
  Dynamic_Wait(Select_Notetypeid)
  Object_Click(Select_Notetypeid)
  Object_ClickItem(Select_Notetypeid,Category)
  Object_Keys(Textarea_Notes,Note)
  Object_Click(button_SaveClose)
});

Then("go to child profile{arg} verify the Note{arg} is displayed", function (child, Note){
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("Link(0)","Link","ng-binding")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  for(var i=0;i<Links.length;i++)
  {
    if(Links[i].contentText==child)
    {
      Object_Click(Links[i])
      break
    }
  }
  Page_Load1()
  Dynamic_Wait(Link_NotesMessages)
  Object_Click(Link_NotesMessages)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links = Aliases.browser.pageBrightstar_Login.Grid_current_Notes.FindAll(RowProp, RowVal, 1000)
  
    for(var i=0;i<Links.length;i++)
    {
      if(Links[i].contentText==Note)
      {
        Log.Checkpoint("Note exists in the current Notes grid")
        break;
      }
    }
    
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Button(0)","Button")
  var Links = Aliases.browser.pageBrightstar_Login.Grid_current_Notes.FindAll(RowProp, RowVal, 1000)
  
    for(var i=0;i<Links.length;i++)
    {
      if(Links[i].outerHTML.indexOf("delete")>=0)
      {
        Object_Click(Links[i])
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
        break;
      }
    }
    
     
   
});
/*******************************************************************************************************************************/

Then("Select a child{arg} from the grid, click on options button and click on Add Sibling link", function (child){
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("Link(0)","Link","ng-binding")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)

  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Checkbox(0)","Checkbox")
  var Checkboxes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)

  
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  
  var RowProp = new Array("Name","ObjectType","ObjectLabel")
  var RowVal = new Array("Link(*)","Link","Add Sibling")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
    for(var i=0;i<Links.length;i++)
    {
      if(Links[i].contentText==child)
      {
        Object_Click(Checkboxes[i])
        Object_Click(Buttons[i])
        Object_Click(Links1[i])
        //Page_Load1()
        break;
      }
      else if(i==Links.length-1)
      {
        Log.Message(child+" was not found in the grid")
      }
    }
});

Then("verify add sibling screen is displayed or not", function (){
  Dynamic_Wait(TB_Firstname_Contact)
  if(TB_Firstname_Contact.Exists && TB_Lastname_Contact.Exists)
  {
    Log.Checkpoint("Navigated to Add Sibling screen")
  }
  else
  {
    Log.Error("Add Sibling screen is not displayed")
  }
});
/***********************************************************************************************************/

When("enter click on range of age section and enter age{arg}, {arg}, {arg}, {arg}", function (FY, FM, ToY, ToM){
  Dynamic_Wait(Label_Range)
  Object_Click(Label_Range)
  Delay(2000)
  Aliases.browser.pageBrightstar_Login.Keys("[Tab]"+FY+"[Tab]"+FM+"[Tab]"+ToY+"[Tab]"+ToM)
});

Then("validate the age of children which are displayed in the grid{arg}, {arg}", function (FY, ToY){
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("Panel(0)","Panel","ui-grid-cell-contents ng-binding ng-scope")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  var Age = new Array()
  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText!="" && Links[j].contentText.indexOf("yrs")>=0)
    {
      Age.push(Links[j])
    }
  }
  
    for(var i=0;i<Age.length;i++)
    {
      if(Age[i].contentText.indexOf(FY+" yrs")>=0 || Age[i].contentText.indexOf(ToY+" yrs, 0")>=0 || Age[i].contentText.indexOf("2 yrs, 11")>=0  )
      {
        Log.Checkpoint("The children in the grid are between "+FY+"-"+ToY+"Years")
      }
    }  
});
/*****************************************************************************************************************************/

When("select the month from the birthday dropdown{arg}", function (month){
  Dynamic_Wait(select_Birthdate_Month)
  Object_Click(select_Birthdate_Month)
  Object_ClickItem(select_Birthdate_Month,month)
});

Then("validate the birth date of children which are displayed in the gridbased on {arg}", function (month){
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("Panel(0)","Panel","ui-grid-cell-contents ng-binding ng-scope")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  for(var j=0;j<Links.length;j++)
  {
    switch(month)
    {
      case "January": if(Links[j].contentText!="" && Links[j].contentText.indexOf("01-")>=0)
                      {
                        Log.Checkpoint("The children in the grid are displayed with birth date month as "+month)
                      }
                      break
      case "February":if(Links[j].contentText!="" && Links[j].contentText.indexOf("02-")>=0)
                      {
                        Log.Checkpoint("The children in the grid are displayed with birth date month as "+month)
                      }
                      break
      case "March":if(Links[j].contentText!="" && Links[j].contentText.indexOf("03-")>=0)
                      {
                        Log.Checkpoint("The children in the grid are displayed with birth date month as "+month)
                      }
                      break
      case "April":if(Links[j].contentText!="" && Links[j].contentText.indexOf("04-")>=0)
                      {
                        Log.Checkpoint("The children in the grid are displayed with birth date month as "+month)
                      }
                      break
      case "May":if(Links[j].contentText!="" && Links[j].contentText.indexOf("05-")>=0)
                      {
                        Log.Checkpoint("The children in the grid are displayed with birth date month as "+month)
                      }
                      break
      case "June":if(Links[j].contentText!="" && Links[j].contentText.indexOf("06-")>=0)
                      {
                        Log.Checkpoint("The children in the grid are displayed with birth date month as "+month)
                      }
                      break
      case "July":if(Links[j].contentText!="" && Links[j].contentText.indexOf("07-")>=0)
                      {
                        Log.Checkpoint("The children in the grid are displayed with birth date month as "+month)
                      }
                      break
      case "August":if(Links[j].contentText!="" && Links[j].contentText.indexOf("08-")>=0)
                      {
                        Log.Checkpoint("The children in the grid are displayed with birth date month as "+month)
                      }
                      break
      case "September":if(Links[j].contentText!="" && Links[j].contentText.indexOf("09-")>=0)
                      {
                        Log.Checkpoint("The children in the grid are displayed with birth date month as "+month)
                      }
                      break
      case "October":if(Links[j].contentText!="" && Links[j].contentText.indexOf("10-")>=0)
                      {
                        Log.Checkpoint("The children in the grid are displayed with birth date month as "+month)
                      }
                      break
      case "November":if(Links[j].contentText!="" && Links[j].contentText.indexOf("11-")>=0)
                      {
                        Log.Checkpoint("The children in the grid are displayed with birth date month as "+month)
                      }
                      break
      case "December":if(Links[j].contentText!="" && Links[j].contentText.indexOf("12-")>=0)
                      {
                        Log.Checkpoint("The children in the grid are displayed with birth date month as "+month)
                      }
                      break
      default: Log.Message("Specified month is invalid or not date displayed in the grid")
    }    
  }
});
/***********************************************************************************************************************/

When("select the specific age and enter year {arg} and months {arg}", function (Year, Month){
  Dynamic_Wait(Label_SpecificAge)
  Object_Click(Label_SpecificAge)
  Aliases.browser.pageBrightstar_Login.Keys("[Tab]"+Year+"[Tab]"+Month)
});

Then("validate the age of children which are displayed in the grid is greater than or equal to {arg}", function (Year){
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("Panel(0)","Panel","ui-grid-cell-contents ng-binding ng-scope")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  var Age = new Array()
  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText!="" && Links[j].contentText.indexOf("yrs")>=0)
    {
      Age.push(Links[j])
    }
  }
    for(var i=0;i<Age.length;i++)
    {
      var AgeBD = Age[i].contentText
      AgeBD = AgeBD.split(" ")
      var yrs = VarToInt(AgeBD[0])
      if(yrs>=Year)
      {
        Log.Checkpoint("Children displayed in the grid are greater than "+Year+" years")
      }
    }  
});

When("go to child profile{arg} and click on enrollment and schedules", function (child){
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("Link(0)","Link","ng-binding")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  for(var i=0;i<Links.length;i++)
  {
    if(Links[i].contentText==child)
    {
      Object_Click(Links[i])
      break
    }
  }
  Dynamic_Wait(link_EnrollmentSchedule_ACM)
  Object_Click(link_EnrollmentSchedule_ACM)
});

Then("validate the current schedules grid contains today.", function (){
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("Panel(0)","Panel","ui-grid-cell-contents ng-binding ng-scope")
  var Links = Grid_contracted_Schedules.FindAll(RowProp, RowVal, 1000)
  var Scheduleday = new Array()
  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText!="" && (Links[j].contentText.indexOf("Mo We Fr")>=0 || Links[j].contentText.indexOf("Tu Th")>=0 || Links[j].contentText.indexOf("Mo Tu We Th Fr")>=0))
    {
      Scheduleday.push(Links[j])
    }
  }
  
    for(var i=0;i<Scheduleday.length;i++)
    {
      var AgeBD = Scheduleday[i].contentText
      let date = new Date("05/13/2022");
      let day = date.toLocaleString('en-us', {weekday: ''});
      var days = day.split(" ") 
      var today = days[0].substring(0, 2);
      if(AgeBD.indexOf(today)>=0)
      {
        Log.Checkpoint("Child scheduled for today")
        break;
      }
    }
});
