const languageColors = {
  javascript: { name: "JavaScript", color: "#f1e05a" },
  typescript: { name: "TypeScript", color: "#3178c6" },
  python: { name: "Python", color: "#3572A5" },
  java: { name: "Java", color: "#b07219" },
  "c++": { name: "C++", color: "#f34b7d" },
  ruby: { name: "Ruby", color: "#701516" },
  php: { name: "PHP", color: "#4F5D95" },
  "c#": { name: "C#", color: "#178600" },
  go: { name: "Go", color: "#00ADD8" },
  swift: { name: "Swift", color: "#ffac45" },
  kotlin: { name: "Kotlin", color: "#A97BFF" },
  rust: { name: "Rust", color: "#dea584" },
  dart: { name: "Dart", color: "#00B4AB" },
  scala: { name: "Scala", color: "#c22d40" },
  shell: { name: "Shell", color: "#89e051" },
  objectivec: { name: "ObjectiveC", color: "#438eff" },
  perl: { name: "Perl", color: "#0298c3" },
  haskell: { name: "Haskell", color: "#5e5086" },
  lua: { name: "Lua", color: "#000080" },
  r: { name: "R", color: "#198CE7" },
  elixir: { name: "Elixir", color: "#6e4a7e" },
  clojure: { name: "Clojure", color: "#db5855" },
  erlang: { name: "Erlang", color: "#B83998" },
  html: { name: "HTML", color: "#e34c26" },
  css: { name: "CSS", color: "#563d7c" },
  vue: { name: "Vue", color: "#41b883" },
  svelte: { name: "Svelte", color: "#ff3e00" },
  react: { name: "React", color: "#61dafb" },
  angular: { name: "Angular", color: "#dd1b16" },
  sass: { name: "Sass", color: "#a53b70" },
  less: { name: "Less", color: "#1d365d" },
  stylus: { name: "Stylus", color: "#ff6347" },
  coffeescript: { name: "CoffeeScript", color: "#244776" },
  tex: { name: "TeX", color: "#3D6117" },
  vimscript: { name: "VimScript", color: "#199f4b" },
  emacslisp: { name: "EmacsLisp", color: "#c065db" },
  makefile: { name: "Makefile", color: "#427819" },
  dockerfile: { name: "Dockerfile", color: "#384d54" },
  powershell: { name: "PowerShell", color: "#012456" },
  matlab: { name: "MATLAB", color: "#e16737" },
  groovy: { name: "Groovy", color: "#e69f56" },
  puppet: { name: "Puppet", color: "#302B6D" },
  julia: { name: "Julia", color: "#a270ba" },
  "f#": { name: "F#", color: "#b845fc" },
  ocaml: { name: "OCaml", color: "#3be133" },
  commonlisp: { name: "CommonLisp", color: "#3fb68b" },
  d: { name: "D", color: "#ba595e" },
  scheme: { name: "Scheme", color: "#1e4aec" },
  racket: { name: "Racket", color: "#22228f" },
  ada: { name: "Ada", color: "#02f88c" },
  fortran: { name: "Fortran", color: "#4d41b1" },
  assembly: { name: "Assembly", color: "#6E4C13" },
  cobol: { name: "COBOL", color: "#9afff0" },
  crystal: { name: "Crystal", color: "#000100" },
  nim: { name: "Nim", color: "#ffc200" },
  pascal: { name: "Pascal", color: "#E3F171" },
  vhdl: { name: "VHDL", color: "#adb2cb" },
  verilog: { name: "Verilog", color: "#b2b7f8" },
  prolog: { name: "Prolog", color: "#74283c" },
  haxe: { name: "Haxe", color: "#df7900" },
  purescript: { name: "PureScript", color: "#1D222D" },
  forth: { name: "Forth", color: "#341708" },
  openscad: { name: "OpenSCAD", color: "#e5cd45" },
  glsl: { name: "GLSL", color: "#5686a5" },
  qml: { name: "QML", color: "#44a51c" },
  solidity: { name: "Solidity", color: "#AA6746" },
  tcl: { name: "Tcl", color: "#e4cc98" },
  eiffel: { name: "Eiffel", color: "#946d57" },
  smalltalk: { name: "Smalltalk", color: "#596706" },
  vala: { name: "Vala", color: "#fbe5cd" },
  nix: { name: "Nix", color: "#7e7eff" },
  zig: { name: "Zig", color: "#ec915c" },
  pony: { name: "Pony", color: "#cfa76e" },
  idris: { name: "Idris", color: "#b30000" },
  agda: { name: "Agda", color: "#315665" },
  coq: { name: "Coq", color: "#d0b68c" },
  lean: { name: "Lean", color: "#e5b62f" },
  isabelle: { name: "Isabelle", color: "#fe0a0a" },
  mercury: { name: "Mercury", color: "#ff2b2b" },
  turing: { name: "Turing", color: "#cf142b" },
  actionscript: { name: "ActionScript", color: "#882B0F" },
  asp: { name: "ASP", color: "#6a40fd" },
  coldfusion: { name: "ColdFusion", color: "#ed2cd6" },
  euphoria: { name: "Euphoria", color: "#ff7900" },
  harbour: { name: "Harbour", color: "#0e60e3" },
  j: { name: "J", color: "#9EEDFF" },
  krl: { name: "KRL", color: "#28431f" },
  logtalk: { name: "Logtalk", color: "#295b9a" },
  mlir: { name: "MLIR", color: "#5EC8DB" },
  modula2: { name: "Modula2", color: "#10253f" },
  pike: { name: "Pike", color: "#005390" },
  plsql: { name: "PLSQL", color: "#dad8d8" },
  rpg: { name: "RPG", color: "#2BDE21" },
  supercollider: { name: "SuperCollider", color: "#46390b" },
  tla: { name: "TLA", color: "#4b0079" },
  x10: { name: "X10", color: "#4B6BEF" },
  xtend: { name: "Xtend", color: "#24255d" },
  yacc: { name: "Yacc", color: "#4B6C4B" },
  zephir: { name: "Zephir", color: "#118f9e" },
  zimpl: { name: "Zimpl", color: "#d67711" },
};

/**
 * Get all programming languages name and their HEX color.
 *
 * @returns {Array} Array of objects containing name and HEX color of programming languages.
 */
function getAllLanguagesColors() {
  return Object.values(languageColors);
}

/**
 * @typedef { "javascript" | "typescript" | "python" | "java" | "c++" | "ruby" | "php" | "c#" | "go" | "swift" | "kotlin" | "rust" | "dart" | "scala" | "shell" | "objectivec" | "perl" | "haskell" | "lua" | "r" | "elixir" | "clojure" | "erlang" | "html" | "css" | "vue" | "svelte" | "react" | "angular" | "sass" | "less" | "stylus" | "coffeescript" | "tex" | "vimscript" | "emacslisp" | "makefile" | "dockerfile" | "powershell" | "matlab" | "groovy" | "puppet" | "julia" | "f#" | "ocaml" | "commonlisp" | "d" | "scheme" | "racket" | "ada" | "fortran" | "assembly" | "cobol" | "crystal" | "nim" | "pascal" | "vhdl" | "verilog" | "prolog" | "haxe" | "purescript" | "forth" | "openscad" | "glsl" | "qml" | "solidity" | "tcl" | "eiffel" | "smalltalk" | "vala" | "nix" | "zig" | "pony" | "idris" | "agda" | "coq" | "lean" | "isabelle" | "mercury" | "turing" | "actionscript" | "asp" | "coldfusion" | "euphoria" | "harbour" | "j" | "krl" | "logtalk" | "mlir" | "modula2" | "pike" | "plsql" | "rpg" | "supercollider" | "tla" | "x10" | "xtend" | "yacc" | "zephir" | "zimpl" } Language
 */

/**
 * Get a name and a HEX color of a programming language.
 *
 * @param {Language} language - The programming language.
 * @returns {{ name: string, color: string }} Object containing name and HEX color of the programming language.
 */
function getLanguageColor(programmingLanguageName) {
  const language = programmingLanguageName.toLowerCase();
  return languageColors[language] || { name: "Not Found", color: "#CCCCCC" };
}

module.exports = { getAllLanguagesColors, getLanguageColor };
