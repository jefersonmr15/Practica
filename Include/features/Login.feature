#Author: jeferson Miguel Rodriguez Quiroga

@tag
Feature: Login
  El usuario ingresa sus credenciales para hacer login

  @tag1
  Scenario Outline: Login <status>
    Given El usuario navega a la pagina web del login
    When Se ingresa el usuario <username> y la contraseña <password>
    And Y hace clic en el botón login
    Then El sistema muestra la pagina donde aparece el titulo <titulo>

    Examples: 
      | username					| password								| titulo		| status	|
      | standard_user			| qcu24s4901FyWDTwXGr6XA==| Swag Labs	|	Exitoso |
      | locked_out_user		| qcu24s4901FyWDTwXGr6XA==| Swag Labs	|	Fallido |