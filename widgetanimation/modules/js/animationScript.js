var lblTitle,listBoxOrigin;

var animationConfigAdd;
var animationConfigRemove;
layoutConfig1 ={
	"animEffect":constants.ANIMATION_EFFECT_FLIP_LEFT ,
	"animDuration":4,
	"animDelay":0,
	"animCurve":constants.ANIMATION_CURVE_EASEIN 	                   
	};
	layoutConfig ={
	"animEffect":constants.ANIMATION_PLATFORM_DEFAULT ,
	"animDuration":1,
	"animDelay":0,
	"animCurve":constants.ANIMATION_CURVE_EASEIN 	                   
	};
var animationConfigDisable={
	animEffect: constants.ANIMATION_EFFECT_COLLAPSE,
	"animDuration":1,
	"animDelay":0,
	"animCurve":constants.ANIMATION_CURVE_LINEAR
};
var animationConfigEnable={
	animEffect:constants.ANIMATION_EFFECT_EXPAND,
	animDuration:1,
	animDelay:0,
	animCurve:constants.ANIMATION_CURVE_LINEAR
};	
/**
********************************************************************************
*	Name    : frmAnimationShow
*	Author  : Kony
*	Purpose : for initializing widgets of the form frmAnimation.
********************************************************************************
*/                   
function frmAnimationShow()
{
	locationInitializer();
	calenderInitializer();
	frmAnimation.layoutAnimConfig=layoutConfig;
	//frmAnimation.hboxResultLocation.setVisibility(false, null);
	//frmAnimation.hboxSelectedDate.setVisibility(false, null);
	frmAnimation.show();
}