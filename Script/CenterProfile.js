//USEUNIT ImportUnits
var Provider;
var aCenter;

Then("Navigate to Center Provile", function (){
  throw new NotImplementedError();
});

Then("Verify Center numberr in Center profile page{arg}", function (param1){
  throw new NotImplementedError();
});

When("Click Center Profile Tab and navigate to sub tab{arg}", function (subtab){
   if (Link_CenterManagement.Exists) 
   {
        Object_Click(Link_CenterManagement)
        
        //Center Profile tab checking
        if(subtab == "Center Profile")
        {
          if (Link_CenterProfile.Exists) {
              Object_Click(Link_CenterProfile)
          } else
            Log.Error("Center Profile Tab is not found")
        }
            
    } else
        Log.Error("Center Management Tab is not found")
});


Then("Verify Center number in Center profile page{arg}", function (Centernumber){
    var InputString = CenterProfileName0404.contentText 
    if (InputString.indexOf(Centernumber) >= 0) 
    {
        Log.Checkpoint("Center Nuber Found in Profile page")
    } else
        Log.Error("Center Nuber Not Found in Profile page")
});

Then("Verify Center Closed Dates grid is available or not", function (){
   if (Link_CenterManagement.Exists) 
   {
     Log.Checkpoint("Center Closed Dates Grid Found")
   }
   else
    Log.Error("Center Closed Dates Grid Not Found")
 
});

When("Click on Add Center Closed Date button", function (){
  if (buttonAddClosedDate.Exists) {
        Object_Click(buttonAddClosedDate)        
    } else
      Log.Error("Center Closed Date Add button not found")
});

Then("Verify Center Closed Date Modal opened or not", function (){  
   if (ManualTransactionModalPanel.Exists) {
        Log.Checkpoint("Center Closed Date Modal Found")       
    } else
      Log.Error("Center Closed Date Modal not Found")
});

Then("Verify All internal fields exist", function (){
  fieldExist(labelTimeClosed)
  fieldExist(labelClosedAllDay)
  fieldExist(labelSpecificTimes)
  
  if (CenterHolidaydate.Exists && CenterHolidayname.Exists && CenterClosedStartTime.Exists && CenterClosedEndTime.Exists)
  {
      Log.Checkpoint("All Expected Fields are Found")
  } else
        Log.Error("Expected Fields are not Found")
  
  
});


When("Click on Cancel button", function (){
   if (Button_Cancel.Exists) {
        Object_Click(Button_Cancel)
        // Delay(3000)
        //Verify Modal Exists or not 
        if (!ManualTransactionModalPanel.Exists) {            
            Log.Checkpoint("Cancel Functionality Working") 
        } else
          Log.Error("Cancel Functionality Not working")
            
                 
    } else
      Log.Error("Cancel button not found in Modal")
});


When("Click on Close button", function (){
  if (ButtonCloseModal.Exists) {
        Object_Click(ButtonCloseModal)
         
        //Verify Modal Exists or not 
        if (ManualTransactionModalPanel.Exists) {
            Log.Error("Close Modal Functionality Not working")

        } else
            Log.Checkpoint("Close Modal Functionality Working") 
                 
    } else
      Log.Error("Close button not found in Modal")
});

When("Fill the data into Modal{arg}", function (holidayName){
  Object_Keys(CenterHolidaydate, "08-15-2022")
  Object_Keys(CenterHolidayname, holidayName)
});

Then("Verify Transaction is Recorded for cancel functionality{arg}", function (holidayName){
  if (PanelGridBody.Exists) {
        var RowProp = new Array("Name", "ObjectType")
        var RowVal = new Array("Panel(0)", "Panel")
        var panelData = PanelGridBody.FindAll(RowProp, RowVal, 1000)

        Delay(3000)
        if (panelData.length > 0) {
            for (var i = 0; i < panelData.length; i++) {
                var searchString = panelData[i].contentText;
                InputString = searchString.replace(/,/g, '')
                SubString = holidayName
                if (InputString.indexOf(SubString) >= 0) {
                    Log.Message("Record found in Center Closed Dates Grid");                    
                }
                else
                  Log.Checkpoint("Record not found in Center Closed Dates Grid"); 

            }
        } else
            Log.Message("No Records Found in Center Closed Dates Grid")
    } else {
        Log.Message("Center Closed Dates Grid not found");
    }
});

Then("Verify Transaction is Recorded for Close functionality{arg}", function (holidayName){
  if (PanelGridBody.Exists) {
        var RowProp = new Array("Name", "ObjectType")
        var RowVal = new Array("Panel(0)", "Panel")
        var panelData = PanelGridBody.FindAll(RowProp, RowVal, 1000)

        Delay(3000)
        if (panelData.length > 0) {
            for (var i = 0; i < panelData.length; i++) {
                var searchString = panelData[i].contentText;
                InputString = searchString.replace(/,/g, '')
                SubString = holidayName
                if (InputString.indexOf(SubString) >= 0) {
                    Log.Message("Record found in Center Closed Dates Grid");                    
                }
                else
                  Log.Checkpoint("Record not found in Center Closed Dates Grid"); 

            }
        } else
            Log.Message("No Records Found in Center Closed Dates Grid")
    } else {
        Log.Message("Center Closed Dates Grid not found");
    }
});

When("Click on Save & Close button", function (){
  if (ButtonSaveClose.Exists) {
        Object_Click(ButtonSaveClose)
         
        //Verify Modal Exists or not 
        Delay(2000)
        if (ManualTransactionModalPanel.Exists) {
            Log.Error("Save & Close Functionality Not working")

        } else
            Log.Checkpoint("Save & Close Functionality Working") 
                 
    } else
      Log.Error("Save & Close button not found in Modal")
});

Then("Verify Transaction is Recorded for Save & Close functionality{arg}", function (holidayName){
  if (PanelGridBody.Exists) {
        var RowProp = new Array("Name", "ObjectType")
        var RowVal = new Array("Panel(0)", "Panel")
        var panelData = PanelGridBody.FindAll(RowProp, RowVal, 1000)

        Delay(1000)
        if (panelData.length > 0) {
            for (var i = 0; i < panelData.length; i++) {
                var searchString = panelData[i].contentText;
                InputString = searchString.replace(/,/g, '')
                SubString = holidayName
                if (InputString.indexOf(SubString) >= 0) {                   
                    Log.Checkpoint("Record found in Center Closed Dates Grid - " + holidayName);                    
                }
                else
                   Log.Message("Record not found in Center Closed Dates Grid - "+ holidayName); 
                  

            }
        } else
            Log.Message("No Records Found in Center Closed Dates Grid")
    } else {
        Log.Message("Center Closed Dates Grid not found");
    }
});

When("Fill the data into Modal with specific time{arg}", function (holidayName){
  Object_Keys(CenterHolidaydate, "08-17-2022")
  Object_Keys(CenterHolidayname, holidayName)
  Object_Click(labelSpecificTimes)
  
  Object_Click(CenterClosedStartTime)
  Object_ClickItem(CenterClosedStartTime, "07:00 AM");
    
  Object_Click(CenterClosedEndTime)
  Object_ClickItem(CenterClosedEndTime, "02:00 PM");
});

Then("Verify Duplicate date validation working or not", function (){
  Object_Click(ButtonSaveClose)
   if (DateAlreadyExist.Exists) {      
        Log.Checkpoint("Duplicate closed dates validation working fine")
    } else
        Log.Error("Duplicate closed dates validation not working fine")
    for(i=0; i<10; i++){
      if (DateAlreadyExist.Exists){
        Delay(1000)
      }
      else
        break;
    }
     //delay(3000);
      //Object_Click(Button_Cancel)   
   
});

When("Delete the recent HolidayName{arg}", function (param1){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Button(0)","Button")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
  var Results = new Array()
  for(i=0; i<Links.length; i++)
  {
    if(Links[i].outerHTML.indexOf("delete")>=0)
    {
      Results.push(Links[i])      
    }
    
    
  }
  Delay(1000)
  var gridLength = Results.length-1
  Object_Click(Results[gridLength]) 
  Object_Click(buttonOk) 
  Delay(3000)
  //Object_Click(buttonAddClosedDate) 
/*  for(j=0; j<Results.length; j++){
   Object_Click(Results[j]) 
  }*/
});

Then("Verify Transaction record is removed in Center closed Date Grid{arg}", function (holidayName){
   if (PanelGridBody.Exists) {
        var RowProp = new Array("Name", "ObjectType")
        var RowVal = new Array("Panel(0)", "Panel")
        var panelData = PanelGridBody.FindAll(RowProp, RowVal, 1000)

        Delay(1000)
        var count =0;
        if (panelData.length > 0) {
            for (var i = 0; i < panelData.length; i++) {
                var searchString = panelData[i].contentText;
                InputString = searchString.replace(/,/g, '')
                SubString = holidayName
                if (InputString.indexOf(SubString) >= 0) {                   
                    Log.Message("Record found in Center Closed Dates Grid - " + holidayName);  
                    count = count+1                  
                }
                
                                     

            }
            if(count == 0)
            {
              Log.Checkpoint("Record deleted successfully in Center Closed Dates Grid - "+ holidayName); 
            }
        } else
            Log.Message("No Records Found in Center Closed Dates Grid")
    } else {
        Log.Message("Center Closed Dates Grid not found");
    }
});

When("Select date filters and click on refresh button", function (){
  throw new NotImplementedError();
});

Then("Verify grid dates are displaying with in limit or not{arg}{arg}", function (StartDate, EndDate){
  
  var RowProp = new Array("Name", "ObjectType","className")
  var RowVal = new Array("Panel(0)", "Panel","ui-grid-cell-contents ng-binding ng-scope")
  var panelData = PanelGridBody.FindAll(RowProp, RowVal, 1000)
  
  var fromDate = aqConvert.StrToDateTime(StartDate)
  var toDate = aqConvert.StrToDateTime(EndDate)
  Log.Message(fromDate )
  Log.Message( toDate)
  
  var Results = new Array()
  for(i=0; i<panelData.length; i++)
  {
    if(panelData[i].contentText.indexOf("2022")>=0 || panelData[i].contentText.indexOf("2023")>=0|| panelData[i].contentText.indexOf("2024")>=0)
    {
      Results.push(panelData[i])      
    }    
  }
  Delay(1000)
  
    if (Results.length > 0) {
            for (var i = 0; i < Results.length; i++) {
                var gridDate = aqConvert.StrToDateTime(Results[i].contentText);
                Log.Message(gridDate)
                frmCompare = aqDateTime.Compare(fromDate, gridDate);
                toCompare = aqDateTime.Compare(toDate, gridDate);
                
                 if (frmCompare <= 0 && toCompare >= 0){
                  Log.Checkpoint("Closed date is with in Filtered Dates only ")
                  
                }
                else{
                  Log.Message("Closed date is not with in Filtered Dates only ")
                }            

            }
           
        } else
            Log.Message("No Records Found in Center Closed Dates Grid")
  
  
  Delay(3000)
});

When("Select date filters and click on refresh button{arg}{arg}", function (StartDate, EndDate){
  Object_Keys(centerProfileStartDate, StartDate)
  Object_Keys(centerProfileEndDate, EndDate)
  Object_Click(centerProfilButtonRefresh)  

});

When("Edit the recent HolidayName{arg}", function (HolidayName){
  var RowProp = new Array("Name","ObjectType")
  var RowVal = new Array("Button(0)","Button")
  var Links = Aliases.browser.pageBrightstar_Login.panelBodyGridContainer.Panel_Grid_Body.FindAll(RowProp, RowVal, 1000)
  
  var Results = new Array()
  for(i=0; i<Links.length; i++)
  {
    if(Links[i].outerHTML.indexOf("edit")>=0)
    {
      Results.push(Links[i])      
    }
    
    
  }
  Delay(1000)
  var gridLength = Results.length-1
  Object_Click(Results[gridLength]) 
  Object_Keys(CenterHolidayname, HolidayName)
  //Object_Click(buttonOk) 
  Delay(3000)
});

Then("Verify Transaction record is updated in Center closed Date Grid{arg}", function (param1){
  throw new NotImplementedError();
});