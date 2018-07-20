import fetchBusinessreducer from '../../src/reducers/fetchBusiness';
import { FETCH_BUSINESS_SUCCESSFUL, FETCH_BUSINESS_FAILED } from '../../src/actions/types';

describe('fetch business test', () => {
  const initialState = {
    businesses: [],
    isUpdated: false,
    isDeleted: false,
    error: ''
  };

  it('should handle FETCH_BUSINESS_SUCCESSFUL', () => {
    const payload = {
      message: 'List of all businesses',
      numberOfBusinesses: 9,
      limit: 6,
      totalPages: 2,
      currentPage: 1,
      allBusinesses: [
        {
          id: 30,
          name: 'Alpha Company Limited',
          description: 'Alpha Company Limited description',
          phoneNumber: '457389475',
          address: 'no 33 utoka street',
          image: 'https://res.cloudinary.com/annmary/image/upload/v1530707202/fp819jylzevmfrbmp5wr.png',
          location: 'Lagos',
          category: 'Marketing',
          website: 'www.smarthub.com',
          createdAt: '2018-07-04T12:26:43.261Z',
          updatedAt: '2018-07-04T12:26:43.261Z',
          userId: 5,
          averageRating: 3.2,
          numberOfLikes: 1
        },
        {
          id: 29,
          name: 'Netcom Africa',
          description: 'IT Outsourcing\nDesigned to reduce your costs, increase your productivity and mitigate your business risks, we partner with you as your IT Department, allowing you to focus on running your business, not your technology. Give us a chance to fill your ICT aptitudes holes and take away the problem that accompanies selecting. We trust that ICT administrations ought to be about organization and sharing duty',
          phoneNumber: '373945993',
          address: 'no 33 utoka street',
          image: 'https://res.cloudinary.com/annmary/image/upload/v1530648384/lwegv1vtty8hhvtl6eij.png',
          location: 'Abia',
          category: 'IT',
          website: 'www.netcomafrica.com',
          createdAt: '2018-07-03T20:06:24.873Z',
          updatedAt: '2018-07-03T20:06:24.873Z',
          userId: 4,
          averageRating: null,
          numberOfLikes: 1
        },
      ]
    };
    const action = {
      type: FETCH_BUSINESS_SUCCESSFUL,
      payload
    };
    const newState = fetchBusinessreducer(initialState, action);
    expect(newState.businesses.message).toEqual(payload.message);
    expect(newState.businesses.allBusinesses[0].name).toEqual(payload.allBusinesses[0].name);
  });

  it('should handle FETCH_BUSINESS_FAILED', () => {
    const error = 'Failed to fetch business';
    const action = {
      type: FETCH_BUSINESS_FAILED,
      error
    };
    const newState = fetchBusinessreducer(initialState, action);
    expect(newState.error).toEqual(error);
  });

  it('should handle initial state', () => {
    const newState = fetchBusinessreducer(initialState, {});
    expect(newState).toEqual(initialState);
  });
});
