import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from "../../utils/constants";
import { stringGenerator } from "../../utils/mocks";
import {
  EMAIL_IS_NOT_VALID_MSG,
  EMAIL_REQUIRED_MSG,
  LOGIN_FORM_VALIDATION_SCHEMA,
  PASSWORD_COMPLEXITY_MSG,
  PASSWORD_MAX_LENGTH_MSG,
  PASSWORD_MIN_LENGTH_MSG,
  PASSWORD_REQUIRED_MSG,
} from "./loginForm.constants";

describe(`Validation Schema`, () => {
  it(`should pass validation with valid email and password`, async () => {
    const MOCK_DATA = { email: `test@test.com`, password: `Test@123` };

    const result = await LOGIN_FORM_VALIDATION_SCHEMA.isValid(MOCK_DATA);
    expect(result).toBe(true);
    expect.hasAssertions();
  });

  it(`should fail validation with missing email`, async () => {
    const MOCK_DATA = { password: `Test@123` };

    try {
      await LOGIN_FORM_VALIDATION_SCHEMA.validate(MOCK_DATA);
      // If the validation passes, it should not reach this point.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(EMAIL_REQUIRED_MSG);
    }
    expect.hasAssertions();
  });

  it(`should fail validation with missing password`, async () => {
    const MOCK_DATA = { email: `test@test.com` };

    try {
      await LOGIN_FORM_VALIDATION_SCHEMA.validate(MOCK_DATA);
      // If the validation passes, it should not reach this point.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(PASSWORD_REQUIRED_MSG);
    }
    expect.hasAssertions();
  });

  it(`should fail validation with incorrect email`, async () => {
    const MOCK_DATA = { email: `wrong email`, password: `Test@123` };

    try {
      await LOGIN_FORM_VALIDATION_SCHEMA.validate(MOCK_DATA);
      // If the validation passes, it should not reach this point.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(EMAIL_IS_NOT_VALID_MSG);
    }
    expect.hasAssertions();
  });

  it(`should fail validation when password length is less than required`, async () => {
    const MOCK_DATA = {
      email: `test@test.com`,
      password: stringGenerator(PASSWORD_MIN_LENGTH - 1, `a`),
    };

    try {
      await LOGIN_FORM_VALIDATION_SCHEMA.validate(MOCK_DATA);
      // If the validation passes, it should not reach this point.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(PASSWORD_MIN_LENGTH_MSG);
    }
    expect.hasAssertions();
  });

  it(`should fail validation when password length is more than required`, async () => {
    const MOCK_DATA = {
      email: `test@test.com`,
      password: stringGenerator(PASSWORD_MAX_LENGTH + 1, `a`),
    };

    try {
      await LOGIN_FORM_VALIDATION_SCHEMA.validate(MOCK_DATA);
      // If the validation passes, it should not reach this point.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(PASSWORD_MAX_LENGTH_MSG);
    }
    expect.hasAssertions();
  });

  it(`should fail validation with incorrect password complexity`, async () => {
    const MOCK_DATA = {
      email: `test@test.com`,
      password: `noncomplexpassword`,
    };

    try {
      await LOGIN_FORM_VALIDATION_SCHEMA.validate(MOCK_DATA);
      // If the validation passes, it should not reach this point.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(PASSWORD_COMPLEXITY_MSG);
    }
    expect.hasAssertions();
  });
});
