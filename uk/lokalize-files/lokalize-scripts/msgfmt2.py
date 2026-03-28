# -*- coding: utf-8 -*-
import os,sys
import Editor
import Project

def doCompile():
    if not Editor.isValid() or Editor.currentFile=='': return
    lang=Project.targetLangCode()

    (path, pofilename)=os.path.split(Editor.currentFile())
    (package, ext)=os.path.splitext(pofilename)
    os.system('msgfmt -o %s/%s.mo %s' %(path, package, Editor.currentFile()))

doCompile()
