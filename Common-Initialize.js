/**
 * 独自メニューを追加する
 *
 * @param {string} メニュータブ名
 * @param {Object.<string, string>} <メニュー名, 関数名>
 * @customfunction
 */
function AddMenuToSheet(MenuName, MenuList){
  let Sheet = SpreadsheetApp.getActiveSpreadsheet();
  Sheet.addMenu(MenuName, MenuList);
}

/**
 * 必要なシートを作成、不要なシートを削除する
 *
 * @param {Object.<string, <Array.<String>>} シートとカラム名のリスト
 * @customfunction
 */
function CreateAndDeleteSheet(SheetsAndColumns){
  let Sheet = SpreadsheetApp.getActiveSpreadsheet();
  let Sheets = Sheet.getSheets();
  let SheetNames = []
  for(var i = 0; i < Sheets.length; i++){
    SheetNames.push(Sheets[i].getName())
  }
  //追加
  for(var key in SheetsAndColumns){
    if(SheetNames.indexOf(key) === - 1){
      var NewSheet = Sheet.insertSheet(key);
      SetRangeValues(NewSheet, 1, 1, SheetsAndColumns[key]);
    }
  }
  for(var i = 0; i < Sheet.length; i++){
    if(SheetsAndColumns[sheet[i].getName]){
      Sheet.deleteSheet(Sheet[i])
    }
  }
}

function TestFunciton(){
  lst = {"test": [["test1", "test2", "test3"]]}
  CreateAndDeleteSheet(lst)
}