var hboxLocationPicker,vboxLocationPicker;
var btnId;
var lblTitle;
/**
********************************************************************************
*	Name    : listBoxSelectionCallBack
*	Author  : Kony
*	Purpose : onSelectionCallback of listBox.
********************************************************************************
*/
function listBoxSelectionCallBack(eventObj)
{
	kony.print("\n\nin list box selection\n\n");
	if(btnId=="btnOrigin"){
		frmAnimation.lblSelectedOrigin.text="Origin: "+(eventObj.selectedKeyValue)[1];
		kony.print("\n--->"+frmAnimation.lblSelectedOrigin.text);
				
	}else{
		
		frmAnimation.lblSelectedDestination.text="Destination: "+(eventObj.selectedKeyValue)[1];
	}
	frmAnimation.hboxResultLocation.setVisibility(true, null);
	frmAnimation.hboxContainer.setVisibility(true, animationConfigEnable);
	
	frmAnimation.removeAt(1, animationConfigDisable);
}
/**
********************************************************************************
*	Name    : setLocation
*	Author  : Kony
*	Purpose : For selecting the location for source & destination.
********************************************************************************
*/
function setLocation(eventObj){
	if(eventObj.id=="btnOrigin"){
	vboxLocationPicker.removeAt(0, null);
	vboxLocationPicker.removeAt(0,null);
		lblTitle = new kony.ui.Label({
        "id": "lblTitle",
        "isVisible": true,
        "text": "Select Origin",
        "skin": "sknLblKonyThemeAppHeader"
    	}, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0,0,0,0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    	}, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    	});
     }else{
     	vboxLocationPicker.removeAt(0, null);
		vboxLocationPicker.removeAt(0,null);
		
        lblTitle = new kony.ui.Label({
        	"id": "lblTitle",
        	"isVisible": true,
        	"text": "Select Destination",
        	"skin": "sknLblKonyThemeAppHeader"
    		}, {
        	"widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        	"vExpand": false,
        	"hExpand": true,
        	"margin": [0,0,0,0],
        	"padding": [1, 1, 1, 1],
        	"contentAlignment": constants.CONTENT_ALIGN_CENTER,
        	"marginInPixel": true,
       	 "paddingInPixel": false,
       	 "containerWeight": 6
    		}, {
        	"textCopyable": false,
        	"wrapping": constants.WIDGET_TEXT_WORD_WRAP
    	});
	}
	btnId=eventObj.id;
    vboxLocationPicker.add(lblTitle,listBoxLocation);
	hboxLocationPicker.removeAt(0, null);
	hboxLocationPicker.add(vboxLocationPicker);
	hboxLocationPicker.layoutAnimConfig=animationConfigAdd;
	frmAnimation.add(hboxLocationPicker);
    
    function timerFunc(){
	removeWidget();
	}
	kony.timer.schedule("mytimer1",timerFunc,1, false);
}
/**
********************************************************************************
*	Name    : removeWidget
*	Author  : Kony
*	Purpose : For removing the continer of the widget from the form to display animation.
********************************************************************************
*/
function removeWidget(){
	frmAnimation.hboxContainer.setVisibility(false, animationConfigDisable);
}
/**
********************************************************************************
*	Name    : locationInitializer
*	Author  : Kony
*	Purpose : For initializing the location listbox.
********************************************************************************
*/
function locationInitializer()
{
	listBoxLocation = new kony.ui.ListBox({
        "id": "listBoxLocation",
        "isVisible": true,
        "masterData": [
            ["1", "Ahmedabad"],
            ["2", "Bangalore"],
            ["3", "Chennai"],
            ["4", "New Delhi"],
            ["5", "Goa"]
        ],
        "selectedKey": "1",
        "skin": "sknListboxKonyThemeNormal",
        "focusSkin": "sknListboxKonyThemeFocus",
        "onSelection": listBoxSelectionCallBack
    	}, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 7
    	}, {
        "dropDownImage": null,
        "viewType": constants.LISTBOX_VIEW_TYPE_ONSCREENWHEEL
   	 });
     vboxLocationPicker = new kony.ui.Box({
        "id": "vboxLocationPicker",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    	}, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxLocationPicker = new kony.ui.Box({
        "id": "hboxLocationPicker",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    	}, {
        "containerWeight": 16,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    	}, {});
 }