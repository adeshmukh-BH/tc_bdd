//USEUNIT ImportUnits

Given("click on Registration promotions link", function (){
  Dynamic_Wait(Link_RegistrationPromotions)
  Object_Click(Link_RegistrationPromotions)
});

When("click on add registration promotion link", function (){
  Dynamic_Wait(Button_AddRegistrationPromotion)
  Object_Click(Button_AddRegistrationPromotion)
});

When("enter data in all required fields{arg}, {arg}, {arg},{arg},{arg},{arg},{arg}", function (Name, Active, AmountType, Amount, SDate, EDate, Notes){
  Dynamic_Wait(Textbox_Promotionname)
  Object_Click(Textbox_Promotionname)
  Object_Keys(Textbox_Promotionname,Name)
  if(Active=="Yes")
  {
    if(Checkbox_IsActive_Promotion.checked)
    {
      Log.Message("Already selected/checked")
    }
    else
    {
      Object_Click(Checkbox_IsActive_Promotion)
    }
  }
  else
  {
    if(Checkbox_IsActive_Promotion.checked)
    {
      Object_Click(Checkbox_IsActive_Promotion)
    }
    else
    {
      Log.Message("Already unchecked")
    }
  }
  if(AmountType=="Flat")
  {
    Object_Click(Label_Flat_Radio)
    Dynamic_Wait(Number_input_Promotionamount)
    Object_Keys(Number_input_Promotionamount,Amount)
  }
  else if(AmountType=="Percentage")
  {
    Object_Click(Label_Percentage_Radio)
    Dynamic_Wait(Number_input_Promotionpercent)
    Object_Keys(Number_input_Promotionpercent,Amount)
  }
  if(SDate=="")
  {
    Object_Keys(TB_StartdateEnroll,Today())
  }
  else
  {
    Object_Keys(TB_StartdateEnroll,SDate)
  }
  
  if(EDate=="")
  {
    Object_Keys(TB_EnddateEnroll,SamedayNextYear())
  }
  else
  {
    Object_Keys(TB_EnddateEnroll,EDate)
  }
  Object_Keys(Textarea_Promotionnote,Notes)
});

Then("validate the modal is closed and {arg} is not added to the Registration promotion list", function (param1){
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode",)
  var Links1 = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
    for(var i=0;i<Links1.length;i++)
    {
      if(Links1[i].contentText==param1)
      {
        Log.Error(param1 +" is added to the Registration promotion list")
        break;
      }
      else if(i==Links1.length-1)
      {
        Log.Checkpoint(param1 +" is not added to the Registration promotion list")
      }
    }  
});

Then("validate the modal is closed and {arg} is added to the Registration promotion list", function (param1){
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode",)
  var Links1 = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
    for(var i=0;i<Links1.length;i++)
    {
      if(Links1[i].contentText==param1)
      {
        Log.Checkpoint(param1 +" is added to the Registration promotion list")
        break;
      }
      else if(i==Links1.length-1)
      {
        Log.Error(param1 +" is not added to the Registration promotion list")
      }
    }  
});

Then("validate the error message displayed or not", function (){
  if(panel_Percentage_Error.Exists)
  {
    Log.Checkpoint(panel_Percentage_Error.contentText)
    Object_Click(Button_Cancel_CenterSearch)
  }
  else
  {
    Log.Message("Error message was not displayed")
  }
});

Then("validate the modal is not closed", function (){
  if(Number_input_Promotionamount.Exists)
  {
    Object_HoverMouse(Number_input_Promotionamount)
    Delay(1000)
    Log.Checkpoint("Invalid format enter a valid amount")
    Object_Click(Button_Cancel_CenterSearch)
  }
  else
  {
    Log.Message("Data accepted modal closed")
  }
});

Then("Validate the promotinal name error message displayed or not", function (){
  if(Panel_Promotion_Name_Error.Exists)
  {
    Log.Checkpoint(Panel_Promotion_Name_Error.contentText)
    Object_Click(Button_Cancel_CenterSearch)
  }
  else
  {
    Log.Message("Data accepted modal closed")
  }
});

When("Enter search key {arg} in Promotion Name field", function (Key){
  if(Key!="")
  {
    Object_Keys(Textbox_Promotionname,Key)
  }
  else
  {
    Log.Message("Key is null or search box is disabled")
  }
});

Then("validate the displayed results from the registrations promotions grid{arg}", function (Key){
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
    var Links = Grid_registrationPromotions.FindAll(RowProp, RowVal, 1000)
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

Then("Validate error message of promotion", function (){
  var RowProp = new Array("Name","ObjectType","contentText")
  var RowVal = new Array("Panel(0)","Panel","'Promotion Name' must be between 2 and 100 characters. You entered 1 characters.")
  var Links1 = Aliases.browser.pageBrightstar_Login.FindAll(RowProp, RowVal, 1000)
  if(Links1.length!=0)
  {
    for(var j=0;j<Links1.length;j++)
    {
      if(Links1[j].contentText=="'Promotion Name' must be between 2 and 100 characters. You entered 1 characters.")
      {
        Log.Checkpoint("Searched center "+Links1[j].contentText)
        break;
      }
      else if(j==Links1.length-1)
      {
        Log.Message("No results found for this search criteris")
      }
    }
  }
});

When("click on edit button of {arg}", function (PN){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var TextNodes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)

  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 100)
  Delay(1000)
  
  if(TextNodes.length!=0)
  {
    for(var i=0;i<TextNodes.length;i++)
    {
        if(TextNodes[i].contentText==PN)
        {
          Buttons[i].Click()
          break;
        }
    }
  }
});

When("click on center associations link", function (){
  Dynamic_Wait(Link_CenterAssociationS)
  Object_Click(Link_CenterAssociationS)
});

Given("click on add center button", function (){
  Dynamic_Wait(Button_AddCenter)
  Object_Click(Button_AddCenter)
});

Given("user select {arg} and {arg} radio buttons, enter {arg}", function (SearchWhere, SearchOn, SearchFor){
  Dynamic_Wait(Lable_AnyPart)
  switch(SearchWhere)
  {
    case "Any Part": Object_Click(Lable_AnyPart)
    break;
    case "Start Of": Object_Click(Lable_StartOf)
    break;
    case "Equals": Object_Click(Lable_Equals)
    break;
    default: Log.Error("Search where radio buttons are not found")
  }
  
  switch(SearchOn)
  {
    case "Center Name": Object_Click(Lable_CenterName)
    break;
    case  "Center Number": Object_Click(Label_CenterNumber)
    break;
    default: Log.Error("Expected search on radio buttons are not found")
  }
  
  Object_Keys(TextBox_Searchvalue,SearchFor)
});

Then("validate the results{arg} displayed in the grid with center{arg}", function (param1, Center){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var TextNodes = Aliases.browser.pageBrightstar_Login.Page_CenterSearch.panel_Body_Grid_CenterSearch.FindAll(RowProp, RowVal, 1000)

  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Checkbox(0)","Checkbox")
  var RadioButtons = Aliases.browser.pageBrightstar_Login.Page_CenterSearch.GridCenterSearch.panelLeftGridContainer.panelRowgroup.FindAll(RowProp1, RowVal1, 100)
  Delay(1000)
  
  if(TextNodes.length!=0)
  {
    for(var i=0;i<TextNodes.length;i++)
    {
      if(TextNodes[i].contentText==Center)
      {
        Log.Checkpoint("Center selected from the results")
        RadioButtons[i].Click()
        Delay(1000)
        Object_Click(Button_Cancel_CenterSearch)
        break;
      }
    }
  }
});
