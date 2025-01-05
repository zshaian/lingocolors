declare module "lingocolors" {

  type ProgrammingLanguagesNames =
    | "javascript"
    | "typescript"
    | "python"
    | "java"
    | "c++"
    | "ruby"
    | "php"
    | "c#"
    | "go"
    | "swift"
    | "kotlin"
    | "rust"
    | "dart"
    | "scala"
    | "shell"
    | "objectivec"
    | "perl"
    | "haskell"
    | "lua"
    | "r"
    | "elixir"
    | "clojure"
    | "erlang"
    | "html"
    | "css"
    | "vue"
    | "svelte"
    | "react"
    | "angular"
    | "sass"
    | "less"
    | "stylus"
    | "coffeescript"
    | "tex"
    | "vimscript"
    | "emacslisp"
    | "makefile"
    | "dockerfile"
    | "powershell"
    | "matlab"
    | "groovy"
    | "puppet"
    | "julia"
    | "f#"
    | "ocaml"
    | "commonlisp"
    | "d"
    | "scheme"
    | "racket"
    | "ada"
    | "fortran"
    | "assembly"
    | "cobol"
    | "crystal"
    | "nim"
    | "pascal"
    | "vhdl"
    | "verilog"
    | "prolog"
    | "haxe"
    | "purescript"
    | "forth"
    | "openscad"
    | "glsl"
    | "qml"
    | "solidity"
    | "tcl"
    | "eiffel"
    | "smalltalk"
    | "vala"
    | "nix"
    | "zig"
    | "pony"
    | "idris"
    | "agda"
    | "coq"
    | "lean"
    | "isabelle"
    | "mercury"
    | "turing"
    | "actionscript"
    | "asp"
    | "coldfusion"
    | "euphoria"
    | "harbour"
    | "j"
    | "krl"
    | "logtalk"
    | "mlir"
    | "modula2"
    | "pike"
    | "plsql"
    | "rpg"
    | "supercollider"
    | "tla"
    | "x10"
    | "xtend"
    | "yacc"
    | "zephir"
    | "zimpl";


  interface LanguageColor {
    name: ProgrammingLanguagesNames | "Not Found";
    color: string;
  }

  /**
   * Get all programming languages and their HEX colors.
   * @returns {LanguageColor[]} An array of objects containing the name and HEX color of programming languages.
   */
  export declare function getAllLanguagesColors(): LanguageColor[];

  /**
   * Get the name and HEX color of a programming language.
   *
   * @param {ProgrammingLanguagesNames} programmingLanguageName - The name of the programming language.
   * @returns {LanguageColor} An object containing the name and HEX color of the programming language.
   * If the language is not found, the name will be "Not Found" and color will be #CCCCCC.
   */
  export declare function getLanguageColor(
    programmingLanguageName: ProgrammingLanguagesNames
  ): LanguageColor;
}
