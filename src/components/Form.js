import React from "react";
// {/*==================================BUILD NOTES=========================== */}
//MAYBE:make this the form pop up into a fillable sign-up//
//MAYBE: make this a top oriented nav bar
//MAYBE: make this a side pannel that can be built out to filter and adjust db information//
//{/*==================================BUILD NOTES=========================== */}

export default function Form() {
	return (
		<div className="form-login">
			<p><button classname="form-button-login">Login</button></p>
			<p><button classname="form-button-login">Signup</button></p>
		</div>
	);
};