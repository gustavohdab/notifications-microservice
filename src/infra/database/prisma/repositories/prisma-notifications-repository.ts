import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notification-repositories';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prisma: PrismaService) {}

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.prisma.notification.count({
      where: {
        recipientId: recipientId,
      },
    });
  }
  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const rawNotifications = await this.prisma.notification.findMany({
      where: {
        recipientId: recipientId,
      },
    });

    return rawNotifications.map(PrismaNotificationMapper.toDomain);
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const rawNotification = await this.prisma.notification.findUnique({
      where: {
        id: notificationId,
      },
    });

    if (!rawNotification) {
      return null;
    }

    return PrismaNotificationMapper.toDomain(rawNotification);
  }

  async create(notification: Notification): Promise<void> {
    const rawNotification = PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification.create({
      data: rawNotification,
    });
  }

  async save(notification: Notification): Promise<void> {
    const rawNotification = PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification.update({
      where: {
        id: rawNotification.id,
      },
      data: rawNotification,
    });
  }
}
