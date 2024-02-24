SKIPMOUNT=false
PROPFILE=false
POSTFSDATA=false
LATESTARTSERVICE=false

print_modname() {
    ui_print "============================================"
    ui_print "                 Code Server                "
    ui_print "--------------------------------------------"
    ui_print "           VS Code in the browser           "
    ui_print "--------------------------------------------"
    ui_print "         Googlers-Repo/code-server          "
    ui_print "============================================"
}

BASE=$MODPATH/system/usr/share/code-server

on_install() {
    ui_print "- Extracting module files"
    unzip -qq -o "$ZIPFILE" 'system/*' -d $MODPATH >&2

    [ -d "$MODPATH/system/bin/" ] || mkdir -p "$MODPATH/system/bin/"
}

set_permissions() {
    # The following is the default rule, DO NOT remove
    set_perm_recursive $MODPATH 0 0 0755 0644
    set_perm "$BASE/bin/code-server" 0 0 0755 0644
}
