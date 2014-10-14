var lblDummy2,btnIdCal,count=1;
var hboxScroller;
var btnFromDatePicker,btnToDatePicker;
var datePicker;
var lblTitle;
var lblSeparator;
var hboxDatePicker;
var lblDummy1;
var imgScroller;
var btnConfirm;
var vboxDateContainer;
var hboxDateContainer;
/**
********************************************************************************
*	Name    : calendarSelectionCallBack
*	Author  : Kony
*	Purpose : called after the calendar date selection.
********************************************************************************
*/
function calendarSelectionCallBack(calendar)
{
	day=calendar.day;
	month=calendar.month;
	year=calendar.year;
	if(btnIdCal=="btnFromDatePicker")
	{
		btnFromDatePicker.text="From:"+day+"/"+month+"/"+year;
		frmAnimation.lblStartingDate.text="Departure: "+day+"/"+month+"/"+year;
	}
	else if(btnIdCal=="btnToDatePicker"){
		btnToDatePicker.text="To:"+day+"/"+month+"/"+year;
		frmAnimation.lblEndingDate.text="Return: "+day+"/"+month+"/"+year;
	}
	//frmAnimation.hboxSelectedDate.setVisibility(true, animationConfigEnable);

}
/**
********************************************************************************
*	Name    : dateSelection
*	Author  : Kony
*	Purpose : to select the date for departure & return.
********************************************************************************
*/
function dateSelection(eventObj)
{
	hboxScroller.layoutAnimConfig=layoutConfig;
	if(eventObj.id=="btnFromDatePicker" && count==2)
	{
		hboxScroller.removeAt(0, animationConfigDisable);
		count=count-1;
	}
	else if(eventObj.id=="btnToDatePicker" && count==1){
		hboxScroller.addAt(lblDummy2,-1,animationConfigEnable);
		count=count+1;
	}
	btnIdCal=eventObj.id;
}
/**
********************************************************************************
*	Name    : calenderInitializer
*	Author  : Kony
*	Purpose : Initializing the calendar widget.
********************************************************************************
*/
function calenderInitializer()
{
	count=1;
	var d=new Date();
	var date=d.getDate();
	var month=d.getMonth();
	var year=d.getFullYear();
	frmAnimation.lblStartingDate.text="Departure: "+date+"/"+month+1+"/"+year;
	lblDummy2 = new kony.ui.Label({
        "id": "lblDummy2",
        "isVisible": true,
        "text": " ",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 54
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    lblTitle = new kony.ui.Label({
        "id": "lblTitle",
        "isVisible": true,
        "text": "Select Date",
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
        "containerWeight": 7
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    btnFromDatePicker = new kony.ui.Button({
        "id": "btnFromDatePicker",
        "isVisible": true,
        "text": "From: "+date+"/"+month+"/"+year,
        "skin": "btnNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": dateSelection
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    lblSeparator = new kony.ui.Label({
        "id": "lblSeparator",
        "isVisible": true,
        "text": "-",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
     btnToDatePicker = new kony.ui.Button({
        "id": "btnToDatePicker",
        "isVisible": true,
        "text": "To:Date",
        "skin": "btnNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": dateSelection
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    hboxDatePicker = new kony.ui.Box({
        "id": "hboxDatePicker",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    lblDummy1 = new kony.ui.Label({
        "id": "lblDummy1",
        "isVisible": true,
        "text": " ",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    imgScroller = new kony.ui.Image2({
        "id": "imgScroller",
        "isVisible": true,
        "src": "up_arrow.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 15
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    hboxScroller = new kony.ui.Box({
        "id": "hboxScroller",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    if(kony.os.deviceInfo().name=="iPhone"||kony.os.deviceInfo().name=="iPhone Simulator"){
    	datePicker = new kony.ui.Calendar({
        "id": "datePicker",
        "isVisible": true,
        "dateFormat": "dd/MM/yyyy",
        "viewConfig": {
            gridConfig: {
                "allowWeekendSelectable": true
            }
        },
        "placeholder": null,
        "skin": "calNormal",
        "focusSkin": "calFocus",
        "onSelection": calendarSelectionCallBack,
        "validStartDate": [date,month+1, year],
        "validEndDate": [date,month, year+1],
        "viewType": constants.CALENDAR_VIEW_TYPE_WHEEL_ONSCREEN,
        "calendarIcon": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {
        "mode": constants.CALENDAR_WHEEL_ONLY_DATE
    });  
    }else if(kony.os.deviceInfo().name=="android"){
    	datePicker = new kony.ui.Calendar({
        "id": "datePicker",
        "isVisible": true,
        "dateFormat": "dd/MM/yyyy",
        "viewConfig": {
            gridConfig: {
                "allowWeekendSelectable": true
            }
        },
        "placeholder": null,
        "skin": "calNormal",
        "focusSkin": "calFocus",
        "onSelection": calendarSelectionCallBack,
        "validStartDate": [date,month+1, year],
        "validEndDate": [date,month, year+1],
        "viewType": constants.CALENDAR_VIEW_TYPE_GRID_ONSCREEN,
        "calendarIcon": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {
        "mode": constants.CALENDAR_WHEEL_ONLY_DATE
    });
    }
    btnConfirm = new kony.ui.Button({
        "id": "btnConfirm",
        "isVisible": true,
        "text": "Done",
        "skin": "btnNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": onDateCompletion
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [30, 2, 30, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    }); 
    vboxDateContainer = new kony.ui.Box({
        "id": "vboxDateContainer",
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
    hboxDateContainer = new kony.ui.Box({
        "id": "hboxDateContainer",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 83,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    btnIdCal=btnFromDatePicker.id;
    
}
/**
********************************************************************************
*	Name    : onDateCompletion
*	Author  : Kony
*	Purpose : called after clicking done button from the calendar.
********************************************************************************
*/
function onDateCompletion()
{
	frmAnimation.hboxContainer.setVisibility(true, animationConfigEnable);
	frmAnimation.removeAt(1, animationConfigDisable);
}
/**
********************************************************************************
*	Name    : setDate
*	Author  : Kony
*	Purpose : For selecting the date for departure & Return.
********************************************************************************
*/
function setDate() {
	hboxDatePicker.add(btnFromDatePicker, lblSeparator, btnToDatePicker);
    hboxScroller.add(lblDummy1, imgScroller);
    vboxDateContainer.add(lblTitle, hboxDatePicker, hboxScroller, datePicker, btnConfirm);
    hboxDateContainer.add(vboxDateContainer);
    frmAnimation.add(hboxDateContainer);
    function timerFunc(){
		removeWidget();
	}
	kony.timer.schedule("mytimer2",timerFunc,1, false);
}