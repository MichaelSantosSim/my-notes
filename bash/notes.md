# Terminal notes
Notes about terminal commands

## Map wacom tablet to one monitor
[Askubuntu - How to map wacom correctly to monitor](https://askubuntu.com/questions/270156/how-to-map-wacom-correctly-to-monitor)

[WACOM INTUOS AND XSETWACOM ON UBUNTU 18.04](https://joshuawoehlke.com/wacom-intuos-and-xsetwacom-on-ubuntu-18-04/)

## changing proxies
[Changing proxies for multiple tools](https://www.jhipster.tech/configuring-a-corporate-proxy/)

## tail process output on ubuntu
```bash
tail -f /proc/${procId}/fd/0 #INPUT
tail -f /proc/${procId}/fd/1 #OUTPUT
```


## force alt+tab for current workspace only

```bash
gsettings set org.gnome.shell.app-switcher current-workspace-only true
```

## same workspace for all monitors

```bash
gsettings set org.gnome.mutter workspaces-only-on-primary false
```

## generating sequences

```bash
$ seq 1 10                              # create a sequence from 1 to 10 with line breaks
$ seq -f"file_%g.txt" 1 5               # replace the %g with incremental numbers
$ seq -w 1 10                           # equalizes width by padding with preleading 0

$echo {1..10}                           #print sequence without line break
$ printf -f"%.02d" {1..5}               #prints a sequence with a leading 0 without line breaks

```

## open explorer

```bash
$ start [path]                          # windows (git bash)
$ open [path]                           # macos
$ xdg-open [path]                       # ubuntu
```

## Converting Western (ISO 8859-1) to utf-8 in mac

```bash
#usage convertEncoding [fileName]
function convertEncoding(){
    tempFile="$1.tmp"
    iconv -f MACROMAN -t UTF-8 $1 > $tempFile
    rm $1
    mv $tempFile $1
    file -I $1
}
```
## Clipping from terminal to clipboard

```bash
# Windows
echo 'hello' | clip
# Ubuntu
echo 'hello' | xclip -sel clip
# macos
echo 'hello' | pbcopy
```

## importing aliases from another file

```bash
#add it to your .bashrc or .profile files
. ~/.aliases
```


## styling your bash

Detailed description at [bash prompt variables - Linux - SS64.com](https://ss64.com/bash/syntax-prompt.html)

```bash
#add it to your .bashrc or .profile files
PS1='\n\[\033[0;32m\][default] \w\[\033[0;37m\]\n $ '

```

## exporting git branch to a zip file

``` bash
function git-export(){
    branchname=$(git rev-parse --abbrev-ref HEAD)
    command="git archive $branchname | gzip > '$1/$branchname.tgz'"
    eval $command
}
```

## opening context menu in react native

``` bash
adb shell input keyevent 82
```

## android emulator run device

``` bash
$ANDROID_HOME/Sdk/tools/emulator -avd DEVICE_NAME
```

## android emulator, view devices

``` bash
$ANDROID_HOME/tools/bin/avdmanager list avd
```

## Get yarn self signed certificate chain error

``` bash
yarn config set "strict-ssl" false
```

## View ssl certificate

``` bash
openssl x509 -in certificate.crt -text -noout
```
