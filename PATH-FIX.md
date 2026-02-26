# Fix Node.js not found in terminal

Node is installed at **C:\Program Files\nodejs** but your terminal doesn't see it because that folder isn't in your **PATH**.

## Option 1: Use the run script (quick)

From this folder in PowerShell:

```powershell
.\run-dev.ps1
```

Or in Cursor: open the terminal, `cd` to this project, then run the same command.

## Option 2: Fix PATH permanently (recommended)

1. Press **Win + R**, type `sysdm.cpl`, Enter.
2. Go to **Advanced** tab → **Environment Variables**.
3. Under **User variables** (or **System variables**), select **Path** → **Edit**.
4. Click **New** and add: `C:\Program Files\nodejs`
5. Click **OK** on all dialogs.
6. **Close Cursor completely and reopen it** (or open a new PowerShell window).

Then in the project folder:

```powershell
npm install
npm run dev
```

## Option 3: One-time in this terminal

In PowerShell, run once per terminal session:

```powershell
$env:Path = "C:\Program Files\nodejs;" + $env:Path
```

Then `npm install` and `npm run dev` will work in that window.
