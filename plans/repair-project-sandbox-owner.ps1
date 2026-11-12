$ErrorActionPreference = 'Stop'
$projectRoot = 'D:\Project\GTM Research'
$gitDirectory = Join-Path $projectRoot '.git'
$outputDirectory = Join-Path $projectRoot 'plans'
$resultPath = Join-Path $outputDirectory 'sandbox-owner-repair-result.json'
$backupPath = Join-Path $outputDirectory 'sandbox-owner-before.json'
$expectedOwner = 'ROKERZSA\arifa'

try {
    $target = Get-Item -LiteralPath $gitDirectory -Force
    if (-not $target.PSIsContainer -or
        ($target.Attributes -band [IO.FileAttributes]::ReparsePoint) -or
        $target.FullName -ne $gitDirectory) {
        throw 'Target must be the exact project .git directory, not a link.'
    }
    $before = Get-Acl -LiteralPath $gitDirectory
    $accessSection = [Security.AccessControl.AccessControlSections]::Access
    $beforeAccess = $before.GetSecurityDescriptorSddlForm($accessSection)
    if (-not (Test-Path -LiteralPath $backupPath)) {
        [pscustomobject]@{
            Path = $gitDirectory
            Owner = $before.Owner
            Sddl = $before.Sddl
            SavedAt = (Get-Date).ToString('o')
        } | ConvertTo-Json | Set-Content -LiteralPath $backupPath -Encoding UTF8
    }
    # Change only this directory's owner. Do not recurse, reset ACLs, or grant rights.
    $repairOutput = & "$env:SystemRoot\System32\icacls.exe" $gitDirectory /setowner $expectedOwner 2>&1
    if ($LASTEXITCODE -ne 0) { throw ($repairOutput -join [Environment]::NewLine) }
    $after = Get-Acl -LiteralPath $gitDirectory
    if ($after.Owner -ne $expectedOwner) { throw "Unexpected owner: $($after.Owner)" }
    if ($after.GetSecurityDescriptorSddlForm($accessSection) -ne $beforeAccess) {
        throw 'Owner repair completed but access rules changed; investigate before continuing.'
    }
    [pscustomobject]@{
        Success = $true
        Path = $gitDirectory
        PreviousOwner = $before.Owner
        Owner = $after.Owner
        AccessRulesPreserved = $true
        Recursive = $false
    } | ConvertTo-Json | Set-Content -LiteralPath $resultPath -Encoding UTF8
    exit 0
} catch {
    [pscustomobject]@{Success=$false; Error=$_.Exception.Message} |
        ConvertTo-Json | Set-Content -LiteralPath $resultPath -Encoding UTF8
    exit 1
}
