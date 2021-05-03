import { DateFormatPipe } from './date-format.pipe';

describe('DateFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new DateFormatPipe();
    expect(pipe).toBeTruthy();
  });
  it('has a transform method to format date', () => {
    const pipe = new DateFormatPipe();
    expect(pipe.transform(20200312)).toEqual('12/03/2020');
    expect(pipe.transform(20201231)).toEqual('31/12/2020');
  });
});
