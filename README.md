# ARIA IDL Simulator

Deployed to GitHub pages: https://rahimabdi.github.io/aria-idl-simulator/.

## General notes

- For an overview of how ARIA IDL currently works, see: [ARIA IDL documentation](https://github.com/w3c/aria/blob/main/documentation/aria-idl.md).
- ARIA IDL is changing as part of [ARIA PR #2484](https://github.com/w3c/aria/pull/2484). This tool provides new IDL reflection details for impacted ARIA attributes. However, it only provides simulation for newly enumerated attributes as ARIA content attributes that reflect as `Element?` or `FrozenArray<Element>?` reflect in a simple manner and will be unchanged.
- Many ARIA attributes may also have assistive technology (AT) defaults that are computed downstream of and separately from a browser's IDL engine. As part of the AT layer (i.e., accessibility tree), user agents can build the accessibility tree and perform more complex value assignment that isn't possible at the IDL layer (e.g., compute a default using the element's role which is determined after IDL takes place). This also allows better separation of concerns so that ARIA IDL reflection can align with HTML's convention for enumerated attributes and JavaScript manipulation of ARIA attributes is predictable. Examples:
    - For `<div role="alert">`, `div.ariaAtomic=null` (since the content attribute is missing) although assistive technologies would expose this element as `aria-atomic="true"`.
    - For `<div role="combobox">`, `div.ariaHasPopup=null` although assistive technologies would expose this element as though `aria-haspopup="listbox"`.