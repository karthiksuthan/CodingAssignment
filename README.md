
## README FIRST

Please note a public **testflight link** is not available as app still in review and may take upto 2 days.hence a adhoc **ipa file** is provided to complete the assignment but cannot be installed as the UDIDs has not been added.

Please find arbitary decisions made by me as a developer in completing the assignment below.




#### FUNCTIONAL REQUIREMENTS IMPLEMENTATION 
- All data loaded dynamicaly including first page and header text. Hence a splashscreen created while first page is loading
- Client side search implemented on pressing the search icon a **text field appears over the header**. where on typing search key the list below updates in real time. 
- Since refreshing reloading not permitted search deoesnt show items yet to be loaded.
- To maintain the three coloumn layout without unecessary gaps, Landscape rotation disabled (referencing other streaming apps like netflix,hotstar etc).
- PAGE 3 EDGE CASE HANDLING: Long title restricted to one line and expanded on clicking it. Default poster shown to items without poster.

#### ARBITARY FUNCTIONAL DECISIONS AND RATIONALE
1. **Back Icon Functionality** 
- with search field shown : hides the search field and dismisses keyboard.
- without search field : first press shows a toast to press again to exit. A second press within 3 seconds quits the app.
2. **Search Icon Functionality** 
- without search field shown : animates the search field over the header and shows the keyboard to type.
- with search field and text present in input : dismisses the keyboard.
- without input in input field : hides search input and shows the header
3. **hardware back press Functionality** : same as back  Icon.
4. **Autohides the search input if input field loses focus without a search key present**
### DESIGN DECISIONS
1. Since all measurements in redline given in px , hence converted and approximated to dp measurements.
2. Since font sizes given pt approximated same refering design to design
3. Locked app to portrait view as the given design restriction of 3 coloumns was not user friendly in landscape.
4. Errors and warnings are all shown as toast.
5. A splashscreen added to show during initial page load
### PROJECT STRUCTURE
![alt text](./screenshot.png)

