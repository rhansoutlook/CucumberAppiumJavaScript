Feature: Select a List Preference

  Scenario: Select Alpha option 01
    Given that I am in the List Preference option
    When I select Alpha option 01
    Then Alpha option 01 should become default option

  
  Scenario: Select Beta option 02
    Given that I am in the List Preference option
    When I select Beta option 02
    Then Beta option 02 should become default option

  
  Scenario: Select Charlie option 03
    Given that I am in the List Preference option
    When I select Charlie option 03
    Then Charlie option 03 should become default option
