$ErrorActionPreference = 'Stop'

$repositoryRoot = Split-Path -Parent $PSScriptRoot
$sourcePath = Join-Path $repositoryRoot 'index.html'
$targetPath = Join-Path $repositoryRoot 'bi-team\index.html'

$html = [System.IO.File]::ReadAllText($sourcePath)

$replacements = [ordered]@{
  '<title>KPI BOARD - Business Intelligence Team</title>' = '<title>Dedicated BI Team Subscription | KPI BOARD</title>'
  'We delivers customized BI solutions with advanced dashboards and automated reports. As a remote, subscription-based BI team, we turn complex data into clear insights, automate reporting, save time, reduce errors, and enable smarter business decisions.' = 'Get a dedicated Business Intelligence team on subscription. Connect every system, automate reporting, and make faster decisions without hiring an internal BI department.'
  '<link href="https://kpiboard.io" rel="canonical"/>' = '<link href="https://kpiboard.io/bi-team/" rel="canonical"/><meta name="robots" content="noindex,nofollow"/>'
  'href="css/' = 'href="/css/'
  'src="js/' = 'src="/js/'
  'src="assets/' = 'src="/assets/'
  'https://www.kpiboard.io/#services' = '#services'
  'https://www.kpiboard.io/#how-it-works' = '#process'
  'https://www.kpiboard.io/#Pricing' = '#Pricing'
  'https://www.kpiboard.io/#Dashboard-examples' = '#Dashboard-examples'
  'https://www.kpiboard.io/#FAQ' = '#FAQ'
  'https://www.kpiboard.io/#calc.com' = '#calc.com'
  'id="how-it-works"' = 'id="process"'
  '<h1>Your dedicated Business<br/>Intelligence Team</h1>' = '<h1>Stop hiring BI specialists.<br/>Get an entire analytics team.</h1>'
  '<h2 class="hero_subtitle">Pause or cancel anytime.' = '<h2 class="hero_subtitle">For less than the cost of one employee. Pause or cancel anytime.'
  '<strong>A full-stack data team at your fingertips. Unlimited requests, rapid delivery, and no hiring headaches.</strong>' = '<strong>Your dedicated BI department on subscription. One priority at a time, rapid delivery, and no hiring overhead.</strong>'
  'We primarily work with <strong>Microsoft Power BI / Fabric</strong>, and we can also adapt to your existing tech stack when needed.' = 'We connect the systems you already use, build one trusted data model, and turn it into decisions your team can act on.'
  'All Your Data in One Dashboard' = 'One Trusted View'
  'Connect CRM, ERP, Finance, Marketing &amp; more' = 'CRM, ERP, finance, sales, marketing &amp; operations'
  'No More Manual Work' = 'Reporting Runs Itself'
  'Fully automated, real-time insights' = 'Automated reporting with reliable refreshes'
  'Custom Dashboards for Your Business' = 'Decisions Arrive Earlier'
  'Actionable KPIs &amp; AI-driven <br/>forecasts' = 'Clear KPIs, alerts &amp; forecasts'
  'BI Without Hiring Costs' = 'A BI Team Without Hiring'
  'A full analytics team at a fraction of the price' = 'Strategy, data engineering &amp; dashboards in one plan'
  'Book a Free Demo Now' = 'Book a Free Analytics Audit'
}

foreach ($entry in $replacements.GetEnumerator()) {
  if (-not $html.Contains($entry.Key)) {
    throw "Expected source text was not found: $($entry.Key)"
  }

  $html = $html.Replace($entry.Key, $entry.Value)
}

$html = [regex]::Replace(
  $html,
  '<link href="\s*css/splide\.min\.css\s*" rel="stylesheet">',
  '<link href="/css/splide.min.css" rel="stylesheet">'
)
$html = [regex]::Replace(
  $html,
  '<h5 class="text-size-medium mx">Stop Making Decisions.*?</h5>',
  '<h5 class="text-size-medium mx">Stop debating numbers. Start running the business from one trusted source.</h5>'
)

[System.IO.File]::WriteAllText(
  $targetPath,
  $html,
  [System.Text.UTF8Encoding]::new($false)
)

Write-Host "Cloned the homepage design to $targetPath"
