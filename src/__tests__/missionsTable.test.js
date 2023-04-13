/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { MissionsTable } from '../features';

const mockStore = configureMockStore();
const store = mockStore({
  mission: {
    name: 'mission',
    missions: [
      {
        mission_name: 'Thaicom',
        manufacturers: ['Orbital'],
        payload_ids: ['1', '2'],
        mission_id: '9D1B7E0',
        wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
        website: 'http://www.thaicom.net/en/satellites/overview',
        twitter: 'https://twitter.com/thaicomplc',
        description: 'Thaicom is the name of a series of communications satellites operated from Thailand',
        reserved: false,
      },
    ],
  },
});

describe('Missions Table', () => {
  it('component should render correctly', () => {
    render(
      <Provider store={store}>
        <MissionsTable />
      </Provider>,
    );

    const missionsTableElement = screen.getByRole('table');
    expect(missionsTableElement).toBeInTheDocument();
  });

  it('render list of missions', async () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MissionsTable />
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
