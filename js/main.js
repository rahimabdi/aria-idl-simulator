import { ariaIDL } from "./aria-idl.js";

const contentAttributesSelect = document.getElementById("content-attributes-select");
populateContentAttributesSelect(contentAttributesSelect);

contentAttributesSelect.addEventListener("change", (event) => {
  const selectedContentAttribute = event.target.value;
  const attributeInfo = ariaIDL[selectedContentAttribute];

  const existingDetails = document.getElementById("reflection-details-section");
  if (existingDetails) {
    existingDetails.remove();
  }

  if (!attributeInfo) {
    return;
  }

  const detailsContainer = document.createElement("div");
  detailsContainer.id = "reflection-details-section";

  const heading = document.createElement("h2");
  heading.textContent = "Reflection details";
  detailsContainer.appendChild(heading);

  let reflectionTable = '<table>';
  reflectionTable += `
    <tr>
      <th>Content Attribute</th>
      <th>Content Attribute Type</th>
      <th>IDL Attribute</th>
      <th>IDL Attribute Type</th>
      <th>Reflection Details</th>
    </tr>
  `;

  let reflectionDetails = '';

  if (attributeInfo["content-attribute-type"] === "Enumerated" && attributeInfo.keywords && attributeInfo.states) {
    const keywordToStateMap = {};

    for (const [keywordRaw, keywordValue] of Object.entries(attributeInfo.keywords)) {
      const keywordDisplay = keywordRaw === "" ? "(empty string)" : keywordRaw;
      let matchedState = null;

      if (keywordValue !== null && keywordValue !== undefined) {
        for (const [stateKey, stateValue] of Object.entries(attributeInfo.states)) {
          if (stateKey.toLowerCase() === keywordValue.toLowerCase()) {
            matchedState = stateValue ?? "(null)";
            break;
          }
        }
      } else {
        if ("Undefined" in attributeInfo.states) {
          matchedState = attributeInfo.states["Undefined"] ?? "(null)";
        } else {
          matchedState = "(null)";
        }
      }

      if (!keywordToStateMap[matchedState]) {
        keywordToStateMap[matchedState] = [];
      }
      keywordToStateMap[matchedState].push(keywordDisplay);
    }

    reflectionDetails += '<strong>Keyword → State Mapping:</strong><ul>';
    for (const [state, keywords] of Object.entries(keywordToStateMap)) {
      const keywordsList = keywords.join(", ");
      reflectionDetails += `<li><code>${keywordsList} → ${state}</code></li>`;
    }
    reflectionDetails += '</ul>';

    if ("Missing-Value-Default" in attributeInfo.states) {
      const missing = attributeInfo.states["Missing-Value-Default"] ?? "(null)";
      reflectionDetails += '<strong>Missing Value Default:</strong><ul>';
      reflectionDetails += `<li><code>${missing}</code></li>`;
      reflectionDetails += '</ul>';
    }

    if ("Invalid-Value-Default" in attributeInfo.states) {
      const invalid = attributeInfo.states["Invalid-Value-Default"] ?? "(null)";
      reflectionDetails += '<strong>Invalid Value Default:</strong><ul>';
      reflectionDetails += `<li><code>${invalid}</code></li>`;
      reflectionDetails += '</ul>';
    }

    if ("notes" in attributeInfo) {
      reflectionDetails += '<strong>Notes:</strong><ul>';
      for (const note of Object.values(attributeInfo.notes)) {
        reflectionDetails += `<li>${note}</li>`;
      }
      reflectionDetails += '</ul>';
    }
  } else {
    reflectionDetails = 'N/A';
  }

  reflectionTable += `
    <tr>
      <td><code>${selectedContentAttribute}</code></td>
      <td>${attributeInfo["content-attribute-type"] || '—'}</td>
      <td><code>${attributeInfo["idl-attribute-name"] || '—'}</code></td>
      <td>${attributeInfo["idl-type"] || '—'}</td>
      <td>${reflectionDetails}</td>
    </tr>
  `;

  reflectionTable += '</table>';

  const tableWrapper = document.createElement('div');
  tableWrapper.innerHTML = reflectionTable;
  detailsContainer.appendChild(tableWrapper);
  contentAttributesSelect.parentNode.insertBefore(detailsContainer, contentAttributesSelect.nextSibling);

  if (attributeInfo["content-attribute-type"] === "Enumerated") {
    const tryItOutHeading = document.createElement("h2");
    tryItOutHeading.textContent = "Try it out";
    detailsContainer.appendChild(tryItOutHeading);

    const tryItOutExplanation = document.createElement("p");
    tryItOutExplanation.innerHTML = `
      Note: When the content attribute is absent, getting the content attribute via JavaScript with 
      <code>el.getAttribute("${selectedContentAttribute}")</code> returns <code>null</code>. Also, when the content attribute is absent, 
      getting the IDL attribute returns the missing value default. Setting the IDL attribute to <code>null</code> deletes the content attribute. 
    `;
    detailsContainer.appendChild(tryItOutExplanation);

    const tryItOutButtonContainer = document.createElement("div");
    tryItOutButtonContainer.style.display = "flex";
    tryItOutButtonContainer.style.gap = "10px";

    const setContentAttrButton = document.createElement("button");
    setContentAttrButton.classList.add("try-it-out-button");
    setContentAttrButton.textContent = "Set content attribute";

    const setIDLAttrButton = document.createElement("button");
    setIDLAttrButton.classList.add("try-it-out-button");
    setIDLAttrButton.textContent = "Set IDL attribute";

    const resetButton = document.createElement("button");
    resetButton.classList.add("try-it-out-button");
    resetButton.textContent = "Reset";

    tryItOutButtonContainer.appendChild(setContentAttrButton);
    tryItOutButtonContainer.appendChild(setIDLAttrButton);
    tryItOutButtonContainer.appendChild(resetButton);
    detailsContainer.appendChild(tryItOutButtonContainer);

    const preContainer = document.createElement("div");
    preContainer.style.marginTop = "20px";
    preContainer.style.padding = "15px";
    preContainer.style.backgroundColor = "#f5f5f5";
    preContainer.style.border = "1px solid #ccc";
    preContainer.style.borderRadius = "8px";
    preContainer.style.fontSize = "1.2em";
    preContainer.style.fontWeight = "600";
    preContainer.style.fontFamily = "monospace";

    const valueEnteredLine = document.createElement("div");
    valueEnteredLine.id = "value-entered-line";
    valueEnteredLine.style.marginBottom = "10px";
    valueEnteredLine.style.fontSize = "1.1em";
    valueEnteredLine.style.fontWeight = "500";
    valueEnteredLine.textContent = "Value entered: No value entered yet";
    preContainer.appendChild(valueEnteredLine);

    const initialContentPre = document.createElement("pre");
    initialContentPre.id = "initial-content-attribute";
    initialContentPre.innerHTML = `&lt;el&gt;&lt;/el&gt; <span style="color: green;">// el.getAttribute("${selectedContentAttribute}") returns null</span>`;

    const initialIDLPre = document.createElement("pre");
    initialIDLPre.id = "initial-idl-attribute";

    let initialIDLValue;
    if (attributeInfo["content-attribute-type"] === "Enumerated" && attributeInfo.states) {
      initialIDLValue = attributeInfo.states["Missing-Value-Default"];
    } else {
      initialIDLValue = null;
    }

    const idlAttributeName = attributeInfo["idl-attribute-name"];
    const formattedIDLValue = initialIDLValue === null ? "null" : `"${initialIDLValue}"`;

    initialIDLPre.textContent = `el.${idlAttributeName} = ${formattedIDLValue}`;

    preContainer.appendChild(initialContentPre);
    preContainer.appendChild(initialIDLPre);
    detailsContainer.appendChild(preContainer);

    setContentAttrButton.addEventListener("click", () => {
      const rawInput = prompt(`Enter value to set content attribute`);
      const inputValue = rawInput.trim();
      if (inputValue === null) return;

      const contentPre = document.getElementById("initial-content-attribute");
      const idlPre = document.getElementById("initial-idl-attribute");
      const valueLine = document.getElementById("value-entered-line");

      contentPre.textContent = `<el ${selectedContentAttribute}="${inputValue}"></el>`;
      valueLine.textContent = `Value entered: "${inputValue}"`;

      let idlMappedValue;
      if (attributeInfo["content-attribute-type"] === "Enumerated") {
        const keywords = attributeInfo.keywords || {};
        let matchedKeyword = null;
        for (const keyword of Object.keys(keywords)) {
          if (keyword.toLowerCase() === inputValue.toLowerCase()) {
            matchedKeyword = keyword;
            break;
          }
        }
        if (matchedKeyword !== null) {
          idlMappedValue = keywords[matchedKeyword];
        } else if ("Invalid-Value-Default" in attributeInfo.states) {
          idlMappedValue = attributeInfo.states["Invalid-Value-Default"];
        } else {
          idlMappedValue = null;
        }
      } else {
        idlMappedValue = inputValue;
      }

      const formattedIDLValue = idlMappedValue === null ? "null" : `"${idlMappedValue}"`;
      idlPre.textContent = `el.${attributeInfo["idl-attribute-name"]} = ${formattedIDLValue}`;
    });

    setIDLAttrButton.addEventListener("click", () => {
      const inputValueRaw = prompt(`Enter value to set IDL attribute`);
      if (inputValueRaw === null) return;

      const inputValue = inputValueRaw.trim();
      const contentPre = document.getElementById("initial-content-attribute");
      const idlPre = document.getElementById("initial-idl-attribute");
      const valueLine = document.getElementById("value-entered-line");

      if (inputValue.toLowerCase() === "null") {
        resetButton.click();
        return;
      }

      const currentContent = contentPre.textContent.trim();

      if (currentContent.startsWith(`<el ${selectedContentAttribute}`)) {
        contentPre.textContent = `<el ${selectedContentAttribute}="${inputValue}"></el>`;
      } else {
        contentPre.innerHTML = `&lt;el&gt;&lt;/el&gt; <span style="color: green;">// el.getAttribute("${selectedContentAttribute}") returns "${inputValue}"</span>`;
      }

      valueLine.textContent = `Value entered: "${inputValue}"`;

      let idlMappedValue;
      let matchedKeyword = null;
      const keywords = attributeInfo.keywords || {};
      for (const keyword of Object.keys(keywords)) {
        if (keyword.toLowerCase() === inputValue.toLowerCase()) {
          matchedKeyword = keyword;
          break;
        }
      }

      if (matchedKeyword !== null) {
        idlMappedValue = keywords[matchedKeyword];
      } else if ("Invalid-Value-Default" in attributeInfo.states) {
        idlMappedValue = attributeInfo.states["Invalid-Value-Default"];
      } else {
        idlMappedValue = null;
      }

      const formattedIDLValue = idlMappedValue === null ? "null" : `"${idlMappedValue}"`;
      idlPre.textContent = `el.${attributeInfo["idl-attribute-name"]} = ${formattedIDLValue}`;
    });

    resetButton.addEventListener("click", () => {
      const contentPre = document.getElementById("initial-content-attribute");
      const idlPre = document.getElementById("initial-idl-attribute");
      const valueLine = document.getElementById("value-entered-line");

      contentPre.innerHTML = `&lt;el&gt;&lt;/el&gt; <span style="color: green;">// el.getAttribute("${selectedContentAttribute}") returns null</span>`;
      valueLine.textContent = "Value entered: No value entered yet";

      let resetIDLValue;
      if (attributeInfo["content-attribute-type"] === "Enumerated" && attributeInfo.states) {
        resetIDLValue = attributeInfo.states["Missing-Value-Default"];
      } else {
        resetIDLValue = null;
      }

      const formattedResetIDLValue = resetIDLValue === null ? "null" : `"${resetIDLValue}"`;
      idlPre.textContent = `el.${attributeInfo["idl-attribute-name"]} = ${formattedResetIDLValue}`;
    });
  }
});

function populateContentAttributesSelect(selectElement) {
  const ariaAttributes = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-braillelabel",
    "aria-brailleroledescription",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colindextext",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-description",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowindextext",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext"
  ];

  for (const attribute of ariaAttributes) {
    const option = document.createElement("option");
    option.value = attribute;
    option.textContent = attribute;
    selectElement.appendChild(option);
  }
}