import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

class LoginSteps {
	@Given("El usuario navega a la pagina web del login")
	def navigateToLoginPage() {
		WebUI.openBrowser('https://www.saucedemo.com/')
		WebUI.takeScreenshot()
	}
	@When("Se ingresa el usuario y la contraseña para el escenario (.*)")
	def EnterCredentials(scenario) {
		def intScenario = scenario as Integer
		WebUI.setText(findTestObject('User'), findTestData('Login').getValue(1, intScenario))
		WebUI.setEncryptedText(findTestObject('Pass'), findTestData('Login').getValue(2, intScenario))
		WebUI.takeScreenshot()
	}
	@When("Se ingresa el usuario (.*) y la contraseña (.*)")
	def EnterCredentialsI(username,password) {
		WebUI.setText(findTestObject('User'), username)
		WebUI.setEncryptedText(findTestObject('Pass'), password)
		WebUI.takeScreenshot()
	}
	@And("Y hace clic en el botón login")
	def clicLogin() {
		WebUI.click(findTestObject('LoginButton'))
		WebUI.takeScreenshot()
	}
	@Then("El sistema muestra la pagina")
	def VerifyLoginExitoso() {
		WebUI.verifyTextPresent('Products', false)
		WebUI.takeScreenshot()
	}
	@Then("El sistema muestra el mensaje Epic sadface: Sorry, this user has been locked out.")
	def VerifyLoginFallido() {
		WebUI.verifyElementPresent(findTestObject('Mensaje'), 0)
		WebUI.takeFullPageScreenshot()
	}
}