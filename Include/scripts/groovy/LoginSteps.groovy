import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import cucumber.api.java.AfterStep
import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

class LoginSteps {
	@AfterStep
	public void afterStep(){

	}
	@Given("El usuario navega a la pagina web del login")
	def navigateToLoginPage() {
		println("Estoy navegando en la pagina")
		WebUI.openBrowser('https://www.saucedemo.com/')
		WebUI.takeScreenshot()
	}
	@When("Se ingresa el usuario y la contraseña para el escenario (.*)")
	def EnterCredentials(scenario) {
		def intScenario = scenario as Integer
		println("Se ingresa el usuario y contraseña del escenario: "+intScenario)
		WebUI.setText(findTestObject('User'), findTestData('Login').getValue('Usuario', intScenario))
		WebUI.setEncryptedText(findTestObject('Pass'), findTestData('Login').getValue(2, intScenario))
		WebUI.takeScreenshot()
	}
	@When("Se ingresa el usuario (.*) y la contraseña (.*)")
	def EnterCredentialsI(username,password) {
		println("El usuario ingresa el usuario y contraseña")
		WebUI.setText(findTestObject('User'), username)
		WebUI.setEncryptedText(findTestObject('Pass'), password)
		WebUI.takeScreenshot()
	}
	@And("Y hace clic en el botón login")
	def clicLogin() {
		println("El usuario hace clic en el botón")
		WebUI.click(findTestObject('LoginButton'))
		WebUI.takeScreenshot()
	}
	@Then("El sistema muestra la pagina")
	def VerifyLoginExitoso() {
		println("El usuario ingreso")
		WebUI.verifyTextPresent('Products', false)
		WebUI.takeScreenshot()
	}
	@Then("El sistema muestra el mensaje Epic sadface: Sorry, this user has been locked out.")
	def VerifyLoginFallido() {
		println("El usuario no ingreso")
		WebUI.verifyElementPresent(findTestObject('Mensaje'), 0)
		WebUI.takeFullPageScreenshot()
	}
}