import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: '123',
      content: new Content('New friendly solicitation'),
      category: 'social',
    });
    expect(notification).toBeTruthy();
  });
});
