#Author: jeferson Miguel Rodriguez Quiroga

@tag
Feature: Autenticación de usuario
  El usuario ingresa sus credenciales para hacer ingreso a la pagina

  @tag1
  Scenario Outline: Ingreso Exitoso
    Given El usuario navega a la pagina web del login
    When Se ingresa el usuario y la contraseña para el escenario <scenario>
    And Y hace clic en el botón login
    Then El sistema muestra la pagina

    Examples: 
      | scenario|
      | 1				|
      | 2				|

  Scenario Outline: Ingreso Fallido
    Given El usuario navega a la pagina web del login
    When Se ingresa el usuario <username> y la contraseña <password>
    And Y hace clic en el botón login
    Then El sistema muestra el mensaje Epic sadface: Sorry, this user has been locked out.

    Examples: 
      | username					| password								|
      | locked_out_user		| qcu24s4901FyWDTwXGr6XA==|