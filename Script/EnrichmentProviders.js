//USEUNIT ImportUnits
var Provider;
var aCenter;

Given("click on enrichment providers link", function (){
  Dynamic_Wait(Link_EnrichmentProviders)
  Object_Click(Link_EnrichmentProviders)
});

When("search for provider{arg} and click on search button", function (Provider){
  Dynamic_Wait(TB_Searchvalue)
  Object_Keys(TB_Searchvalue,Provider)
  Object_Click(Button_Search)
  Page_Load1()
});

When("click on Add provider button", function (){
  Dynamic_Wait(Button_AddProvider)
  if(Button_AddProvider.Enabled)
  {
    Object_Click(Button_AddProvider)
  }
  else
  {
    Log.Error("Add Provider button is disabled")
  }
});

Then("verify the fields existence", function (){
  Dynamic_Wait(Textbox_Providername)
  if(Textbox_Providername.Exists && Textbox_Contactname_Provider.Exists && Textbox_Contactphone_Provider.Exists && Textbox_Contactemail_provider.Exists)
  {
    Log.Checkpoint("Enrichment Provider modal is displayed")
    Object_Click(Button_Cancel)
    Delay(1000)
  }
  else
  {
    Log.Error("Enrichment provider modal is not displayed")
  }
});

When("Enter the required details{arg},{arg},{arg},{arg},{arg},{arg},{arg},{arg}", function (PN, Center, CenterName, param3, mail, Number, param6, Notes){
  aCenter=Center
  Provider=PN
  Dynamic_Wait(Textbox_Providername)
  Provider = PN+makeid()
  Object_Keys(Textbox_Providername,PN)
  Object_Click(Button_CenterSearch)
  Dynamic_Wait(TextBox_Searchvalue)
  Object_Keys(TextBox_Searchvalue,Center)
  Object_Click(Button_Search)
  Delay(3000)
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("TextNode(0)","TextNode","ng-binding")
  var TextNodes = Aliases.browser.pageBrightstar_Login.Page_CenterSearch.GridCenterSearch.FindAll(RowProp, RowVal, 1000)
  
  var RowProp1 = new Array("Name","ObjectType","className")
  var RowVal1 = new Array("RadioButton(0)","RadioButton","ng-scope")
  var RadioButtons = Aliases.browser.pageBrightstar_Login.Page_CenterSearch.GridCenterSearch.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  var TN = new Array()
  for(k=0;k<TextNodes.length;k++)
  {
    if(TextNodes[k].contentText==CenterName)
    {
      TN.push(TextNodes[k])
    }
  }
  
  if(TN.length!=0)
  {
    for(var i=0;i<TN.length;i++)
    {
        if(TN[i].contentText==CenterName)
        {
          RadioButtons[i].Click()
          break;
        }
    }
    if(Button_SelectCenter.Enabled)
    {
      Object_Click(Button_SelectCenter)
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
  Dynamic_Wait(Textbox_Contactname_Provider)
  Object_Keys(Textbox_Contactname_Provider,param3)
  Object_Keys(Textbox_Contactemail_provider,mail)
  Object_Keys(Textbox_Contactphone_Provider,Number)
  if(param6=="Yes")
  {
    Object_Click(CB_InsuranceCertificate)
  }
  else
  {
    Log.Message("Not insured")
  }
  Object_Keys(Textarea_Providernote,Notes)
});

Then("click on save and close", function (){
  Object_Click(ButtonSaveClose)
  Delay(2000)
});

Then("select inactive from status and search for{arg}", function (param1){
  Dynamic_Wait(LabelInactive_Provider)
  Object_Click(LabelInactive_Provider)
  Object_Keys(TB_Searchvalue,param1)
  Object_Click(Button_Search)
  Delay(2000)
});

Then("validate the added provider{arg} is displayed in the list", function (param1){
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Link(0)","Link")
  var Links = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp1, RowVal1, 1000)

  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText==param1)
    {
      Log.Checkpoint("Provider is diaplyed in the list")
    }
  }
});

When("click on center managemnet and enrichment providers links", function (){
  Dynamic_Wait(Link_CenterManagement)
  Object_Click(Link_CenterManagement)
  Dynamic_Wait(Link_EnrichmentProviders_CM)
  Object_Click(Link_EnrichmentProviders_CM)
});

When("click on my providers button", function (){
  Dynamic_Wait(Button_MyProviders)
  Object_Click(Button_MyProviders)
  Delay(2000)
});

Then("validate the  Provider{arg} displayed in the list of enrichment providers", function (EProvider){
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Link(0)","Link")
  var Links = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp1, RowVal1, 1000)

  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText==EProvider)
    {
      Log.Checkpoint("Provider is diaplyed in the list")
    }
  }
});


Given("click on Provider{arg} from the list of enrichment providers", function (EProvider){
  Delay(2000)
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Link(0)","Link")
  var Links = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp1, RowVal1, 1000)

  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText==EProvider)
    {
      Object_Click(Links[j])
      Log.Checkpoint("Provider is diaplyed in the list")
    }
  }
});

When("click on actions button", function (){
  Dynamic_Wait(Button_Actions_EP)
  Object_Click(Button_Actions_EP)
});

When("click on Add insurance certificate link", function (){
  Dynamic_Wait(Link_AddInsuranceCertificate)
  Object_Click(Link_AddInsuranceCertificate)
  Delay(2000)
  Dynamic_Wait(Button_Browse)
});

When("Browse the file name{arg}, enter expiry date{arg}", function (FileName, Edate){
  Object_Click(Button_Browse)
  Dynamic_Wait(Windows_Edit_FileName)
  Object_Keys(Windows_Edit_FileName,Project.Path+"\TestData\\"+FileName+"[Enter]")
  Dynamic_Wait(Textbox_Expirationdate)
  Object_Keys(Textbox_Expirationdate,Edate)
  aCenter= Textbox_Filename_InsureDoc.Text
});

Then("validate the file is uploaded/edited or not", function (){
  Page_Load1()
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Link(0)","Link")
  var Links = Panel_FileName_Insu.FindAll(RowProp1, RowVal1, 1000)

  for(var j=0;j<Links.length;j++)
  {
    if(Links[j].contentText==aCenter)
    {
      Log.Checkpoint("The file is uploaded/Edited successfully")
    }
  }
});

When("click on Edit insurance certificate link", function (){
  Dynamic_Wait(Link_EditInsuranceCertificate)
  Object_Click(Link_EditInsuranceCertificate)
  Delay(2000)
  Dynamic_Wait(Button_Browse)
});

When("click on Delete insurance certificate link", function (){
  Dynamic_Wait(Link_DeleteInsuranceCertificate)
  Object_Click(Link_DeleteInsuranceCertificate)
  Delay(1000)
});

Then("Validate insurance certificate is deleted", function (){
  Page_Load1()
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Link(0)","Link")
  var Links = Panel_FileName_Insu.FindAll(RowProp1, RowVal1, 1000)
  if(Links.length!=0)
  {
    for(var j=0;j<Links.length;j++)
    {
      if(Links[j].contentText==aCenter)
      {
        Log.Checkpoint("The file is uploaded/Edited successfully")
      }
    }
  }
  else
  {
    Log.Checkpoint("Insurance certificate is deleted successfully")
  }
});

Given("click on options button of affiliation center{arg}", function (Center){
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Links = Aliases.browser.pageBrightstar_Login.GridcenterAffiliations_EP.FindAll(RowProp1, RowVal1, 1000)
  
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links1 = Aliases.browser.pageBrightstar_Login.GridcenterAffiliations_EP.FindAll(RowProp, RowVal, 1000)
  var arr = new Array()
  
  for(var j=0;j<Links1.length;j++)
  {
    if(Links1[j].contentText==Center)
    {
      arr.push(Links1[j])
      break;
    }
  }
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i].contentText==Center)
    {
      Links[i].Click()
      Delay(1000)
      break;
    }
  }
});

When("click on Add provider agreement link from options", function (){
  var RowProp = new Array("ObjectType","ObjectLabel","className")
  var RowVal = new Array("Link","Add Provider Agreement","ng-binding")
  var Links2 = Aliases.browser.pageBrightstar_Login.FindAll(RowProp, RowVal, 1000)
    
  Links2[0].Click()
  Delay(2000)
  Dynamic_Wait(Button_Browse)
  if(Button_Browse.Exists)
  {
    Log.Checkpoint("Clicked on Add Provider Agreement link")
  }
});

When("click on Add provider agreement link", function (){
  var RowProp = new Array("ObjectType","ObjectLabel","className")
  var RowVal = new Array("Link","Edit Center Affiliation","ng-binding")
  var Links2 = Aliases.browser.pageBrightstar_Login.FindAll(RowProp, RowVal, 1000)
    
  Links2[0].Click()
  Delay(2000)
  Dynamic_Wait(Button_Browse)
  if(Button_Browse.Exists)
  {
    Log.Checkpoint("Clicked on Add Provider Agreement link")
  }
});

Then("validate the file name{arg} displayed in the center affiliation grid", function (File){
  Delay(2000)
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Link(0)","Link")
  var Links = Aliases.browser.pageBrightstar_Login.GridcenterAffiliations_EP.FindAll(RowProp1, RowVal1, 1000)
  
  for(var i=0;i<Links.length;i++)
  {
    if(Links[i].contentText==File)
    {
      Log.Checkpoint("Provider agreement added/edited successfully")
      break;
    }
  }
});

When("click on Edit provider agreement link", function (){
  var RowProp = new Array("ObjectType","ObjectLabel","className")
  var RowVal = new Array("Link","Edit Provider Agreement","ng-binding")
  var Links2 = Aliases.browser.pageBrightstar_Login.FindAll(RowProp, RowVal, 1000)
    
  Links2[0].Click()
  Delay(2000)
  Dynamic_Wait(Button_Browse)
  if(Button_Browse.Exists)
  {
    Log.Checkpoint("Clicked on Edit Provider Agreement link")
  }
});

When("click on delete provider agreement link", function (){
  var RowProp = new Array("ObjectType","ObjectLabel")
  var RowVal = new Array("Link","Delete Provider Agreement")
  var Links2 = Aliases.browser.pageBrightstar_Login.FindAll(RowProp, RowVal, 1000)
    
  Links2[0].Click()
  Delay(2000)
});

Then("validate the file name{arg} displayedor not in the center affiliation grid", function (File){
  Delay(2000)
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Link(0)","Link")
  var Links = Aliases.browser.pageBrightstar_Login.GridcenterAffiliations_EP.FindAll(RowProp1, RowVal1, 1000)
  
  for(var i=0;i<Links.length;i++)
  {
    if(Links[i].contentText==File)
    {
      Log.Message("Provider agreement added/edited successfully")
      break;
    }
    else if(i==Links.length-1)
    {
      Log.Checkpoint("Provider agreement deleted successfully")
    }
  }
});

Given("click on add center affiliation button", function (){
  Dynamic_Wait(Button_AddCenterAffiliation)
  Object_Click(Button_AddCenterAffiliation)
  Dynamic_Wait(Textarea_Providerorganizationnote)
  Object_Click(Textarea_Providerorganizationnote)
  Delay(3000)
});

When("Enter the required details{arg},{arg},{arg},{arg},{arg}", function (Center, CenterName, Feetype, Fees, Notes){
  Dynamic_Wait(Button_SearchCenterAffliation)
  Object_Click(Button_SearchCenterAffliation)
  Dynamic_Wait(TextBox_Searchvalue)
  Object_Keys(TextBox_Searchvalue,Center)
  Object_Click(Button_Search)
  Delay(3000)
  var RowProp = new Array("Name","ObjectType","className")
  var RowVal = new Array("TextNode(0)","TextNode","ng-binding")
  var TextNodes = Aliases.browser.pageBrightstar_Login.Page_CenterSearch.GridCenterSearch.FindAll(RowProp, RowVal, 1000)
  
  var RowProp1 = new Array("Name","ObjectType","className")
  var RowVal1 = new Array("RadioButton(0)","RadioButton","ng-scope")
  var RadioButtons = Aliases.browser.pageBrightstar_Login.Page_CenterSearch.GridCenterSearch.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  var TN = new Array()
  for(k=0;k<TextNodes.length;k++)
  {
    if(TextNodes[k].contentText==CenterName)
    {
      TN.push(TextNodes[k])
    }
  }
  
  if(TN.length!=0)
  {
    for(var i=0;i<TN.length;i++)
    {
        if(TN[i].contentText==CenterName)
        {
          RadioButtons[i].Click()
          break;
        }
    }
    if(Button_SelectCenter.Enabled)
    {
      Object_Click(Button_SelectCenter)
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
  Object_Click(Select_Providerfeetype)
  Object_ClickItem(Select_Providerfeetype,Feetype)
  switch(Feetype)
  {
    case "Percentage": Dynamic_Wait(Number_inputProvider)
                        Object_Keys(Number_inputProvider,Fees)
                        break;
    case "Flat Amount": Dynamic_Wait(Number_inputProviderfeeamount)
                        Object_Keys(Number_inputProviderfeeamount,Fees)
                        break;
    case "None"       : Log.Message("Fee type is None")
                        break;
    default: Log.Message("Fee type is not found in the drop down")
  }
//  if(Number_inputProvider.Exists && Number_inputProvider.Enabled)
//  {
//    Object_Keys(Number_inputProvider,Fees)
//  }
  Object_Keys(Textarea_Providerorganizationnote,Notes)
});

Then("validate error message", function (){
  var RowProp1 = new Array("Name","ObjectType","contentText")
  var RowVal1 = new Array("Panel(0)","Panel","'Center Affiliation' has already been assigned for this center")
  var Links1 = Aliases.browser.pageBrightstar_Login.FindAll(RowProp1, RowVal1, 1000)
  for(var i=0;i<Links1.length;i++)
  {
    if(Links1[i].contentText =="'Center Affiliation' has already been assigned for this center")
    {
      Log.Checkpoint(Links1[i].contentText)
      Object_Click(Button_Cancel_CenterSearch)
      Delay(10000)
      break
    }
  }
});

When("Browse the file name{arg}", function (FileName){
  Object_Click(Button_Browse)
  Dynamic_Wait(Windows_Edit_FileName)
  Object_Keys(Windows_Edit_FileName,Project.Path+"\TestData\\"+FileName+"[Enter]")
});

Then("Validate the error message and click cancel", function (){
  var RowProp1 = new Array("Name","ObjectType","contentText")
  var RowVal1 = new Array("Panel(0)","Panel","*File type is not one of the acceptable formats: .pdf,.doc,.docx")
  var Links1 = Aliases.browser.pageBrightstar_Login.FindAll(RowProp1, RowVal1, 1000)
  for(var i=0;i<Links1.length;i++)
  {
    if(Links1[i].contentText.indexOf("File type is not one of the acceptable formats: .pdf,.doc,.docx")>=0)
    {
      Log.Checkpoint(Links1[i].contentText)
      Object_Click(Button_Cancel_CenterSearch)
      Delay(5000)
      break
    }
  }
});

Given("click on add instructor button", function (){
  Dynamic_Wait(Button_AddInstructor)
  Object_Click(Button_AddInstructor)
});

When("enter all the required fields data {arg},{arg},{arg},{arg},{arg},{arg}", function (name, mail, Center, BG, active, notes){
  Dynamic_Wait(Textbox_Instructorname)
  Object_Keys(Textbox_Instructorname,name)
  Object_Keys(Textbox_Instructoremail,mail)
  Object_Click(Select_Primarycenterid)
  Object_ClickItem(Select_Primarycenterid,Center)
  if(BG=="Yes")
  {
    Object_Click(CB_Isbackgroundcheck)
  }
  else
  {
    Log.Message("Background check is required")
  }
  if(active=="Yes")
  {
    Object_Click(checkbox_Active)
  }
  else
  {
    Log.Message("Instructor is inactive")
  }
  Object_Click(TA_Providerinstructornote,notes)
  
});

Then("validate the instructor{arg} details displayed in the grid.", function (Instructor){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp, RowVal, 1000)
  var arr = new Array()
  
  for(var j=0;j<Links1.length;j++)
  {
    if(Links1[j].contentText==Instructor)
    {
      Log.Checkpoint(Instructor+" Instructor is displayed in the grid")
      break
    }
  }
});

Given("click on edit instructor button of instructor{arg}", function (param1){
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp, RowVal, 1000)
  var arr = new Array()
  
  for(var j=0;j<Links1.length;j++)
  {
    if(Links1[j].contentText!="Instructor Name" &&Links1[j].contentText!="Status" &&Links1[j].contentText!="1" )
    {
      arr.push(Links1[j])
    }
  }
  for(var j=0;j<arr.length;j++)
  {
    if(arr[j].contentText==param1)
    {
      Object_Click(Buttons[j])
      break
    }
  }
  Dynamic_Wait(Link_EditInstructor)
  Object_Click(Link_EditInstructor)
});

When("enter all the required fields data {arg},{arg}", function (param1, param2){
  Dynamic_Wait(TA_Providerinstructornote)
  Object_Keys(TA_Providerinstructornote,param2)
});

Then("validate the details of instructor{arg} details displayed in the grid.", function (param1){
  Page_Load1()
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  var arr = new Array()
  
  for(var j=0;j<Links1.length;j++)
  {
    if(Links1[j].contentText==param1)
    {
      Log.Checkpoint("Edited details displayed in the grid")
      break;
    }
  }
});

Given("click on Add background check button of instructor{arg}", function (param1){
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp, RowVal, 1000)
  var arr = new Array()
  
  for(var j=0;j<Links1.length;j++)
  {
    if(Links1[j].contentText!="Instructor Name" &&Links1[j].contentText!="Status" &&Links1[j].contentText!="1" )
    {
      arr.push(Links1[j])
    }
  }
  for(var j=0;j<arr.length;j++)
  {
    if(arr[j].contentText==param1)
    {
      Object_Click(Buttons[j])
      Delay(1000)
      break
    }
  }
  Dynamic_Wait(Link_AddBackgroundCheck)
  Object_Click(Link_AddBackgroundCheck)
});

Then("validate the details BGC of instructor{arg} details displayed in the grid.", function (param1){
  Page_Load1()
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Link(0)","Link")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  var arr = new Array()
  
  for(var j=0;j<Links1.length;j++)
  {
    if(Links1[j].contentText==param1)
    {
      Log.Checkpoint("Added/editedBGC form displayed in the grid")
      break;
    }
  }
});

Given("click on Add covid19 vaccination button of instructor{arg}", function (param1){
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp, RowVal, 1000)
  var arr = new Array()
  
  for(var j=0;j<Links1.length;j++)
  {
    if(Links1[j].contentText!="Instructor Name" &&Links1[j].contentText!="Status" &&Links1[j].contentText!="1" )
    {
      arr.push(Links1[j])
    }
  }
  for(var j=0;j<arr.length;j++)
  {
    if(arr[j].contentText==param1)
    {
      Object_Click(Buttons[j])
      Delay(1000)
      break
    }
  }
  Dynamic_Wait(Link_AddCovid19Vaccination)
  Object_Click(Link_AddCovid19Vaccination)
});

Then("validate the covid19 vaccination details of instructor{arg} displayed in the grid.", function (param1){
  Page_Load1()
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Link(0)","Link")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  var arr = new Array()
  
  for(var j=0;j<Links1.length;j++)
  {
    if(Links1[j].contentText==param1)
    {
      Log.Checkpoint("Added/edited Covid19 vaccination certificate is displayed in the grid")
      break;
    }
  }
});

Given("click on edit background check button of instructor{arg}", function (param1){
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp, RowVal, 1000)
  var arr = new Array()
  
  for(var j=0;j<Links1.length;j++)
  {
    if(Links1[j].contentText!="Instructor Name" &&Links1[j].contentText!="Status" &&Links1[j].contentText!="1" )
    {
      arr.push(Links1[j])
    }
  }
  for(var j=0;j<arr.length;j++)
  {
    if(arr[j].contentText==param1)
    {
      Object_Click(Buttons[j])
      Delay(1000)
      break
    }
  }
  Dynamic_Wait(Link_EditBackgroundCheck)
  Object_Click(Link_EditBackgroundCheck)
});

Given("click on Edit covid19 vaccination button of instructor{arg}", function (param1){
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp, RowVal, 1000)
  var arr = new Array()
  
  for(var j=0;j<Links1.length;j++)
  {
    if(Links1[j].contentText!="Instructor Name" &&Links1[j].contentText!="Status" &&Links1[j].contentText!="1" )
    {
      arr.push(Links1[j])
    }
  }
  for(var j=0;j<arr.length;j++)
  {
    if(arr[j].contentText==param1)
    {
      Object_Click(Buttons[j])
      Delay(1000)
      break
    }
  }
  Dynamic_Wait(Link_EditCovid19Vaccination)
  Object_Click(Link_EditCovid19Vaccination)
});

Given("click on Delete background check button of instructor{arg}", function (param1){
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp, RowVal, 1000)
  var arr = new Array()
  
  for(var j=0;j<Links1.length;j++)
  {
    if(Links1[j].contentText!="Instructor Name" &&Links1[j].contentText!="Status" &&Links1[j].contentText!="1" )
    {
      arr.push(Links1[j])
    }
  }
  for(var j=0;j<arr.length;j++)
  {
    if(arr[j].contentText==param1)
    {
      Object_Click(Buttons[j])
      Delay(1000)
      break
    }
  }
  Dynamic_Wait(Link_DeleteBackgroundCheck)
  Object_Click(Link_DeleteBackgroundCheck)
});

Then("validate the details BGC of instructor{arg} not displayed in the grid.", function (param1){
  Page_Load1()
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Link(0)","Link")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  var arr = new Array()
  if(Links1.length!=0)
  for(var j=0;j<Links1.length;j++)
  {
    if(Links1[j].contentText!=param1)
    {
      Log.Checkpoint("Deleted successfully")
      break;
    }
  }
});

Given("click on Delete covid19 certificate button of instructor{arg}", function (param1){
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Buttons = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp1, RowVal1, 1000)
  Delay(1000)
  
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp, RowVal, 1000)
  var arr = new Array()
  
  for(var j=0;j<Links1.length;j++)
  {
    if(Links1[j].contentText!="Instructor Name" &&Links1[j].contentText!="Status" &&Links1[j].contentText!="1" )
    {
      arr.push(Links1[j])
    }
  }
  for(var j=0;j<arr.length;j++)
  {
    if(arr[j].contentText==param1)
    {
      Object_Click(Buttons[j])
      Delay(1000)
      break
    }
  }
  Dynamic_Wait(Link_DeleteCovid19Vaccination)
  Object_Click(Link_DeleteCovid19Vaccination)
});

Then("Validate the enrichment provider status changed to Active", function (){
  Delay(2000)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links1 = Aliases.browser.pageBrightstar_Login.panel_Status.FindAll(RowProp, RowVal, 1000)
  if(Links1.length!=0)
  {
    for(var j=0;j<Links1.length;j++)
    {
      Log.Checkpoint("Status of Enrichment provider is "+Links1[j].contentText)
    }
  }
});

When("change Status{arg} of instructor", function (Status){
  if(checkbox_Active.checked)
  {
    Object_Click(checkbox_Active)
  }
  else
  {
    Object_Click(checkbox_Active)
  }
});

Then("validate the status of instructor displayed in the grid.", function (){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Panel(0)","Panel")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp, RowVal, 1000)
  if(Links1.length!=0)
  {
    for(var j=0;j<Links1.length;j++)
    {
      if(Links1[j].contentText=="Active" ||Links1[j].contentText=="Inactive")
      Log.Checkpoint("Status of Instructor is "+Links1[j].contentText)
    }
  }
});

When("click on edit providers button", function (){
  Dynamic_Wait(Button_EditProvider)
  Object_Click(Button_EditProvider)
});

Then("validate the modal is displayed", function (){
  Dynamic_Wait(Textbox_Providername)
  if(Textbox_Providername.Exists)
  {
    Log.Checkpoint("Enrichment provider modal is displayed")
  }
  else
  {
    Log.Error("Enrichment provider modal is displayed")
  }
});

Then("verify the name in provider{arg} name field", function (Provider){
  if(Textbox_Providername.Text==Provider)
  {
    Log.Checkpoint("Provider name is displayed as expected")
    Object_Click(Button_Cancel)
  }
  else
  {
    Log.Message("Provider name not displayed as expected")
    Object_Click(Button_Cancel)
  }
  
});

When("Enter the required details{arg},{arg},{arg},{arg},{arg},{arg}", function (param1, param2, param3, param4, param5, param6){
  Dynamic_Wait(Textbox_Providername)
  Object_Keys(Textbox_Providername,param1)
  Dynamic_Wait(Textbox_Contactname_Provider)
  Object_Keys(Textbox_Contactname_Provider,param2)
  Object_Keys(Textbox_Contactemail_provider,param3)
  Object_Keys(Textbox_Contactphone_Provider,param4)
  if(param5=="Yes")
  {
    Object_Click(CB_InsuranceCertificate)
  }
  else
  {
    Log.Message("Not insured")
  }
  Object_Keys(Textarea_Providernote,param6)
});


Then("validate the modal is not closed when required field is blank", function (){
  if(Button_Cancel.Exists && ButtonSaveClose.Exists)
  {
    Log.Checkpoint("Enrichment provider modal is not closed, we left required field as blank")
    Object_Click(Button_Cancel)
    Delay(1000)
  }
  else
  {
    Log.Error("Enrichment provider modal is closed, even we left required field as blank")
  }
});

Then("validate the added center displayed in the grid{arg},{arg}", function (param1, param2){
  Dynamic_Wait(Aliases.browser.pageBrightstar_Login.GridcenterAffiliations_EP)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Panel(0)","Panel")
  var Links1 = Aliases.browser.pageBrightstar_Login.GridcenterAffiliations_EP.FindAll(RowProp, RowVal, 1000)
  if(Links1.length!=0)
  {
    for(var j=0;j<Links1.length;j++)
    {
      if(param1=="Percentage" && Links1[j].contentText.indexOf("%")>=0)
      {
        Log.Checkpoint("Added affiliation center "+param1+" - "+param2+" is displayed in the grid")
        break
      }
      else if(param1=="Flat Amount"&&Links1[j].contentText.indexOf("$")>=0)
      {
        Log.Checkpoint("Added affiliation center "+param1+" - "+param2+" is displayed in the grid")
        break;
      }
      else
      {
        Log.Checkpoint("None is selected as Provider fee type")
        break
      }
    }
  }
});

Given("click on options button of center{arg} and select edit center affiliation", function (Center){
  Delay(2000)
  var RowProp1 = new Array("Name","ObjectType")
  var RowVal1 = new Array("Button(0)","Button")
  var Links = Aliases.browser.pageBrightstar_Login.GridcenterAffiliations_EP.FindAll(RowProp1, RowVal1, 1000)
  
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links1 = Aliases.browser.pageBrightstar_Login.GridcenterAffiliations_EP.FindAll(RowProp, RowVal, 1000)
  var arr = new Array()
  
  for(var j=0;j<Links1.length;j++)
  {
    if(Links1[j].contentText.indexOf(" - ")>=0)
    {
      arr.push(Links1[j])
    }
  }
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i].contentText==Center)
    {
      Links[i].Click()
      Delay(1000)
      break;
    }
  }
  
  var RowProp = new Array("ObjectType","ObjectLabel")
  var RowVal = new Array("Link","Edit Center Affiliation")
  var Links2 = Aliases.browser.pageBrightstar_Login.FindAll(RowProp, RowVal, 1000)
  Links2[arr.length-1].Click()
  Delay(2000)
});

Then("click on X mark to close the modal", function (){
  if(ButtonCloseModal.Exists)
  {
    Object_Click(ButtonCloseModal)
    Delay(1000)
  }
  else
  {
    Log.Message("Close button not exists")
  }
});

Then("validate the modal existence", function (){
  if(Textbox_Providername.Exists)
  {
    Log.Error("Enrichment provider modal still exists")
  }
  else
  {
    Log.Checkpoint("Enrichment provider modal is closed")
  }
});

When("click on cancel button", function (){
  if(Button_Cancel_CenterSearch.Exists)
  {
    Object_Click(Button_Cancel_CenterSearch)
    Delay(2000)
  }
  else
  {
    Log.Message("Cancel button was not found")
  }
  
});

Then("validate the center affiliation modal is closed or not", function (){
 if(Select_Providerfeetype.Exists)
 {
   Log.Error("Center affiliation modal still exists")
 }
 else
 {
   Log.Checkpoint("Center affiliation modal is closed")
 }
});

Then("validate the error message displayed onthe screen for percentage", function (){
  if(panel_Error_ProviderFee.Exists)
  {
    Log.Checkpoint(panel_Error_ProviderFee.contentText)
  }
  else
  {
    Log.Message("Error message is not displayed")
  }
});

Then("validate the error message displayed onthe screen for Flat", function (){
  if(Number_inputProviderfeeamount.Exists)
  {
    Log.Checkpoint("Invalid format enter a valid amount")
  }
  else
  {
    Log.Message("Data accepted modal closed")
  }
});

When("click on center name for search on", function (){
  Dynamic_Wait(Label_CenterName_EP)
  Object_Click(Label_CenterName_EP)
});

When("enter data in {arg}", function (Searchkey){
  Object_Keys(TB_Searchvalue,Searchkey)
});

Then("click on search button", function (){
  Object_Click(Button_Search)
  Delay(2000)
});

Then("validate the results displayed in the grid{arg}", function (Searchkey){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  if(Links1.length!=0)
  {
    for(var j=0;j<Links1.length;j++)
    {
      if(Links1[j].contentText.indexOf(Searchkey)>=0)
      {
        Log.Checkpoint("Searched center "+Searchkey+" was displayed in the list")
        break;
      }
      else if(j==Links1.length-1)
      {
        Log.Message("No results found for this search criteria")
      }
    }
  }
  else if(Aliases.browser.pageBrightstar_Login.panel22.Exists)
  {
    Log.Message(Aliases.browser.pageBrightstar_Login.panel22.contentText)
  }
});

When("click on center number for search on", function (){
  Dynamic_Wait(Label_CenterNumber_EP)
  Object_Click(Label_CenterNumber_EP)
});

When("click on provider name for search on", function (){
  Dynamic_Wait(Label_ProviderName)
  Object_Click(Label_ProviderName)
});

Then("validate the results displayed in the grid{arg} based on Provider name", function (Searchkey){
   var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Link(0)","Link")
  var Links1 = Aliases.browser.pageBrightstar_Login.panelLeftGridContainer.FindAll(RowProp, RowVal, 1000)
  if(Links1.length!=0)
  {
    for(var j=0;j<Links1.length;j++)
    {
      if(Links1[j].contentText==Searchkey)
      {
        Log.Checkpoint("Searched provider "+Searchkey+" was displayed in the list")
        break;
      }
      else if(j==Links1.length-1)
      {
        Log.Message("No results found for this search criteria")
      }
    }
  }
   else if(Aliases.browser.pageBrightstar_Login.panel22.Exists)
  {
    Log.Message(Aliases.browser.pageBrightstar_Login.panel22.contentText)
  }
});

When("click on provider Id for search on", function (){
  Dynamic_Wait(Label_ProviderId)
  Object_Click(Label_ProviderId)
});

Then("validate the provider Id{arg} which is displayed in the Enrichment provider profile", function (Searchkey){
  Dynamic_Wait(Panel_ProviderId)
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("TextNode(0)","TextNode")
  var Links1 = Panel_ProviderId.FindAll(RowProp, RowVal, 1000)
  if(Links1.length!=0)
  {
    for(var j=0;j<Links1.length;j++)
    {
      if(Links1[j].contentText==Searchkey)
      {
        Log.Checkpoint("Searched provider "+Searchkey+" was displayed in the Enrichment provider profile")
        break;
      }
      else if(j==Links1.length-1)
      {
        Log.Message("No results found for this search criteria")
      }
    }
  }
   else if(Aliases.browser.pageBrightstar_Login.panel22.Exists)
  {
    Log.Message(Aliases.browser.pageBrightstar_Login.panel22.contentText)
  }
});

Then("validate the instructor modal is closed", function (){
  if(Textbox_Instructorname.Exists)
  {
    Log.Error("Instructor modal still exists")
  }
  else
  {
    Log.Checkpoint("Instructor modal is closed successfully")
  }
});

Then("validate the name field is required field", function (param1){
 if(Textbox_Instructorname.Exists && Textbox_Instructorname.required)
 {
   Log.Checkpoint("Required fields are left blank")
 }
 else
 {
   Log.Message("Required fields are filled with data")
 }
});

When("enter all the required fields data {arg},{arg},{arg},{arg},{arg}", function (name, mail, BG, active, notes){
  Dynamic_Wait(Textbox_Instructorname)
  Object_Keys(Textbox_Instructorname,name)
  Object_Keys(Textbox_Instructoremail,mail)
  if(BG=="Yes")
  {
    Object_Click(CB_Isbackgroundcheck)
  }
  else
  {
    Log.Message("Background check is required")
  }
  if(active=="Yes")
  {
    Object_Click(checkbox_Active)
  }
  else
  {
    Log.Message("Instructor is inactive")
  }
  Object_Click(TA_Providerinstructornote,notes)
});

Then("validate the primary center field is required field", function (param1){
 if(Select_Primarycenterid.Exists && Select_Primarycenterid.required)
 {
   Log.Checkpoint("Required fields are left blank")
 }
 else
 {
   Log.Message("Required fields are filled with data")
 }
});

When("Instructor modal is displayed with all the existing fields", function (){
  Dynamic_Wait(Textbox_Instructorname)
  if(Textbox_Instructorname.Exists)
  {
    Log.Checkpoint("Instructor name field exists")
  }
  else
  {
    Log.Error("Instructor name field not exists")
  }
  
  if(Textbox_Instructoremail.Exists)
  {
    Log.Checkpoint("Instructor mail field exists")
  }
  else
  {
    Log.Error("Instructor mail field not exists")
  }
  
  if(Select_Primarycenterid.Exists)
  {
    Log.Checkpoint("Select primary center field exists")
  }
  else
  {
    Log.Error("Select primary center field not exists")
  }
  
  if(CB_Isbackgroundcheck.Exists)
  {
    Log.Checkpoint("CheckBox BGC field exists")
  }
  else
  {
    Log.Error("CheckBox BGC field not exists")
  }
  
  if(TA_Providerinstructornote.Exists)
  {
    Log.Checkpoint("Textarea notes field exists")
  }
  else
  {
    Log.Error("Textarea notes  field not exists")
  }
  
  if(checkbox_Active.Exists)
  {
    Log.Checkpoint("checkbox Active field exists")
  }
  else
  {
    Log.Error("checkbox Active field not exists")
  }
});
