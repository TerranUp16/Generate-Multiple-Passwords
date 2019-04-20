<# This form was created using POSHGUI.com  a free online gui designer for PowerShell
.NAME
    ComplexPasswordGen
#>

Add-Type -AssemblyName System.Windows.Forms
[System.Windows.Forms.Application]::EnableVisualStyles()

#Write your logic code here
$ascii=$NULL;For ($a=48;$a -le 122;$a++) {$ascii+=,[char][byte]$a }


Function GET-Temppassword() {
	Param(
	[int]$length=10,
	[string[]]$sourcedata
	)
	For ($loop=1; $loop -le $length; $loop++) {
        $TempPassword+=($sourcedata | GET-RANDOM)
    }
	write-host $TempPassword#+"`r`n"
}

Function GET-TempPasswordLimited() {
	Param(
	[int]$length=10
	)
	DO 
	{
	$tempPasswordLimited = -join ((48..57) + (65..90) + (97..122) + 33 + 35 + 42 + 45 + 95| Get-Random -Count $length |foreach-Object {[char]$_}) 
	}	While ($tempPasswordlimited -notmatch '(!|#|\*|-|_)')
	
	return $TempPasswordLimited+"`r`n"
}


$ComplexPasswordGen              = New-Object system.Windows.Forms.Form
$ComplexPasswordGen.ClientSize   = '466,400'
$ComplexPasswordGen.text         = "Complex Password Generator"
$ComplexPasswordGen.TopMost      = $false

$Label1                          = New-Object system.Windows.Forms.Label
$Label1.text                     = "How many passwords to generate?"
$Label1.AutoSize                 = $true
$Label1.width                    = 25
$Label1.height                   = 10
$Label1.location                 = New-Object System.Drawing.Point(11,21)
$Label1.Font                     = 'Microsoft Sans Serif,10,style=Bold'

$Label2                          = New-Object system.Windows.Forms.Label
$Label2.text                     = "How long should each password be?"
$Label2.AutoSize                 = $true
$Label2.width                    = 25
$Label2.height                   = 10
$Label2.location                 = New-Object System.Drawing.Point(11,52)
$Label2.Font                     = 'Microsoft Sans Serif,10,style=Bold'

$TextBox1                        = New-Object system.Windows.Forms.TextBox
$TextBox1.multiline              = $false
$TextBox1.width                  = 100
$TextBox1.height                 = 20
$TextBox1.location               = New-Object System.Drawing.Point(284,21)
$TextBox1.Font                   = 'Microsoft Sans Serif,10'

$TextBox2                        = New-Object system.Windows.Forms.TextBox
$TextBox2.multiline              = $false
$TextBox2.width                  = 100
$TextBox2.height                 = 20
$TextBox2.location               = New-Object System.Drawing.Point(284,50)
$TextBox2.Font                   = 'Microsoft Sans Serif,10'

$Button1                         = New-Object system.Windows.Forms.Button
$Button1.BackColor               = "#0582be"
$Button1.text                    = "Generate Password(s)"
$Button1.width                   = 172
$Button1.height                  = 27
$Button1.location                = New-Object System.Drawing.Point(18,102)
$Button1.Font                    = 'Microsoft Sans Serif,10'
$Button1.ForeColor               = "#ffffff"

$TextBox3                        = New-Object system.Windows.Forms.TextBox
$TextBox3.multiline              = $true
$TextBox3.width                  = 428
$TextBox3.height                 = 185
$TextBox3.location               = New-Object System.Drawing.Point(17,167)
$TextBox3.Font                   = 'Microsoft Sans Serif,10'

$Label3                          = New-Object system.Windows.Forms.Label
$Label3.text                     = "Results"
$Label3.AutoSize                 = $true
$Label3.width                    = 25
$Label3.height                   = 10
$Label3.location                 = New-Object System.Drawing.Point(17,143)
$Label3.Font                     = 'Microsoft Sans Serif,10,style=Bold'

$CheckBox1                       = New-Object system.Windows.Forms.CheckBox
$CheckBox1.text                  = "Limit Special Characters"
$CheckBox1.AutoSize              = $false
$CheckBox1.width                 = 333
$CheckBox1.height                = 23
$CheckBox1.location              = New-Object System.Drawing.Point(11,79)
$CheckBox1.Font                  = 'Microsoft Sans Serif,10,style=Bold'

$ComplexPasswordGen.controls.AddRange(@($Label1,$Label2,$TextBox1,$TextBox2,$CheckBox1,$Button1,$TextBox3,$Label3,$Label4))

$Button1.Add_Click(
	{ $textbox3.text = For($i=0;$i -lt $textbox1.text; $i++)
		{If ($Checkbox1.checked)
			{Get-TempPasswordLimited -length $textbox2.text}  
			Else 
			{Get-TempPassword -length $textbox2.text -sourcedata $ascii}
		}
	}
	)



[void]$ComplexPasswordGen.ShowDialog()