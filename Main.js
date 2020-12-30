function onOpen() {
    let SheetList = {}
    SheetList["Param"] = [["Code", "From", "To"]]
    SheetList["Data"] = [["Date", "Open", "High", "Low", "closing"]]
    CreateAndDeleteSheet(SheetList);
}