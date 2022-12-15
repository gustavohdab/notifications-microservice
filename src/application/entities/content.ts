export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validadeContentLength(content: string): boolean {
    return content.length >= 5 && content.length < 240;
  }

  constructor(content: string) {
    const isValid = this.validadeContentLength(content);

    if (!isValid) {
      throw new Error('Content must be between 5 and 240 characters');
    }

    this.content = content;
  }
}
