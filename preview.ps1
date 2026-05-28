$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 4273
$bundledPython = "C:\Users\krisb\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
$pythonCommand = $null

if (Test-Path $bundledPython) {
    $pythonCommand = $bundledPython
} else {
    $pythonCommand = (Get-Command python -ErrorAction Stop).Source
}

Write-Host "Starting eWelcome Kiosk on http://127.0.0.1:$port" -ForegroundColor Cyan
Set-Location $root

& $pythonCommand -m http.server $port --bind 127.0.0.1
