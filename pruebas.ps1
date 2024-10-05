if (Test-Path .\allure-report) {
    Remove-Item -Recurse -Force .\allure-report
}

if (Test-Path .\allure-results) {
    Remove-Item -Recurse -Force .\allure-results
}
npx playwright test
npx allure generate ./allure-results --clean
npx allure open ./allure-report