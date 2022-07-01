import { ComicsPipe } from './comics.pipe';

describe('ComicsPipe', () => {
  it('create an instance', () => {
    const pipe = new ComicsPipe();
    expect(pipe).toBeTruthy();
  });
});
