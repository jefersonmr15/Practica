import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

class LoginSteps {
	@Given("El usuario navega a la pagina web del login")
	def navigateToLoginPage() {
		println("Estoy navegando en la pagina")
		WebUI.openBrowser('https://www.saucedemo.com/')
	}
	@When("Se ingresa el usuario (.*) y la contraseña (.*)")
	def EnterCredentials(username,password) {
		println("El usuario ingresa el usuario y contraseña")
		WebUI.setText(findTestObject('User'), username)
		WebUI.setEncryptedText(findTestObject('Pass'), password)
	}
	@And("Y hace clic en el botón login")
	def clicLogin() {
		println("El usuario hace clic en el botón")
		WebUI.click(findTestObject('LoginButton'))
	}
	@Then("El sistema muestra la pagina donde aparece el titulo (.*)")
	def VerifyLogin(titulo) {
		println("El usuario ingreso")
		WebUI.verifyElementNotPresent(findTestObject('Mensaje'), 0)
	}
}