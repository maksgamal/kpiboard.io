# PowerShell script to start local web server
Write-Host "Starting local web server on http://localhost:8080" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
Start-Process "http://localhost:8080"
python -m http.server 8080

