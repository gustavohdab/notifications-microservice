import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}): Notification {
  return new Notification({
    content: new Content('some content'),
    category: 'some-category',
    recipientId: 'some-recipient-id',
    ...override,
  });
}
