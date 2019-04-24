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
