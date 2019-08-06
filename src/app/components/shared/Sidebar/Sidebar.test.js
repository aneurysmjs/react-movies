// @flow strict
import React from 'react';
import { act } from 'react-dom/test-utils';
import {
  render,
  cleanup,
  fireEvent,
  // $FlowFixMe
} from '@testing-library/react';

import Sidebar from './Sidebar';

const Content = () => (<div>some content</div>);

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Sidebar', () => {
  it('should render "null" when is close', () => {
    const { container } = render(
      <Sidebar>
        <Content />
      </Sidebar>,
    );

    expect(container.firstChild).toBeNull();
  });

  it('should render sidebar\'s content and animate it by default from "right" after 100ms', async () => {
    jest.useFakeTimers();
    let component = {};

    await act(async () => {
      component = render(
        <Sidebar isOpen>
          <Content />
        </Sidebar>,
      );
    });

    const { getByTestId } = component;
    const overlay = getByTestId('overlay');
    const sidebar = getByTestId('sidebar');
    const content = getByTestId('content');

    expect(overlay).not.toEqual(null);
    expect(sidebar).not.toEqual(null);
    expect(sidebar.className).toEqual('sidebar sidebar--right');
    act(() => {
      jest.runAllTimers();
    });
    expect(sidebar.className).toEqual('sidebar sidebar--right sidebar--open-right');
    expect(content.firstChild.innerHTML).toEqual('some content');
  });

  it('should render sidebar\'s content and animate it from "left" after 100ms', async () => {
    jest.useFakeTimers();
    let component = {};

    await act(async () => {
      component = render(
        <Sidebar
          isOpen
          side="left"
        >
          <Content />
        </Sidebar>,
      );
    });

    const { getByTestId } = component;
    const overlay = getByTestId('overlay');
    const sidebar = getByTestId('sidebar');
    const content = getByTestId('content');

    expect(overlay).not.toEqual(null);
    expect(sidebar).not.toEqual(null);
    expect(sidebar.className).toEqual('sidebar sidebar--left');
    act(() => {
      jest.runAllTimers();
    });
    expect(sidebar.className).toEqual('sidebar sidebar--left sidebar--open-left');
    expect(content.firstChild.innerHTML).toEqual('some content');
  });

  it('should close the sidebar when click the "close" icon', async () => {
    jest.useFakeTimers();
    let open = true;

    const handleOnClose = jest.fn(() => {
      open = !open;
    });

    let component = {};

    await act(async () => {
      component = render(
        <Sidebar
          onClose={handleOnClose}
          isOpen={open}
          side="left"
        >
          <Content />
        </Sidebar>,
      );
    });

    const { queryByTestId, rerender } = component;

    const closeIcon = queryByTestId('close');
    const openedSidebar = queryByTestId('sidebar');

    expect(openedSidebar).not.toEqual(null);

    fireEvent.click(closeIcon);

    act(() => {
      jest.runAllTimers();
    });

    expect(handleOnClose.mock.calls.length).toBe(1);
    // re-render "closed" sidebar (open = false)
    rerender(
      <Sidebar
        onClose={handleOnClose}
        isOpen={open}
        side="left"
      >
        <Content />
      </Sidebar>,
    );

    const closedSidebar = queryByTestId('sidebar');

    expect(closedSidebar).toEqual(null);
  });
});
