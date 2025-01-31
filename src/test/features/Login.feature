Feature: login

  Scenario: Verify page header
    And login to the erp site
    Given I enter the server name "MASTERCONTROL"
    When I enter the user name "MasterCtrl"
    And I enter the password "QC@123"
    And I click the submit button
    Given Verify page header "HRMS" should be visible
