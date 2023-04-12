import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { InactiveBadge } from '../components';

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

describe('Leave Mission Badge', () => {
  it('should render inactive badge', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <InactiveBadge />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
