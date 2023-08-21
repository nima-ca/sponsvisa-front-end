import {
  CONFIRM_PASSWORD_MATCH_MSG,
  CONFIRM_PASSWORD_REQUIRED_MSG,
  EMAIL_IS_NOT_VALID_MSG,
  EMAIL_REQUIRED_MSG,
  NAME_REQUIRED_MSG,
  PASSWORD_COMPLEXITY_MSG,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MAX_LENGTH_MSG,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MIN_LENGTH_MSG,
  PASSWORD_REQUIRED_MSG,
} from "../../utils/constants";
import { stringGenerator } from "../../utils/mocks";
import { REGISTER_FORM_VALIDATION_SCHEMA } from "./registerForm.constants";

describe(`Validation Schema`, () => {
  it(`should pass validation with valid email and password`, async () => {
    const MOCK_DATA = {
      name: `nima`,
      email: `test@test.com`,
      password: `Test@123`,
      confirmPassword: `Test@123`,
    };

    const result = await REGISTER_FORM_VALIDATION_SCHEMA.isValid(MOCK_DATA);
    expect(result).toBe(true);
    expect.hasAssertions();
  });

  it(`should fail validation with missing email`, async () => {
    const MOCK_DATA = {
      name: `nima`,
      password: `Test@123`,
      confirmPassword: `Test@123`,
    };

    try {
      await REGISTER_FORM_VALIDATION_SCHEMA.validate(MOCK_DATA);
      // If the validation passes, it should not reach this point.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(EMAIL_REQUIRED_MSG);
    }
    expect.hasAssertions();
  });

  it(`should fail validation with missing password`, async () => {
    const MOCK_DATA = {
      name: `nima`,
      email: `test@test.com`,
      confirmPassword: ``,
    };

    try {
      await REGISTER_FORM_VALIDATION_SCHEMA.validate(MOCK_DATA);
      // If the validation passes, it should not reach this point.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(PASSWORD_REQUIRED_MSG);
    }
    expect.hasAssertions();
  });

  it(`should fail validation with incorrect email`, async () => {
    const MOCK_DATA = {
      name: `nima`,
      email: `wrong email`,
      password: `Test@123`,
      confirmPassword: `Test@123`,
    };

    try {
      await REGISTER_FORM_VALIDATION_SCHEMA.validate(MOCK_DATA);
      // If the validation passes, it should not reach this point.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(EMAIL_IS_NOT_VALID_MSG);
    }
    expect.hasAssertions();
  });

  it(`should fail validation when password length is less than required`, async () => {
    const MOCK_DATA = {
      name: `nima`,
      email: `test@test.com`,
      password: stringGenerator(PASSWORD_MIN_LENGTH - 1, `a`),
      confirmPassword: stringGenerator(PASSWORD_MIN_LENGTH - 1, `a`),
    };

    try {
      await REGISTER_FORM_VALIDATION_SCHEMA.validate(MOCK_DATA);
      // If the validation passes, it should not reach this point.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(PASSWORD_MIN_LENGTH_MSG);
    }
    expect.hasAssertions();
  });

  it(`should fail validation when password length is more than required`, async () => {
    const MOCK_DATA = {
      name: `nima`,
      email: `test@test.com`,
      password: stringGenerator(PASSWORD_MAX_LENGTH + 1, `a`),
      confirmPassword: stringGenerator(PASSWORD_MAX_LENGTH + 1, `a`),
    };

    try {
      await REGISTER_FORM_VALIDATION_SCHEMA.validate(MOCK_DATA);
      // If the validation passes, it should not reach this point.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(PASSWORD_MAX_LENGTH_MSG);
    }
    expect.hasAssertions();
  });

  it(`should fail validation with incorrect password complexity`, async () => {
    const MOCK_DATA = {
      name: `nima`,
      email: `test@test.com`,
      password: `noncomplexpassword`,
      confirmPassword: `noncomplexpassword`,
    };

    try {
      await REGISTER_FORM_VALIDATION_SCHEMA.validate(MOCK_DATA);
      // If the validation passes, it should not reach this point.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(PASSWORD_COMPLEXITY_MSG);
    }
    expect.hasAssertions();
  });

  it(`should fail validation with missing email`, async () => {
    const MOCK_DATA = {
      email: `test@gamil.com`,
      password: `Test@123`,
      confirmPassword: `Test@123`,
    };

    try {
      await REGISTER_FORM_VALIDATION_SCHEMA.validate(MOCK_DATA);
      // If the validation passes, it should not reach this point.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(NAME_REQUIRED_MSG);
    }
    expect.hasAssertions();
  });

  it(`should fail validation with missing confirm password`, async () => {
    const MOCK_DATA = {
      name: `nima`,
      email: `test@test.com`,
      password: ``,
    };

    try {
      await REGISTER_FORM_VALIDATION_SCHEMA.validate(MOCK_DATA);
      // If the validation passes, it should not reach this point.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(CONFIRM_PASSWORD_REQUIRED_MSG);
    }
    expect.hasAssertions();
  });

  it(`should fail validation if password and confirm password does not match`, async () => {
    const MOCK_DATA = {
      name: `nima`,
      email: `test@test.com`,
      password: `Test@123`,
      confirmPassword: `some random password`,
    };

    try {
      await REGISTER_FORM_VALIDATION_SCHEMA.validate(MOCK_DATA);
      // If the validation passes, it should not reach this point.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(CONFIRM_PASSWORD_MATCH_MSG);
    }
    expect.hasAssertions();
  });
});
