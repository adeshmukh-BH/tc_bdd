//USEUNIT ImportUnits

/***************************************************************
Purpose: Login into Brightstar application
Parameters:n/a
Created by: Cigniti
***************************************************************/
function Login()
{
  if(Aliases.browser.pageBrightstar_Login.Exists)
  {
    Object_Keys(Textbox_Username, UserName)
    Object_Keys(Passwordbox_Password, Password)
    Object_Click(Button_Login)
    Delay(2000)
    //Dynamic_Wait(Panel_ChildStatistics)
    if(Panel_ChildStatistics.Exists)
    {
      Log.Checkpoint("Logged in successfully")
    }
    else if(Link_EnrichmentProviders.Exists)
    {
      Log.Checkpoint("User logged in into corporate center")
    }
    else
    {
      Log.Error("User not logged into application")
    }
  }
  else
  {
    Log.Error("Expected login page doesn't exists/ failed to load")
  }
}

/***************************************************************
Purpose: Logout from Brightstar application
Parameters: n/a
Created by : Cigniti
***************************************************************/
function LogOut()
{
  var RowProp = new Array("ObjectType","contentText","ObjectLabel")
  var RowVal = new Array("Link","Logout","Logout")
  var Logout_Link = Sys.Browser("chrome").Page("*").FindChild(RowProp, RowVal, 50)
  if(Logout_Link.Exists ==true)
  {
    Object_Click(Logout_Link)
    Log.Checkpoint("Clicked on Logout link")
  }
  else
  {
    Log.Message("Logout link not found")
  }
}

/***************************************************************
Purpose : Redirect to home page anywhere from the application
Created by : Cigniti
***************************************************************/
function ResetApp_Home()
{
  Browsers.Item(btChrome).Navigate(Home_URL)
  Dynamic_Wait(Panel_ChildStatistics)
  Delay(1000)
}

function ChangeCenter(center)
{
   Dynamic_Wait(linkChangeCenter);
   Object_Click(linkChangeCenter);
   Dynamic_Wait(Textbox_Centernumber);
   Object_Keys(Textbox_Centernumber, center);
   Object_Click(Button_Go);
   Delay(2000);
}
function FindChildren(childName)
{
  Object_Keys(Textbox_Personname, childName);
  Object_Click(FindPeopleSearchButton);
  Delay(2000);
  
}
function fieldExist(property)
{
 if(property.Exists)
 {
   Log.Checkpoint(aqString.Concat(property.contentText, " field found"))
 }
 else{
   Log.Error(aqString.Concat(property.contentText, " field not found"));
   
 }
 
}
/***************************************************************
Purpose : waiting for Page load
Created by : Cigniti
***************************************************************/
function Page_Load(n)
{
  for(i=0;i<=n;i++)
  {
    if(Image_Loading.Exists)
    {
      Delay(1000)
    }
    else
    {
      break;
    }
  }
}

function Page_Load1()
{
  while(Image_Loading.Exists)
  {
      Delay(1000)    
  }
}
/***************************************************************
Purpose : Togenerate a random text
Created by : Cigniti
***************************************************************/
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 3; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
/***************************************************************
Purpose : To get today date in format
Created by : Cigniti
***************************************************************/
function Today()
{
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '-' + dd + '-' + yyyy;
  return today;
}

/***************************************************************
Purpose : To get today date in format
Created by : Cigniti
***************************************************************/
function SamedayNextYear()
{
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear()+1;

  today = mm + '-' + dd + '-' + yyyy;
  return today;
}