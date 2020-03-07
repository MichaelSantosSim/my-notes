#add common aliases
. ~/.aliases

# exclusive default alias
export CURRENT_PROFILE="default"

source "$HOME/.sdkman/bin/sdkman-init.sh"

#set color and text
PS1='\n\[\033[0;32m\][default] \w\[\033[0;37m\]\n $ '
