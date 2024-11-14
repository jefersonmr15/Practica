import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

CucumberKW.runFeatureFile('Include/features/Login.feature')

CucumberKW.runWithCucumberRunner(CucumberRunner.class)

WebUI.
WebUI.closeBrowser()
