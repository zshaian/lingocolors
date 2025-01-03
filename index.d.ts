type ProgrammingLanguagesNames = 
  | "JavaScript" 
  | "TypeScript"
  | "Python"
  | "Java"
  | "C++"
  | "Ruby"
  | "PHP"
  | "C#"
  | "Go"
  | "Swift"
  | "Kotlin"
  | "Rust"
  | "Dart"
  | "Scala"
  | "Shell"
  | "ObjectiveC"
  | "Perl"
  | "Haskell"
  | "Lua"
  | "R"
  | "Elixir"
  | "Clojure"
  | "Erlang"
  | "HTML"
  | "CSS"
  | "Vue"
  | "Svelte"
  | "React"
  | "Angular"
  | "Sass"
  | "Less"
  | "Stylus"
  | "CoffeeScript"
  | "TeX"
  | "VimScript"
  | "EmacsLisp"
  | "Makefile"
  | "Dockerfile"
  | "PowerShell"
  | "MATLAB"
  | "Groovy"
  | "Puppet"
  | "Julia"
  | "F#"
  | "OCaml"
  | "CommonLisp"
  | "D"
  | "Scheme"
  | "Racket"
  | "Ada"
  | "Fortran"
  | "Assembly"
  | "COBOL"
  | "Crystal"
  | "Nim"
  | "Pascal"
  | "VHDL"
  | "Verilog"
  | "Prolog"
  | "Haxe"
  | "PureScript"
  | "Forth"
  | "OpenSCAD"
  | "GLSL"
  | "QML"
  | "Solidity"
  | "Tcl"
  | "Eiffel"
  | "Smalltalk"
  | "Vala"
  | "Nix"
  | "Zig"
  | "Pony"
  | "Idris"
  | "Agda"
  | "Coq"
  | "Lean"
  | "Isabelle"
  | "Mercury"
  | "Turing"
  | "ActionScript"
  | "ASP"
  | "ColdFusion"
  | "Euphoria"
  | "Harbour"
  | "J"
  | "KRL"
  | "Logtalk"
  | "MLIR"
  | "Modula2"
  | "Pike"
  | "PLSQL"
  | "RPG"
  | "SuperCollider"
  | "TLA"
  | "X10"
  | "Xtend"
  | "Yacc"
  | "Zephir"
  | "Zimpl";

interface LanguageColor {
  name: ProgrammingLanguagesNames | "Not Found";
  color: string;
}

/**
 * Get all programming languages name and their HEX color.
 * @returns {Array} Array of objects containing name and HEX color of programming languages.
 */
declare function getAllLanguagesColors(): LanguageColor[];

/**
 * Get a name and a HEX color of programming language.
 * 
 * @returns {Object} object containing name and HEX color of programming language.
 */
declare function getLanguageColor(programmingLanguageName: ProgrammingLanguagesNames): LanguageColor;