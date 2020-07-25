import axios from 'axios';

/**
 * Gets the test data.
*/
const getComments = (): Array<Object> => {
  return [
    {content: 'This is a helpful library'},
    {content: 'Here is a way to test'},
  ];
};

jest.mock('axios');

describe('async javascript', () => {
  it('gets the comments when axios resolves', async () => {
    // @ts-ignore
    axios.get.mockImplementationOnce(
      () => Promise.resolve(getComments())
    );

    const actual = await axios.get('https://example.com');
    expect(actual).toEqual(getComments());
  });

 it('handles a failed request', async () => {
    const errorMessage = 'No comments found';
    let returned, foundError;

    // @ts-ignore
    axios.get.mockImplementationOnce(
      () => Promise.reject(errorMessage)
    );


    try {
      returned = await axios.get('https://example.com');
    } catch (error) {
      foundError = error;
    }

    expect(returned).toEqual(undefined);
    expect(foundError).toEqual(errorMessage);
  });
});
