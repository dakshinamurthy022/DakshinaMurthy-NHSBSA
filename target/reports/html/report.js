$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EligibiliyCheck.feature");
formatter.feature({
  "line": 2,
  "name": "Eligibility check for a person from Wales",
  "description": "",
  "id": "eligibility-check-for-a-person-from-wales",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@nhs"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Wales Test Ticket - Acceptance Criteria",
  "description": "",
  "id": "eligibility-check-for-a-person-from-wales;wales-test-ticket---acceptance-criteria",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am a person from Wales",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I entered DOB for \u003cage\u003e years",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should get a result of whether I will get help or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "eligibility-check-for-a-person-from-wales;wales-test-ticket---acceptance-criteria;",
  "rows": [
    {
      "cells": [
        "age"
      ],
      "line": 9,
      "id": "eligibility-check-for-a-person-from-wales;wales-test-ticket---acceptance-criteria;;1"
    },
    {
      "cells": [
        "16"
      ],
      "line": 10,
      "id": "eligibility-check-for-a-person-from-wales;wales-test-ticket---acceptance-criteria;;2"
    },
    {
      "cells": [
        "35"
      ],
      "line": 11,
      "id": "eligibility-check-for-a-person-from-wales;wales-test-ticket---acceptance-criteria;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6212473000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Wales Test Ticket - Acceptance Criteria",
  "description": "",
  "id": "eligibility-check-for-a-person-from-wales;wales-test-ticket---acceptance-criteria;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@nhs"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am a person from Wales",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I entered DOB for 16 years",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should get a result of whether I will get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "EligibilityChecker.i_am_a_person_from_Wales()"
});
formatter.result({
  "duration": 751559300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 18
    }
  ],
  "location": "EligibilityChecker.iEnteredDOBForYears(int)"
});
formatter.result({
  "duration": 1609925400,
  "status": "passed"
});
formatter.match({
  "location": "EligibilityChecker.i_should_get_a_result_of_whether_I_will_get_help_or_not()"
});
formatter.result({
  "duration": 56802400,
  "status": "passed"
});
formatter.after({
  "duration": 893529200,
  "status": "passed"
});
formatter.before({
  "duration": 3616618700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Wales Test Ticket - Acceptance Criteria",
  "description": "",
  "id": "eligibility-check-for-a-person-from-wales;wales-test-ticket---acceptance-criteria;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@nhs"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am a person from Wales",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I entered DOB for 35 years",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should get a result of whether I will get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "EligibilityChecker.i_am_a_person_from_Wales()"
});
formatter.result({
  "duration": 551499200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 18
    }
  ],
  "location": "EligibilityChecker.iEnteredDOBForYears(int)"
});
formatter.result({
  "duration": 3665898500,
  "status": "passed"
});
formatter.match({
  "location": "EligibilityChecker.i_should_get_a_result_of_whether_I_will_get_help_or_not()"
});
formatter.result({
  "duration": 60427800,
  "status": "passed"
});
formatter.after({
  "duration": 986505400,
  "status": "passed"
});
});