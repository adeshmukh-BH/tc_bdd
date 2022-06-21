//USEUNIT ImportUnits
function check()
{
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Link(0)","Link")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)

  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Checkbox(0)","Checkbox")
  var Checkboxes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)
  
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  
  if(TextNodes.length!=0)
  {
    for(var i=0;i<TextNodes.length;i++)
    {
        if(TextNodes[i].contentText=="Amazon Corporate LLC")
        {
          RadioButtons[i].Click()
          break;
        }
    }
    if(Button_SelectClient.Enabled)
    {
      Object_Click(Button_SelectClient)
      Delay(3000)
    }
    else
    {
      Log.Message("Select center button is disabled/ no search results found ")
    }
  }
  else{
    Log.Message("No search results found")
  }
}


function Test2()
{
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
      if(Links[i].contentText=="Ahmed, Yaseen")
      {
        Object_Click(Checkboxes[i])
        Object_Click(Buttons[i])
        Object_Click(Links1[i])
    }
    }  
}

function Test3()
{  Delay(3000)
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
  

}
function radInt()
{
  a =  Math.round(Math.random()*1000)
  Log.Message(a)
 Log.Message(Math.abs(-40))
}
function fun()
{
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear()+1;

  today = mm + '-' + dd + '-' + yyyy;
  Log.Message(today)
}
function ABc()
{
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var TextNodes = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)

  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var RadioButtons = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp1, RowVal1, 100)
  Aliases.browser.pageBrightstar_Login.panelLeftGridContainer
  Delay(1000)
  
  if(TextNodes.length!=0)
  {
    for(var i=0;i<TextNodes.length;i++)
    {
        if(TextNodes[i].contentText==Center)
        {
          RadioButtons[i].Click()
          break;
        }
    }
    if(Button_SelectCenter.Enabled)
    {
      Object_Click(Button_SelectCenter)
      Dynamic_Wait(Textnode_Center_Name)
      Delay(3000)
    }
    else
    {
      Log.Message("Select center button is disabled/ no search results found ")
    }
  }
  else{
    Log.Message("No search results found")
  }
}


