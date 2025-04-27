export const ariaIDL = {

  "role": {
    "idl-attribute-name": "role",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-activedescendant": {
    "idl-attribute-name": "ariaActiveDescendant",
    "idl-type": "Element?",
    "content-attribute-type": "No value constraint"
  },

  "aria-atomic": {
    "idl-attribute-name": "ariaAtomic",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "true": "true",
      "false": "false",
      "": "false"
    },
    "states": {
      "True": "True",
      "False": "False",
      "Missing": "Missing (null)",
      "Missing-Value-Default": null,
      "Invalid-Value-Default": "false"
    },
    "notes": {
      "1": "This attribute has a Undefined state which has no associated keyword. When the attribute is in the Undefined state (i.e., missing), the Undefined state results in a value of null."
    }
  },

  "aria-autocomplete": {
    "idl-attribute-name": "ariaAutoComplete",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "inline": "inline",
      "list": "list",
      "both": "both",
      "none": "none"
    },
    "states": {
      "Inline": "Inline",
      "List": "List",
      "Both": "Both",
      "None": "None",
      "Missing-Value-Default": "none",
      "Invalid-Value-Default": "none"
    }
  },

  "aria-braillelabel": {
    "idl-attribute-name": "ariaBrailleLabel",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-brailleroledescription": {
    "idl-attribute-name": "ariaBrailleRoleDescription",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-busy": {
    "idl-attribute-name": "ariaBusy",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "true": "true",
      "false": "false",
      "": "false"
    },
    "states": {
      "True": "True",
      "False": "False",
      "Missing-Value-Default": "false",
      "Invalid-Value-Default": "false"
    }
  },

  "aria-checked": {
    "idl-attribute-name": "ariaChecked",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "true": "true",
      "mixed": "mixed",
      "false": "false",
      "": null,
      "undefined": null
    },
    "states": {
      "True": "True",
      "False": "False",
      "Mixed": "Mixed",
      "Undefined": "Undefined (null)",
      "Missing-Value-Default": null,
      "Invalid-Value-Default": null
    },
    "notes": {
      "1": "This attribute has a Undefined state for the empty string and \"undefined\" keywords. When the attribute is set to these keywords or missing/invalid, the Undefined state results in a value of null."
    }
  },

  "aria-colcount": {
    "idl-attribute-name": "ariaColCount",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-colindex": {
    "idl-attribute-name": "ariaColIndex",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-colindextext": {
    "idl-attribute-name": "ariaColIndexText",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-colspan": {
    "idl-attribute-name": "ariaColSpan",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-controls": {
    "idl-attribute-name": "ariaControlsElements",
    "idl-type": "FrozenArray<Element>?",
    "content-attribute-type": "Space-separated tokens"
  },

  "aria-current": {
    "idl-attribute-name": "ariaCurrent",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "page": "page",
      "step": "step",
      "location": "location",
      "date": "date",
      "time": "time",
      "true": "true",
      "false": "false",
      "undefined": "false",
      "": "false"
    },
    "states": {
      "Page": "Page",
      "Step": "Step",
      "Location": "Location",
      "Date": "Date",
      "Time": "Time",
      "True": "True",
      "False": "False",
      "Missing-Value-Default": "false",
      "Invalid-Value-Default": "true"
    },
  },

  "aria-describedby": {
    "idl-attribute-name": "ariaDescribedByElements",
    "idl-type": "FrozenArray<Element>?",
    "content-attribute-type": "Space-separated tokens"
  },

  "aria-description": {
    "idl-attribute-name": "ariaDescription",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-details": {
    "idl-attribute-name": "ariaDetailsElements",
    "idl-type": "FrozenArray<Element>?",
    "content-attribute-type": "Space-separated tokens"
  },

  "aria-disabled": {
    "idl-attribute-name": "ariaDisabled",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "true": "true",
      "false": "false",
      "": "false"
    },
    "states": {
      "True": "True",
      "False": "False",
      "Missing-Value-Default": "false",
      "Invalid-Value-Default": "false"
    }
  },

  "aria-errormessage": {
    "idl-attribute-name": "ariaErrorMessageElements",
    "idl-type": "FrozenArray<Element>?",
    "content-attribute-type": "Space-separated tokens"
  },

  "aria-expanded": {
    "idl-attribute-name": "ariaExpanded",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "true": "true",
      "false": "false",
      "undefined": null,
      "": null
    },
    "states": {
      "True": "True",
      "False": "False",
      "Undefined": "Undefined (null)",
      "Missing-Value-Default": null,
      "Invalid-Value-Default": null
    },
    "notes": {
      "1": "This attribute has a Undefined state for the empty string and \"undefined\" keywords. When the attribute is set to these keywords or missing/invalid, the Undefined state results in a value of null."
    }
  },

  "aria-flowto": {
    "idl-attribute-name": "ariaFlowToElements",
    "idl-type": "FrozenArray<Element>?",
    "content-attribute-type": "Space-separated tokens"
  },

  "aria-haspopup": {
    "idl-attribute-name": "ariaHasPopup",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "false": "false",
      "": "false",
      "true": "menu",
      "menu": "menu",
      "listbox": "listbox",
      "tree": "tree",
      "grid": "grid",
      "dialog": "dialog"
    },
    "states": {
      "False": "False",
      "True": "True",
      "Menu": "Menu",
      "Listbox": "Listbox",
      "Tree": "Tree",
      "Grid": "Grid",
      "Dialog": "Dialog",
      "Missing-Value-Default": null,
      "Invalid-Value-Default": "false"
    },
    "notes": {
      "1": "This attribute has a Undefined state which has no associated keyword. When the attribute is in the Undefined state (i.e., missing), the Undefined state results in a value of null."
    }
  },

  "aria-hidden": {
    "idl-attribute-name": "ariaHidden",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "true": "true",
      "false": "false",
      "undefined": "false",
      "": "false"
    },
    "states": {
      "True": "True",
      "False": "False",
      "Missing-Value-Default": "False",
      "Invalid-Value-Default": "False"
    }
  },

  "aria-invalid": {
    "idl-attribute-name": "ariaInvalid",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "true": "true",
      "grammar": "grammar",
      "spelling": "spelling",
      "false": "false",
      "": "false"
    },
    "states": {
      "Grammar": "Grammar",
      "False": "False",
      "Spelling": "Spelling",
      "True": "True",
      "Missing-Value-Default": "false",
      "Invalid-Value-Default": "true"
    }
  },

  "aria-keyshortcuts": {
    "idl-attribute-name": "ariaKeyShortcuts",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-label": {
    "idl-attribute-name": "ariaLabel",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-labelledby": {
    "idl-attribute-name": "ariaLabelledByElements",
    "idl-type": "FrozenArray<Element>?",
    "content-attribute-type": "Space-separated tokens"
  },

  "aria-level": {
    "idl-attribute-name": "ariaLevel",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-live": {
    "idl-attribute-name": "ariaLive",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "off": "off",
      "polite": "polite",
      "assertive": "assertive"
    },
    "states": {
      "Off": "Off",
      "Polite": "Polite",
      "Assertive": "Assertive",
      "Missing-Value-Default": "off",
      "Invalid-Value-Default": "off"
    }
  },

  "aria-modal": {
    "idl-attribute-name": "ariaModal",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated", 
    "keywords": {
      "true": "true",
      "false": "false",
      "": "false"
    },
    "states": {
      "True": "True",
      "False": "False",
      "Missing-Value-Default": "false",
      "Invalid-Value-Default": "false"
    }
  },

  "aria-multiline": {
    "idl-attribute-name": "ariaMultiLine",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated", 
    "keywords": {
      "true": "true",
      "false": "false",
      "": "false"
    },
    "states": {
      "True": "True",
      "False": "False",
      "Missing-Value-Default": "false",
      "Invalid-Value-Default": "false"
    }
  },

  "aria-multiselectable": {
    "idl-attribute-name": "ariaMultiSelectable",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated", 
    "keywords": {
      "true": "true",
      "false": "false",
      "": "false"
    },
    "states": {
      "True": "True",
      "False": "False",
      "Missing-Value-Default": "false",
      "Invalid-Value-Default": "false"
    }
  },

  "aria-orientation": {
    "idl-attribute-name": "ariaOrientation",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "horizontal": "horizontal",
      "vertical": "vertical",
      "undefined": null,
      "": null
    },
    "states": {
      "Horizontal": "Horizontal",
      "Vertical": "Vertical",
      "Undefined": "Undefined (null)",
      "Missing-Value-Default": null,
      "Invalid-Value-Default": null
    },
    "notes": {
      "1": "This attribute has a Undefined state for the empty string and \"undefined\" keywords. When the attribute is set to these keywords or missing/invalid, the Undefined state results in a value of null."
    }
  },

  "aria-owns": {
    "idl-attribute-name": "ariaOwns",
    "idl-type": "FrozenArray<Element>?",
    "content-attribute-type": "Space-separated tokens"
  },

  "aria-placeholder": {
    "idl-attribute-name": "ariaPlaceholder",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-posinset": {
    "idl-attribute-name": "ariaPosInSet",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-pressed": {
    "idl-attribute-name": "ariaPressed",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "true": "true",
      "false": "false",
      "mixed": "mixed",
      "undefined": null,
      "": null
    },
    "states": {
      "True": "True",
      "False": "False",
      "Mixed": "Mixed",
      "Undefined": "Undefined (null)",
      "Missing-Value-Default": null,
      "Invalid-Value-Default": null
    },
    "notes": {
      "1": "This attribute has a Undefined state for the empty string and \"undefined\" keywords. When the attribute is set to these keywords or missing/invalid, the Undefined state results in a value of null."
    }
  },

  "aria-readonly": {
    "idl-attribute-name": "ariaReadOnly",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "true": "true",
      "false": "false",
      "": "false"
    },
    "states": {
      "True": "True",
      "False": "False",
      "Missing-Value-Default": "false",
      "Invalid-Value-Default": "false"
    }
  },

  "aria-relevant": {
    "idl-attribute-name": "ariaRelevant",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-required": {
    "idl-attribute-name": "ariaRequired",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "true": "true",
      "false": "false",
      "": "false"
    },
    "states": {
      "True": "True",
      "False": "False",
      "Missing-Value-Default": "false",
      "Invalid-Value-Default": "false"
    }
  },

  "aria-roledescription": {
    "idl-attribute-name": "ariaRoleDescription",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-rowcount": {
    "idl-attribute-name": "ariaRowCount",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-rowindex": {
    "idl-attribute-name": "ariaRowIndex",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-rowindextext": {
    "idl-attribute-name": "ariaRowIndexText",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-rowspan": {
    "idl-attribute-name": "ariaRowSpan",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-selected": {
    "idl-attribute-name": "ariaSelected",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "true": "true",
      "false": "false",
      "undefined": null,
      "": null
    },
    "states": {
      "True": "True",
      "False": "False",
      "Undefined": "Undefined (null)",
      "Missing-Value-Default": null,
      "Invalid-Value-Default": null
    },
    "notes": {
      "1": "This attribute has a Undefined state for the empty string and \"undefined\" keywords. When the attribute is set to these keywords or missing/invalid, the Undefined state results in a value of null."
    }
  },

  "aria-setsize": {
    "idl-attribute-name": "ariaSetSize",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-sort": {
    "idl-attribute-name": "ariaSort",
    "idl-type": "DOMString?",
    "content-attribute-type": "Enumerated",
    "keywords": {
      "none": "none",
      "ascending": "ascending",
      "descending": "descending",
      "other": "other"
    },
    "states": {
      "None": "None",
      "Ascending": "Ascending",
      "Descending": "Descending",
      "Other": "Other",
      "Missing-Value-Default": "none",
      "Invalid-Value-Default": "none"
    }
  },

  "aria-valuemax": {
    "idl-attribute-name": "ariaValueMax",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-valuemin": {
    "idl-attribute-name": "ariaValueMin",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-valuenow": {
    "idl-attribute-name": "ariaValueNow",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  },

  "aria-valuetext": {
    "idl-attribute-name": "ariaValueText",
    "idl-type": "DOMString?",
    "content-attribute-type": "No value constraint"
  }

};