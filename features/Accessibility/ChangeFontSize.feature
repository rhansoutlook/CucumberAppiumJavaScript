Feature: Change Font Size

  Scenario: Set Font Size to Default
    Given that I am on Font Size option
    When I click the default option
    Then The font size should be set to default
  
  Scenario: Set Font Size to Small
    Given that I am on Font Size option
    When I click the small option
    Then The font size should be set to small
