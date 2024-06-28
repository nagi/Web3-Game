with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "env";
  buildInputs = [
    ./bundix # Use local fork. Must appear above `ruby.devEnv`
    ruby.devEnv # Depends on broken bundix
    ruby.gems.psych
    git
    sqlite
  ];
}
