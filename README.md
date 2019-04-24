# Generate Multiple Passwords

## Install
Clone repository to your local machine.

## Use
Open `generate-multiple-passwords.html` in your favorite web browser.

Once the page loads, fill out the form, then select `Generate Password(s)`.

The list group output enables you to select multiple passwords at once and will order them one-per-line in your clipboard if you copy them that way. The list group output functions similarly to raw text output, but with nicer visual formatting.

## Todo
`Limit Special Characters` output needs at least one of `!`, `#`, `*`, `-`, `_` characters to properly mimick PowerShell script this was based on.

### Beyond MVP
It would be nice to improve configurability of password complexity and required characters. The `Limit Special Characters` switch which exists right now could become a "profile" in a future revision to enable quick access to it without limiting scope of this tool.

### Packaging
Need to select and integrate into workflow a minimizer/packager which compiles the code into a single HTML file so users can download just that file and run it as simply as they would a `.exe`.

## Context
What is this and why does it exist?

There was a GUI PowerShell script being used for this originally, and the GUI system caused problems with inserting characters into output. I offered to and followed-through on creating an HTML + JavaScript alternative. The first, most immediate goal of this project is to exactly replicate the functionality of that PowerShell script. Once that is done, the project can be expanded to provide for a more general purpose use-case.

### Why not Node.JS?
My immediate goal is to ensure the application is seamlessly portable, without regard for Active Directory/MDM/etc limitations. As most possible users have access to a web browser (even if web access is disabled), this provides a more universal solution for now.
