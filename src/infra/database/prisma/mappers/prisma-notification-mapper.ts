import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { Notification as RawNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(rawNotification: RawNotification): Notification {
    return new Notification(
      {
        category: rawNotification.category,
        content: new Content(rawNotification.content),
        recipientId: rawNotification.recipientId,
        readAt: rawNotification.readAt,
        createdAt: rawNotification.createdAt,
      },
      rawNotification.id,
    );
  }
}
