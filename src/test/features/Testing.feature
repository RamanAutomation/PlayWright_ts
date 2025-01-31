Feature: Testing

@skip
  Scenario: NOC list
    And I navigate through the following path:
      | Screen        | SubScreen |
      | HumanResource | NOCList   |
@skip
  Scenario: DAPointGroup
    And I navigate through the following path:
      | SubScreen    |
      | DAPointGroup |
@skip
  Scenario: InstrumentMaster
    And I click the menu bar
    And I navigate through the following path:
      | Module    | Form   | SubScreen        |
      | Financial | Master | InstrumentMaster |
