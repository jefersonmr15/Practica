import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

CucumberKW.runFeatureFile('Include/features/Login.feature')

not_run: CucumberKW.runWithCucumberRunner(CucumberRunner.class)

WebUI.closeBrowser()
