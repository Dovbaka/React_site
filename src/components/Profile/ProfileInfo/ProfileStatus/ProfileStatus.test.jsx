import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatusWithHooks component", () => {
    test("status form props should be in the state", () => {
        const component = create(<ProfileStatus status="status" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("status");
    });
});