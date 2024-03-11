sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("dashboard.controller.View1", {
            onInit: function () {

            },
            onEscapePreventDialogPress: function () {
                if (!this.oEscapePreventDialog) {
                    // Create a new Select control
                    var oSelect = new sap.m.Select({
                        class: "sapUiSmallMarginEnd",
                        valueState: "Success",
                        items: [
                            new sap.ui.core.Item({
                                icon: "sap-icon://meal",
                                text: "Casual Leave (CL)",
                                selected: true
                            }),
                            new sap.ui.core.Item({
                                icon: "sap-icon://meal",
                                text: "Sick leave (SL)"
                            }),
                            new sap.ui.core.Item({
                                icon: "sap-icon://meal",
                                text: "Leave without pay (LWP)"
                            }),
                            new sap.ui.core.Item({
                                icon: "sap-icon://meal",
                                text: "Paternity leave (PL)"
                            }),
                            new sap.ui.core.Item({
                                icon: "sap-icon://meal",
                                text: "Compensatory Off"
                            })
                        ]
                    });
            
                    // Create a new Grid control
                    var oGrid = new sap.ui.layout.Grid({
                        defaultSpan: "XL2 L3 M4 S6",
                        content: [
                            new sap.m.Text({ 
                                text: "Select a Leave:",
                                styleClass: "sapUiSmallMargin" // Setting the style class directly
                            }),
                            oSelect,
                            new sap.m.Text({ 
                                text: "Start Date:",
                                styleClass: "sapUiSmallMargin" // Setting the style class directly
                            }),
                            new sap.m.DatePicker({
                                valueFormat: "yyyy-MM-dd",
                                displayFormat: "short"
                            }),
                            new sap.m.Text({ 
                                text: "End Date:",
                                styleClass: "sapUiSmallMargin" // Setting the style class directly
                            }),
                            new sap.m.DatePicker({
                                valueFormat: "yyyy-MM-dd",
                                displayFormat: "short"
                            }),
                            new sap.m.Text({ 
                                text: "Reason for Leave:",
                                styleClass: "sapUiSmallMargin" // Setting the style class directly
                            }),
                            new sap.m.TextArea({
                                placeholder: "Enter reason for leave"
                            })
                        ]
                    });
            
                    // Create buttons for the dialog
                    var oCloseButton = new sap.m.Button({
                        text: "Close",
                        press: function () {
                            this.oEscapePreventDialog.close();
                        }.bind(this)
                    });
            
                    var oSubmitButton = new sap.m.Button({
                        text: "Submit",
                        press: function () {
                            // Display message box on successful submission
                            sap.m.MessageBox.success("Leave applied successfully and Pending for approval", {
                                title: "Success",
                                onClose: function () {
                                    // You can add any logic you want to execute after the message box is closed
                                }
                            });
                            this.oEscapePreventDialog.close(); // Close the dialog after successful submission
                        }.bind(this)
                    });
            
                    // Create a new Dialog control
                    this.oEscapePreventDialog = new sap.m.Dialog({
                        title: "Apply Leave",
                        content: oGrid,
                        buttons: [oCloseButton, oSubmitButton], // Adding both Close and Submit buttons
                        escapeHandler: function (oPromise) {
                            // Your existing escapeHandler logic remains unchanged
                        }.bind(this)
                    });
            
                    this.oEscapePreventDialog.open();
                }
            }
    
        });
    });

