Feature: Validate Demo Screens
  
  Scenario: Validate Custom View
    Given I open the application
    When I tap on Accessibility
    Then I validate Custom View is displayed
  
  Scenario: Validate AudioFx View
    Given I open the application
    When I tap on Media
    And I tap on AudioFx
    Then I validate Media AudioFx view is displayed

