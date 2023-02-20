function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
  
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/1JKBX-eBZzh-IenUis7msBUDgaKFpLVGq_fNlcVD4NxU/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Data");

  ws.appendRow([
    formObject.first_name,
    formObject.last_name,
    formObject.gender,
    formObject.dateOfBirth,
    formObject.phone,
    formObject.Latitude,
    formObject.Longitude

  ]);
}