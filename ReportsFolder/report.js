$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  El usuario ingresa sus credenciales para hacer login",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login \u003cstatus\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "El usuario navega a la pagina web del login",
  "keyword": "Given "
});
formatter.step({
  "name": "Se ingresa el usuario \u003cusername\u003e y la contraseña \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Y hace clic en el botón login",
  "keyword": "And "
});
formatter.step({
  "name": "El sistema muestra la pagina donde aparece el titulo \u003ctitulo\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "titulo",
        "status"
      ]
    },
    {
      "cells": [
        "standard_user",
        "qcu24s4901FyWDTwXGr6XA\u003d\u003d",
        "Swag Labs",
        "Exitoso"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "qcu24s4901FyWDTwXGr6XA\u003d\u003d",
        "Swag Labs",
        "Fallido"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Exitoso",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "El usuario navega a la pagina web del login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.navigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Se ingresa el usuario standard_user y la contraseña qcu24s4901FyWDTwXGr6XA\u003d\u003d",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.EnterCredentials(Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Y hace clic en el botón login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clicLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El sistema muestra la pagina donde aparece el titulo Swag Labs",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.VerifyLogin(Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Fallido",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "El usuario navega a la pagina web del login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.navigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Se ingresa el usuario locked_out_user y la contraseña qcu24s4901FyWDTwXGr6XA\u003d\u003d",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.EnterCredentials(Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Y hace clic en el botón login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clicLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El sistema muestra la pagina donde aparece el titulo Swag Labs",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.VerifyLogin(Object)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to verify object \u0027Object Repository/Mensaje\u0027 is not present\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementNotPresentKeyword.verifyElementNotPresent(VerifyElementNotPresentKeyword.groovy:122)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementNotPresentKeyword.execute(VerifyElementNotPresentKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementNotPresent(WebUiBuiltInKeywords.groovy:1497)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementNotPresent$3.call(Unknown Source)\r\n\tat LoginSteps.VerifyLogin(LoginSteps.groovy:30)\r\n\tat ✽.El sistema muestra la pagina donde aparece el titulo Swag Labs(Include/features/Login.feature:12)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Web element with id: \u0027Object Repository/Mensaje\u0027 located by \u0027By.xpath: //h3[contains(text(),\u0027Epic sadface: Sorry, this user has been locked out.\u0027)]\u0027 is present after \u002730\u0027 second(s)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain$stepFailed$0.call(Unknown Source)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementNotPresentKeyword$_verifyElementNotPresent_closure1.doCall(VerifyElementNotPresentKeyword.groovy:113)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementNotPresentKeyword$_verifyElementNotPresent_closure1.doCall(VerifyElementNotPresentKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementNotPresentKeyword.verifyElementNotPresent(VerifyElementNotPresentKeyword.groovy:122)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementNotPresentKeyword.execute(VerifyElementNotPresentKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementNotPresent(WebUiBuiltInKeywords.groovy:1497)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementNotPresent$3.call(Unknown Source)\r\n\tat LoginSteps.VerifyLogin(LoginSteps.groovy:30)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat Login.run(Login:22)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1688860464320.run(TempTestCase1688860464320.groovy:25)\r\n",
  "status": "failed"
});
});