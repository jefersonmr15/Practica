import com.kms.katalon.core.annotation.AfterTestCase
import com.kms.katalon.core.context.TestCaseContext
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

class Cierre {

	@AfterTestCase
	@SuppressWarnings("unused")
	def sampleAfterTestCase(TestCaseContext testCaseContext) {
		WebUI.closeBrowser()
	}
}