# nexiom

Upcoming project


## How to Install

The installation process is similar, but different for different platforms.
So make sure you are following the intructions for:

- [Windows](#Windows).

### Windows

In order to run this project, you need to install these pieces of software:

1. [Git for Windows](https://gitforwindows.org/). After successfully installing git you can search for "git bash", open it and use that as your terminal.
2. In your terminal, run the command `curl https://raw.githubusercontent.com/Kha/elan/master/elan-init.sh -sSf | sh` and hit enter when a question is asked. To make sure everything went smoothly, run `echo 'PATH=$HOME/.elan/bin:$PATH"' >> $HOME/.profile`. Then close and reopen Git Bash.
3. Get [python](https://www.python.org/downloads/). When installing pythong, make sure to check the checkbox at the bottom that says "Add Python 3.10 to PATH". The version "3.10" might have advanced when you read this. You can check this again in Git Bash by typing `python3 --version` or `python --version` as well as `pip3 --version`.
4. Configure Git: run `git config --global core.autocrlf input` in Git Bash. This helps with common issues about line endings across Windows and Linux platforms.
5. Get mathlibtools by executing `pip3 install mathlibtools`. This might take a while.
6. Next you want to get [VS Code](https://code.visualstudio.com/docs/?dv=win).
7. After that, launch VS Code, click the extension icon on the left side bar and search for "leanprover". This should show "lean". Install it by clicking on the button that says "install".
8. In VS Code, hit CTRL+Shift+P and then type "select default shell". This should open up a small window at the top, in which a command pops up to select a default shell. Git Bash should be one of the options, select it.
9. Restart VS Code.
10. In VS Code, open up a folder in which you gather projects like this. Then, open up a terminal (check the top bar under "Terminal") and type `git clone https://github.com/moenarch/nexiom`. This will clone this project.
11. Then, you should see the project being copied into a folder called "nexiom". In VS Code, open the folder and click on the file `welcome.lean`. This should open two additional windows, one for the lean server called "Lean infoview", and one for an html viewer called "Lean Documentation".
12. Now follow what you see in the Lean Documentation window.
