import { cleanup, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { afterEach } from 'vitest';

afterEach(() => {
    cleanup()
})

function customRender(ui: React.ReactElement, options = {}) {
    return render(ui, {
        // wrap provider(s) here if needed
        wrapper: ({ children }) => children,
        ...options,
    })
}

export * from '@testing-library/react';
export * from 'vitest';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
export { renderer };
