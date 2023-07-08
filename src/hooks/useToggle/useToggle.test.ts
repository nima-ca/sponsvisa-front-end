import { act, renderHook } from "@testing-library/react";
import { useToggle } from "./useToggle";

describe(`Use Toggle`, () => {
  it(`should have the initial state of the argument`, () => {
    const initialValue = false;
    const { result } = renderHook(() => useToggle(initialValue));

    expect(result.current.state).toBe(initialValue);
    expect.hasAssertions();
  });
  it(`should toggle the state`, () => {
    const initialValue = false;
    const { result } = renderHook(() => useToggle(initialValue));

    act(() => {
      result.current.toggle();
    });

    expect(result.current.state).toBe(!initialValue);
    expect.hasAssertions();
  });
});
