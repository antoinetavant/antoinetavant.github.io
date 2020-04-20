+++
title = "Debuging Fortran"
date = "2020-04-19"
author = ""
cover = "images/blog/fortran-gdb.png"
description = "Personal note on the use of gdb and such with fortran"
+++

The typical Fortran learning experience is you have to use and develop a old scientifica code for your master/Ph.D/Post-doc.
There is no time to learn both the language, the code, the science behind, as well as the tool used to test, debug and document the code. 
So it usually goes by `print *,"here"` and `print *,there`...

# Debuging option

The first step is to use debugging options.
With `gfortran` (the GNU compiler), I use
```make
-O0 -g -fbacktrace -ffpe-trap=invalid,zero,overflow -ffree-line-length-none  -Wcharacter-truncation  -Wsurprising  -Waliasing   -Wunused-parameter  -fwhole-file  -fcheck=bounds,do
```

While with intel fortran,
```make
-g -O0 -traceback" -debug -check -CB  -fpe0"
```

# Using GDB
The GNU project debugger (GDB) allows to pause the execution of the code at the moment you want, execute the code step by step, investigate the varables, and much more.
To use it, you only need to compile the code with (at least) `-g`.

Then, several methodes can be used: you can launch le code with `gdb`, or attached it to a running code, or use the tools provided by your IDE.

## with atom
I am currently using atom as my "enhenced" text  editor. 
The package [dbg][48cdb75d] along with [dbg-gdb][53b405f1] can be used to launch the code from atom.
There are easy to use, but currently lack the possibility (or I could find a way) to execute gdb commands.

  [48cdb75d]: https://atom.io/packages/dbg "atom debugger front end"
  [53b405f1]: https://atom.io/packages/dbg-gdb "An interative gdb for atom"
  
## With `gdbgui`

[GDBGUI](https://www.gdbgui.com/) is a graphical user interface for gdb. We can install it with `pipx`, or `pip` is use already use virtual envirenments.
Once intalled, you can launch the debugger from the workingdirectory with 
```bash
gdbgui "./<executalble> <args>"
```
