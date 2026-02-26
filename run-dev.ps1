# Add Node.js to PATH for this session (in case it's not in system PATH)
$nodePath = "C:\Program Files\nodejs"
if (Test-Path $nodePath) {
    $env:Path = "$nodePath;$env:Path"
}

# Run the dev server
npm run dev
