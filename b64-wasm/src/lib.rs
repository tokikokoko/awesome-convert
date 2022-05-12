mod utils;

use wasm_bindgen::prelude::*;
use base64::{encode, decode};
use std::str;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, b64-wasm!");
}

#[wasm_bindgen]
pub fn b64encode(ot: Option<String>) -> String {
    if let Some(t) = ot {
        return encode(t);
    }
    return String::from("");
}

#[wasm_bindgen]
pub fn b64decode(ot: Option<String>) -> String {
    if let Some(t) = ot {
        return String::from(decode(t).as_ref().map(|tt| { str::from_utf8(tt).unwrap() }).unwrap());
    }
    return String::from("");
}
